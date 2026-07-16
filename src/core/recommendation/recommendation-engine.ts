/**
 * recommendation-engine.ts
 * 34D · Recommendation Engine Implementation
 *
 * Contract: 33D RecommendationEngineContract
 * Blueprint: 31C Recommendation Engine（Primary + Reason + Alternatives）
 *
 * Two-phase design:
 *   Phase 1 (build-time): precomputeCandidates() → CandidateIndex (static JSON)
 *   Phase 2 (runtime):    recommend() → RecommendationObject (pure function, no I/O)
 */

import type {
  KnowledgeGraph,
  GraphNode,
  CoverageLayer,
  NormalizedSeries,
  NormalizedET,
} from './graph-builder';

import {
  getCoverageGaps,
  getNextCoverageContent,
} from './graph-builder';

import type {
  UserState,
  JourneyState,
  UserStateValue,
  ContentType,
  CognitiveStage,
} from './state-engine';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface RecommendationItem {
  id: string;
  content_type: ContentType;
  title: string;
  href: string;
  cognitive_fit: CognitiveStage;
}

export interface AlternativeItem extends RecommendationItem {
  intent: string;   // "如果你想先实践" / "如果你想看研究依据" / "如果你想继续理解"
}

export interface RecommendationObject {
  primary: RecommendationItem;
  reason: string[];              // 1–3 条，简短
  alternatives: AlternativeItem[]; // 2–3 个，不同 Intent
}

// ── Build-time types ──────────────────────────────────────────────────────────

/** One candidate per content unit, pre-scored at build time */
export interface Candidate {
  id: string;
  content_type: ContentType;
  title: string;
  href: string;
  topic: string | null;
  series: string | null;
  coverage_layer: CoverageLayer | null;
  cognitive_fit: CognitiveStage;
  // Pre-computed scores (build-time)
  base_score: number;           // Tier × foundational bonus
  concept_ids: string[];        // for concept matching
}

/** Static index generated at build time */
export interface CandidateIndex {
  schema_version: '1.0';
  generated_at: string;
  candidates: Candidate[];
  // Pre-grouped for fast lookup
  by_topic: Record<string, string[]>;          // topic_id → candidate ids
  by_coverage_layer: Record<string, string[]>; // layer → candidate ids
  by_content_type: Record<string, string[]>;   // type → candidate ids
  by_concept: Record<string, string[]>;        // concept_id → candidate ids
}

// ─── Constants ────────────────────────────────────────────────────────────────

/** Primary content type per User State（31C Decision Logic） */
const PRIMARY_TYPE_MAP: Record<UserStateValue, ContentType> = {
  'New Explorer':    'KA',
  'Active Learner':  'ET',
  'Deep Explorer':   'EA',
  'Returning Parent': 'KA',
};

/** Coverage layer order（30B） */
const COVERAGE_ORDER: CoverageLayer[] = [
  'Concept', 'Development', 'Observation', 'Support', 'Decision', 'Evidence',
];

/** Intent labels for alternatives（来自 31C） */
const INTENT_LABELS: Record<ContentType, string> = {
  KA:  '如果你想先实践',
  ET:  '如果你想继续理解',
  EA:  '如果你想看研究依据',
};

/** Cognitive fit by content type（30A） */
const COGNITIVE_FIT: Record<ContentType, CognitiveStage> = {
  KA: 'Understand',
  ET: 'Understand',
  EA: 'Integrate',
};

// ─── Phase 1: Build-time Pre-computation ──────────────────────────────────────

/**
 * Build the CandidateIndex from normalized content + graph.
 * Call this at build time and save as static JSON.
 *
 * @param graph       KnowledgeGraph from graph-builder
 * @param contentMap  Map of id → { title, href, tier?, is_foundational? }
 */
