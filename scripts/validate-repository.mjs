import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const ROOT = path.resolve(process.cwd());
const REPORT_FILE = path.join(ROOT, 'reports/repository-validation.json');

function load(rel) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) throw new Error(`文件不存在: ${rel}`);
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function writeReport(report) {
  const previous = fs.existsSync(REPORT_FILE) ? JSON.parse(fs.readFileSync(REPORT_FILE, 'utf8')) : null;
  const comparable = value => {
    if (!value) return value;
    const copy = structuredClone(value);
    delete copy.generated_at;
    return copy;
  };
  if (JSON.stringify(comparable(previous)) === JSON.stringify(comparable(report))) return false;
  fs.mkdirSync(path.dirname(REPORT_FILE), { recursive: true });
  fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2) + '\n', 'utf8');
  return true;
}

function duplicates(values) {
  const seen = new Set();
  const dup = new Set();
  for (const value of values) seen.has(value) ? dup.add(value) : seen.add(value);
  return [...dup];
}

function main() {
  const topics = load('src/repository/library/topics.json').topics ?? [];
  const series = load('src/repository/library/series.json').series ?? [];
  const ka = load('src/repository/knowledge.json').articles ?? [];
  const ea = load('src/generated/evidence/ea.json').items ?? [];
  const et = load('src/generated/evidence/et.json').items ?? [];
  const userPaths = load('src/repository/user-paths.json').paths ?? [];

  const errors = [];
  const warnings = [];
  const infos = [];
  const eaIds = new Set(ea.map(x => x.id));
  const etIds = new Set(et.map(x => x.id));
  const kaIds = new Set(ka.map(x => x.id));
  const topicIds = new Set(topics.map(x => x.id));
  const userPathIds = new Set(userPaths.map(x => x.id));

  for (const [label, list, key] of [
    ['Topic', topics, 'id'], ['Series', series, 'id'], ['EA', ea, 'id'], ['ET', et, 'id'], ['KA', ka, 'id'],
  ]) {
    for (const id of duplicates(list.map(x => x[key]))) errors.push(`${label} ID 重复: ${id}`);
  }
  for (const slug of duplicates(topics.map(x => x.slug))) errors.push(`Topic slug 重复: ${slug}`);
  for (const slug of duplicates(series.map(x => x.slug))) errors.push(`Series slug 重复: ${slug}`);

  for (const item of series) {
    // draft Series は topic 省略を許可。active Series は topic 必須。
    if (item.status !== 'draft' && item.topic && !topicIds.has(item.topic))
      errors.push(`Series "${item.id}" 的 Topic 不存在: ${item.topic}`);
    if (item.status !== 'draft' && !item.topic)
      errors.push(`Series "${item.id}" status=active だが topic が未設定`);
    const refs = item.content_refs ?? {};
    for (const id of refs.ea ?? []) if (!eaIds.has(id)) errors.push(`Series "${item.id}" 引用不存在的 EA: ${id}`);
    for (const id of refs.et ?? []) if (!etIds.has(id)) errors.push(`Series "${item.id}" 引用不存在的 ET: ${id}`);
    for (const id of refs.ka ?? []) if (!kaIds.has(id)) errors.push(`Series "${item.id}" 引用不存在的 KA: ${id}`);
    for (const type of ['ea', 'et', 'ka']) {
      const expected = (refs[type] ?? []).length;
      if (item.statistics?.[type] !== expected) infos.push(`Series "${item.id}" statistics.${type}=${item.statistics?.[type]}，实际=${expected}`);
    }
  }

  for (const item of ka) {
    for (const id of item.related_ea ?? []) if (!eaIds.has(id)) errors.push(`KA "${item.id}" related_ea 不存在: ${id}`);
    if (!item.one_sentence) warnings.push(`KA "${item.id}" 缺少 one_sentence`);
  }

  for (const item of et) {
    for (const id of item.source_ea ?? []) if (!eaIds.has(id)) errors.push(`ET "${item.id}" source_ea 不存在: ${id}`);
  }

  for (const item of ea) {
    if (!item.source?.paper_title) warnings.push(`EA "${item.id}" 缺少 source.paper_title`);
    if (!item.topic) warnings.push(`EA "${item.id}" 缺少 topic`);
    if (!item.reading_time) warnings.push(`EA "${item.id}" 缺少 reading_time`);
  }

  const pdfManifestPath = path.join(ROOT, 'src/generated/pdf-manifest.json');
  if (fs.existsSync(pdfManifestPath)) {
    const pdfManifest = JSON.parse(fs.readFileSync(pdfManifestPath, 'utf8'));
    for (const item of pdfManifest.items ?? []) {
      if (!kaIds.has(item.contentId)) warnings.push(`PDF manifest 引用不存在的 KA: ${item.contentId}`);
      if (item.status === 'ok') {
        const physical = path.join(ROOT, 'public', String(item.path).replace(/^\//, ''));
        if (!fs.existsSync(physical)) errors.push(`PDF manifest 标记为 ok，但文件不存在: ${item.path}`);
      }
      if (item.status === 'failed') warnings.push(`PDF 生成失败: ${item.contentId}`);
    }
  }

  const sourceKeys = new Set(series.flatMap(s => (s.source_keys ?? []).map(k => k.toLowerCase())));
  for (const item of ka) {
    const name = item.series?.name;
    if (name && !sourceKeys.has(name.toLowerCase())) warnings.push(`KA "${item.id}" series.name 无法解析: ${name}`);
  }

  // ── 16B.2: EA Markdown 原始 metadata 检查 ─────────────────────────────────
  // 直接读 Markdown 文件（不读 generated/ea.json），保留脏引用可见性
  const EA_MD_DIR = path.join(ROOT, 'repository/knowledge/evidence/cards/Deconstruction');
  const VALID_ET_ID = /^ET-\d{6}$/;
  const VALID_KA_ID = /^KA-\d{6}$/;

  function parseMdArrayField(raw) {
    if (!raw || raw === '待建' || raw === '待对应') return [];
    const str = String(raw).trim();
    if (str.startsWith('[') && str.endsWith(']')) {
      return str.slice(1, -1).split(',').map(v => v.trim()).filter(Boolean);
    }
    return str ? [str] : [];
  }

  // KA evidenceRefs 索引：kaId → Set of EA IDs that reference it
  const kaEvidenceMap = new Map();
  for (const kaItem of ka) {
    for (const eaId of kaItem.related_ea ?? []) {
      if (!kaEvidenceMap.has(kaItem.id)) kaEvidenceMap.set(kaItem.id, new Set());
      kaEvidenceMap.get(kaItem.id).add(eaId);
    }
  }

  if (fs.existsSync(EA_MD_DIR)) {
    const mdFiles = fs.readdirSync(EA_MD_DIR).filter(f => f.endsWith('.md')).sort();
    for (const mdFile of mdFiles) {
      const mdContent = fs.readFileSync(path.join(EA_MD_DIR, mdFile), 'utf8');
      const section = mdContent.match(/## Metadata[\s\S]*?```ya?ml\s*\n([\s\S]*?)```/i);
      if (!section) continue;
      let eaId = null;
      const rawFields = {};
      for (const line of section[1].split('\n')) {
        const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
        if (!m) continue;
        if (m[1] === 'id') eaId = m[2].trim();
        rawFields[m[1]] = m[2].trim();
      }
      if (!eaId) continue;

      // related_et 检查
      const rawEt = parseMdArrayField(rawFields['related_et']);
      for (const val of rawEt) {
        if (!VALID_ET_ID.test(val)) {
          warnings.push(`EA "${eaId}" related_et 含非法值（脏引用）: "${val}"`);
        } else if (!etIds.has(val)) {
          errors.push(`EA "${eaId}" related_et 引用不存在的 ET: ${val}`);
        }
      }

      // related_ka 检查
      const rawKa = parseMdArrayField(rawFields['related_ka']);
      for (const val of rawKa) {
        if (!VALID_KA_ID.test(val)) {
          warnings.push(`EA "${eaId}" related_ka 含非法值（脏引用）: "${val}"`);
        } else if (!kaIds.has(val)) {
          warnings.push(`EA "${eaId}" related_ka 引用不存在的 KA: ${val}`);
        } else {
          // 双向一致性：KA.related_ea 应包含此 EA
          const kaRefs = kaEvidenceMap.get(val);
          if (!kaRefs || !kaRefs.has(eaId)) {
            warnings.push(`EA "${eaId}" related_ka 包含 ${val}，但 ${val}.related_ea 未引用 ${eaId}（双向不一致）`);
          }
        }
      }
    }
  }
  // ── End 16B.2 ──────────────────────────────────────────────────────────────

  // ── 16B.5: 孤立内容检测（Info 级）────────────────────────────────────────
  // Repository Validation Principle:
  //   Validation 仅检查：引用是否存在、ID 是否合法、Primary Relation 是否一致
  //   Validation 不检查：内容质量、编辑风格、是否已发布、是否属于暂存状态
  const seriesEaIds = new Set(series.flatMap(s => s.content_refs?.ea ?? []));
  const seriesEtIds = new Set(series.flatMap(s => s.content_refs?.et ?? []));
  const seriesKaIds = new Set(series.flatMap(s => s.content_refs?.ka ?? []));

  const orphanEa = ea.filter(x => !seriesEaIds.has(x.id)).map(x => x.id);
  const orphanEt = et.filter(x => !seriesEtIds.has(x.id)).map(x => x.id);
  const orphanKa = ka.filter(x => !seriesKaIds.has(x.id)).map(x => x.id);

  if (orphanEa.length) orphanEa.forEach(id => infos.push(`Orphan EA: ${id}`));
  else infos.push('No orphan EA.');
  if (orphanEt.length) orphanEt.forEach(id => infos.push(`Orphan ET: ${id}`));
  else infos.push('No orphan ET.');
  if (orphanKa.length) orphanKa.forEach(id => infos.push(`Orphan KA: ${id}`));
  else infos.push('No orphan KA.');

  // V-01: KA related_path → user-paths.json 存在性（Warning 级）
  for (const item of ka) {
    for (const pid of item.related_path ?? []) {
      if (!userPathIds.has(pid)) {
        warnings.push(`KA "${item.id}" related_path 引用不存在的 user-path: ${pid}`);
      }
    }
  }
  // ── End 16B.5 ─────────────────────────────────────────────────────────────

  const report = {
    generated_at: new Date().toISOString(),
    passed: errors.length === 0,
    summary: { errors: errors.length, warnings: warnings.length, infos: infos.length },
    errors: errors.map(message => ({ type: 'error', message })),
    warnings: warnings.map(message => ({ type: 'warning', message })),
    infos: infos.map(message => ({ type: 'info', message })),
  };
  const changed = writeReport(report);

  if (infos.length) console.log(`Info (${infos.length})\n- ${infos.join('\n- ')}`);
  if (warnings.length) console.warn(`Warnings (${warnings.length})\n- ${warnings.join('\n- ')}`);
  if (errors.length) {
    console.error(`Errors (${errors.length})\n- ${errors.join('\n- ')}`);
    process.exit(1);
  }
  console.log(`Repository validation passed: ${ea.length} EA, ${et.length} ET, ${ka.length} KA, ${series.length} Series${changed ? ' (report updated)' : ''}`);

  // ── 17B.1: Taxonomy 验证 ─────────────────────────────────────────────────
  const taxResult = spawnSync('node', ['scripts/validate-taxonomy.mjs'],
    { cwd: ROOT, stdio: 'inherit' });
  if (taxResult.status !== 0) process.exit(1);

  // ── 17D: Repository Analytics（Read Only — 報告生成のみ）──────────────────
  const analyticsResult = spawnSync('node', ['scripts/repository-analytics.mjs'],
    { cwd: ROOT, stdio: 'inherit' });
  if (analyticsResult.status !== 0) process.exit(1);
}

try { main(); } catch (error) {
  console.error(error instanceof Error ? error.stack : error);
  process.exit(1);
}
