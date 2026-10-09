// 在 GitHub Actions 建置前執行：為每首歌在 Taylor Swift 官方 YouTube 頻道（@TaylorSwift）內搜尋官方影片，
// 包括 Official Music Video、Lyric Video、Visualizer 及 Official Audio，並寫入 src/data/yt-manifest.json。
// 只接受官方頻道的結果；Live、Remix、Acoustic、幕後花絮等版本一律排除。
// 已配對的歌曲會沿用快取；未配對的歌曲每 14 日重試一次（YT_REFRESH=1 可全部重新搜尋）。
// 每次配對結果都會印在建置記錄中，方便人手覆核；如需修正，可在 OVERRIDES 指定影片 ID。
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = new URL('..', import.meta.url).pathname;
const DATA = join(ROOT, 'src/data');
const MANIFEST = join(DATA, 'yt-manifest.json');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36';
const DRY = process.argv.includes('--dry');
const REFRESH = process.env.YT_REFRESH === '1';
const RETRY_DAYS = 14;
const VERSION = 2; // 比對規則更新時遞增，未配對的歌曲會即時重試

// 人手指定：'album/slug': 'videoId'（或 null 表示不要嵌入）
const OVERRIDES = {};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------- 收集歌曲 ----------
const albumsSrc = readFileSync(join(DATA, 'albums.ts'), 'utf8');
const tvAlbums = new Set();
for (const m of albumsSrc.matchAll(/slug: '([^']+)'[\s\S]*?(?=\n  \{\n|\n\];)/g)) {
  if (/\n    tv: \{/.test(m[0])) tvAlbums.add(m[1]);
}

const songs = [];
for (const f of readdirSync(join(DATA, 'songs')).filter((f) => f.endsWith('.ts'))) {
  const album = f.replace(/\.ts$/, '');
  const src = readFileSync(join(DATA, 'songs', f), 'utf8');
  for (const [, part] of src.matchAll(/from '\.\.\/parts\/([^']+)'/g)) {
    const mod = await import(pathToFileURL(join(DATA, 'parts', `${part}.ts`)).href);
    for (const list of Object.values(mod)) for (const s of list) songs.push({ album, ...s });
  }
}

