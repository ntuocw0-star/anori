/**
 * Anori · Repository Analytics
 * Sprint 17D · 2026-07-12
 *
 * 定位：Repository 健康仪表盘，不是一次性统计脚本。
 * 原则：Read Only — 只读取 Repository，生成报告，绝不写回任何数据文件。
 *
 * 输出（全部写入 reports/）：
 *   coverage-matrix.json / .md   — UFC / KFC / Overall / Lifecycle
 *   concept-health.json / .md    — 每个 Concept 的内容数量与状态
 *   repository-growth.json       — 历史快照（追加，不覆盖）
 *   action-queue.md              — Priority A/B 行动队列
 *   repository-summary.md        — 综合概览
 *
 * 执行顺序：postbuild，在 validate-repository 之后运行。
 */

import fs   from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.resolve(__dirname, '..');
const REPORTS   = path.join(ROOT, 'reports');

if (!fs.existsSync(REPORTS)) fs.mkdirSync(REPORTS, { recursive: true });

// ── Data Loading ─────────────────────────────────────────────────────────────

function load(relPath) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, relPath), 'utf8'));
}

const taxonomy   = load('src/repository/taxonomy.json');
const ea_data    = load('src/generated/evidence/ea.json');
const et_data    = load('src/generated/evidence/et.json');

// ── concept_refs: Markdown から直接読む（generated JSON は未反映）──────────
// build-evidence-index.mjs がネスト YAML を無視するため、
// Analytics は Markdown を直接パースする（Read Only 原則を維持）
function parseConceptRefs(mdContent) {
  const m = mdContent.match(/```ya?ml\n([\s\S]*?)```/);
  if (!m) return null;
  const yaml = m[1];
  const cr = yaml.match(/concept_refs:\s*\n\s+primary:\s*(\S+)(?:[\s\S]*?secondary:\s*\n((?:\s+- \S+\n)*))?/);
  if (!cr) return null;
  const secondary = (cr[2] || '').trim().split('\n')
    .map(s => s.trim().replace(/^- /, '')).filter(Boolean);
  return { primary: cr[1], secondary };
}

function loadConceptRefsFromMd(dir) {
  const result = {};
  if (!fs.existsSync(dir)) return result;
  for (const fn of fs.readdirSync(dir).filter(f => f.endsWith('.md'))) {
    const content = fs.readFileSync(path.join(dir, fn), 'utf8');
    const refs = parseConceptRefs(content);
    const id = fn.replace('.md', '');
    if (refs) result[id] = refs;
  }
  return result;
}

const EA_REFS = loadConceptRefsFromMd(path.join(ROOT, 'knowledge/evidence/cards/Deconstruction'));
const ET_REFS = loadConceptRefsFromMd(path.join(ROOT, 'knowledge/evidence/cards/ET'));

// MD content キャッシュ（coverageScore で Status 行を参照するため）
function loadMdCache(dir) {
  const cache = {};
  if (!fs.existsSync(dir)) return cache;
  for (const fn of fs.readdirSync(dir).filter(f => f.endsWith('.md'))) {
    cache[fn.replace('.md', '')] = fs.readFileSync(path.join(dir, fn), 'utf8');
  }
  return cache;
}
const EA_MD_CACHE = loadMdCache(path.join(ROOT, 'knowledge/evidence/cards/Deconstruction'));
const ET_MD_CACHE = loadMdCache(path.join(ROOT, 'knowledge/evidence/cards/ET'));
const ka_data    = load('src/repository/knowledge.json');
const series_data= load('src/repository/library/series.json');
const paths_data = load('src/repository/paths.json');
const problems   = load('src/repository/problems.json').problems;
const methods    = load('src/repository/methods.json').methods;

const concepts = taxonomy.concepts;
const domains  = taxonomy.domains;

const ea_items  = ea_data.items;
const et_items  = et_data.items;
const ka_items  = ka_data.articles;
const series    = series_data.series;
const paths     = paths_data.paths;

// ── Helpers ───────────────────────────────────────────────────────────────────