export function precomputeCandidates(
  graph: KnowledgeGraph,
  contentMap: Map<string, {
    title: string;
    href: string;
    tier?: number | null;
    is_foundational?: boolean;
    topic?: string | null;
    series?: string | null;
  }>,
): CandidateIndex {
  const candidates: Candidate[] = [];
  const by_topic: Record<string, string[]> = {};
  const by_coverage_layer: Record<string, string[]> = {};
  const by_content_type: Record<string, string[]> = {};
  const by_concept: Record<string, string[]> = {};

  const addTo = (map: Record<string, string[]>, key: string | null | undefined, id: string) => {
    if (!key) return;
    if (!map[key]) map[key] = [];
    map[key].push(id);
  };

  for (const node of graph.nodes) {
    const meta = contentMap.get(node.id);
    if (!meta) continue;

    const tier = meta.tier ?? 2;
    const base_score = tier === 1 ? 1.0 : tier === 2 ? 0.7 : 0.4;
    const foundational_bonus = meta.is_foundational ? 0.2 : 0;

    // Concept IDs from graph clusters
    const concept_ids = graph.clusters
      .filter(c => c.member_ids.includes(node.id))
      .map(c => c.concept_id);

    const candidate: Candidate = {
      id: node.id,
      content_type: node.content_type as ContentType,
      title: meta.title,
      href: meta.href,
      topic: meta.topic ?? node.topic ?? null,
      series: meta.series ?? node.series ?? null,
      coverage_layer: node.coverage_layer ?? null,
      cognitive_fit: COGNITIVE_FIT[node.content_type as ContentType] ?? 'Understand',
      base_score: Math.min(base_score + foundational_bonus, 1.0),
      concept_ids,
    };

    candidates.push(candidate);

    // Build lookup indexes
    addTo(by_topic, candidate.topic, candidate.id);
    addTo(by_coverage_layer, candidate.coverage_layer, candidate.id);
    addTo(by_content_type, candidate.content_type, candidate.id);
    for (const concept of concept_ids) {
      addTo(by_concept, concept, candidate.id);
    }
  }

  return {
    schema_version: '1.0',
    generated_at: new Date().toISOString(),
    candidates,
    by_topic,
    by_coverage_layer,
    by_content_type,
    by_concept,
  };
}

// ─── Phase 2: Runtime Recommendation (Pure Function) ─────────────────────────

/**
 * Generate a RecommendationObject.
 * Pure function: no I/O, no side effects.
 * Safe to call on every page render.
 *
 * Decision steps (31C):
 *   1. Identify active topic
 *   2. Determine primary content type from User State
 *   3. Find coverage gap → priority target
 *   4. Filter already-read content
 *   5. Select primary
 *   6. Build alternatives (different intent per type)
 */
export function recommend(
  userState: UserState,
  journeyState: JourneyState,
  index: CandidateIndex,
  series_list: NormalizedSeries[],
  et_list: NormalizedET[],
): RecommendationObject | null {
  const readIds = new Set(journeyState.reading_history.map(r => r.content_id));
  const activeTopic = journeyState.active_topic;
  const primaryType = PRIMARY_TYPE_MAP[userState.current];

  // ── Step 1: Build candidate pool ──────────────────────────────────────────
  // Candidates in active topic, not yet read
  let pool = getTopicCandidates(index, activeTopic)
    .filter(c => !readIds.has(c.id));

  // If pool is empty, fall back to all unread candidates
  if (pool.length === 0) {
    pool = index.candidates.filter(c => !readIds.has(c.id));
  }

  if (pool.length === 0) return null; // Everything has been read

  // ── Step 2: Coverage gap priority ─────────────────────────────────────────
  let coverageTargetId: string | null = null;
  if (activeTopic) {
    coverageTargetId = getNextCoverageContent(
      activeTopic,
      series_list,
      et_list,
      [...readIds],
    );
  }

  // ── Step 3: Score candidates ───────────────────────────────────────────────
  const scored = pool.map(c => ({
    candidate: c,
    score: scoreCandidate(c, {
      primaryType,
      activeTopic,
      coverageTargetId,
      userState,
    }),
  })).sort((a, b) => b.score - a.score);

  if (scored.length === 0) return null;

  // ── Step 4: Select primary ─────────────────────────────────────────────────
  const primaryCandidate = scored[0].candidate;
  const primary: RecommendationItem = {
    id: primaryCandidate.id,
    content_type: primaryCandidate.content_type,
    title: primaryCandidate.title,
    href: primaryCandidate.href,
    cognitive_fit: primaryCandidate.cognitive_fit,
  };

  // ── Step 5: Build reason ───────────────────────────────────────────────────
  const reason = buildReason(primaryCandidate, userState, activeTopic, coverageTargetId);

  // ── Step 6: Build alternatives (one per content type, excluding primary type) ──
  const alternatives = buildAlternatives(
    pool.filter(c => c.id !== primaryCandidate.id),
    primaryType,
    activeTopic,
  );

  return { primary, reason, alternatives };
}

