/**
 * graph-builder.ts
 * 34B · Graph Builder Implementation
 *
 * Contract: 33D GraphBuilderContract
 * Blueprint: 30C Knowledge Graph（Edge Taxonomy）+ 30B Topic Coverage
 *
 * Pure functions only. No file system access. No side effects.
 * Safe for both build-time and runtime use.
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export type ContentType = 'EA' | 'ET' | 'KA' | 'Series' | 'Topic';

export type CoverageLayer =
  | 'Concept'
  | 'Development'
  | 'Observation'
  | 'Support'
  | 'Decision'
  | 'Evidence';

export type CognitiveStage = 'Orient' | 'Understand' | 'Integrate' | 'Continue';

export type EdgeType =
  | 'topic_membership'        // Auto: 内容属于 Topic/Series
  | 'cognitive_progression'   // Auto: KA → ET → EA（Cognitive Path）
  | 'coverage_progression'    // Auto: Coverage Layer 顺序
  | 'concept_association'     // Auto: 共享 concept_refs
  | 'editorial_recommendation'// Manual: Continue Reading 中的人工推荐
  | 'cross_topic';            // Manual: Topic 间关系

export type CoverageLayerStatus =
  | { status: 'not_started' }
  | { status: 'in_progress'; content_id: string }
  | { status: 'completed'; content_id: string; completed_at?: string };

// ─── Input Types（来自 Normalizer 输出）──────────────────────────────────────

export interface NormalizedEA {
  id: string;
  content_type: 'EA';
  topic?: string | null;
  series?: string | null;
  evidence_type?: string | null;
  tier?: number | null;
  concept_refs?: { primary: string; secondary: string[] } | null;
  supports_et?: string[];
  coverage_layer?: CoverageLayer | null;
}

export interface NormalizedET {
  id: string;
  content_type: 'ET';
  topic?: string | null;
  series?: string | null;
  editorial_role?: string | null;
  coverage_layer?: CoverageLayer | null;
  source_ea?: string[];
  target_ka?: string | null;
  concept_refs?: { primary: string; secondary: string[] } | null;
}

export interface NormalizedKA {
  id: string;
  content_type?: 'KA';
  topic?: string | null;
  series?: string | null;
  linked_et?: string[];
  linked_ea?: string[];
  concept_refs?: { primary: string; secondary: string[] } | null;
}

export interface NormalizedSeries {
  id: string;
  topic?: string | null;
  content_refs?: {
    ea?: string[];
    et?: string[];
    ka?: string[];
  };
}

export interface NormalizedTopic {
  id: string;
  series?: string[];
  related_topics?: string[];
}

export interface GraphInput {
  ea: NormalizedEA[];
  et: NormalizedET[];
  ka: NormalizedKA[];
  series: NormalizedSeries[];
  topics: NormalizedTopic[];
}

// ─── Output Types ─────────────────────────────────────────────────────────────

export interface GraphNode {
  id: string;
  content_type: ContentType;
  coverage_layer?: CoverageLayer;
  cognitive_fit: CognitiveStage;  // 由 content_type 推导
  topic?: string | null;
  series?: string | null;
}

export interface GraphEdge {
  from: string;
  to: string;
  edge_type: EdgeType;
  weight?: number;               // 用于推荐权重，1.0 = 标准
}

export interface ConceptCluster {
  concept_id: string;
  member_ids: string[];
}

export interface KnowledgeGraph {
  nodes: GraphNode[];
  edges: GraphEdge[];
  clusters: ConceptCluster[];
}

// ─── Constants ────────────────────────────────────────────────────────────────

/** content_type → Cognitive Stage（来自 30A Knowledge Path） */
const COGNITIVE_FIT_MAP: Record<string, CognitiveStage> = {
  KA:     'Understand',  // Practice layer → Understand stage
  ET:     'Understand',  // Understanding layer
  EA:     'Integrate',   // Evidence layer → Integrate stage
  Series: 'Orient',
  Topic:  'Orient',
};

/** Coverage Layer 顺序（来自 30B Topic Coverage） */
const COVERAGE_ORDER: CoverageLayer[] = [
  'Concept',
  'Development',
  'Observation',
  'Support',
  'Decision',
  'Evidence',
];

// ─── Graph Builder ────────────────────────────────────────────────────────────

/**
 * Build the full Knowledge Graph from normalized content.
 * All edges are derived from existing metadata — no manual annotation needed.
 */
