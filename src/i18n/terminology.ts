/**
 * terminology.ts
 * Anori Terminology Dictionary v1.0
 * Sprint 15.1A
 *
 * 所有用户可见的系统术语从此处读取。
 * 内部标识、JSON 字段、路由与文件名继续使用英文术语及 EA/ET/KA 缩写。
 */

export interface Term {
  /** 用户可见显示名（中文） */
  label: string;
  /** 简短说明，用于副标题或 tooltip */
  description?: string;
  /** 内部代码名，供开发层引用 */
  internal: string;
  /** 内部缩写，如 EA / ET / KA */
  abbr?: string;
}

export const TERMS = {
  library: {
    label: '文献库',
    description: '浏览主题、专题与知识资料',
    internal: 'Library',
  },
  search: {
    label: '搜索',
    description: '输入关键词查找内容',
    internal: 'Search',
  },
  topic: {
    label: '主题',
    description: '知识的顶层分类',
    internal: 'Topic',
  },
  series: {
    label: '专题',
    description: '围绕一个研究方向整理的系列资料',
    internal: 'Series',
  },
  ea: {
    label: '研究证据',
    description: '基于同行评审研究的证据分析',
    internal: 'Evidence Analysis',
    abbr: 'EA',
  },
  et: {
    label: '证据解读',
    description: '将研究发现转化为家长可理解的说明',
    internal: 'Evidence Translation',
    abbr: 'ET',
  },
  ka: {
    label: '知识摘要',
    description: '基于研究证据整理的实用知识',
    internal: 'Knowledge Asset',
    abbr: 'KA',
  },
  bundle: {
    label: '下载资料',
    description: '可下载或打印的知识材料',
    internal: 'Bundle',
  },
  onePageSummary: {
    label: '一页摘要',
    description: '适合打印或保存的单页版本',
    internal: 'One-page Summary',
  },
  parentGuide: {
    label: '家长指南',
    description: '专为家长设计的实践指引',
    internal: 'Parent Guide',
  },
} satisfies Record<string, Term>;

export type TermKey = keyof typeof TERMS;

export function termLabel(key: TermKey): string {
  return TERMS[key].label;
}

export function termBadge(key: TermKey): string {
  const term = TERMS[key];
  return 'abbr' in term && term.abbr ? `${term.label}（${term.abbr}）` : term.label;
}
