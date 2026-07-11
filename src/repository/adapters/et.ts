import { resolveSeriesIdsFromTopic } from './library';

export interface NormalizedET {
  id: string;
  sourceEa: string[];
  topic?: string;
  seriesIds: string[];
  audience?: string;
  readingTime?: string;
  body?: string;
  actionPrompt?: string;
  targetPath: string[];
  sourceFile?: string;
}

function stringArray(value: unknown): string[] {
  if (Array.isArray(value)) return value.filter((v): v is string => typeof v === 'string');
  return typeof value === 'string' ? [value] : [];
}

export function normalizeET(raw: Record<string, unknown>): NormalizedET {
  return {
    id: String(raw.id ?? ''),
    sourceEa: stringArray(raw.source_ea),
    topic: typeof raw.topic === 'string' ? raw.topic : undefined,
    seriesIds: resolveSeriesIdsFromTopic(raw.topic),
    audience: typeof raw.audience === 'string' ? raw.audience : undefined,
    readingTime: typeof raw.reading_time === 'string' ? raw.reading_time : undefined,
    body: typeof raw.body === 'string' ? raw.body : undefined,
    actionPrompt: typeof raw.action_prompt === 'string' ? raw.action_prompt : undefined,
    targetPath: stringArray(raw.target_path),
    sourceFile: typeof raw._source_file === 'string' ? raw._source_file : undefined,
  };
}

export function normalizeAllET(generated: { items?: Record<string, unknown>[] }): NormalizedET[] {
  return (generated.items ?? []).map(normalizeET);
}