// ---------- 比對規則 ----------
const norm = (t) => t.toLowerCase().replace(/[’‘`]/g, "'").replace(/\$/g, 's').replace(/&/g, ' and ')
  .normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/'/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
const core = (t) => norm(t.replace(/^\s*taylor swift\s*[-–—:|]\s*/i, '').replace(/\([^)]*\)|\[[^\]]*\]/g, ' ').replace(/\s(feat|ft)\.?\s.*$/i, ''));
const parens = (t) => [...t.matchAll(/\(([^)]*)\)/g)].map((m) => norm(m[1]));
const EXCLUDE = ['live', 'acoustic', 'remix', 'piano', 'demo', 'voice memo', 'sped up', 'slowed', 'instrumental', 'karaoke',
  'behind the scenes', 'making of', 'bts', 'trailer', 'teaser', 'reaction', 'first draft', 'long pond', 'eras tour', 'tour',
  'a cappella', 'acapella', 'commentary', 'recap', 'performance', 'rehearsal', 'stripped', 'extended', 'radio edit',
  'pop version', 'short film', 'expanded', 'mashup', 'version 2', 'interview', 'shorts', 'snippet', 'preview', 'announcement'];

function kindOf(n) {
  if (/music video/.test(n)) return ['mv', 5];
  if (/lyric/.test(n)) return ['lyric', 4];
  if (/visuali[sz]er/.test(n)) return ['visualizer', 3];
  if (/audio/.test(n)) return ['audio', 2];
  return ['audio', 1]; // 沒有標示類型的上載，一般是官方音訊
}

function score(song, title) {
  const n = norm(title);
  if (core(title) !== core(song.title)) return null;
  const songN = norm(song.title);
  for (const w of EXCLUDE) if (new RegExp(`\\b${w}\\b`).test(n) && !new RegExp(`\\b${w}\\b`).test(songN)) return null;
  for (const p of parens(song.title)) if (/version|edit|remix/.test(p) && !n.includes(p)) return null;
  if (/\b10 minute\b/.test(n) && !/\b10 minute\b/.test(songN)) return null;
  const vault = /from the vault/.test(n);
  if ((song.section === 'vault' || /from the vault/i.test(song.title)) !== vault) return null;
  const tv = /taylors version/.test(n);
  const needTV = tvAlbums.has(song.album) && song.section !== 'other';
  const [kind, base] = kindOf(n);
  return { kind, s: base + (needTV ? (tv ? 10 : -3) : tv ? -2 : 0) };
}

// ---------- 讀取 YouTube 頁面 ----------
async function page(url) {
  for (let i = 0; i < 4; i++) {
    try {
      const r = await fetch(url, { headers: { 'User-Agent': UA, 'Accept-Language': 'en-US,en;q=0.9', Cookie: 'CONSENT=YES+1; SOCS=CAI' } });
      if (r.status === 429 || r.status >= 500) { await sleep(4000 * 2 ** i); continue; }
      if (!r.ok) return null;
      const html = await r.text();
      const m = html.match(/ytInitialData\s*=\s*(\{.+?\});\s*<\/script>/s);
      return m ? JSON.parse(m[1]) : null;
    } catch { await sleep(3000); }
  }
  return null;
}

// 深度走訪，收集所有影片項目
function videos(node, out = [], owner) {
  if (Array.isArray(node)) { for (const x of node) videos(x, out, owner); return out; }
  if (!node || typeof node !== 'object') return out;
  const t = node.title?.runs?.map((r) => r.text).join('') ?? node.title?.simpleText;
  if (typeof node.videoId === 'string' && t) {
    const by = node.ownerText?.runs?.[0] ?? node.longBylineText?.runs?.[0];
    const url = by?.navigationEndpoint?.browseEndpoint?.canonicalBaseUrl ?? '';
    const verified = JSON.stringify(node.ownerBadges ?? '').includes('VERIFIED_ARTIST');
    out.push({ id: node.videoId, title: t, official: owner || url === '/@TaylorSwift' || (by?.text === 'Taylor Swift' && verified) });
  }
  for (const v of Object.values(node)) if (v && typeof v === 'object') videos(v, out, owner);
  return out;
}

function best(song, list) {
  let top = null;
  const seen = new Set();
  for (const v of list) {
    if (!v.official || seen.has(v.id)) continue;
    seen.add(v.id);
    const sc = score(song, v.title);
    if (sc && (!top || sc.s > top.s)) top = { ...sc, id: v.id, title: v.title };
  }
  return top;
}

// ---------- 主流程 ----------
const manifest = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, 'utf8')) : {};
const misses = manifest._v === VERSION ? manifest._misses ?? {} : {};
const now = Date.now();
let found = 0, missed = 0, kept = 0;
console.log(`Songs: ${songs.length}; Taylor's Version albums: ${[...tvAlbums].join(', ')}`);

for (const song of songs) {
  const ref = `${song.album}/${song.slug}`;
  if (ref in OVERRIDES) {
    if (OVERRIDES[ref]) manifest[ref] = { id: OVERRIDES[ref], title: '(manual)', kind: 'video' }; else delete manifest[ref];
    continue;
  }
  if (song.mv) { delete manifest[ref]; continue; }                // 已有人手核實的 MV
  if (!REFRESH && manifest[ref]) { kept++; continue; }
  if (!REFRESH && misses[ref] && now - misses[ref] < RETRY_DAYS * 864e5) continue;

  const needTV = tvAlbums.has(song.album) && song.section !== 'other';
  const q = `${song.title}${needTV ? " (Taylor's Version)" : ''}${song.section === 'vault' ? ' (From The Vault)' : ''}`;
  if (DRY) { console.log(`[dry] ${ref} ← ${q}`); continue; }

  let hit = best(song, videos(await page(`https://www.youtube.com/@TaylorSwift/search?query=${encodeURIComponent(q)}&hl=en&gl=US`), [], true));
  await sleep(1200);
  if (!hit && q !== song.title) {
    hit = best(song, videos(await page(`https://www.youtube.com/@TaylorSwift/search?query=${encodeURIComponent(song.title)}&hl=en&gl=US`), [], true));
    await sleep(1200);
  }
  if (!hit) {
    hit = best(song, videos(await page(`https://www.youtube.com/results?search_query=${encodeURIComponent(`Taylor Swift ${q}`)}&hl=en&gl=US`)));
    await sleep(1200);
  }
  if (hit) {
    manifest[ref] = { id: hit.id, title: hit.title, kind: hit.kind };
    delete misses[ref];
    found++;
    console.log(`✓ ${ref} → ${hit.id} | ${hit.title}`);
  } else {
    misses[ref] = now;
    missed++;
    console.log(`✗ ${ref} (searched: ${q})`);
  }
}

manifest._misses = misses;
manifest._v = VERSION;
if (!DRY) writeFileSync(MANIFEST, JSON.stringify(manifest, null, 1));
console.log(`Done: ${found} new, ${kept} cached, ${missed} not found.`);
