/**
 * Anori Search Analytics · Query Normalizer
 *
 * 纯函数，无副作用，无外部依赖。
 * 供 Analytics 采集层使用，也可供 Search Engine 复用。
 *
 * 归一化规则（顺序固定）：
 *   1. trim
 *   2. Unicode NFKC（全角 → 兼容半角，分解组合字符）
 *   3. 英文字母 lowercase
 *   4. 连续空白压缩为单个空格
 *
 * 不做：
 *   - 繁简转换
 *   - 同义词替换
 *   - 拼音转换
 *   - 标点删除
 *   - Search Engine 内部特定规则
 *
 * 原则：Analytics 的 query_norm 必须与 Search Engine 的实际归一化逻辑解耦。
 * 搜索逻辑以后改变，不应导致历史 Analytics 数据语义被悄悄改变。
 */

export function normalizeQuery(raw: string): string {
  return raw
    .trim()
    .normalize('NFKC')
    .toLowerCase()
    .replace(/\s+/g, ' ');
}
