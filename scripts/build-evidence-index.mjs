import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.cwd());
const EA_SRC_DIR = path.join(ROOT, 'repository/knowledge/evidence/cards/Deconstruction');
const ET_SRC_DIR = path.join(ROOT, 'repository/knowledge/evidence/cards/ET');
const OUT_DIR = path.join(ROOT, 'src/generated/evidence');
const MANIFEST_OUT = path.join(ROOT, 'src/generated/manifest.json');
const CACHE_FILE = path.join(ROOT, '.cache/evidence-index.json');
console.log('ROOT =', ROOT);
console.log('EA =', EA_SRC_DIR);
console.log('ET =', ET_SRC_DIR);
console.log('cwd =', process.cwd());

function readJson(file, fallback) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return fallback; }
}

function writeJsonIfChanged(filePath, nextData) {
  const strip = value => {
    if (!value || typeof value !== 'object') return value;
    const clone = structuredClone(value);
    delete clone.generated_at;
    return clone;
  };
  const previous = readJson(filePath, null);
  if (JSON.stringify(strip(previous)) === JSON.stringify(strip(nextData))) return false;
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(nextData, null, 2) + '\n', 'utf8');
  return true;
}

function parseScalar(raw) {
  const value = raw.trim();
  if (value.startsWith('[') && value.endsWith(']')) {
    return value.slice(1, -1).split(',').map(v => v.trim()).filter(Boolean);
  }
  if (/^\d+$/.test(value)) return Number(value);
  if (value === 'null') return null;
  return value;
}

function parseMetadataBlock(content) {
  const section = content.match(/## Metadata[\s\S]*?```ya?ml\s*\n([\s\S]*?)```/i);
  if (!section) return {};
  const result = {};
  for (const line of section[1].split('\n')) {
    if (/^\s/.test(line)) continue;
    const match = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!match || !match[2].trim()) continue;
    result[match[1]] = parseScalar(match[2]);
  }
  return result;
}

function extractSection(content, heading, nextHeadingPattern = '\\n## ') {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = content.match(new RegExp(`## ${escaped}[^\\n]*\\n([\\s\\S]*?)(?=${nextHeadingPattern}|$)`));
  return match ? match[1].trim() : '';
}

function extractSource(content) {
  const section = extractSection(content, 'Source');
  const field = label => {
    const match = section.match(new RegExp(`\\*\\*${label}:\\*\\*\\s*([^\\n]+)`));
    return match ? match[1].trim() : undefined;
  };
  return {
    paper_title: field('Title'),
    authors: field('Authors'),
    journal: field('Journal'),
    year: field('Year'),
    doi: field('DOI'),
    access: field('Access'),
    method: field('Method'),
    scope: field('Scope'),
  };
}

function firstBlockquote(section) {
  const match = section.match(/^>\s*(.+)$/m);
  return match ? match[1].trim() : undefined;
}

function bulletItems(section) {
  return [...section.matchAll(/^-\s+(.+)$/gm)].map(m => m[1].trim());
}

function numberedParagraphs(section) {
  return [...section.matchAll(/\*\*\d+\.[^*]+\*\*\s*\n([\s\S]*?)(?=\n\*\*\d+\.|$)/g)]
    .map(m => m[1].trim()).filter(Boolean);
}

function parseEA(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const meta = parseMetadataBlock(content);
  if (!meta.id) throw new Error(`EA 缺少 id: ${filePath}`);
  const layer0 = extractSection(content, 'Layer 0');
  const layer1 = extractSection(content, 'Layer 1');
  const layer2 = extractSection(content, 'Layer 2');
  const layer3 = extractSection(content, 'Layer 3');
  const layer5 = extractSection(content, 'Layer 5');
  return {
    id: meta.id,
    type: meta.type ?? null,
    topic: meta.topic ?? null,
    population: meta.population ?? null,
    sample: meta.sample ?? null,
    year: meta.year ?? null,
    quality_level: meta.quality_level ?? null,
    evidence_type: meta.evidence_type ?? null,
    reading_time: meta.reading_time ?? null,
    // 16B.2: 只输出格式合法的 ET ID（/^ET-\d{6}$/）
    // 含"（待建）""（增补）"等注释的字符串静默丢弃，不进入 generated JSON
    // related_ka 不输出（仅供 validate-repository.mjs 做一致性检查）
    related_et: (Array.isArray(meta.related_et) ? meta.related_et : [])
      .filter(id => typeof id === 'string' && /^ET-\d{6}$/.test(id)),
    related_path: Array.isArray(meta.related_path) ? meta.related_path : [],
    source: extractSource(content),
    why_read: firstBlockquote(layer0) ?? null,
    research_question: firstBlockquote(layer1) ?? null,
    key_findings: bulletItems(layer2),
    parent_meaning: numberedParagraphs(layer3),
    implications: bulletItems(layer5),
    _source_file: path.relative(ROOT, filePath),
  };
}

