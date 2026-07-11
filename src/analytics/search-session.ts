/**
 * Anori Search Analytics · Session & ID Management
 *
 * 职责：
 *   - session_id：Tab 级匿名会话 ID（sessionStorage）
 *   - search_id ：每次正式搜索流程独立生成（不持久化）
 *   - event_id  ：每个事件独立生成
 *
 * 不负责：query 归一化（见 query-normalizer.ts）
 *
 * session_id 语义：
 *   浏览器 Tab 级匿名搜索会话 ID，不是用户 ID。
 *   刷新页面后保持；关闭 Tab 后消失；新开 Tab 生成新 ID。
 */

const SESSION_STORAGE_KEY = 'anori_search_session_id';

// 模块级内存变量：sessionStorage 不可用时的 fallback
// 确保同一页面生命周期内 session_id 保持一致
let _memorySessionId: string | null = null;

// ─── ID 生成 ──────────────────────────────────────────────────────────────────

function generateId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  // Fallback（旧浏览器）
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

// ─── Session ID（Tab 级） ─────────────────────────────────────────────────────

export function getSessionId(): string {
  // 优先使用 sessionStorage（Tab 关闭后消失，刷新保持）
  try {
    const existing = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (existing) return existing;
    const id = generateId();
    sessionStorage.setItem(SESSION_STORAGE_KEY, id);
    return id;
  } catch {
    // sessionStorage 不可用时（隐私模式严格设置等）退化为模块级内存变量
    // 注意：不能每次调用都生成新 ID，必须保持页面生命周期内一致
    if (!_memorySessionId) {
      _memorySessionId = generateId();
    }
    return _memorySessionId;
  }
}

// ─── Search ID（每次正式搜索流程） ───────────────────────────────────────────

/**
 * 每次正式搜索（Enter / 按钮 / Suggestion 点击）调用一次。
 * 实时输入预览不调用此函数。
 */
export function generateSearchId(): string {
  return generateId();
}

// ─── Event ID（每个事件） ─────────────────────────────────────────────────────

export function generateEventId(): string {
  return generateId();
}
