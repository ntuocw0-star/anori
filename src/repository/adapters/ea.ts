import { resolveSeriesIdsFromTopic } from './library';

export type ContentStatus = 'draft' | 'reviewed' | 'published';

export interface NormalizedEA {
  id: string;
  summary?: string;
  updatedAt?: string;
  status?: ContentStatus;
  seriesIds: string[];
  source: {
    paperTitle?: string;
    authors?: string;
    journal?: string;
    year?: string | number;
    doi?: string;
    access?: string;
    method?: string;
    scope?: string;
  };
  whyRead?: string;
  researchQuestion?: string;
  keyFindings: string[];
  parentMeaning: string[];
  implications: string[];
  relatedEt: string[];
  relatedPath: string[];
  readingTime?: string;
  qualityLevel?: string;
  evidenceType?: string;
  topic?: string;
  sourceFile?: string;
}

function stringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((v): v is string => typeof v === 'string') : [];
}

export function normalizeEA(raw: Record<string, unknown>): NormalizedEA {
  const source = (raw.source ?? {}) as Record<string, unknown>;
  const whyRead = typeof raw.why_read === 'string' ? raw.why_read : undefined;
  const researchQuestion = typeof raw.research_question === 'string' ? raw.research_question : undefined;

  return {
    id: String(raw.id ?? ''),
    summary: whyRead ?? researchQuestion,
    updatedAt: undefined,
    status: undefined,
    seriesIds: resolveSeriesIdsFromTopic(raw.topic),
    source: {
      paperTitle: typeof source.paper_title === 'string' ? source.paper_title : undefined,
      authors: typeof source.authors === 'string' ? source.authors : undefined,
      journal: typeof source.journal === 'string' ? source.journal : undefined,
      year: typeof source.year === 'string' || typeof source.year === 'number' ? source.year : undefined,
      doi: typeof source.doi === 'string' ? source.doi : undefined,
      access: typeof source.access === 'string' ? source.access : undefined,
      method: typeof source.method === 'string' ? source.method : undefined,
      scope: typeof source.scope === 'string' ? source.scope : undefined,
    },
    whyRead,
    researchQuestion,
    keyFindings: stringArray(raw.key_findings),
    parentMeaning: stringArray(raw.parent_meaning),
    implications: stringArray(raw.implications),
    relatedEt: stringArray(raw.related_et),
    relatedPath: stringArray(raw.related_path),
    readingTime: typeof raw.reading_time === 'string' ? raw.reading_time : undefined,
    qualityLevel: typeof raw.quality_level === 'string' ? raw.quality_level : undefined,
    evidenceType: typeof raw.evidence_type === 'string' ? raw.evidence_type : undefined,
    topic: typeof raw.topic === 'string' ? raw.topic : undefined,
    sourceFile: typeof raw._source_file === 'string' ? raw._source_file : undefined,
  };
}

export function normalizeAllEA(generated: { items?: Record<string, unknown>[] }): NormalizedEA[] {
  return (generated.items ?? []).map(normalizeEA);
}
