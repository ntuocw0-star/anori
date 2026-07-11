/**
 * Anori Search Analytics · Event Store
 *
 * 职责：存储、读取、聚合、清除
 * 不负责：事件创建（见 search-event-factory.ts）
 *
 * Store Key：anori_search_events_v1_1
 *   → Schema 升级至 v1.2 / v2.0 时使用新 key，旧数据自然隔离，无需迁移逻辑。
 *
 * 存储约束（LocalStorage 实现）：
 *   - 最多 1,000 条事件
 *   - 最多保留 30 天
 *   - 先达到者触发，删除最旧记录（FIFO）
 *   - 每次 append / appendBatch / querySummary / readAll 均执行过期清理
 *
 * 统计口径（冻结，2026-07-11）：
 *   ctr             = clicked_query_count / total_queries          （0–1，不超过 1）
 *   clarifier_ctr   = clarifier_clicked_search_count /
 *                     clarifier_shown_count                        （0–1，不超过 1）
 *   no_result_rate  = no_result_queries / total_queries
 *   clicks_per_query = 非孤立有效点击数 / total_queries
 *   orphan_click_count 仅用于数据质量观察，不进入任何比例计算
 *
 * 隐私说明：
 *   query_norm 仍可能包含家庭输入的敏感内容。
 *   它只经过字符归一化，不是匿名化处理。
 *   当前仅保存在用户本机，不上传、不关联身份，遵守 30 天 / 1000 条上限。
 *   若未来需上传服务器，必须另做脱敏、知情同意和隐私设计。
 */

import type {
  SearchEvent,
  SearchResultType,
} from './search-events';
import { SEARCH_SCHEMA_VERSION } from './search-events';

const DEBUG = import.meta.env.DEV;

// ─── Summary Types ────────────────────────────────────────────────────────────

export interface SearchQueryStat {
  query_norm: string;
  count:      number;
}

export interface SearchClickStat {
  result_id:   string;
  result_url:  string;
  result_type: string;
  count:       number;
}

export interface SearchAnalyticsSummary {

  // ── 元数据 ─────────────────────────────────────────────────────────────────
  /** 统计生成时间（Unix ms） */
  generated_at: number;

  // ── 搜索量 ─────────────────────────────────────────────────────────────────
  /** search.query 事件数（同一 search_id 取最早一条去重） */
  total_queries:   number;
  /** 去重 session_id 数 */
  unique_sessions: number;

  // ── 零结果 ─────────────────────────────────────────────────────────────────
  /**
   * 零结果搜索次数。
   * 仅统计同时存在对应 search.query 的 search.no_result。
   * 孤立 no_result（无对应 query）不计入。
   */
  no_result_queries: number;
  /** no_result_queries / total_queries（total=0 时为 0） */
  no_result_rate:    number;
  /** search.query.result_count 均值（仅有效 query 事件） */
  avg_result_count:  number;

  // ── 点击指标 ───────────────────────────────────────────────────────────────
  /**
   * result_click 总条数（含孤立点击）。
   * 用于观察总交互量，不用于比例计算。
   */
  total_result_clicks: number;
  /**
   * 非孤立有效点击数（有对应 search.query 的 result_click）。
   * 用于 clicks_per_query 计算。
   */
  valid_result_clicks: number;
  /**
   * 至少发生过一次有效 result_click 的 search_id 数。
   * 孤立点击不计入。
   */
  clicked_query_count: number;
  /**
   * ctr = clicked_query_count / total_queries
   * 语义：有多少次搜索产生了至少一次点击（0–1 之间）。
   */
  ctr:               number;
  /**
   * clicks_per_query = valid_result_clicks / total_queries
   * 语义：平均每次搜索的有效点击数（可大于 1）。
   */
  clicks_per_query:  number;
  /** result_index 算术均值（仅有效点击，排除负值） */
  avg_click_position: number;
  /**
   * 无对应 search.query 的孤立 result_click 数。
   * 仅用于数据质量观察，不进入 ctr / clicks_per_query。
   */
  orphan_click_count: number;

  // ── Clarifier 指标 ─────────────────────────────────────────────────────────
  /**
   * clarifier_shown 事件数（按 search_id 去重）。
   * 仅统计有对应 search.query 的 shown 事件。
   */
  clarifier_shown_count: number;
  /** clarifier_shown_count / total_queries（total=0 时为 0） */
  clarifier_shown_rate:  number;
  /** clarifier_click 总条数 */
  total_clarifier_clicks: number;
  /**
   * 至少有一次 clarifier_click 的 search_id 数。
   * 须同时满足：存在对应 search.query 且存在对应 clarifier_shown。
   */
  clarifier_clicked_search_count: number;
  /**
   * clarifier_ctr = clarifier_clicked_search_count / clarifier_shown_count
   * 语义：展示 Clarifier 后有多少次搜索产生了点击（0–1 之间）。
   */
  clarifier_ctr: number;