/** concept_refs を取得（EA/ET は Markdown を優先） */
function getPrimary(obj, mdRefs) {
  if (mdRefs && obj?.id && mdRefs[obj.id]) return mdRefs[obj.id].primary;
  return obj?.concept_refs?.primary ?? null;
}

function getSecondary(obj, mdRefs) {
  if (mdRefs && obj?.id && mdRefs[obj.id]) return mdRefs[obj.id].secondary ?? [];
  return obj?.concept_refs?.secondary ?? [];
}

/**
 * オブジェクトの Coverage スコア（0=なし / 0.5=draft / 1.0=active）
 * Markdown の Status ヘッダーまたは JSON の status フィールドを参照
 */
function coverageScore(obj, mdContent) {
  // Markdown ファイルから Status を取得
  if (mdContent) {
    const m = mdContent.match(/\*\*Status:\*\*\s*([^\n]+)/);
    if (m) {
      const s = m[1].trim().toLowerCase();
      if (s.startsWith('draft')) return 0.5;
      if (s.startsWith('active') || s.startsWith('gold')) return 1.0;
    }
  }
  // JSON フィールド
  const s = (obj?.status ?? '').toLowerCase();
  if (s === 'draft') return 0.5;
  if (s === 'active' || s === 'published') return 1.0;
  // status 未設定は active 扱い（既存コンテンツへの後方互換）
  return 1.0;
}

/** 各 Concept の Problem 数（related_kas → concept slug マッピング）*/
const SLUG_TO_CONCEPT = {};
for (const c of concepts) {
  SLUG_TO_CONCEPT[c.slug] = c.id;
  for (const a of [...(c.aliases?.zh ?? []), ...(c.aliases?.en ?? [])]) {
    const key = a.toLowerCase().replace(/\s+/g, '-');
    if (!SLUG_TO_CONCEPT[key]) SLUG_TO_CONCEPT[key] = c.id;
  }
}

function problemsForConcept(conceptId) {
  return problems.filter(p =>
    (p.related_kas ?? []).some(slug => {
      const mapped = SLUG_TO_CONCEPT[slug] ?? `concept-${slug}`;
      return mapped === conceptId;
    })
  );
}

/** UFC / KFC 計算 */
function calcUFC(prb, mth, pathCount) {
  const s = (prb > 0 ? 1.0 : 0.0) +
            (mth > 0 ? 0.5 : 0.0) +   // Method は間接のため 0.5
            (pathCount > 0 ? 1.0 : 0.0) +
            1.0;                        // Concept 定義は常に 1.0
  return Math.round(s / 4.0 * 100);
}

function calcKFC(ka, et, ea) {
  // ka / et / ea は coverageScore の合計（0=なし, 0.5=draft, 1.0=active）
  const s = 1.0 +
            Math.min(1.0, ka) +   // 複数ある場合も 1.0 上限
            Math.min(1.0, et) +
            Math.min(1.0, ea);
  return Math.round(s / 4.0 * 100);
}

function lifecycle(ea, et, ka, ser) {
  // Established: 全て active (>=1.0) が必要。draft は Growing 扱い
  if (ea >= 1.0 && et >= 1.0 && ka >= 1.0 && ser >= 1.0) return 'Established';
  if (ea > 0 && et > 0 && ka > 0 && ser > 0) return 'Growing';  // draft 混在
  if (ka > 0) return 'Growing';
  return 'Seed';
}

function conceptStatus(ea, et, ka, pathCount, prb) {
  if (ea >= 1 && et >= 1 && ka >= 1) return 'Healthy';
  if (pathCount >= 1 && ea === 0 && ka === 0) return 'Has Entry Only';
  if (ea === 0 && et === 0 && ka === 0 && pathCount === 0 && prb === 0) return 'Empty';
  return 'Missing Knowledge';
}

// ── Build Concept Stats ───────────────────────────────────────────────────────

const stats = {};

