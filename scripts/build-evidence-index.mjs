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

function parseParagraphs(section) {
  const numbered = numberedParagraphs(section);
  if (numbered.length > 0) return numbered;
  return section
    .split(/\n\s*\n+/)
    .map(paragraph => paragraph.trim())
    .filter(Boolean);
}

// coverage_layer 自动映射表（来自 33A Schema + 33C coverageLayerMap）
const coverageLayerMap = {
  'Topic Worldview':        'Concept',
  'Shared Attention':       'Development',
  'Reciprocal Interaction': 'Development',
  'Shared Experience':      'Development',
  'Parent Role Reframing':  'Support',
  'Decision Support':       'Decision',
};

// ① Insight section 提取（EA Editorial Framework v1.0 新格式）
function extractInsight(content) {
  // 尝试新格式：## ① Insight
  const newFormat = extractSection(content, '① Insight');
  if (newFormat) {
    // 去掉 **这项证据最大的发现是：** 前缀，取 blockquote 内容
    const bq = firstBlockquote(newFormat);
    if (bq) return bq;
    // fallback：取第一个非空段落
    return newFormat.split('\n').find(l => l.trim() && !l.startsWith('#')) ?? null;
  }
  // 旧格式 fallback：Layer 0 的 blockquote
  const layer0 = extractSection(content, 'Layer 0');
  return firstBlockquote(layer0) ?? null;
}

// Why It Matters section 提取
function extractWhyItMatters(content) {
  const section = extractSection(content, '④ Why It Matters');
  if (!section) return null;
  return section.split('\n').filter(l => l.trim() && !l.startsWith('#')).join(' ').trim() || null;
}

// Limitations section 提取
function extractLimitations(content) {
  const section = extractSection(content, '⑥ Limitations');
  if (!section) return null;
  return bulletItems(section).join(' ') || section.trim() || null;
}

// Key Finding（单数）提取 — 取 key_findings 第一条，或 ## ③ Key Finding section
function extractKeyFinding(content, keyFindings) {
  const section = extractSection(content, '③ Key Finding');
  if (section) {
    const bq = firstBlockquote(section);
    if (bq) return bq;
    const bullets = bulletItems(section);
    if (bullets.length) return bullets[0];
  }
  return keyFindings[0] ?? null;
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

  const key_findings = bulletItems(layer2);

  return {
    // ── 原有字段（保持不变，向后兼容）──
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
    related_et: (Array.isArray(meta.related_et) ? meta.related_et : [])
      .filter(id => typeof id === 'string' && /^ET-\d{6}$/.test(id)),
    related_path: Array.isArray(meta.related_path) ? meta.related_path : [],
    source: extractSource(content),
    why_read: firstBlockquote(layer0) ?? null,
    research_question: firstBlockquote(layer1) ?? null,
    key_findings,
    parent_meaning: parseParagraphs(layer3),
    implications: bulletItems(layer5),

    // ── 33A Contract 新增字段（可选，向前兼容）──
    content_type: 'EA',
    tier: meta.tier ? Number(meta.tier) : null,
    series: meta.series ?? null,
    editorial_role: meta.editorial_role ?? null,
    framework: meta.framework ?? null,
    is_foundational: meta.is_foundational === true || meta.is_foundational === 'true',
    confidence: meta.confidence ?? null,
    concept_refs: meta.concept_refs
      ? (typeof meta.concept_refs === 'string'
          ? { primary: meta.concept_refs, secondary: [] }
          : meta.concept_refs)
      : null,
    // supports_et：Contract 命名（related_et 的 alias）
    supports_et: (Array.isArray(meta.supports_et) ? meta.supports_et : [])
      .filter(id => typeof id === 'string' && /^ET-\d{6}$/.test(id)),

    // Reading Pattern 新字段（EA Editorial Framework v1.0）
    insight: extractInsight(content),
    key_finding: extractKeyFinding(content, key_findings),
    why_it_matters: extractWhyItMatters(content),
    limitations: extractLimitations(content),

    display_title: meta.display_title ?? null,
    _source_file: path.relative(ROOT, filePath),
  };
}