function parseET(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const meta = parseMetadataBlock(content);
  if (!meta.id) throw new Error(`ET 缺少 id: ${filePath}`);
  const core = extractSection(content, '核心转译');
  const bodyMatch = core.match(/\*\*ET 文本（家长版）：\*\*[\s\S]*?---\s*\n([\s\S]*?)\n---/);
  const actionMatch = core.match(/\*\*(?:如果你现在正好在这里|今天不要做什么)[：:]\*\*\s*\n([\s\S]*?)(?=\n---|$)/);
  const sourceEa = Array.isArray(meta.source_ea)
    ? meta.source_ea
    : typeof meta.source_ea === 'string' ? [meta.source_ea] : [];
  return {
    id: meta.id,
    source_ea: sourceEa,
    topic: meta.topic ?? null,
    audience: meta.audience ?? null,
    target_path: Array.isArray(meta.target_path) ? meta.target_path : [],
    reading_time: meta.reading_time ?? null,
    tone: meta.tone ?? null,
    body: bodyMatch ? bodyMatch[1].trim() : null,
    action_prompt: actionMatch ? actionMatch[1].trim() : null,
    _source_file: path.relative(ROOT, filePath),
  };
}

function buildIndex(srcDir, parser, schemaId, cache, cacheKey) {
  if (!fs.existsSync(srcDir)) throw new Error(`源目录不存在: ${srcDir}`);
  const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.md')).sort();
  const previous = cache[cacheKey] ?? {};
  const nextCache = {};
  let hits = 0;
  let parsed = 0;
  const items = [];

  for (const file of files) {
    const filePath = path.join(srcDir, file);
    const mtime = fs.statSync(filePath).mtimeMs;
    const cached = previous[file];
    if (cached?.mtime === mtime && cached.item) {
      items.push(cached.item);
      nextCache[file] = cached;
      hits++;
    } else {
      const item = parser(filePath);
      items.push(item);
      nextCache[file] = { mtime, item };
      parsed++;
    }
  }

  cache[cacheKey] = nextCache;
  return {
    index: {
      schemaId,
      schema_version: '1.0',
      generated_at: new Date().toISOString(),
      source_dir: path.relative(ROOT, srcDir),
      count: items.length,
      items,
    },
    hits,
    parsed,
    deleted: Object.keys(previous).filter(f => !nextCache[f]).length,
  };
}

function main() {
  const cache = readJson(CACHE_FILE, {});
  const ea = buildIndex(EA_SRC_DIR, parseEA, 'Evidence-Index', cache, 'ea');
  const et = buildIndex(ET_SRC_DIR, parseET, 'Translation-Index', cache, 'et');
  const knowledge = readJson(path.join(ROOT, 'src/repository/knowledge.json'), { articles: [] });
  const series = readJson(path.join(ROOT, 'src/repository/library/series.json'), { series: [] });
  const topics = readJson(path.join(ROOT, 'src/repository/library/topics.json'), { topics: [] });

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const eaChanged = writeJsonIfChanged(path.join(OUT_DIR, 'ea.json'), ea.index);
  const etChanged = writeJsonIfChanged(path.join(OUT_DIR, 'et.json'), et.index);
  const manifest = {
    schemaId: 'Repository-Manifest',
    schema_version: '1.0',
    generator_version: '15E.1',
    pipeline_version: '15E.1',
    repository_version: '2026.07',
    generated_at: new Date().toISOString(),
    ea: ea.index.count,
    et: et.index.count,
    ka: (knowledge.articles ?? []).length,
    series: (series.series ?? []).length,
    topics: (topics.topics ?? []).length,
  };
  const manifestChanged = writeJsonIfChanged(MANIFEST_OUT, manifest);
  fs.mkdirSync(path.dirname(CACHE_FILE), { recursive: true });
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2) + '\n', 'utf8');

  console.log(`EA ${ea.index.count}: ${ea.hits} cache, ${ea.parsed} parsed, ${ea.deleted} deleted${eaChanged ? ', updated' : ''}`);
  console.log(`ET ${et.index.count}: ${et.hits} cache, ${et.parsed} parsed, ${et.deleted} deleted${etChanged ? ', updated' : ''}`);
  console.log(`Manifest ${manifestChanged ? 'updated' : 'unchanged'}`);
}

try { main(); } catch (error) {
  console.error(error instanceof Error ? error.stack : error);
  process.exit(1);
}
