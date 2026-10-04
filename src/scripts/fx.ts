// 各時期的背景粒子特效（Canvas）。body[data-fx] 決定模式。
type Mode = string;
interface P { x: number; y: number; vx: number; vy: number; s: number; a: number; r: number; vr: number; c: string; t: number; ch?: string }

const canvas = document.getElementById('fx') as HTMLCanvasElement | null;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (canvas && !reduce) {
  const ctx = canvas.getContext('2d')!;
  let W = 0, H = 0, dpr = 1;
  let mode: Mode = document.body.dataset.fx || 'sparkle';
  let ps: P[] = [];
  let palette: string[] = [];
  const rand = (a: number, b: number) => a + Math.random() * (b - a);
  const pick = <T,>(arr: T[]) => arr[(Math.random() * arr.length) | 0];

  const readPalette = () => {
    const cs = getComputedStyle(document.body);
    const v = (n: string) => cs.getPropertyValue(n).trim();
    palette = [v('--accent'), v('--accent2'), '#f7e7a1', v('--ink')];
  };

  const density: Record<Mode, number> = {
    sparkle: 58, glitter: 85, magic: 72, butterflies: 11, leaves: 20, seagulls: 8, smoke: 12,
    hearts: 18, fog: 9, snow: 100, stars: 140, letters: 24, confetti: 55,
  };

  const spawn = (init: boolean): P => {
    const p: P = { x: rand(0, W), y: init ? rand(0, H) : -20, vx: 0, vy: 0, s: 1, a: 1, r: rand(0, 6.28), vr: 0, c: pick(palette), t: rand(0, 100) };
    switch (mode) {
      case 'snow': p.s = rand(1, 3.4); p.vy = p.s * 0.35; p.vx = rand(-0.2, 0.2); p.a = rand(0.4, 0.9); p.c = '#ffffff'; break;
      case 'leaves': p.s = rand(7, 14); p.vy = rand(0.4, 1.1); p.vx = rand(-0.4, 0.4); p.vr = rand(-0.02, 0.02); p.c = pick(['#e23b3b', '#b3261e', '#e8743b', '#f2a65a', '#8c1c13']); p.a = rand(0.5, 0.9); break;
      case 'confetti': p.s = rand(4, 9); p.vy = rand(0.6, 1.6); p.vx = rand(-0.4, 0.4); p.vr = rand(-0.08, 0.08); p.c = pick(['#ff7a1a', '#9fe8d2', '#f7e7a1', '#ffb36b', '#3fc1a5']); break;
      case 'letters': p.s = rand(12, 22); p.vy = rand(0.25, 0.6); p.vr = rand(-0.004, 0.004); p.a = rand(0.08, 0.22); p.ch = String.fromCharCode(65 + ((Math.random() * 26) | 0)); p.c = getComputedStyle(document.body).getPropertyValue('--ink'); break;
      case 'hearts': p.y = init ? rand(0, H) : H + 20; p.s = rand(6, 14); p.vy = -rand(0.25, 0.7); p.vx = rand(-0.2, 0.2); p.a = rand(0.35, 0.8); p.c = pick(['#ff6fae', '#ffb3d1', '#7fbcff', '#c7a6ff']); break;
      case 'seagulls': p.x = init ? rand(0, W) : -40; p.y = rand(H * 0.05, H * 0.6); p.s = rand(10, 20); p.vx = rand(0.35, 0.9); p.vy = rand(-0.08, 0.08); p.a = rand(0.35, 0.7); p.c = '#2a4a63'; break;
      case 'butterflies': p.y = init ? rand(0, H) : H + 20; p.s = rand(6, 11); p.vy = -rand(0.2, 0.5); p.vx = rand(-0.3, 0.3); p.c = pick(['#2a8c7f', '#c9a86a', '#7fc8b8', '#e4c98f']); p.a = 0.75; break;
      case 'fog': case 'smoke': p.x = init ? rand(-200, W) : -300; p.y = rand(0, H); p.s = rand(140, 320); p.vx = rand(0.08, 0.3); p.a = mode === 'fog' ? rand(0.05, 0.12) : rand(0.04, 0.09); p.c = mode === 'fog' ? '#ffffff' : '#9a9a9a'; break;
      case 'stars': p.s = rand(0.4, 1.6); p.a = rand(0.3, 1); p.c = pick(['#ffffff', '#e8e2ff', '#f2c27b']); break;
      default: p.y = init ? rand(0, H) : H + 10; p.s = rand(0.8, 2.6); p.vy = -rand(0.1, 0.45); p.vx = rand(-0.1, 0.1); p.a = rand(0.3, 1);
    }
    return p;
  };

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const reset = () => {
    readPalette();
    const scale = Math.min(1, (W * H) / (1440 * 900));
    const n = Math.round((density[mode] ?? 60) * Math.max(scale, W < 700 ? 0.45 : 0.6));
    ps = Array.from({ length: n }, () => spawn(true));
  };

  const star4 = (x: number, y: number, s: number) => {
    ctx.beginPath();
    ctx.moveTo(x, y - s * 3); ctx.quadraticCurveTo(x, y, x + s * 3, y);
    ctx.quadraticCurveTo(x, y, x, y + s * 3); ctx.quadraticCurveTo(x, y, x - s * 3, y);
    ctx.quadraticCurveTo(x, y, x, y - s * 3); ctx.fill();
  };
  const heart = (x: number, y: number, s: number) => {
    ctx.beginPath();
    ctx.moveTo(x, y + s * 0.35);
    ctx.bezierCurveTo(x - s, y - s * 0.4, x - s * 0.45, y - s, x, y - s * 0.45);
    ctx.bezierCurveTo(x + s * 0.45, y - s, x + s, y - s * 0.4, x, y + s * 0.35);
    ctx.fill();
  };

  let shoot: { x: number; y: number; l: number } | null = null;

  const frame = () => {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < ps.length; i++) {
      const p = ps[i];
      p.t += 1; p.x += p.vx; p.y += p.vy; p.r += p.vr;
      ctx.globalAlpha = p.a * 0.88; ctx.fillStyle = p.c; ctx.strokeStyle = p.c;
      switch (mode) {
        case 'snow': p.x += Math.sin(p.t / 40) * 0.3; ctx.beginPath(); ctx.arc(p.x, p.y, p.s, 0, 6.28); ctx.fill(); break;
        case 'leaves':
          p.x += Math.sin(p.t / 50) * 0.6;
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.scale(1, Math.abs(Math.sin(p.t / 30)) * 0.6 + 0.4);
          ctx.beginPath(); ctx.moveTo(0, -p.s); ctx.quadraticCurveTo(p.s * 0.8, 0, 0, p.s); ctx.quadraticCurveTo(-p.s * 0.8, 0, 0, -p.s); ctx.fill(); ctx.restore(); break;
        case 'confetti':
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.scale(Math.cos(p.t / 12), 1); ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); ctx.restore(); break;
        case 'letters':
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.font = `${p.s}px "Special Elite", monospace`; ctx.fillText(p.ch!, 0, 0); ctx.restore(); break;
        case 'hearts': p.x += Math.sin(p.t / 45) * 0.4; heart(p.x, p.y, p.s); break;
        case 'seagulls': {
          const f = Math.sin(p.t / 9) * p.s * 0.35;
          ctx.lineWidth = Math.max(1.2, p.s / 9); ctx.lineCap = 'round';
          ctx.beginPath(); ctx.moveTo(p.x - p.s, p.y - f); ctx.quadraticCurveTo(p.x - p.s / 2, p.y - p.s / 2 - f / 2, p.x, p.y);
          ctx.quadraticCurveTo(p.x + p.s / 2, p.y - p.s / 2 - f / 2, p.x + p.s, p.y - f); ctx.stroke(); break;
        }
        case 'butterflies': {
          p.x += Math.sin(p.t / 30) * 0.8;
          const w = Math.abs(Math.sin(p.t / 6)) * 0.8 + 0.2;
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(Math.sin(p.t / 40) * 0.4);
          ctx.beginPath(); ctx.ellipse(-p.s * w * 0.6, 0, p.s * w * 0.7, p.s, -0.4, 0, 6.28); ctx.fill();
          ctx.beginPath(); ctx.ellipse(p.s * w * 0.6, 0, p.s * w * 0.7, p.s, 0.4, 0, 6.28); ctx.fill(); ctx.restore(); break;
        }
        case 'fog': case 'smoke': {
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.s);
          g.addColorStop(0, p.c); g.addColorStop(1, 'transparent');
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, p.s, 0, 6.28); ctx.fill(); break;
        }
        case 'stars': ctx.globalAlpha = p.a * (0.55 + 0.45 * Math.sin(p.t / (20 + p.s * 20))); ctx.beginPath(); ctx.arc(p.x, p.y, p.s, 0, 6.28); ctx.fill(); break;
        default:
          ctx.globalAlpha = p.a * (0.5 + 0.5 * Math.sin(p.t / 14));
          if (p.s > 2) star4(p.x, p.y, p.s); else { ctx.beginPath(); ctx.arc(p.x, p.y, p.s, 0, 6.28); ctx.fill(); }
      }
      const out = p.y > H + 40 || p.y < -60 || p.x > W + 360 || p.x < -400;
      if (out) ps[i] = spawn(false);
    }
    // Midnights：偶爾劃過的流星
    if (mode === 'stars') {
      if (!shoot && Math.random() < 0.004) shoot = { x: rand(W * 0.2, W), y: rand(0, H * 0.4), l: 0 };
      if (shoot) {
        shoot.l += 1; const x = shoot.x - shoot.l * 9, y = shoot.y + shoot.l * 4;
        const g = ctx.createLinearGradient(x, y, x + 120, y - 54);
        g.addColorStop(0, 'rgba(255,255,255,.9)'); g.addColorStop(1, 'transparent');
        ctx.globalAlpha = 1; ctx.strokeStyle = g; ctx.lineWidth = 1.6; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 120, y - 54); ctx.stroke();
        if (shoot.l > 60) shoot = null;
      }
    }
    ctx.globalAlpha = 1;
    raf = requestAnimationFrame(frame);
  };

  let raf = 0;
  resize(); reset(); raf = requestAnimationFrame(frame);
  addEventListener('resize', () => { resize(); reset(); });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf); else raf = requestAnimationFrame(frame);
  });
  // 時間線頁面捲動時切換時期
  // 切換模式時先淡出，再以新模式淡入，避免畫面突變
  let swap = 0;
  (window as any).__fx = {
    setMode(m: Mode) {
      if (m === mode) return;
      clearTimeout(swap);
      canvas.classList.add('fading');
      swap = window.setTimeout(() => { mode = m; reset(); canvas.classList.remove('fading'); }, 700);
    },
    refresh() { window.setTimeout(readPalette, 1500); },
  };
}