export function buildGraph(input: GraphInput): KnowledgeGraph {
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];
  const clusterMap = new Map<string, Set<string>>();

  // ── 1. Build Nodes ──────────────────────────────────────────────────────────

  for (const ea of input.ea) {
    nodes.push({
      id: ea.id,
      content_type: 'EA',
      cognitive_fit: 'Integrate',
      coverage_layer: ea.coverage_layer ?? 'Evidence',
      topic: ea.topic,
      series: ea.series,
    });
  }

  for (const et of input.et) {
    nodes.push({
      id: et.id,
      content_type: 'ET',
      cognitive_fit: 'Understand',
      coverage_layer: et.coverage_layer ?? undefined,
      topic: et.topic,
      series: et.series,
    });
  }

  for (const ka of input.ka) {
    nodes.push({
      id: ka.id,
      content_type: 'KA',
      cognitive_fit: 'Understand',
      topic: ka.topic,
      series: ka.series,
    });
  }

  // ── 2. Auto Edges ───────────────────────────────────────────────────────────

  // Edge Type 1: topic_membership
  // Series content_refs → members belong to Series/Topic
  for (const series of input.series) {
    const refs = series.content_refs ?? {};
    for (const eaId of refs.ea ?? []) {
      edges.push({ from: series.id, to: eaId, edge_type: 'topic_membership', weight: 1.0 });
    }
    for (const etId of refs.et ?? []) {
      edges.push({ from: series.id, to: etId, edge_type: 'topic_membership', weight: 1.0 });
    }
    for (const kaId of refs.ka ?? []) {
      edges.push({ from: series.id, to: kaId, edge_type: 'topic_membership', weight: 1.0 });
    }
  }

  // Edge Type 2: cognitive_progression
  // KA → ET（KA 引用的 ET）
  for (const ka of input.ka) {
    for (const etId of ka.linked_et ?? []) {
      edges.push({ from: ka.id, to: etId, edge_type: 'cognitive_progression', weight: 1.0 });
    }
    // KA → EA（KA 引用的 EA）
    for (const eaId of ka.linked_ea ?? []) {
      edges.push({ from: ka.id, to: eaId, edge_type: 'cognitive_progression', weight: 0.8 });
    }
  }

  // ET → EA（ET source_ea / supports_et）
  for (const et of input.et) {
    for (const eaId of et.source_ea ?? []) {
      edges.push({ from: et.id, to: eaId, edge_type: 'cognitive_progression', weight: 1.0 });
    }
  }

  // EA → ET（反向：EA supports_et）
  for (const ea of input.ea) {
    for (const etId of ea.supports_et ?? []) {
      edges.push({ from: ea.id, to: etId, edge_type: 'cognitive_progression', weight: 0.9 });
    }
  }

  // ET → KA（ET target_ka）
  for (const et of input.et) {
    if (et.target_ka) {
      edges.push({ from: et.id, to: et.target_ka, edge_type: 'cognitive_progression', weight: 1.0 });
    }
  }

  // Edge Type 3: coverage_progression
  // 同一 Series 内，按 COVERAGE_ORDER 连接相邻 ET
  for (const series of input.series) {
    const seriesETs = (series.content_refs?.et ?? [])
      .map(id => input.et.find(e => e.id === id))
      .filter((e): e is NormalizedET => !!e && !!e.coverage_layer);

    // 按 coverage layer 顺序排序
    seriesETs.sort((a, b) =>
      COVERAGE_ORDER.indexOf(a.coverage_layer!) -
      COVERAGE_ORDER.indexOf(b.coverage_layer!)
    );

    for (let i = 0; i < seriesETs.length - 1; i++) {
      edges.push({
        from: seriesETs[i].id,
        to: seriesETs[i + 1].id,
        edge_type: 'coverage_progression',
        weight: 1.0,
      });
    }
  }

  // Edge Type 4: concept_association
  // 共享 concept_refs.primary 的内容归入同一 Cluster
  const addToCluster = (conceptId: string, contentId: string) => {
    if (!clusterMap.has(conceptId)) clusterMap.set(conceptId, new Set());
    clusterMap.get(conceptId)!.add(contentId);
  };

  for (const ea of input.ea) {
    if (ea.concept_refs?.primary) {
      addToCluster(ea.concept_refs.primary, ea.id);
      for (const sec of ea.concept_refs.secondary ?? []) {
        addToCluster(sec, ea.id);
      }
    }
  }
  for (const et of input.et) {
    if (et.concept_refs?.primary) {
      addToCluster(et.concept_refs.primary, et.id);
      for (const sec of et.concept_refs.secondary ?? []) {
        addToCluster(sec, et.id);
      }
    }
  }
  for (const ka of input.ka) {
    if (ka.concept_refs?.primary) {
      addToCluster(ka.concept_refs.primary, ka.id);
    }
  }

  // Concept Association Edges（同 Cluster 内两两相连）
  for (const [, members] of clusterMap) {
    const memberArr = [...members];
    for (let i = 0; i < memberArr.length; i++) {
      for (let j = i + 1; j < memberArr.length; j++) {
        edges.push({
          from: memberArr[i],
          to: memberArr[j],
          edge_type: 'concept_association',
          weight: 0.6,
        });
      }
    }
  }

  // Edge Type 5 & 6: editorial_recommendation + cross_topic
  // 这两种是 Manual Edge，由人工在 Metadata 中标注
  // 当前版本：cross_topic 从 topics.related_topics 读取
  for (const topic of input.topics) {
    for (const relatedId of topic.related_topics ?? []) {
      edges.push({
        from: topic.id,
        to: relatedId,
        edge_type: 'cross_topic',
        weight: 0.5,
      });
    }
  }

  // ── 3. Build Concept Clusters ──────────────────────────────────────────────

  const clusters: ConceptCluster[] = [];
  for (const [conceptId, members] of clusterMap) {
    clusters.push({ concept_id: conceptId, member_ids: [...members] });
  }

  return { nodes, edges, clusters };
}