for (const c of concepts) {
  const cid = c.id;

  // Draft は 0.5 としてカウント（Coverage に計上するが full ではない）
  const n_ea   = ea_items.filter(x => getPrimary(x, EA_REFS) === cid)
    .reduce((s, x) => s + coverageScore(x, EA_MD_CACHE[x.id]), 0);
  const n_et   = et_items.filter(x => getPrimary(x, ET_REFS) === cid)
    .reduce((s, x) => s + coverageScore(x, ET_MD_CACHE[x.id]), 0);
  const n_ka   = ka_items.filter(x => getPrimary(x) === cid)
    .reduce((s, x) => s + coverageScore(x, null), 0);
  const n_ser  = series.filter(x => getPrimary(x) === cid)
    .reduce((s, x) => s + coverageScore(x, null), 0);
  const n_path = paths.filter(x => getPrimary(x) === cid)
    .reduce((s, x) => s + coverageScore(x, null), 0);
  const n_prb  = problemsForConcept(cid).length;
  const n_mth  = methods.filter(x => getPrimary(x) === cid).length;

  // secondary counts（出現回数カウント、primary と重複しない）
  const sec_ea  = ea_items.filter(x => getSecondary(x, EA_REFS).includes(cid)).length;
  const sec_et  = et_items.filter(x => getSecondary(x, ET_REFS).includes(cid)).length;
  const sec_ka  = ka_items.filter(x => getSecondary(x).includes(cid)).length;

  const ufc = calcUFC(n_prb, n_mth, n_path);
  const kfc = calcKFC(n_ka, n_et, n_ea);
  const overall = Math.round((ufc + kfc) / 2);
  const lc = lifecycle(n_ea, n_et, n_ka, n_ser);
  const status = conceptStatus(n_ea, n_et, n_ka, n_path, n_prb);

  stats[cid] = {
    id: cid, slug: c.slug,
    label_zh: c.label.zh, label_en: c.label.en,
    primary_domain: c.primary_domain,
    lifecycle: lc, status,
    ufc, kfc, overall,
    counts: { ea: n_ea, et: n_et, ka: n_ka, series: n_ser,
              path: n_path, problem: n_prb, method: n_mth },
    secondary_mentions: { ea: sec_ea, et: sec_et, ka: sec_ka },
  };
}

// ── Dashboard 1: Coverage Matrix ──────────────────────────────────────────────

const coverageMatrix = {
  generated_at: new Date().toISOString().slice(0, 10),
  concepts: Object.values(stats)
    .sort((a, b) => a.overall - b.overall)
    .map(s => ({
      id: s.id, slug: s.slug,
      label_zh: s.label_zh, label_en: s.label_en,
      lifecycle: s.lifecycle,
      ufc: s.ufc, kfc: s.kfc, overall: s.overall,
    })),
};

fs.writeFileSync(
  path.join(REPORTS, 'coverage-matrix.json'),
  JSON.stringify(coverageMatrix, null, 2)
);

// Markdown
const cmRows = coverageMatrix.concepts.map(c =>
  `| ${c.label_zh} | ${c.lifecycle} | ${c.ufc}% | ${c.kfc}% | ${c.overall}% |`
);
const cmMd = `# Coverage Matrix
_Generated: ${coverageMatrix.generated_at}_

| Concept | Lifecycle | UFC | KFC | Overall |
|---|---|---|---|---|
${cmRows.join('\n')}

**UFC** = User Flow Completion（Problem → Method → Path → Concept）
**KFC** = Knowledge Flow Completion（Concept → KA → ET → EA）
**Overall** = (UFC + KFC) / 2
`;
fs.writeFileSync(path.join(REPORTS, 'coverage-matrix.md'), cmMd);

// ── Dashboard 2: Concept Health ───────────────────────────────────────────────

const conceptHealth = {
  generated_at: coverageMatrix.generated_at,
  concepts: Object.values(stats)
    .sort((a, b) => {
      const order = { Empty: 0, 'Missing Knowledge': 1, 'Has Entry Only': 2, 'Healthy': 3 };
      return (order[a.status] ?? 99) - (order[b.status] ?? 99);
    })
    .map(s => ({
      id: s.id, label_zh: s.label_zh,
      status: s.status, lifecycle: s.lifecycle,
      ...s.counts,
      secondary_mentions: s.secondary_mentions,
    })),
};

