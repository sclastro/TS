// 全站互動：語言、人名讀音、平滑捲動、捲動動畫、視差、選單、燈箱、YouTube 延遲載入
import Lenis from 'lenis';

const store = {
  get(k: string) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k: string, v: string) { try { localStorage.setItem(k, v); } catch { /* 私密瀏覽 */ } },
};
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(pointer: fine)').matches;

/* ---------- 語言 ---------- */
function setLang(lang: string) {
  document.documentElement.dataset.lang = lang;
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-Hant';
  store.set('ts-lang', lang);
  document.querySelectorAll<HTMLButtonElement>('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  splitAll(); // 語言改變後重新分拆標題文字
}
document.querySelectorAll<HTMLButtonElement>('.lang button').forEach((b) =>
  b.addEventListener('click', () => {
    if (b.getAttribute('aria-pressed') === 'true') return;
    document.body.classList.add('lang-fade');
    setTimeout(() => { setLang(b.dataset.lang!); requestAnimationFrame(() => document.body.classList.remove('lang-fade')); }, 220);
  }),
);

/* ---------- 標題逐字浮現：中文逐字、英文逐詞 ---------- */
function splitEl(el: HTMLElement) {
  if (el.dataset.splitDone) return;
  el.dataset.splitDone = '1';
  let i = 0;
  const walk = (node: Node) => {
    [...node.childNodes].forEach((c) => {
      if (c.nodeType === 3) {
        const text = c.textContent || '';
        if (!text.trim()) return;
        const parts = /[㐀-鿿]/.test(text) ? Array.from(text) : text.split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach((p) => {
          if (!p) return;
          if (/^\s+$/.test(p)) { frag.append(document.createTextNode(p)); return; }
          const w = document.createElement('span');
          w.className = 'w';
          const s = document.createElement('span');
          s.textContent = p;
          s.style.setProperty('--i', String(i++));
          w.append(s);
          frag.append(w);
        });
        c.replaceWith(frag);
      } else if (c.nodeType === 1 && !(c as HTMLElement).classList.contains('say')) {
        const ce = c as HTMLElement;
        if (ce.classList.contains('l-en') || ce.classList.contains('l-zh')) { max = Math.max(max, i); i = 0; }
        walk(c);
      }
    });
  };
  let max = 0;
  walk(el);
  max = Math.max(max, i);
  // 長句加快節奏，整句約一秒內完成
  el.style.setProperty('--step', `${Math.max(12, Math.min(45, Math.round(1100 / Math.max(max, 1))))}ms`);
}
function splitAll() { document.querySelectorAll<HTMLElement>('[data-split]').forEach(splitEl); }
setLang(document.documentElement.dataset.lang || 'zh');

/* ---------- 人名讀音（0.8 倍速） ---------- */
let voice: SpeechSynthesisVoice | undefined;
function pickVoice() {
  if (!('speechSynthesis' in window)) return;
  const vs = speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith('en'));
  voice = vs.find((v) => /en-us/i.test(v.lang) && /samantha|google us|aria|jenny|ava/i.test(v.name)) || vs.find((v) => /en-us/i.test(v.lang)) || vs[0];
}
if ('speechSynthesis' in window) { pickVoice(); speechSynthesis.addEventListener?.('voiceschanged', pickVoice); }
document.addEventListener('click', (e) => {
  const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('.say');
  if (!btn) return;
  e.preventDefault(); e.stopPropagation();
  if (!('speechSynthesis' in window)) { alert('此瀏覽器不支援語音朗讀。'); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(btn.dataset.say!);
  u.lang = 'en-US'; u.rate = 0.8;
  if (voice) u.voice = voice;
  btn.classList.add('speaking');
  const done = () => btn.classList.remove('speaking');
  u.onend = done; u.onerror = done;
  speechSynthesis.speak(u);
});

/* ---------- 平滑捲動（只限滑鼠裝置） ---------- */
let lenis: Lenis | undefined;
if (fine && !reduce) {
  lenis = new Lenis({ lerp: 0.1, autoRaf: true });
  (window as any).__lenis = lenis;
  // 頁內錨點以平滑捲動處理
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href*="#"]');
    if (!a || a.origin !== location.origin || a.pathname !== location.pathname) return;
    const id = decodeURIComponent(a.hash.slice(1));
    const el = id && document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    lenis!.scrollTo(el, { offset: -90, duration: 1.2 });
    history.replaceState(null, '', `#${id}`);
  });
}
export const scrollToEl = (el: HTMLElement, offset = -90) =>
  lenis ? lenis.scrollTo(el, { offset, duration: 1.2 }) : window.scrollTo({ top: el.getBoundingClientRect().top + scrollY + offset, behavior: 'smooth' });

/* ---------- 出現動畫 ---------- */
const io = new IntersectionObserver(
  (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }),
  { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
);
document.querySelectorAll('[data-reveal], [data-split]').forEach((el) => io.observe(el));

/* ---------- 捲動：進度條、導航列、視差 ---------- */
const progress = document.querySelector<HTMLElement>('.progress');
const parallax = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
let lastY = scrollY;
let ticking = false;
const onScroll = () => {
  const y = scrollY;
  const max = document.documentElement.scrollHeight - innerHeight;
  if (progress) progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  document.body.classList.toggle('scrolled', y > 30);
  if (!document.body.classList.contains('menu-open')) document.body.classList.toggle('hide-bar', y > lastY && y > 400);
  lastY = y;
  if (!reduce) {
    parallax.forEach((el) => {
      const r = el.parentElement!.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      const speed = Number(el.dataset.parallax) || 0.15;
      const mid = r.top + r.height / 2 - innerHeight / 2;
      el.style.transform = `translate3d(0, ${(-mid * speed).toFixed(1)}px, 0) scale(${1 + speed * 0.6})`;
    });
  }
  ticking = false;
};
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();

