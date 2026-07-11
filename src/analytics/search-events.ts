/**
 * Anori Search Analytics · Event Schema v1.1
 *
 * Schema Version : 1.1
 * Status         : Frozen (2026-07-11)
 * Baseline       : v0.15.1
 *
 * 修改规则：
 *   - 字段语义变更 / 字段删除 / 事件关系修改 → 升级 schema_version
 *   - 新增可选字段 → 须先进行兼容性审核
 *
 * 变更记录：
 *   1.0  初始设计
 *   1.1  SearchResultType 改为实际六类结果
 *        SearchClarifierClickEvent: refined_query → destination_url
 *        source 新增 suggestion
 *
 * 隐私边界：
 *   - session_id 不跨 Tab，不持久化至 localStorage
 *   - 不建立跨会话用户 ID
 *   - 不采集 UA / 设备平台 / IP / 地理位置
 *   - 不与用户资料关联
 *   - 远端采集前须重新进行 Privacy Review
 */

// ─── Schema Version ───────────────────────────────────────────────────────────

export const SEARCH_SCHEMA_VERSION = '1.1' as const;
export type SchemaVersion = typeof SEARCH_SCHEMA_VERSION;

// ─── Event Type Enum ──────────────────────────────────────────────────────────

export type SearchEventType =
  | 'search.query'
  | 'search.no_result'
  | 'search.clarifier_shown'
  | 'search.clarifier_click'
  | 'search.result_click';

/**
 * 实际搜索结果类型（对应当前 Search 六类内容）。
 * 未来 Search 纳入 EA/ET/Series 时扩展，届时升级 schema_version。
 */
export type SearchResultType =
  | 'problem'   // 问题
  | 'method'    // 方法
  | 'topic'     // 主题
  | 'ka'        // 知识文章
  | 'concept'   // 概念
  | 'resource'; // 资源

// ─── Base Schema ──────────────────────────────────────────────────────────────

export interface SearchEventBase {
  /** Schema 版本，用于历史数据兼容判断 */
  schema_version: SchemaVersion;

  /** 事件唯一 ID，用于去重与调试。来源：crypto.randomUUID() */
  event_id: string;

  /**
   * 搜索流程 ID。同一次正式搜索触发的所有相关事件共享同一 search_id。
   * 每次正式搜索（Enter / 按钮 / Suggestion 点击）生成新 search_id。
   * 实时输入预览不生成正式 search_id，不产生 Analytics 事件。
   */
  search_id: string;

  /** 事件类型 */
  event: SearchEventType;

  /** 事件产生时间（Unix ms） */
  ts: number;

  /**
   * Tab 级匿名搜索会话 ID，不是用户 ID。
   * 来源：sessionStorage（Tab 存活期间保持不变，刷新后保持，关闭 Tab 后消失）
   */
  session_id: string;

  /** 原始查询字符串（trim 后） */
  query: string;

  /**
   * 归一化查询字符串。
   * 规则：trim → Unicode NFKC → lowercase → 连续空白压缩为单空格
   * 不做繁简转换，不做同义词替换。
   * 与 Search Engine 内部归一化逻辑解耦：Analytics 的 query_norm
   * 不随 Search Engine 内部规则改变而改变。
   */
  query_norm: string;

  /**
   * 页面语言标识（可选）。
   * 来源：document.documentElement.lang
   * 示例：'zh-CN' | 'ja' | 'en'
   */
  locale?: string;
}

// ─── Event Extensions ─────────────────────────────────────────────────────────

/**
 * 用户正式提交搜索时触发（主事件）。
 * 触发条件：Enter / 搜索按钮 / Suggestion Chip 点击。
 * 实时 input 预览不触发此事件。
 * 零结果时同时触发 search.no_result（共享 search_id）。
 */
export interface SearchQueryEvent extends SearchEventBase {
  event: 'search.query';
  /** 本次搜索结果数量 */
  result_count: number;
  /**
   * 触发来源。
   * 注：当前 Clarifier 为导航型，不重新执行搜索，
   * 因此本次实现通常不会产生 source: 'clarifier'，保留该值仅用于 Schema 兼容。
   */
  source: 'keyboard' | 'button' | 'clarifier' | 'suggestion';
}

/**
 * 零结果派生事件。
 * 规则：每次零结果必须产生 1 个 search.query + 1 个 search.no_result，
 *       两者共享同一 search_id。
 * search.query 为主事件，search.no_result 为派生事件。
 */
export interface SearchNoResultEvent extends SearchEventBase {
  event: 'search.no_result';
}

/**
 * Clarifier 建议出现时触发。
 * 仅在正式搜索（trackQuery=true）时记录，实时输入预览不记录。
 * 同一次正式搜索最多记录一次。
 */
export interface SearchClarifierShownEvent extends SearchEventBase {
  event: 'search.clarifier_shown';
  /** 展示的 Clarifier 选项标签列表 */
  clarifiers: string[];
}

/**
 * 用户点击 Clarifier 选项时触发。
 *
 * 注：当前 Clarifier 为导航型，点击后直接跳转 destination_url，
 *     不重新执行搜索，不产生新的 search.query。
 *     若未来 Clarifier 改为精炼查询型，届时升级 schema_version。
 */
export interface SearchClarifierClickEvent extends SearchEventBase {
  event: 'search.clarifier_click';
  /** 被点击的 Clarifier 选项标签 */
  clarifier_value: string;
  /** 在 Clarifier 列表中的位置（0-based） */
  clarifier_index: number;
  /** 点击后跳转的目标 URL */
  destination_url: string;
}

/**
 * 用户点击搜索结果时触发。
 */
export interface SearchResultClickEvent extends SearchEventBase {
  event: 'search.result_click';
  /** 被点击内容的稳定 ID（各类型来源见 Result ID Mapping 文档） */
  result_id: string;
  /** 内容类型 */
  result_type: SearchResultType;
  /**
   * 结果在页面最终视觉顺序中的位置（全局 0-based）。
   * 顶部 Problem 推荐计为 0，其后各分组结果按页面从上到下连续编号。
   * 在渲染前由搜索逻辑分配，不从 DOM 读取。
   */
  result_index: number;
  /** 目标 URL（相对路径） */
  result_url: string;
}

// ─── Union Type ───────────────────────────────────────────────────────────────

export type SearchEvent =
  | SearchQueryEvent
  | SearchNoResultEvent
  | SearchClarifierShownEvent
  | SearchClarifierClickEvent
  | SearchResultClickEvent;