  // ── 来源分布 ───────────────────────────────────────────────────────────────
  /**
   * 各触发来源的搜索次数。
   * 预置 keyboard / button / suggestion，未知来源动态追加。
   */
  queries_by_source: {
    keyboard:    number;
    button:      number;
    suggestion:  number;
    [key: string]: number;
  };

  // ── 内容类型分布 ───────────────────────────────────────────────────────────
  /** 各内容类型的有效点击次数（key = SearchResultType） */
  clicks_by_type: Record<string, number>;

  // ── 热词 ───────────────────────────────────────────────────────────────────
  /** 热词排行（query_norm 频次降序，topN 条） */
  top_queries:           SearchQueryStat[];
  /** 零结果词排行（query_norm 频次降序，topN 条） */
  top_no_result_queries: SearchQueryStat[];
  /** 高频点击内容（按点击次数降序，topN 条） */
  top_clicked_results:   SearchClickStat[];

  // ── 数据质量 ───────────────────────────────────────────────────────────────
  /** schema_version !== '1.1' 的事件条数 */
  legacy_event_count:  number;
  /** 因缺少必要字段或异常 ts 被跳过的事件条数 */
  skipped_event_count: number;
}

export interface QuerySummaryOptions {
  /** 热词返回数量上限（默认 20；top_queries / top_no_result_queries / top_clicked_results 共享） */
  topN?:  number;
  /** 过滤起始时间（Unix ms，含；省略则不过滤） */
  since?: number;
  /** 过滤截止时间（Unix ms，含；省略则不过滤） */
  until?: number;
}

// ─── Store 抽象接口 ───────────────────────────────────────────────────────────

export interface SearchEventStore {
  append(event: SearchEvent): void | Promise<void>;
  appendBatch(events: SearchEvent[]): void | Promise<void>;
  querySummary(options?: QuerySummaryOptions): SearchAnalyticsSummary | Promise<SearchAnalyticsSummary>;
  readAll(): SearchEvent[] | Promise<SearchEvent[]>;
  clear(): void | Promise<void>;
}

// ─── LocalStorage 实现 ────────────────────────────────────────────────────────

const LS_KEY     = 'anori_search_events_v1_1';
const MAX_EVENTS = 1000;
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

/** 空 Summary，用于无数据或解析失败时的安全返回值 */
function emptySummary(): SearchAnalyticsSummary {
  return {
    generated_at:                   Date.now(),
    total_queries:                  0,
    unique_sessions:                0,
    no_result_queries:              0,
    no_result_rate:                 0,
    avg_result_count:               0,
    total_result_clicks:            0,
    valid_result_clicks:            0,
    clicked_query_count:            0,
    ctr:                            0,
    clicks_per_query:               0,
    avg_click_position:             0,
    orphan_click_count:             0,
    clarifier_shown_count:          0,
    clarifier_shown_rate:           0,
    total_clarifier_clicks:         0,
    clarifier_clicked_search_count: 0,
    clarifier_ctr:                  0,
    queries_by_source:              { keyboard: 0, button: 0, suggestion: 0 },
    clicks_by_type:                 {},
    top_queries:                    [],
    top_no_result_queries:          [],
    top_clicked_results:            [],
    legacy_event_count:             0,
    skipped_event_count:            0,
  };
}

/** 脏数据检测：缺少必要字段或 ts 异常 */
function isValidEvent(e: unknown): e is SearchEvent {
  if (!e || typeof e !== 'object') return false;
  const ev = e as Record<string, unknown>;
  if (typeof ev['event'] !== 'string') return false;
  if (typeof ev['search_id'] !== 'string' || !ev['search_id']) return false;
  if (typeof ev['ts'] !== 'number') return false;
  // ts 范围：2020-01-01 ~ now+60s
  const ts = ev['ts'] as number;
  if (ts < 1577836800000 || ts > Date.now() + 60000) return false;
  return true;
}

export class LocalStorageSearchEventStore implements SearchEventStore {

