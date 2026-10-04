import type { L, Photo, Theme } from '../data/types';

export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const href = (path: string) => `${BASE}${path.startsWith('/') ? path : `/${path}`}`;

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const speaker =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';

/** 人名 + 喇叭按鈕（按下以 0.8 倍速讀出英文名） */
export const personHTML = (name: string) =>
  `<span class="person"><span class="person-name" lang="en">${esc(name)}</span><button type="button" class="say" data-say="${esc(name)}" aria-label="Pronounce ${esc(name)}">${speaker}</button></span>`;

/** 把 [[人名]] 轉成附讀音按鈕的 HTML，其餘文字轉義 */
export const rich = (text: string) =>
  esc(text).replace(/\[\[(.+?)\]\]/g, (_, n: string) => personHTML(n.replace(/&amp;/g, '&')));

/** 雙語 HTML：兩個語言同時輸出，由 CSS 按 html[data-lang] 顯示 */
export const bi = (l: L, opts: { rich?: boolean; tag?: string } = {}) => {
  const f = opts.rich ? rich : esc;
  const tag = opts.tag ?? 'span';
  return `<${tag} class="l-en" lang="en">${f(l.en)}</${tag}><${tag} class="l-zh" lang="zh-Hant">${f(l.zh)}</${tag}>`;
};

export const commons = (file: string, width = 1200) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file.replace(/ /g, '_'))}?width=${width}`;
export const commonsPage = (file: string) =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replace(/ /g, '_'))}`;

export const photoCredit = (p: Photo) =>
  [p.credit, p.license].filter(Boolean).join(' · ') || 'Wikimedia Commons';

export const themeStyle = (t: Theme) =>
  [
    `--bg:${t.bg}`, `--bg2:${t.bg2}`, `--ink:${t.ink}`, `--muted:${t.muted}`,
    `--accent:${t.accent}`, `--accent2:${t.accent2}`, `--card:${t.card}`,
    `--era-font:'${t.font}'`,
  ].join(';');

const MONTHS_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
/** 日期字串（YYYY / YYYY-MM / YYYY-MM-DD）轉雙語 */
export const fmtDate = (d: string): L => {
  const [y, m, day] = d.split('-').map(Number);
  if (!m) return { en: `${y}`, zh: `${y} 年` };
  if (!day) return { en: `${MONTHS_EN[m - 1]} ${y}`, zh: `${y} 年 ${m} 月` };
  return { en: `${day} ${MONTHS_EN[m - 1]} ${y}`, zh: `${y} 年 ${m} 月 ${day} 日` };
};

export const yt = {
  thumb: (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
  watch: (id: string) => `https://www.youtube.com/watch?v=${id}`,
};

export const geniusSearch = (title: string) =>
  `https://genius.com/search?q=${encodeURIComponent(`Taylor Swift ${title}`)}`;
export const spotifySearch = (title: string) =>
  `https://open.spotify.com/search/${encodeURIComponent(`Taylor Swift ${title}`)}`;
export const appleSearch = (title: string) =>
  `https://music.apple.com/us/search?term=${encodeURIComponent(`Taylor Swift ${title}`)}`;
