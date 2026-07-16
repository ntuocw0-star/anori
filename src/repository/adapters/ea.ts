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
  // EA Editorial Framework v1.0 新字段
  insight?: string;
  keyFinding?: string;
  whyItMatters?: string;
  limitations?: string;
  sourceEa: string[];
}

function stringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((v): v is string => typeof v === 'string') : [];
}

function str(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value.trim() : undefined;
}

export function normalizeEA(raw: Record<string, unknown>): NormalizedEA {
  const source = (raw.source ?? {}) as Record<string, unknown>;
  const whyRead = str(raw.why_read);
  const researchQuestion = str(raw.research_question);

  // 新字段（EA Editorial Framework v1.0）
  const insight = str(raw.insight);
  const keyFinding = str(raw.key_finding);
  const whyItMatters = str(raw.why_it_matters);
  const limitations = str(raw.limitations);

  // keyFindings：旧格式用数组，新格式用单字符串 key_finding
  // 两者都尝试，保证新旧 EA 都能显示内容
  const keyFindingsFromArray = stringArray(raw.key_findings);
  const keyFindings = keyFindingsFromArray.length > 0
    ? keyFindingsFromArray
    : keyFinding ? [keyFinding] : [];

  // parentMeaning：旧格式 parent_meaning 数组，新格式用 why_it_matters 字符串
  const parentMeaningFromArray = stringArray(raw.parent_meaning);
  const parentMeaning = parentMeaningFromArray.length > 0
    ? parentMeaningFromArray
    : whyItMatters ? [whyItMatters] : [];

  // implications：旧格式数组，新格式用 limitations 字符串
  const implicationsFromArray = stringArray(raw.implications);
  const implications = implicationsFromArray.length > 0
    ? implicationsFromArray
    : limitations ? [limitations] : [];

  // summary：insight 优先（新格式），fallback 到 whyRead / researchQuestion
  const summary = insight ?? whyRead ?? researchQuestion;

  return {
    id: String(raw.id ?? ''),
    summary,
    updatedAt: undefined,
    status: undefined,
    seriesIds: resolveSeriesIdsFromTopic(raw.topic),
    source: {
      paperTitle: str(source.paper_title),
      authors: str(source.authors),
      journal: str(source.journal),
      year: typeof source.year === 'string' || typeof source.year === 'number' ? source.year : undefined,
      doi: str(source.doi),
      access: str(source.access),
      method: str(source.method),
      scope: str(source.scope),
    },
    whyRead,
    researchQuestion,
    keyFindings,
    parentMeaning,
    implications,
    relatedEt: stringArray(raw.related_et),
    relatedPath: stringArray(raw.related_path),
    readingTime: str(raw.reading_time),
    qualityLevel: str(raw.quality_level),
    evidenceType: str(raw.evidence_type),
    topic: str(raw.topic),
    sourceFile: str(raw._source_file),
    // 新字段直接透传（供未来模板扩展使用）
    insight,
    keyFinding,
    whyItMatters,
    limitations,
    sourceEa: stringArray(raw.supports_et).length > 0
      ? stringArray(raw.supports_et)
      : stringArray(raw.related_et),
  };
}

export function normalizeAllEA(generated: { items?: Record<string, unknown>[] }): NormalizedEA[] {
  return (generated.items ?? []).map(normalizeEA);
}