  private load(): SearchEvent[] {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? (parsed as SearchEvent[]) : [];
    } catch {
      return [];
    }
  }

  private save(events: SearchEvent[]): void {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(events));
    } catch {
      if (DEBUG) console.debug('[Analytics] localStorage write failed (quota or unavailable)');
    }
  }

  private evict(events: SearchEvent[]): SearchEvent[] {
    const now = Date.now();
    const fresh = events.filter(e => now - e.ts <= MAX_AGE_MS);
    return fresh.length > MAX_EVENTS
      ? fresh.slice(fresh.length - MAX_EVENTS)
      : fresh;
  }

  append(event: SearchEvent): void {
    const events = this.evict(this.load());
    events.push(event);
    this.save(events);
  }

  appendBatch(incoming: SearchEvent[]): void {
    if (incoming.length === 0) return;
    const current = this.evict(this.load());
    this.save(this.evict([...current, ...incoming]));
  }

  querySummary(options?: QuerySummaryOptions): SearchAnalyticsSummary {
    const topN  = options?.topN  ?? 20;
    const since = options?.since;
    const until = options?.until;

    // ── Step 0: 加载 + 过期清理 ───────────────────────────────────────────────
    let raw: SearchEvent[];
    try {
      raw = this.evict(this.load());
    } catch {
      return emptySummary();
    }

    // ── Step 1: 数据质量分离 ──────────────────────────────────────────────────
    let skipped_event_count = 0;
    let legacy_event_count  = 0;
    const valid: SearchEvent[] = [];

    for (const e of raw) {
      if (!isValidEvent(e)) { skipped_event_count++; continue; }
      if (e.schema_version !== SEARCH_SCHEMA_VERSION) {
        legacy_event_count++;
        // legacy 事件不进入统计
        continue;
      }
      valid.push(e);
    }

    if (DEBUG && legacy_event_count > 0) {
      console.warn(`[Analytics] ${legacy_event_count} legacy event(s) found (schema !== ${SEARCH_SCHEMA_VERSION})`);
    }

    // ── Step 2: 时间过滤 ──────────────────────────────────────────────────────
    let events = valid;
    if (since !== undefined) events = events.filter(e => e.ts >= since);
    if (until !== undefined) events = events.filter(e => e.ts <= until);

    if (events.length === 0) {
      return { ...emptySummary(), generated_at: Date.now(), legacy_event_count, skipped_event_count };
    }

    // ── Step 3: 按 search_id 建立 query 索引（同一 search_id 取最早一条）──────
    const queryMap = new Map<string, SearchEvent>();
    for (const e of events.filter(e => e.event === 'search.query')) {
      const existing = queryMap.get(e.search_id);
      if (!existing || e.ts < existing.ts) queryMap.set(e.search_id, e);
    }
    const total_queries = queryMap.size;

    // ── Step 4: unique_sessions ───────────────────────────────────────────────
    const sessionIds = new Set(events.map(e => e.session_id).filter(Boolean));
    const unique_sessions = sessionIds.size;

    // ── Step 5: avg_result_count ──────────────────────────────────────────────
    let resultCountSum = 0;
    let resultCountN   = 0;
    for (const e of queryMap.values()) {
      const rc = (e as unknown as Record<string, unknown>)['result_count'];
      if (typeof rc === 'number' && rc >= 0) {
        resultCountSum += rc;
        resultCountN++;
      }
    }
    const avg_result_count = resultCountN > 0 ? resultCountSum / resultCountN : 0;

    // ── Step 6: no_result（须有对应 query） ───────────────────────────────────
    const noResultIds = new Set(
      events
        .filter(e => e.event === 'search.no_result' && queryMap.has(e.search_id))
        .map(e => e.search_id)
    );
    const no_result_queries = noResultIds.size;
    const no_result_rate    = total_queries > 0 ? no_result_queries / total_queries : 0;

    // ── Step 7: result_click（区分有效 vs 孤立） ──────────────────────────────
    const allClicks   = events.filter(e => e.event === 'search.result_click');
    const validClicks = allClicks.filter(e => queryMap.has(e.search_id));
    const orphanClicks = allClicks.filter(e => !queryMap.has(e.search_id));

    const total_result_clicks = allClicks.length;
    const valid_result_clicks = validClicks.length;
    const orphan_click_count  = orphanClicks.length;

    // clicked_query_count: search_id 去重，仅有效点击
    const clickedSearchIds = new Set(validClicks.map(e => e.search_id));
    const clicked_query_count = clickedSearchIds.size;

    const ctr              = total_queries > 0 ? clicked_query_count / total_queries : 0;
    const clicks_per_query = total_queries > 0 ? valid_result_clicks  / total_queries : 0;

    // avg_click_position：有效点击，排除负值
    let posSum = 0, posN = 0;
    for (const e of validClicks) {
      const idx = (e as unknown as Record<string, unknown>)['result_index'];
      if (typeof idx === 'number' && idx >= 0) { posSum += idx; posN++; }
    }
    const avg_click_position = posN > 0 ? posSum / posN : 0;

    // clicks_by_type（有效点击）
    const clicks_by_type: Record<string, number> = {};
    for (const e of validClicks) {
      const rt = ((e as unknown as Record<string, unknown>)['result_type'] as string) ?? 'unknown';
      clicks_by_type[rt] = (clicks_by_type[rt] ?? 0) + 1;
    }

    // ── Step 8: Clarifier ────────────────────────────────────────────────────
    // shown：须有对应 query，search_id 去重
    const shownIds = new Set(
      events
        .filter(e => e.event === 'search.clarifier_shown' && queryMap.has(e.search_id))
        .map(e => e.search_id)
    );
    const clarifier_shown_count = shownIds.size;
    const clarifier_shown_rate  = total_queries > 0 ? clarifier_shown_count / total_queries : 0;

    const total_clarifier_clicks = events.filter(e => e.event === 'search.clarifier_click').length;

    // clicked: 须同时有对应 query 且有对应 shown
    const clarifierClickedIds = new Set(
      events
        .filter(e =>
          e.event === 'search.clarifier_click' &&
          queryMap.has(e.search_id) &&
          shownIds.has(e.search_id)
        )
        .map(e => e.search_id)
    );
    const clarifier_clicked_search_count = clarifierClickedIds.size;
    const clarifier_ctr = clarifier_shown_count > 0
      ? clarifier_clicked_search_count / clarifier_shown_count
      : 0;

    // ── Step 9: queries_by_source ─────────────────────────────────────────────
    const queries_by_source: { keyboard: number; button: number; suggestion: number; [k: string]: number } =
      { keyboard: 0, button: 0, suggestion: 0 };
    for (const e of queryMap.values()) {
      const src = ((e as unknown as Record<string, unknown>)['source'] as string) ?? 'unknown';
      queries_by_source[src] = (queries_by_source[src] ?? 0) + 1;
    }

    // ── Step 10: 热词（query_norm） ──────────────────────────────────────────
    const countByNorm = (evts: SearchEvent[]): SearchQueryStat[] => {
      const map = new Map<string, number>();
      for (const e of evts) {
        if (!e.query_norm) continue;
        map.set(e.query_norm, (map.get(e.query_norm) ?? 0) + 1);
      }
      return [...map.entries()]
        .map(([query_norm, count]) => ({ query_norm, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, topN);
    };

    const top_queries           = countByNorm([...queryMap.values()]);
    const top_no_result_queries = countByNorm(
      events.filter(e => e.event === 'search.no_result' && queryMap.has(e.search_id))
    );

    // top_clicked_results（有效点击，按 result_id 聚合）
    const clickResultMap = new Map<string, SearchClickStat>();
    for (const e of validClicks) {
      const ev = e as unknown as Record<string, unknown>;
      const id  = (ev['result_id']  as string) ?? '';
      const url = (ev['result_url'] as string) ?? '';
      const rt  = (ev['result_type'] as string) ?? '';
      if (!id) continue;
      const existing = clickResultMap.get(id);
      if (existing) {
        existing.count++;
      } else {
        clickResultMap.set(id, { result_id: id, result_url: url, result_type: rt, count: 1 });
      }
    }
    const top_clicked_results = [...clickResultMap.values()]
      .sort((a, b) => b.count - a.count)
      .slice(0, topN);

    // ── Step 11: 组装返回 ────────────────────────────────────────────────────
    return {
      generated_at:                   Date.now(),
      total_queries,
      unique_sessions,
      no_result_queries,
      no_result_rate,
      avg_result_count,
      total_result_clicks,
      valid_result_clicks,
      clicked_query_count,
      ctr,
      clicks_per_query,
      avg_click_position,
      orphan_click_count,
      clarifier_shown_count,
      clarifier_shown_rate,
      total_clarifier_clicks,
      clarifier_clicked_search_count,
      clarifier_ctr,
      queries_by_source,
      clicks_by_type,
      top_queries,
      top_no_result_queries,
      top_clicked_results,
      legacy_event_count,
      skipped_event_count,
    };
  }

  readAll(): SearchEvent[] {
    return this.evict(this.load());
  }

  clear(): void {
    try {
      localStorage.removeItem(LS_KEY);
      if (DEBUG) console.debug('[Analytics] store cleared');
    } catch {
      // 静默忽略
    }
  }
}

// ─── 默认单例 ─────────────────────────────────────────────────────────────────

export const searchEventStore: SearchEventStore = new LocalStorageSearchEventStore();
