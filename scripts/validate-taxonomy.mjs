/**
 * Anori · validate-taxonomy.mjs
 * Sprint 17B.1
 *
 * 验证 src/repository/taxonomy.json 的结构完整性。
 * 规则分级：
 *   errors   → 阻断，必须修复
 *   warnings → 提示，不阻断
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ── 加载数据 ─────────────────────────────────────────────────────────────────

const taxonomyPath = path.join(ROOT, 'src/repository/taxonomy.json');
const varsPath     = path.join(ROOT, 'src/repository/vars.json');

const taxonomy = JSON.parse(fs.readFileSync(taxonomyPath, 'utf8'));
const varsData = JSON.parse(fs.readFileSync(varsPath, 'utf8'));

const validVarIds = new Set(varsData.variables.map(v => v.id));
const validDomainStatuses  = new Set(['active', 'planned']);
const validConceptStatuses = new Set(['ready', 'planned']);

const errors   = [];
const warnings = [];

// ── Domain 验证 ───────────────────────────────────────────────────────────────

const domainIds   = new Set();
const domainSlugs = new Set();
const domainOrders = new Set();

for (const d of taxonomy.domains) {
  // id 唯一
  if (domainIds.has(d.id))   errors.push(`Domain id 重复: "${d.id}"`);
  else domainIds.add(d.id);

  // slug 唯一
  if (domainSlugs.has(d.slug)) errors.push(`Domain slug 重复: "${d.slug}"`);
  else domainSlugs.add(d.slug);

  // id 格式
  if (d.id !== `domain-${d.slug}`)
    errors.push(`Domain id 格式不符: "${d.id}" 应为 "domain-${d.slug}"`);

  // order 唯一
  if (domainOrders.has(d.order)) errors.push(`Domain order 重复: ${d.order} (id: ${d.id})`);
  else domainOrders.add(d.order);

  // label 非空
  if (!d.label?.zh) errors.push(`Domain label.zh 为空: "${d.id}"`);
  if (!d.label?.en) errors.push(`Domain label.en 为空: "${d.id}"`);

  // status 合法
  if (!validDomainStatuses.has(d.status))
    errors.push(`Domain status 非法: "${d.status}" (id: ${d.id})，合法值: active | planned`);
}

// order 连续性
const orders = [...domainOrders].sort((a, b) => a - b);
for (let i = 0; i < orders.length; i++) {
  if (orders[i] !== i + 1)
    errors.push(`Domain order 不连续: 期望 ${i + 1}，实际 ${orders[i]}`);
}

// ── Concept 验证 ──────────────────────────────────────────────────────────────

const conceptIds   = new Set();
const conceptSlugs = new Set();

// alias → concept map（用于跨 Concept 重复检查）
const aliasMap       = new Map(); // alias → [conceptId, ...]
const searchTermMap  = new Map(); // term  → [conceptId, ...]

for (const c of taxonomy.concepts) {
  // id 唯一
  if (conceptIds.has(c.id))   errors.push(`Concept id 重复: "${c.id}"`);
  else conceptIds.add(c.id);

  // slug 唯一
  if (conceptSlugs.has(c.slug)) errors.push(`Concept slug 重复: "${c.slug}"`);
  else conceptSlugs.add(c.slug);

  // id 格式
  if (c.id !== `concept-${c.slug}`)
    errors.push(`Concept id 格式不符: "${c.id}" 应为 "concept-${c.slug}"`);

  // primary_domain 存在
  if (!domainIds.has(`domain-${c.primary_domain}`))
    errors.push(`Concept "${c.id}" primary_domain 无效: "${c.primary_domain}"`);

  // primary_domain 必须在 domains 数组中
  if (!c.domains?.includes(c.primary_domain))
    errors.push(`Concept "${c.id}" primary_domain "${c.primary_domain}" 未在 domains 数组中`);

  // Concept.domains 内部不得重复
  const domainsSet = new Set(c.domains ?? []);
  if (domainsSet.size !== (c.domains ?? []).length)
    errors.push(`Concept "${c.id}" domains 数组有重复值`);

  // domains 中所有值有效
  for (const d of (c.domains ?? [])) {
    if (!domainIds.has(`domain-${d}`))
      errors.push(`Concept "${c.id}" domains 中存在无效 Domain: "${d}"`);
  }

  // related_vars 有效性
  for (const varId of (c.related_vars ?? [])) {
    if (!validVarIds.has(varId))
      errors.push(`Concept "${c.id}" related_vars 引用无效 VAR: "${varId}"`);
  }

  // label 非空
  if (!c.label?.zh) errors.push(`Concept label.zh 为空: "${c.id}"`);
  if (!c.label?.en) errors.push(`Concept label.en 为空: "${c.id}"`);

  // scope_note 非空
  if (!c.scope_note?.zh) errors.push(`Concept scope_note.zh 为空: "${c.id}"`);
  if (!c.scope_note?.en) errors.push(`Concept scope_note.en 为空: "${c.id}"`);

  // aliases 为数组
  if (!Array.isArray(c.aliases?.zh)) errors.push(`Concept "${c.id}" aliases.zh 不是数组`);
  if (!Array.isArray(c.aliases?.en)) errors.push(`Concept "${c.id}" aliases.en 不是数组`);

  // aliases.zh / aliases.en 各自不得重复
  if (Array.isArray(c.aliases?.zh)) {
    const zhSet = new Set(c.aliases.zh);
    if (zhSet.size !== c.aliases.zh.length)
      errors.push(`Concept "${c.id}" aliases.zh 有重复项`);
  }
  if (Array.isArray(c.aliases?.en)) {
    const enSet = new Set(c.aliases.en);
    if (enSet.size !== c.aliases.en.length)
      errors.push(`Concept "${c.id}" aliases.en 有重复项`);
  }

  // search_terms 为数组且去重
  if (!Array.isArray(c.search_terms)) {
    errors.push(`Concept "${c.id}" search_terms 不是数组`);
  } else {
    const unique = new Set(c.search_terms);
    if (unique.size !== c.search_terms.length)
      errors.push(`Concept "${c.id}" search_terms 有重复项`);
  }

  // status 合法
  if (!validConceptStatuses.has(c.status))
    errors.push(`Concept status 非法: "${c.status}" (id: ${c.id})，合法值: ready | planned`);

  // ── 语义检查：aliases 与 search_terms 不重叠 ──────────────────────────────
  const allAliases = [
    ...(c.aliases?.zh ?? []),
    ...(c.aliases?.en ?? []),
  ].map(s => s.toLowerCase());
  const allSearchTerms = (c.search_terms ?? []).map(s => s.toLowerCase());
  const overlap = allAliases.filter(a => allSearchTerms.includes(a));
  if (overlap.length > 0)
    errors.push(`Concept "${c.id}" aliases 与 search_terms 有重叠: ${overlap.join(', ')}`);

  // ── 跨 Concept 重复 alias 收集 ──────────────────────────────────────────────
  for (const alias of allAliases) {
    if (!aliasMap.has(alias)) aliasMap.set(alias, []);
    aliasMap.get(alias).push(c.id);
  }
  for (const term of allSearchTerms) {
    if (!searchTermMap.has(term)) searchTermMap.set(term, []);
    searchTermMap.get(term).push(c.id);
  }
}

// 跨 Concept alias 重复 → warning
for (const [alias, ids] of aliasMap) {
  if (ids.length > 1)
    warnings.push(`Alias "${alias}" 被多个 Concept 使用: ${ids.join(', ')}`);
}

// 跨 Concept search_term 重复 → warning
for (const [term, ids] of searchTermMap) {
  if (ids.length > 1)
    warnings.push(`Search term "${term}" 被多个 Concept 使用: ${ids.join(', ')}`);
}

// ── 统计输出 ──────────────────────────────────────────────────────────────────

const crossDomain = taxonomy.concepts.filter(c => c.domains.length > 1);

if (warnings.length > 0) {
  console.log(`Warnings (${warnings.length})`);
  warnings.forEach(w => console.log(`- ${w}`));
}

if (errors.length > 0) {
  console.log(`\nErrors (${errors.length})`);
  errors.forEach(e => console.log(`- ${e}`));
  console.log('\nTaxonomy validation FAILED');
  process.exit(1);
}

console.log(
  `Taxonomy validation passed: ${taxonomy.domains.length} domains, ` +
  `${taxonomy.concepts.length} concepts, ` +
  `${crossDomain.length} cross-domain`
);
