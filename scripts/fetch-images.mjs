// 在 GitHub Actions 建置前執行：把資料檔引用的 Wikimedia Commons 照片下載並轉成 WebP，自存於 public/photos/。
// 原因：直接引用 upload.wikimedia.org 連續瀏覽數頁便會被限流（429），照片載入失敗。
// 產生 src/data/photo-manifest.json（檔名 → 尺寸、攝影師、授權），網站據此改用自存檔案；
// 找不到的照片會退回 Commons 的標準寬度縮圖。
import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const ROOT = new URL('..', import.meta.url).pathname;
const OUT = join(ROOT, 'public/photos');
const MANIFEST = join(ROOT, 'src/data/photo-manifest.json');
const UA = 'TaylorSwiftErasArchive/1.0 (https://github.com/sclastro/TS)';
const WIDTHS = [500, 1280];
const API = 'https://commons.wikimedia.org/w/api.php';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export const slugOf = (file) => file.replace(/\.[a-z]+$/i, '').normalize('NFKD').replace(/[^\w]+/g, '-').replace(/^-|-$/g, '').toLowerCase().slice(0, 90);

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : /\.(ts|astro)$/.test(f) ? [p] : [];
  });
}

// 收集所有 'xxx.jpg' 形式的檔名
const files = new Set();
for (const p of walk(join(ROOT, 'src'))) {
  for (const m of readFileSync(p, 'utf8').matchAll(/['"`]([^'"`\n]+?\.(?:jpe?g|png|webp|tiff?))['"`]/gi)) {
    if (!m[1].includes('/') && !m[1].startsWith('.')) files.add(m[1]);
  }
}
console.log(`Found ${files.size} photo references`);

async function get(url, json = true) {
  for (let i = 0; i < 6; i++) {
    const r = await fetch(url, { headers: { 'User-Agent': UA } });
    if (r.status === 429 || r.status >= 500) { await sleep(2000 * 2 ** i); continue; }
    if (!r.ok) throw new Error(`${r.status} ${url}`);
    return json ? r.json() : Buffer.from(await r.arrayBuffer());
  }
  throw new Error(`retries exhausted ${url}`);
}

const strip = (h = '') => h.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const manifest = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, 'utf8')) : {};
mkdirSync(OUT, { recursive: true });

// 1) 以 40 個一批查詢圖片資料
const list = [...files];
const info = {};
for (let i = 0; i < list.length; i += 40) {
  const titles = list.slice(i, i + 40).map((f) => `File:${f}`).join('|');
  const q = `${API}?action=query&format=json&formatversion=2&prop=imageinfo&iiprop=url|size|extmetadata&iiurlwidth=1280&titles=${encodeURIComponent(titles)}`;
  try {
    const d = await get(q);
    const norm = Object.fromEntries((d.query.normalized || []).map((n) => [n.to, n.from]));
    for (const pg of d.query.pages) {
      const ii = pg.imageinfo?.[0];
      const title = norm[pg.title] || pg.title;
      if (!ii) { console.warn('missing', title); continue; }
      info[title.replace(/^File:/, '')] = ii;
    }
  } catch (e) { console.warn('batch failed', e.message); }
  await sleep(400);
}

// 2) 下載並轉成 WebP（已存在則略過）
let done = 0, skipped = 0, failed = 0;
const queue = Object.entries(info);
async function worker() {
  while (queue.length) {
    const [file, ii] = queue.shift();
    const slug = slugOf(file);
    const targets = WIDTHS.map((w) => [w, join(OUT, `${slug}-${w}.webp`)]);
    const meta = ii.extmetadata || {};
    const entry = {
      slug, w: ii.width, h: ii.height,
      artist: strip(meta.Artist?.value).slice(0, 120),
      license: strip(meta.LicenseShortName?.value),
      sizes: WIDTHS,
    };
    if (targets.every(([, p]) => existsSync(p))) { manifest[file] = entry; skipped++; continue; }
    try {
      const src = ii.thumburl && ii.width > 1280 ? ii.thumburl : ii.url;
      const buf = await get(src, false);
      for (const [w, p] of targets) {
        await sharp(buf).rotate().resize({ width: w, withoutEnlargement: true }).webp({ quality: 78 }).toFile(p);
      }
      manifest[file] = entry;
      done++;
    } catch (e) { console.warn('download failed', file, e.message); failed++; }
    await sleep(250);
  }
}
await Promise.all([worker(), worker(), worker()]);
writeFileSync(MANIFEST, JSON.stringify(manifest, null, 1));
console.log(`photos: ${done} downloaded, ${skipped} cached, ${failed} failed, ${Object.keys(manifest).length} in manifest`);
