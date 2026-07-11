/**
 * Anori Search Analytics · Event Factory
 *
 * 职责：
 *   - 组装完整的 SearchEvent 对象
 *   - 填充 schema_version / event_id / ts / session_id / locale / query_norm
 *   - Search 组件只传业务字段，不直接接触 Schema 结构
 *
 * 职责边界：
 *   - Factory  负责事件创建
 *   - Store    负责存储、读取、聚合、清除
 *   - Session  负责 ID 生命周期管理
 *
 * Schema 升级时只改此文件和 search-events.ts，Search 组件无需修改。
 */

import type {
  SearchQueryEvent,
  SearchNoResultEvent,
  SearchClarifierShownEvent,
  SearchClarifierClickEvent,
  SearchResultClickEvent,
  SearchResultType,
} from './search-events';
import { SEARCH_SCHEMA_VERSION } from './search-events';
import { normalizeQuery } from './query-normalizer';
import { generateEventId, getSessionId } from './search-session';

const DEBUG = import.meta.env.DEV;

// ─── Internal Base Builder ────────────────────────────────────────────────────

function buildBase(search_id: string, query: string) {
  const locale =
    typeof document !== 'undefined'
      ? (document.documentElement.lang || undefined)
      : undefined;

  return {
    schema_version: SEARCH_SCHEMA_VERSION,
    event_id:       generateEventId(),
    search_id,
    ts:             Date.now(),
    session_id:     getSessionId(),
    query:          query.trim(),
    query_norm:     normalizeQuery(query),
    locale,
  };
}

// ─── Event Builders ───────────────────────────────────────────────────────────

export function createSearchQueryEvent(params: {
  search_id:    string;
  query:        string;
  result_count: number;
  source:       'keyboard' | 'button' | 'clarifier' | 'suggestion';
}): SearchQueryEvent {
  const event: SearchQueryEvent = {
    ...buildBase(params.search_id, params.query),
    event:        'search.query',
    result_count: params.result_count,
    source:       params.source,
  };
  if (DEBUG) console.debug('[Analytics] search.query', event);
  return event;
}

export function createSearchNoResultEvent(params: {
  search_id: string;
  query:     string;
}): SearchNoResultEvent {
  const event: SearchNoResultEvent = {
    ...buildBase(params.search_id, params.query),
    event: 'search.no_result',
  };
  if (DEBUG) console.debug('[Analytics] search.no_result', event);
  return event;
}

export function createClarifierShownEvent(params: {
  search_id:  string;
  query:      string;
  clarifiers: string[];
}): SearchClarifierShownEvent {
  const event: SearchClarifierShownEvent = {
    ...buildBase(params.search_id, params.query),
    event:      'search.clarifier_shown',
    clarifiers: params.clarifiers,
  };
  if (DEBUG) console.debug('[Analytics] search.clarifier_shown', event);
  return event;
}

export function createClarifierClickEvent(params: {
  search_id:       string;
  query:           string;
  clarifier_value: string;
  clarifier_index: number;
  destination_url: string;
}): SearchClarifierClickEvent {
  const event: SearchClarifierClickEvent = {
    ...buildBase(params.search_id, params.query),
    event:           'search.clarifier_click',
    clarifier_value: params.clarifier_value,
    clarifier_index: params.clarifier_index,
    destination_url: params.destination_url,
  };
  if (DEBUG) console.debug('[Analytics] search.clarifier_click', event);
  return event;
}

export function createResultClickEvent(params: {
  search_id:    string;
  query:        string;
  result_id:    string;
  result_type:  SearchResultType;
  result_index: number;
  result_url:   string;
}): SearchResultClickEvent {
  const event: SearchResultClickEvent = {
    ...buildBase(params.search_id, params.query),
    event:        'search.result_click',
    result_id:    params.result_id,
    result_type:  params.result_type,
    result_index: params.result_index,
    result_url:   params.result_url,
  };
  if (DEBUG) console.debug('[Analytics] search.result_click', event);
  return event;
}