// ET body 提取：兼容旧格式（核心转译 section）和新格式（ET 文本 section）
function extractETBody(content) {
  // 新格式（ET Standard v2.0）：## ET 文本（家长版）
  const newSection = extractSection(content, 'ET 文本（家长版）');
  if (newSection && newSection.length > 50) return newSection.trim();

  // 旧格式 fallback：## 核心转译 > ET 文本
  const core = extractSection(content, '核心转译');
  const bodyMatch = core.match(/\*\*ET 文本（家长版）：\*\*[\s\S]*?---\s*\n([\s\S]*?)\n---/);
  return bodyMatch ? bodyMatch[1].trim() : null;
}

// ET action_prompt 提取：兼容旧格式
function extractETActionPrompt(content) {
  const core = extractSection(content, '核心转译');
  const actionMatch = core.match(/\*\*(?:如果你现在正好在这里|今天不要做什么)[：:]\*\*\s*\n([\s\S]*?)(?=\n---|$)/);
  if (actionMatch) return actionMatch[1].trim();

  // 新格式：⑤ 接下来可以留意什么
  const observeSection = extractSection(content, '⑤ 接下来可以留意什么');
  return observeSection.trim() || null;
}

function parseET(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const meta = parseMetadataBlock(content);
  if (!meta.id) throw new Error(`ET 缺少 id: ${filePath}`);

  const sourceEa = Array.isArray(meta.source_ea)
    ? meta.source_ea
    : typeof meta.source_ea === 'string' ? [meta.source_ea] : [];

  // coverage_layer：从 editorial_role 自动推导（33A Gap Analysis）
  const editorialRole = meta.editorial_role ?? null;
  const coverageLayer = editorialRole ? (coverageLayerMap[editorialRole] ?? null) : null;

  return {
    // ── 原有字段（保持不变，向后兼容）──
    id: meta.id,
    source_ea: sourceEa,
    topic: meta.topic ?? null,
    audience: meta.audience ?? null,
    target_path: Array.isArray(meta.target_path) ? meta.target_path : [],
    reading_time: meta.reading_time ?? null,
    tone: meta.tone ?? null,
    body: extractETBody(content),
    action_prompt: extractETActionPrompt(content),

    // ── 33A Contract 新增字段（可选，向前兼容）──
    content_type: 'ET',
    series: meta.series ?? null,
    editorial_role: editorialRole,
    coverage_layer: coverageLayer,           // 自动推导，不需要手工填写
    hero_sentence: meta.hero_sentence ?? null,
    target_ka: meta.target_ka ?? null,
    framework: meta.framework ?? null,
    concept_refs: meta.concept_refs
      ? (typeof meta.concept_refs === 'string'
          ? { primary: meta.concept_refs, secondary: [] }
          : meta.concept_refs)
      : null,

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
  let skipped = 0;
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
      try {
        const item = parser(filePath);
        items.push(item);
        nextCache[file] = { mtime, item };
        parsed++;
      } catch (err) {
        console.warn(`[WARN] 跳过 ${file}: ${err instanceof Error ? err.message : err}`);
        skipped++;
      }
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
    skipped,
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

  console.log(`EA ${ea.index.count}: ${ea.hits} cache, ${ea.parsed} parsed, ${ea.deleted} deleted, ${ea.skipped ?? 0} skipped${eaChanged ? ', updated' : ''}`);
  console.log(`ET ${et.index.count}: ${et.hits} cache, ${et.parsed} parsed, ${et.deleted} deleted${etChanged ? ', updated' : ''}`);
  console.log(`Manifest ${manifestChanged ? 'updated' : 'unchanged'}`);
}

try { main(); } catch (error) {
  console.error(error instanceof Error ? error.stack : error);
  process.exit(1);
}
