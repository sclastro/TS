// 全站互動：語言切換、人名讀音、滾動出現、選單、燈箱、YouTube 延遲載入

const store = {
  get(k: string) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k: string, v: string) { try { localStorage.setItem(k, v); } catch { /* 私密瀏覽 */ } },
};

/* ---------- 語言 ---------- */
function setLang(lang: string) {
  document.documentElement.dataset.lang = lang;
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-Hant';
  store.set('ts-lang', lang);
  document.querySelectorAll<HTMLButtonElement>('.lang button').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  });
}
document.querySelectorAll<HTMLButtonElement>('.lang button').forEach((b) =>
  b.addEventListener('click', () => {
    document.body.classList.add('lang-fade');
    setTimeout(() => { setLang(b.dataset.lang!); document.body.classList.remove('lang-fade'); }, 180);
  }),
);
setLang(document.documentElement.dataset.lang || 'zh');

/* ---------- 人名讀音（0.8 倍速） ---------- */
let voice: SpeechSynthesisVoice | undefined;
function pickVoice() {
  if (!('speechSynthesis' in window)) return;
  const vs = speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith('en'));
  voice =
    vs.find((v) => /en-us/i.test(v.lang) && /samantha|google us|aria|jenny|ava/i.test(v.name)) ||
    vs.find((v) => /en-us/i.test(v.lang)) || vs[0];
}
if ('speechSynthesis' in window) {
  pickVoice();
  speechSynthesis.addEventListener?.('voiceschanged', pickVoice);
}
document.addEventListener('click', (e) => {
  const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('.say');
  if (!btn) return;
  e.preventDefault();
  e.stopPropagation();
  if (!('speechSynthesis' in window)) { alert('此瀏覽器不支援語音朗讀。'); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(btn.dataset.say!);
  u.lang = 'en-US';
  u.rate = 0.8;
  if (voice) u.voice = voice;
  btn.classList.add('speaking');
  const done = () => btn.classList.remove('speaking');
  u.onend = done; u.onerror = done;
  speechSynthesis.speak(u);
});

/* ---------- 滾動出現 ---------- */
const io = new IntersectionObserver(
  (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }),
  { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
);
document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

/* ---------- 捲動後導航列加底色 ---------- */
const onScroll = () => document.body.classList.toggle('scrolled', scrollY > 40);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- 手機選單 ---------- */
document.querySelector('.menu-btn')?.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  document.querySelector('.menu-btn')?.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach((a) => a.addEventListener('click', () => document.body.classList.remove('menu-open')));

/* ---------- 圖片載入失敗：保留漸變底色 ---------- */
document.querySelectorAll<HTMLImageElement>('img[data-soft]').forEach((img) => {
  const fail = () => img.classList.add('broken');
  if (img.complete && img.naturalWidth === 0) fail();
  img.addEventListener('error', fail);
});

/* ---------- 燈箱 ---------- */
const lb = document.querySelector<HTMLElement>('.lightbox');
document.addEventListener('click', (e) => {
  const fig = (e.target as HTMLElement).closest<HTMLElement>('[data-zoom]');
  if (!fig || !lb) return;
  const img = lb.querySelector('img')!;
  img.src = fig.dataset.zoom!;
  img.alt = fig.dataset.alt || '';
  lb.querySelector('p')!.innerHTML = fig.querySelector('figcaption')?.innerHTML || '';
  lb.classList.add('open');
});
lb?.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).tagName !== 'IMG') lb.classList.remove('open');
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') lb?.classList.remove('open'); });

/* ---------- YouTube 延遲載入（按下才載入 iframe，手機更流暢） ---------- */
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
  if (seen || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    curtain.remove();
  } else {
    document.body.classList.add('curtain-on');
    const open = () => {
      curtain.classList.add('open');
      document.body.classList.remove('curtain-on');
      try { sessionStorage.setItem('ts-curtain', '1'); } catch { /* */ }
      setTimeout(() => curtain.remove(), 2600);
    };
    curtain.querySelector('button')?.addEventListener('click', open);
  }
}

/* ---------- 橫向唱片列：滑鼠滾輪 / 箭咀 ---------- */
document.querySelectorAll<HTMLElement>('[data-rail]').forEach((rail) => {
  const track = rail.querySelector<HTMLElement>('.rail-track')!;
  // 觸控裝置沒有 hover：置中的唱片自動滑出封套
  if (matchMedia('(hover: none)').matches) {
    const peek = new IntersectionObserver(
      (es) => es.forEach((e) => e.target.classList.toggle('peek', e.isIntersecting)),
      { root: track, rootMargin: '0px -30% 0px -30%', threshold: 0.6 },
    );
    track.querySelectorAll('.era-card').forEach((c) => peek.observe(c));
  }
  rail.querySelectorAll<HTMLButtonElement>('[data-dir]').forEach((b) =>
    b.addEventListener('click', () => track.scrollBy({ left: Number(b.dataset.dir) * track.clientWidth * 0.8, behavior: 'smooth' })),
  );
});