// ─── Scoring ──────────────────────────────────────────────────────────────────

interface ScoringContext {
  primaryType: ContentType;
  activeTopic: string | null;
  coverageTargetId: string | null;
  userState: UserState;
}

function scoreCandidate(candidate: Candidate, ctx: ScoringContext): number {
  let score = candidate.base_score;

  // +0.5: matches primary content type for user state
  if (candidate.content_type === ctx.primaryType) score += 0.5;

  // +0.4: is the coverage gap target
  if (ctx.coverageTargetId && candidate.id === ctx.coverageTargetId) score += 0.4;

  // +0.3: in active topic
  if (ctx.activeTopic && candidate.topic === ctx.activeTopic) score += 0.3;

  // +0.1: coverage layer matches next gap in order
  if (candidate.coverage_layer) {
    const layerIndex = COVERAGE_ORDER.indexOf(candidate.coverage_layer);
    // Earlier layers get small bonus (encourage progression)
    score += (COVERAGE_ORDER.length - layerIndex) * 0.02;
  }

  return score;
}

// ─── Reason Builder ───────────────────────────────────────────────────────────

function buildReason(
  candidate: Candidate,
  userState: UserState,
  activeTopic: string | null,
  coverageTargetId: string | null,
): string[] {
  const reasons: string[] = [];

  if (activeTopic && candidate.topic === activeTopic) {
    reasons.push(`继续你正在探索的主题`);
  }

  if (coverageTargetId === candidate.id && candidate.coverage_layer) {
    reasons.push(`这是理解这个主题的下一步（${candidate.coverage_layer}）`);
  }

  const stateReasons: Partial<Record<UserStateValue, string>> = {
    'New Explorer':    '从这里开始，今天就能用',
    'Active Learner':  '帮助你建立更深的理解',
    'Deep Explorer':   '查看这项研究的证据基础',
    'Returning Parent': '带着新问题重新开始',
  };
  const stateReason = stateReasons[userState.current];
  if (stateReason) reasons.push(stateReason);

  return reasons.slice(0, 3); // 最多 3 条
}

// ─── Alternatives Builder ─────────────────────────────────────────────────────

function buildAlternatives(
  pool: Candidate[],
  primaryType: ContentType,
  activeTopic: string | null,
): AlternativeItem[] {
  const alternatives: AlternativeItem[] = [];
  const usedTypes = new Set<ContentType>([primaryType]);

  // One alternative per content type, different from primary
  for (const type of (['KA', 'ET', 'EA'] as ContentType[])) {
    if (usedTypes.has(type)) continue;

    // Pick best unread candidate of this type in active topic
    const best = pool
      .filter(c => c.content_type === type && (!activeTopic || c.topic === activeTopic))
      .sort((a, b) => b.base_score - a.base_score)[0];

    if (best) {
      alternatives.push({
        id: best.id,
        content_type: best.content_type,
        title: best.title,
        href: best.href,
        cognitive_fit: best.cognitive_fit,
        intent: INTENT_LABELS[type],
      });
      usedTypes.add(type);
    }

    if (alternatives.length >= 2) break; // 最多 2 个 alternatives
  }

  return alternatives;
}

// ─── Utilities ────────────────────────────────────────────────────────────────

function getTopicCandidates(index: CandidateIndex, topic: string | null): Candidate[] {
  if (!topic) return index.candidates;
  const ids = new Set(index.by_topic[topic] ?? []);
  return index.candidates.filter(c => ids.has(c.id));
}

/** Convenience: get recommendation for a specific surface variant */
export type SurfaceVariant = 'focused' | 'expanded' | 'conversational';

export function getVariantForSurface(surface: string): SurfaceVariant {
  const map: Record<string, SurfaceVariant> = {
    Journey: 'focused',
    Library: 'expanded',
    Search:  'expanded',
    AI:      'conversational',
  };
  return map[surface] ?? 'expanded';
}
