import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import os from 'node:os';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

// Skip PDF generation on Vercel and other CI environments.
// Chrome is not available in these environments and PDFs are not
// required for the website to function.
if (process.env.VERCEL || process.env.CI) {
  console.log('[PDF] 检测到 Vercel/CI 环境，跳过 PDF 生成。');
  process.exit(0);
}

const ROOT = process.cwd();
const DIST_ROOT = path.join(ROOT, 'dist');
const HTML_ROOT = path.join(DIST_ROOT, 'download', 'ka');
const PUBLIC_OUT = path.join(ROOT, 'public', 'downloads', 'ka');
const DIST_OUT = path.join(DIST_ROOT, 'downloads', 'ka');
const MANIFEST_PATH = path.join(ROOT, 'src', 'generated', 'pdf-manifest.json');
const CACHE_PATH = path.join(ROOT, '.cache', 'pdf-index.json');
const SELF = fileURLToPath(import.meta.url);

const readJson = (file, fallback) => { try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return fallback; } };
const sha256 = value => `sha256:${crypto.createHash('sha256').update(value).digest('hex')}`;
function sourceHash(htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const assets = [...html.matchAll(/(?:href|src)="(\/_astro\/[^"?#]+)"/g)]
    .map(match => path.join(DIST_ROOT, match[1])).filter(fs.existsSync).sort().map(file => fs.readFileSync(file));
  return sha256(Buffer.concat([Buffer.from(html), ...assets]));
}
function mimeType(file) {
  const ext = path.extname(file).toLowerCase();
  return ext === '.png' ? 'image/png'
    : ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg'
    : ext === '.svg' ? 'image/svg+xml'
    : ext === '.webp' ? 'image/webp'
    : 'application/octet-stream';
}
function dataUri(file) {
  return `data:${mimeType(file)};base64,${fs.readFileSync(file).toString('base64')}`;
}
function localizeHtml(html) {
  // Inline Astro CSS so PDF rendering does not depend on file:// stylesheet loading.
  html = html.replace(/<link[^>]+rel=["']stylesheet["'][^>]+href=["'](\/_astro\/[^"']+\.css)["'][^>]*>/g, (_, href) => {
    const file = path.join(DIST_ROOT, href);
    return fs.existsSync(file) ? `<style>${fs.readFileSync(file, 'utf8')}</style>` : '';
  });
  // Inline local images (especially the Anori logo) for deterministic PDF output.
  html = html.replace(/src=["'](\/[^"']+)["']/g, (match, src) => {
    const file = path.join(DIST_ROOT, src);
    return fs.existsSync(file) ? `src="${dataUri(file)}"` : match;
  });
  return html;
}
function writeJsonIfChanged(file, data) {
  const strip = value => { const clone = structuredClone(value); delete clone.generated_at; clone.items?.forEach(x => delete x.generatedAt); return clone; };
  const previous = readJson(file, null);
  if (previous && JSON.stringify(strip(previous)) === JSON.stringify(strip(data))) return false;
  fs.mkdirSync(path.dirname(file), { recursive:true }); fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`); return true;
}

async function renderOne(id, output) {
  const htmlPath = path.join(HTML_ROOT, id, 'one-page', 'index.html');
  const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), `anori-pdf-${id}-`));
  const browser = await puppeteer.launch({
    headless:true,
    executablePath:process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
    userDataDir: profileDir,
    args:['--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage','--disable-breakpad','--disable-crash-reporter','--allow-file-access-from-files'],
  });
  try {
    const page = await browser.newPage();
    await page.emulateMediaType('print');
    const html = localizeHtml(fs.readFileSync(htmlPath, 'utf8'));
    await page.setContent(html, { waitUntil:'domcontentloaded', timeout:30000 });
    await Promise.race([page.evaluate(() => document.fonts.ready), new Promise(resolve => setTimeout(resolve, 10000))]);
    await page.pdf({ path:output, format:'A4', printBackground:true, preferCSSPageSize:true, scale:0.9, margin:{ top:'12mm', right:'12mm', bottom:'12mm', left:'12mm' } });
  } finally {
    try {
      await Promise.race([browser.close(), new Promise((_, reject) => setTimeout(() => reject(new Error('browser close timeout')), 5000))]);
    } catch {
      try { browser.process()?.kill('SIGKILL'); } catch {}
    }
    try { fs.rmSync(profileDir, { recursive:true, force:true }); } catch {}
  }
}

if (process.argv[2] === '--render-one') {
  renderOne(process.argv[3], process.argv[4])
    .then(() => process.exit(0))
    .catch(error => { console.error(error.stack || error.message); process.exit(1); });
} else {
  const ids = fs.existsSync(HTML_ROOT) ? fs.readdirSync(HTML_ROOT).filter(id => fs.existsSync(path.join(HTML_ROOT,id,'one-page','index.html'))).sort() : [];
  if (!ids.length) { console.error('[PDF] 未发现 One-page HTML，请先执行 astro build。'); process.exit(1); }
  fs.mkdirSync(PUBLIC_OUT,{recursive:true}); fs.mkdirSync(DIST_OUT,{recursive:true});
  const previous = readJson(MANIFEST_PATH,{items:[]});
  const previousMap = new Map((previous.items||[]).map(x=>[x.contentId,x]));
  const cache = readJson(CACHE_PATH,{hashes:{}});
  cache.hashes ||= {};
  // Fresh checkout may not include .cache. Rehydrate hashes from the versioned manifest
  // when the corresponding versioned PDF is present.
  for (const item of previous.items || []) {
    if (item.status === 'ok' && item.contentId && item.htmlHash) {
      const name = `${item.contentId}-one-page.pdf`;
      if (fs.existsSync(path.join(PUBLIC_OUT, name)) && !cache.hashes[item.contentId]) {
        cache.hashes[item.contentId] = item.htmlHash;
      }
    }
  }
  const active = new Set(ids);
  for (const key of Object.keys(cache.hashes||{})) if (!active.has(key)) delete cache.hashes[key];
  for (const dir of [PUBLIC_OUT,DIST_OUT]) for (const file of fs.readdirSync(dir)) { const m=file.match(/^(KA-\d+)-one-page\.pdf$/); if(m&&!active.has(m[1])) fs.rmSync(path.join(dir,file)); }
  const results=[];
  for (const id of ids) {
    const htmlPath=path.join(HTML_ROOT,id,'one-page','index.html'); const hash=sourceHash(htmlPath); const name=`${id}-one-page.pdf`; const publicFile=path.join(PUBLIC_OUT,name); const distFile=path.join(DIST_OUT,name);
    if (cache.hashes[id]===hash && fs.existsSync(publicFile)) {
      fs.copyFileSync(publicFile,distFile); results.push({...previousMap.get(id),contentId:id,bundleType:'ka-one-page',schemaId:'KA-OnePage',path:`/downloads/ka/${name}`,htmlSource:path.relative(ROOT,htmlPath),status:'ok',htmlHash:hash,skipped:true}); console.log(`[PDF] ${id} 无变化，跳过`); continue;
    }
    let rendered = false;
    for (let attempt = 1; attempt <= 3; attempt++) {
      const child = spawnSync(process.execPath,[SELF,'--render-one',id,publicFile],{
        stdio:'inherit',env:process.env,timeout:120000,
      });
      if (child.status === 0 && fs.existsSync(publicFile)) { rendered = true; break; }
      console.warn(`[PDF] ${id} 第 ${attempt}/3 次生成失败`);
      try { fs.rmSync(publicFile); } catch {}
    }
    if(!rendered){ console.error(`[PDF] ${id} 生成失败`); process.exit(1); }
    fs.copyFileSync(publicFile,distFile); cache.hashes[id]=hash;
    results.push({contentId:id,bundleType:'ka-one-page',schemaId:'KA-OnePage',path:`/downloads/ka/${name}`,htmlSource:path.relative(ROOT,htmlPath),status:'ok',generatedAt:new Date().toISOString(),htmlHash:hash,skipped:false}); console.log(`[PDF] ${id} 已生成`);
  }
  fs.mkdirSync(path.dirname(CACHE_PATH),{recursive:true}); fs.writeFileSync(CACHE_PATH,`${JSON.stringify(cache,null,2)}\n`);
  const manifest={schemaId:'PDF-Manifest',schema_version:'1.0',generated_at:new Date().toISOString(),summary:{total:results.length,ok:results.length,skipped:results.filter(x=>x.skipped).length,failed:0},items:results};
  writeJsonIfChanged(MANIFEST_PATH,manifest); console.log(`[PDF] 完成：${results.length} 个，跳过 ${manifest.summary.skipped} 个`);
}