fs.writeFileSync(
  path.join(REPORTS, 'concept-health.json'),
  JSON.stringify(conceptHealth, null, 2)
);

const chRows = conceptHealth.concepts.map(c => {
  const sec = Object.values(c.secondary_mentions).some(v => v > 0)
    ? ` (+${Object.values(c.secondary_mentions).reduce((a,b)=>a+b,0)} sec)`
    : '';
  return `| ${c.label_zh} | ${c.lifecycle} | ${c.ea} | ${c.et} | ${c.ka} | ${c.path} | ${c.problem} | ${c.status} |`;
});

const chMd = `# Concept Health
_Generated: ${conceptHealth.generated_at}_

| Concept | Lifecycle | EA | ET | KA | Path | Problem | Status |
|---|---|---|---|---|---|---|---|
${chRows.join('\n')}

**Status**
- Healthy: EA≥1, ET≥1, KA≥1
- Missing Knowledge: Path or Problem exists, but EA/KA = 0
- Has Entry Only: Path exists, EA/ET/KA all = 0
- Empty: all counts = 0
`;
fs.writeFileSync(path.join(REPORTS, 'concept-health.md'), chMd);

// ── Dashboard 3: Repository Growth ────────────────────────────────────────────

const growthPath = path.join(REPORTS, 'repository-growth.json');
const growthHistory = fs.existsSync(growthPath)
  ? JSON.parse(fs.readFileSync(growthPath, 'utf8'))
  : { snapshots: [] };

const today = coverageMatrix.generated_at;
const lastSnapshot = growthHistory.snapshots.at(-1);
const conceptsWithEA = Object.values(stats).filter(s => s.counts.ea > 0).length;
const avgOverall = Math.round(
  Object.values(stats).reduce((s, c) => s + c.overall, 0) / concepts.length
);

// 同日のスナップショットは上書き（ビルドを複数回しても重複しない）
const newSnapshot = {
  date: today,
  domains: domains.length,
  concepts: concepts.length,
  concepts_with_ea: conceptsWithEA,
  ea: ea_items.length,
  et: et_items.length,
  ka: ka_items.length,
  series: series.length,
  paths: paths.length,
  problems: problems.length,
  avg_overall_coverage: avgOverall,
};

if (lastSnapshot?.date === today) {
  growthHistory.snapshots[growthHistory.snapshots.length - 1] = newSnapshot;
} else {
  growthHistory.snapshots.push(newSnapshot);
}

fs.writeFileSync(growthPath, JSON.stringify(growthHistory, null, 2));

// ── Dashboard 4: Action Queue ─────────────────────────────────────────────────

function actionFor(s) {
  const actions = [];
  if (s.counts.ea === 0) actions.push('新增 EA ×1~2');
  if (s.counts.et === 0) actions.push('新增 ET ×2~3');
  if (s.counts.ka === 0) actions.push('新增 KA ×1');
  if (s.counts.series === 0 && s.counts.ea > 0) actions.push('建立 Series');
  if (s.counts.path === 0) actions.push('建立 User Path');
  if (s.counts.problem === 0) actions.push('关联 Problem');
  return actions;
}

const priorityA = Object.values(stats)
  .filter(s => s.overall < 50 && s.lifecycle !== 'Established')
  .sort((a, b) => a.overall - b.overall);

const priorityB = Object.values(stats)
  .filter(s => s.overall >= 50 && s.overall < 70 && s.lifecycle !== 'Established')
  .sort((a, b) => a.overall - b.overall);

const healthy = Object.values(stats)
  .filter(s => s.status === 'Healthy' || s.lifecycle === 'Established')
  .sort((a, b) => a.ufc - b.ufc);  // Healthy でも UFC が低ければ要対応

let aqMd = `# Action Queue
_Generated: ${today}_

Knowledge Object の次の行動指南。Coverage Matrix と Concept Health から自動生成。
**Read Only** — このファイルは Repository を変更しない。

---

## Priority A（Overall < 50%、即刻対応）

`;

