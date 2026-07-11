import seriesData from '@/repository/library/series.json';

const seriesIdBySourceKey = new Map<string, string>();

for (const series of seriesData.series) {
  for (const key of series.source_keys ?? []) {
    seriesIdBySourceKey.set(key.trim().toLowerCase(), series.id);
  }
}

export function resolveSeriesIdsFromKA(seriesObj: unknown): string[] {
  if (!seriesObj || typeof seriesObj !== 'object') return [];
  const name = (seriesObj as Record<string, unknown>).name;
  if (typeof name !== 'string') return [];
  const id = seriesIdBySourceKey.get(name.trim().toLowerCase());
  return id ? [id] : [];
}

export function resolveSeriesIdsFromTopic(topic: unknown): string[] {
  if (typeof topic !== 'string') return [];
  const normalized = topic.toLowerCase();
  const resolved = new Set<string>();

  for (const [key, id] of seriesIdBySourceKey) {
    if (normalized.includes(key)) resolved.add(id);
  }

  return [...resolved];
}

export function resolveSeriesIdsFromArray(keys: unknown): string[] {
  if (!Array.isArray(keys)) return [];
  const resolved = new Set<string>();
  for (const value of keys) {
    if (typeof value !== 'string') continue;
    const id = seriesIdBySourceKey.get(value.trim().toLowerCase());
    if (id) resolved.add(id);
  }
  return [...resolved];
}
