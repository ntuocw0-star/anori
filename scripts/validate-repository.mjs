import fs from 'node:fs';
import path from 'node:path';

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

  const errors = [];
  const warnings = [];
  const infos = [];
  const eaIds = new Set(ea.map(x => x.id));
  const etIds = new Set(et.map(x => x.id));
  const kaIds = new Set(ka.map(x => x.id));
  const topicIds = new Set(topics.map(x => x.id));

  for (const [label, list, key] of [
    ['Topic', topics, 'id'], ['Series', series, 'id'], ['EA', ea, 'id'], ['ET', et, 'id'], ['KA', ka, 'id'],
  ]) {
    for (const id of duplicates(list.map(x => x[key]))) errors.push(`${label} ID 重复: ${id}`);
  }
  for (const slug of duplicates(topics.map(x => x.slug))) errors.push(`Topic slug 重复: ${slug}`);
  for (const slug of duplicates(series.map(x => x.slug))) errors.push(`Series slug 重复: ${slug}`);

  for (const item of series) {
    if (!topicIds.has(item.topic)) errors.push(`Series "${item.id}" 的 Topic 不存在: ${item.topic}`);
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
}

try { main(); } catch (error) {
  console.error(error instanceof Error ? error.stack : error);
  process.exit(1);
}