for (const s of priorityA) {
  const actions = actionFor(s);
  aqMd += `### ${s.label_zh}（${s.slug}）\n`;
  aqMd += `UFC ${s.ufc}%  KFC ${s.kfc}%  Overall ${s.overall}%  Lifecycle: ${s.lifecycle}\n\n`;
  if (actions.length) {
    aqMd += actions.map(a => `- ${a}`).join('\n') + '\n';
  } else {
    aqMd += '- 無し（自動判断できない、手動確認推奨）\n';
  }
  aqMd += '\n---\n\n';
}

aqMd += `## Priority B（Overall 50~70%、次のバッチ）\n\n`;
for (const s of priorityB) {
  const actions = actionFor(s);
  aqMd += `### ${s.label_zh}（${s.slug}）\n`;
  aqMd += `UFC ${s.ufc}%  KFC ${s.kfc}%  Overall ${s.overall}%  Lifecycle: ${s.lifecycle}\n\n`;
  if (actions.length) {
    aqMd += actions.map(a => `- ${a}`).join('\n') + '\n';
  } else {
    aqMd += '- 知識層は十分。入口（Path / Problem）の強化を検討。\n';
  }
  aqMd += '\n---\n\n';
}

if (healthy.length) {
  aqMd += `## Established / Healthy（維持フェーズ）\n\n`;
  for (const s of healthy) {
    const needsEntry = s.ufc < 50;
    aqMd += `- **${s.label_zh}**（UFC ${s.ufc}% / KFC ${s.kfc}%）`;
    aqMd += needsEntry ? ' ← UFC 低：入口強化を検討\n' : ' ✅ 維持継続\n';
  }
}

fs.writeFileSync(path.join(REPORTS, 'action-queue.md'), aqMd);

// ── Repository Summary ────────────────────────────────────────────────────────

const established = Object.values(stats).filter(s => s.lifecycle === 'Established').length;
const growing     = Object.values(stats).filter(s => s.lifecycle === 'Growing').length;
const seed        = Object.values(stats).filter(s => s.lifecycle === 'Seed').length;

const summaryMd = `# Repository Summary
_Generated: ${today}_

## Inventory

| Type | Count |
|---|---|
| Domain | ${domains.length} |
| Concept | ${concepts.length} |
| EA | ${ea_items.length} |
| ET | ${et_items.length} |
| KA | ${ka_items.length} |
| Series | ${series.length} |
| User Path | ${paths.length} |
| Problem | ${problems.length} |

## Knowledge Graph Coverage

| Metric | Value |
|---|---|
| Avg Overall Coverage | ${avgOverall}% |
| Concepts with EA | ${conceptsWithEA} / ${concepts.length} |
| Established Concepts | ${established} |
| Growing Concepts | ${growing} |
| Seed Concepts | ${seed} |

## Lifecycle Distribution

\`\`\`
Established  ${'█'.repeat(established)}  ${established}
Growing      ${'█'.repeat(growing)}  ${growing}
Seed         ${'█'.repeat(seed)}  ${seed}
\`\`\`

## Priority A Gaps (Top 5)

${priorityA.slice(0, 5).map(s => `- **${s.label_zh}** Overall ${s.overall}% — ${actionFor(s)[0] ?? '要手動確認'}`).join('\n')}

---
_See: coverage-matrix.md / concept-health.md / action-queue.md_
`;

fs.writeFileSync(path.join(REPORTS, 'repository-summary.md'), summaryMd);

// ── Final Output ──────────────────────────────────────────────────────────────

console.log(`Repository Analytics: ${concepts.length} concepts analyzed`);
console.log(`  Avg Overall Coverage : ${avgOverall}%`);
console.log(`  Established          : ${established}`);
console.log(`  Priority A (< 50%)   : ${priorityA.length}`);
console.log(`  Priority B (50~70%)  : ${priorityB.length}`);
console.log(`  Reports → reports/`);
