import { resolveSeriesIdsFromKA } from './library';

export interface NormalizedKA {
  id: string;
  title?: string;
  subtitle?: string;
  summary?: string;
  updatedAt?: string;
  status?: 'draft' | 'reviewed' | 'published';
  seriesIds: string[];
  topic?: string;
  body?: string;
  keyPoints: string[];
  whatYouCanDo: string[];
  whatToAvoid: string[];
  seekHelpIf: string[];
  evidenceRefs: string[];
  evidenceLevel?: string;
  evidenceNote?: string;
  tags: string[];
  triggers: string[];
  href?: string;
  seriesOrder?: number;
  seriesNext: string | null;
  seriesPrev: string | null;
}

function stringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((v): v is string => typeof v === 'string') : [];
}

export function normalizeKA(raw: Record<string, unknown>): NormalizedKA {
  const seriesObj = raw.series && typeof raw.series === 'object'
    ? raw.series as Record<string, unknown>
    : {};

  return {
    id: String(raw.id ?? ''),
    title: typeof raw.title === 'string' ? raw.title : undefined,
    subtitle: typeof raw.subtitle === 'string' ? raw.subtitle : undefined,
    summary: typeof raw.one_sentence === 'string' ? raw.one_sentence : undefined,
    updatedAt: undefined,
    status: undefined,
    seriesIds: resolveSeriesIdsFromKA(raw.series),
    topic: typeof raw.topic === 'string' ? raw.topic : undefined,
    body: typeof raw.body === 'string' ? raw.body : undefined,
    keyPoints: stringArray(raw.key_findings),
    whatYouCanDo: stringArray(raw.what_you_can_do),
    whatToAvoid: stringArray(raw.what_to_avoid),
    seekHelpIf: stringArray(raw.seek_help_if),
    evidenceRefs: stringArray(raw.related_ea),
    evidenceLevel: typeof raw.evidence_level === 'string' ? raw.evidence_level : undefined,
    evidenceNote: typeof raw.evidence_note === 'string' ? raw.evidence_note : undefined,
    tags: stringArray(raw.tags),
    triggers: stringArray(raw.triggers),
    href: typeof raw.href === 'string' ? raw.href : undefined,
    seriesOrder: typeof seriesObj.order === 'number' ? seriesObj.order : undefined,
    seriesNext: typeof seriesObj.next === 'string' ? seriesObj.next : null,
    seriesPrev: typeof seriesObj.previous === 'string' ? seriesObj.previous : null,
  };
}

export function normalizeAllKA(data: { articles?: Record<string, unknown>[] }): NormalizedKA[] {
  return (data.articles ?? []).map(normalizeKA);
}