/* ---------- 手機選單 ---------- */
document.querySelector('.menu-btn')?.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  document.querySelector('.menu-btn')?.setAttribute('aria-expanded', String(open));
  if (open) lenis?.stop(); else lenis?.start();
});
document.querySelectorAll('.nav a').forEach((a) => a.addEventListener('click', () => { document.body.classList.remove('menu-open'); lenis?.start(); }));

/* ---------- 圖片：淡入；載入失敗時保留漸變底色 ---------- */
document.querySelectorAll<HTMLImageElement>('img[data-soft]').forEach((img) => {
  const ok = () => img.classList.add('loaded');
  const fail = () => img.classList.add('broken');
  if (img.complete) { if (img.naturalWidth === 0) fail(); else ok(); }
  img.addEventListener('load', ok);
  img.addEventListener('error', fail);
});

/* ---------- 燈箱 ---------- */
const lb = document.querySelector<HTMLElement>('.lightbox');
document.addEventListener('click', (e) => {
  const fig = (e.target as HTMLElement).closest<HTMLElement>('[data-zoom]');
  if (!fig || !lb || (e.target as HTMLElement).closest('.say')) return;
  const img = lb.querySelector('img')!;
  img.src = fig.dataset.zoom!;
  img.alt = fig.dataset.alt || '';
  lb.querySelector('p')!.innerHTML = fig.querySelector('figcaption')?.innerHTML || '';
  lb.classList.add('open');
  lenis?.stop();
});
const closeLb = () => { lb?.classList.remove('open'); lenis?.start(); };
lb?.addEventListener('click', (e) => { if ((e.target as HTMLElement).tagName !== 'IMG') closeLb(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLb(); });

/* ---------- YouTube 延遲載入 ---------- */
document.querySelectorAll<HTMLElement>('.yt[data-id]').forEach((box) => {
  const start = () => {
    if (box.querySelector('iframe')) return;
    const f = document.createElement('iframe');
    f.src = `https://www.youtube-nocookie.com/embed/${box.dataset.id}?autoplay=1&rel=0&playsinline=1`;
    f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen';
    f.allowFullscreen = true;
    f.title = box.dataset.title || 'YouTube video';
    box.appendChild(f);
  };
  box.addEventListener('click', start);
  box.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); start(); } });
});

/* ---------- 開場幕布（每個瀏覽階段只播一次） ---------- */
const curtain = document.querySelector<HTMLElement>('.curtain');
if (curtain) {
  let seen = false;
  try { seen = sessionStorage.getItem('ts-curtain') === '1'; } catch { /* */ }
  if (seen || reduce) {
    curtain.remove();
    document.body.classList.add('intro-done');
  } else {
    document.body.classList.add('curtain-on');
    lenis?.stop();
    curtain.querySelector('button')?.addEventListener('click', () => {
      curtain.classList.add('open');
      document.body.classList.remove('curtain-on');
      setTimeout(() => document.body.classList.add('intro-done'), 900);
      lenis?.start();
      try { sessionStorage.setItem('ts-curtain', '1'); } catch { /* */ }
      setTimeout(() => curtain.remove(), 2600);
    });
  }
}

/* ---------- 橫向唱片列 ---------- */
document.querySelectorAll<HTMLElement>('[data-rail]').forEach((rail) => {
  const track = rail.querySelector<HTMLElement>('.rail-track')!;
  rail.querySelectorAll<HTMLButtonElement>('[data-dir]').forEach((b) =>
    b.addEventListener('click', () => track.scrollBy({ left: Number(b.dataset.dir) * track.clientWidth * 0.8, behavior: 'smooth' })),
  );
  // 觸控裝置沒有 hover：置中的唱片自動滑出封套
  const peek = new IntersectionObserver(
    (es) => es.forEach((e) => e.target.classList.toggle('peek', e.isIntersecting)),
    { root: track, rootMargin: '0px -32% 0px -32%', threshold: 0.5 },
  );
  if (matchMedia('(hover: none)').matches) track.querySelectorAll('.era-card').forEach((c) => peek.observe(c));
  // 滑鼠：以直向滾輪推動橫向列
  track.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
    const atStart = track.scrollLeft <= 0 && e.deltaY < 0;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2 && e.deltaY > 0;
    if (atStart || atEnd) return;
    e.preventDefault(); e.stopPropagation();
    track.scrollLeft += e.deltaY;
  }, { passive: false });
});

/* ---------- 頁內目錄：高亮目前段落 ---------- */
const spyLinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-spy] a')];
if (spyLinks.length) {
  const map = new Map(spyLinks.map((a) => [decodeURIComponent(a.hash.slice(1)), a]));
  const spy = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    spyLinks.forEach((a) => a.classList.remove('on'));
    const a = map.get(e.target.id);
    if (a) {
      a.classList.add('on');
      const bar = a.parentElement!;
      bar.scrollTo({ left: a.offsetLeft - bar.clientWidth / 2 + a.clientWidth / 2, behavior: 'smooth' });
    }
  }), { rootMargin: '-40% 0px -55% 0px' });
  map.forEach((_, id) => { const el = document.getElementById(id); if (el) spy.observe(el); });
}