// ─── Coverage Utilities ───────────────────────────────────────────────────────

/**
 * Get coverage status for a topic given reading history.
 * Returns status for each of the 6 coverage layers.
 */
export function getCoverageStatus(
  topic_id: string,
  series_list: NormalizedSeries[],
  et_list: NormalizedET[],
  reading_history: string[],
): Record<CoverageLayer, CoverageLayerStatus> {
  const result = Object.fromEntries(
    COVERAGE_ORDER.map(layer => [layer, { status: 'not_started' } as CoverageLayerStatus])
  ) as Record<CoverageLayer, CoverageLayerStatus>;

  // 找到属于该 Topic 的 Series
  const topicSeries = series_list.filter(s => s.topic === topic_id);

  for (const series of topicSeries) {
    // ET Coverage
    for (const etId of series.content_refs?.et ?? []) {
      const et = et_list.find(e => e.id === etId);
      if (!et?.coverage_layer) continue;
      const layer = et.coverage_layer;
      const isRead = reading_history.includes(etId);

      if (isRead) {
        result[layer] = { status: 'completed', content_id: etId };
      } else if (result[layer].status === 'not_started') {
        result[layer] = { status: 'in_progress', content_id: etId };
      }
    }

    // EA Coverage（Evidence layer）
    const hasReadAnyEA = (series.content_refs?.ea ?? []).some(id =>
      reading_history.includes(id)
    );
    if (hasReadAnyEA) {
      result['Evidence'] = {
        status: 'completed',
        content_id: (series.content_refs?.ea ?? [])[0] ?? '',
      };
    } else if (result['Evidence'].status === 'not_started' && (series.content_refs?.ea ?? []).length > 0) {
      result['Evidence'] = {
        status: 'in_progress',
        content_id: (series.content_refs?.ea ?? [])[0],
      };
    }
  }

  return result;
}

/**
 * Get coverage gaps (layers not yet completed) for a topic.
 * Returns layers in COVERAGE_ORDER, skipping completed ones.
 */
export function getCoverageGaps(
  topic_id: string,
  series_list: NormalizedSeries[],
  et_list: NormalizedET[],
  reading_history: string[],
): CoverageLayer[] {
  const status = getCoverageStatus(topic_id, series_list, et_list, reading_history);
  return COVERAGE_ORDER.filter(layer => status[layer].status !== 'completed');
}

/**
 * Get the next recommended content ID for a coverage gap.
 * Returns the content_id of the first in_progress layer, or the first not_started.
 */
export function getNextCoverageContent(
  topic_id: string,
  series_list: NormalizedSeries[],
  et_list: NormalizedET[],
  reading_history: string[],
): string | null {
  const status = getCoverageStatus(topic_id, series_list, et_list, reading_history);

  // 优先返回 in_progress 的
  for (const layer of COVERAGE_ORDER) {
    const s = status[layer];
    if (s.status === 'in_progress') return s.content_id;
  }

  // 再返回 not_started 的第一个
  for (const layer of COVERAGE_ORDER) {
    const s = status[layer];
    if (s.status === 'not_started') return null; // 无内容
  }

  return null; // 全部完成
}
