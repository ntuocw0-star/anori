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
 */

import type { SearchEvent } from './search-events';

const DEBUG = import.meta.env.DEV;

// ─── Summary Types ────────────────────────────────────────────────────────────

export interface SearchQueryStat {
  query_norm: string;
  count:      number;
}

export interface SearchAnalyticsSummary {
  /** 统计生成时间（Unix ms） */
  generated_at:            number;
  total_queries:           number;
  no_result_queries:       number;
  total_result_clicks:     number;
  total_clarifier_clicks:  number;
  /** 搜索结果点击率：total_result_clicks / total_queries（total_queries=0 时为 0） */
  ctr:                     number;
  /** 零结果率：no_result_queries / total_queries（total_queries=0 时为 0） */
  no_result_rate:          number;
  /** Clarifier 点击率：total_clarifier_clicks / total_queries（total_queries=0 时为 0） */
  clarifier_ctr:           number;
  top_queries:             SearchQueryStat[];
  top_no_result_queries:   SearchQueryStat[];
}

export interface QuerySummaryOptions {
  /** 热词返回数量上限（默认 20） */
  topN?:  number;
  /** 过滤起始时间（Unix ms，含；省略则不过滤） */
  since?: number;
  /** 过滤截止时间（Unix ms，含；省略则不过滤） */
  until?: number;
}

// ─── Store 抽象接口 ───────────────────────────────────────────────────────────

/**
 * 抽象接口：16A 实现为 LocalStorageSearchEventStore。
 * 未来可扩展：
 *   RemoteSearchEventStore
 *   CompositeSearchEventStore
 * 替换时只需修改单例导出，调用方无需改变。
 */
export interface SearchEventStore {
  /** 追加一条事件 */
  append(event: SearchEvent): void | Promise<void>;
  /** 批量追加事件（未来 Remote Store 可真正批量发送） */
  appendBatch(events: SearchEvent[]): void | Promise<void>;
  /** 查询聚合摘要，支持时间过滤 */
  querySummary(options?: QuerySummaryOptions): SearchAnalyticsSummary | Promise<SearchAnalyticsSummary>;
  /** 读取原始事件列表（调试用） */
  readAll(): SearchEvent[] | Promise<SearchEvent[]>;
  /** 清除所有事件 */
  clear(): void | Promise<void>;
}

// ─── LocalStorage 实现 ────────────────────────────────────────────────────────

const LS_KEY     = 'anori_search_events_v1_1';
const MAX_EVENTS = 1000;
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000; // 30 天

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

  /** 过期清理 + 容量限制（FIFO 删最旧） */
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

    let events = this.evict(this.load());

    // 时间过滤（参数为空时统计全部）
    if (since !== undefined) events = events.filter(e => e.ts >= since);
    if (until !== undefined) events = events.filter(e => e.ts <= until);

    const queryEvents          = events.filter(e => e.event === 'search.query');
    const noResultEvents       = events.filter(e => e.event === 'search.no_result');
    const resultClickEvents    = events.filter(e => e.event === 'search.result_click');
    const clarifierClickEvents = events.filter(e => e.event === 'search.clarifier_click');

    const total      = queryEvents.length;
    const noResult   = noResultEvents.length;
    const clicks     = resultClickEvents.length;
    const clarClicks = clarifierClickEvents.length;

    const countByNorm = (evts: SearchEvent[]): SearchQueryStat[] => {
      const map = new Map<string, number>();
      for (const e of evts) {
        map.set(e.query_norm, (map.get(e.query_norm) ?? 0) + 1);
      }
      return [...map.entries()]
        .map(([query_norm, count]) => ({ query_norm, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, topN);
    };

    return {
      generated_at:           Date.now(),
      total_queries:          total,
      no_result_queries:      noResult,
      total_result_clicks:    clicks,
      total_clarifier_clicks: clarClicks,
      ctr:                    total > 0 ? clicks / total : 0,
      no_result_rate:         total > 0 ? noResult / total : 0,
      clarifier_ctr:          total > 0 ? clarClicks / total : 0,
      top_queries:            countByNorm(queryEvents),
      top_no_result_queries:  countByNorm(noResultEvents),
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

/**
 * 全局单例，供采集层调用。
 * 后续替换为 RemoteSearchEventStore 时只需修改此处。
 */
export const searchEventStore: SearchEventStore = new LocalStorageSearchEventStore();
