/**
 * Repository data access layer
 * All components import from here — never directly from JSON
 * D-002 mapping: front-end fields only, Deprecated filtered
 */

import pagesRaw from "../repository/pages.json";
import varsRaw from "../repository/vars.json";
import relsRaw from "../repository/rels.json";
import pathsRaw from "../repository/paths.json";

// ── Types ──────────────────────────────────────────────────────

export interface Page {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  trigger_statements: string[];
  what_is_this: string;
  what_to_do: string;
  primary_var: string[];
  supporting_rel: string[];
}

export interface Var {
  id: string;
  canonical_name: string;
  chinese_name: string;
  search_type?: "concept" | "resource";
  variable_type: string;
  definition: string;
  aliases: string[];
}

export interface Rel {
  id: string;
  source: string;
  relation: string;
  target: string;
  effect_polarity: string;
  evidence_grade: string;
}

export interface Path {
  id: string;
  name: string;
  chinese_name: string;
  governing_question: string;
  main_chain: string[];
}

// ── Data ───────────────────────────────────────────────────────

export const pages: Page[] = (pagesRaw as any).pages;

export const vars: Var[] = ((varsRaw as any).variables as any[])
  .filter((v: any) => v.status !== "Deprecated");

export const rels: Rel[] = ((relsRaw as any).relations as any[])
  .filter((r: any) => r.status === "Active");

export const paths: Path[] = (pathsRaw as any).paths;

// ── Lookups ────────────────────────────────────────────────────

export const varById  = Object.fromEntries(vars.map(v => [v.id, v]));
export const relById  = Object.fromEntries(rels.map(r => [r.id, r]));
export const pageBySlug = Object.fromEntries(pages.map(p => [p.slug, p]));

export function resolveVars(page: Page): Var[] {
  return page.primary_var.map(id => varById[id]).filter(Boolean);
}
export function resolveRels(page: Page): Rel[] {
  return page.supporting_rel.map(id => relById[id]).filter(Boolean);
}

// ── Display helpers ────────────────────────────────────────────

export const relationZh: Record<string, string> = {
  increases: "提升", decreases: "降低", predicts: "预测",
  associated_with: "相关", mediates: "中介", moderates: "调节",
  enables: "促进", constrains: "限制", precedes: "先于",
};

export const varTypeColor: Record<string, string> = {
  Risk: "#FAE5D3", Protective: "#D4EDE3", Intermediate: "#E8E8F5",
  Outcome: "#EAF2EF", Context: "#EDECE8", Moderator: "#F5F0E8",
};

// ── Resource types ─────────────────────────────────────────

export interface Resource {
  // ── Core identifiers ──────────────────────────────────────
  id: string;
  title: string;
  title_zh?: string;

  // ── Organization ──────────────────────────────────────────
  organization: string;
  organization_short?: string;
  countries: string[];

  // ── Classification ────────────────────────────────────────
  resource_type: string;
  resource_category?: string;
  resource_purpose?: string;
  audience: string[];
  topic_tags: string[];
  language: string[];
  access: string;

  // ── Descriptions ──────────────────────────────────────────
  description?: string;
  description_zh?: string;
  entry_question?: string;
  resource_intro?: string;
  recommendation_reason?: string;
  recommendation_level?: string;
  digest_summary?: string;
  key_points?: string[];

  // ── Links ─────────────────────────────────────────────────
  url?: string;
  external_url?: string;
  anori_path?: string;

  // ── Status & metadata ─────────────────────────────────────
  digest_status?: "pending" | "ready";
  evidence_level?: string;
  status?: string;
  date_added?: string;
  last_verified?: string;

  // ── Flags ─────────────────────────────────────────────────
  is_free?: boolean;
  has_pdf?: boolean;
  is_online_tool?: boolean;

  // ── Relations ─────────────────────────────────────────────
  related_pages?: string[];

  // ── Reserved fields (not yet in data, used in page templates) ──
  practical_suggestions?: string[];
  related_methods?: Record<string, unknown>[];
  related_concepts?: Record<string, unknown>[];
  related_resources?: Record<string, unknown>[];
  evidence_sources?: Record<string, unknown>[];
  why_recommended?: string;
}

import resourcesRaw from "../repository/resources.json";

export const resources: Resource[] = ((resourcesRaw as any).resources as any[])
  .filter((r: any) => (r.status ?? "Active") === "Active");

/**
 * getResourcesByPageSlug
 * 返回与某个 PAGE slug 关联的资源，按导入顺序排列
 * 最多返回 limit 条（默认 3）
 */
export function getResourcesByPageSlug(slug: string, limit = 3): Resource[] {
  return resources
    .filter(r => (r.related_pages ?? []).includes(slug))
    .slice(0, limit);
}
