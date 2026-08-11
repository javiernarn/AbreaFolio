import { useEffect, useRef } from 'react';

// Lightning-bolt SVG markup (drifts through the dark "void" theme, and
// "charges" into a brighter spark once the light theme takes over).
function boltSVG(i, palette) {
  const [c1, c2] = palette;
  return `
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="d${i}" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stop-color="${c1}"/>
          <stop offset="100%" stop-color="${c2}"/>
        </linearGradient>
      </defs>
      <path d="M13.2 1.6 L5.6 13.8 H10.9 L9.2 22.4 L18.4 9.4 H12.8 Z" fill="url(#d${i})" opacity="0.94"/>
    </svg>`;
}

// Charged-spark SVG used once a bolt "surges" for the light theme — a
// small six-point burst rather than a stray character reference.
function sparkSVG(i, palette) {
  const [c1, c2] = palette;
  return `
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="c${i}" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="${c1}"/>
          <stop offset="100%" stop-color="${c2}"/>
        </radialGradient>
      </defs>
      <path d="M12 1 L14 10 L23 12 L14 14 L12 23 L10 14 L1 12 L10 10 Z" fill="url(#c${i})" opacity="0.96"/>
    </svg>`;
}

const NIGHT_PALETTES = [
  ['#b9d4ff', '#4f8cff'],
  ['#8ecbff', '#3b6fe0'],
  ['#c7dfff', '#a78bfa'],
  ['#d8b4fe', '#8b5cf6'],
];

const DAY_MINI_PALETTES = [
  ['#8ecbff', '#2f5fd9'],
  ['#a78bfa', '#6d28d9'],
  ['#22d3ee', '#0891b2'],
];

const SPARK_PALETTES = [
  ['#eaf2ff', '#4f8cff'],
  ['#f5f0ff', '#8b5cf6'],
  ['#e0f7ff', '#22d3ee'],
  ['#ede9fe', '#7c3aed'],
];

function buildInner(type, i) {
  if (type === 'spark') return sparkSVG(i, SPARK_PALETTES[i % SPARK_PALETTES.length]);
  if (type === 'mini') return boltSVG(i, DAY_MINI_PALETTES[i % DAY_MINI_PALETTES.length]);
  return boltSVG(i, NIGHT_PALETTES[i % NIGHT_PALETTES.length]);
}

export default function BackgroundFX({ theme = 'dark' }) {
  const canvasRef = useRef(null);
  const flyWrapRef = useRef(null);
  const themeRef = useRef(theme);
  const fliesRef = useRef([]);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  // Cursed-energy mote canvas — same particle system, color palette and
  // density read live from themeRef so it can react without restarting.
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let raf;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function initParticles() {
      particles = [];
      const count = Math.min(110, Math.floor(window.innerWidth / 14));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.4 + 0.4,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          tw: Math.random() * Math.PI * 2,
          cNight: Math.random() > 0.5 ? '142,181,255' : '167,139,250',
          cDay: Math.random() > 0.5 ? '244,246,255' : '255,255,255',
        });
      }
    }

    function draw() {
      const isLight = themeRef.current === 'light';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx * (isLight ? 0.6 : 1);
        p.y += p.vy * (isLight ? 0.6 : 1);
        p.tw += 0.02;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        const twinkle = (0.35 + Math.abs(Math.sin(p.tw)) * 0.5) * (isLight ? 0.5 : 1);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${isLight ? p.cDay : p.cNight},${twinkle})`;
        ctx.fill();
      });
      if (!isLight) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const d = Math.hypot(dx, dy);
            if (d < 110) {
              ctx.strokeStyle = `rgba(79,140,255,${0.09 * (1 - d / 110)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }

    resizeCanvas();
    initParticles();
    draw();

    function onResize() { resizeCanvas(); initParticles(); }
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Create the drifting bolts once and keep animating them forever. Their
  // *type* (bolt / spark / mini) is mutated by the "surge" effect below in
  // reaction to theme changes — the render loop just reads it.
  useEffect(() => {
    const wrap = flyWrapRef.current;
    if (!wrap) return;
    const COUNT = window.innerWidth < 700 ? 6 : 11;

    function makeParticle(i) {
      const el = document.createElement('div');
      el.className = 'bfly';
      const inner = document.createElement('span');
      inner.className = 'bfly-inner';
      inner.innerHTML = buildInner('dough', i);
      el.appendChild(inner);
      wrap.appendChild(el);
      return { el, inner };
    }

    const flies = [];
    for (let i = 0; i < COUNT; i++) {
      const { el, inner } = makeParticle(i);
      flies.push({
        i,
        el,
        inner,
        type: 'dough',
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        angle: Math.random() * Math.PI * 2,
        speed: 0.32 + Math.random() * 0.42,
        wander: 0.02 + Math.random() * 0.03,
        bob: Math.random() * Math.PI * 2,
        spin: Math.random() * 360,
        scale: 0.7 + Math.random() * 0.9,
      });
    }
    fliesRef.current = flies;

    let raf;
    let windPhase = Math.random() * 10;

    function animateFlies() {
      const vh = document.documentElement.scrollHeight;
      const isLight = themeRef.current === 'light';
      windPhase += 0.012;
      const gust = isLight ? (Math.sin(windPhase) * 0.6 + Math.sin(windPhase * 2.7) * 0.35) : 0;

      flies.forEach(f => {
        f.angle += (Math.random() - 0.5) * f.wander;
        f.bob += 0.05;

        const isSpark = f.type === 'cookie';
        const windPush = isSpark ? (0.7 + gust * 1.3) : 0;

        f.x += Math.cos(f.angle) * f.speed + windPush;
        f.y += Math.sin(f.angle) * f.speed * 0.6 + Math.sin(f.bob) * (isSpark ? 0.6 : 0.4);

        if (f.x < -30) f.x = window.innerWidth + 30;
        if (f.x > window.innerWidth + 30) f.x = -30;
        if (f.y < -30) f.y = Math.min(vh, window.innerHeight * 3) - 30;
        if (f.y > Math.min(vh, window.innerHeight * 3)) f.y = -30;

        let rot = (f.angle * 180 / Math.PI) + 90;
        if (isSpark) {
          f.spin += 0.7 + Math.abs(gust) * 1.4;
          rot = f.spin;
        }

        const scale = f.type === 'mini' ? f.scale * 0.55 : f.scale;
        f.el.style.transform = `translate(${f.x}px, ${f.y}px) rotate(${rot}deg) scale(${scale})`;
      });
      raf = requestAnimationFrame(animateFlies);
    }
    animateFlies();

    return () => {
      cancelAnimationFrame(raf);
      flies.forEach(f => f.el.remove());
      fliesRef.current = [];
    };
  }, []);

  // Runs the "surge": whenever the theme flips, every bolt briefly
  // shrinks/fades, swaps its SVG for a charged spark (or a smaller mini
  // bolt), then eases back in — staggered so it reads as a wave of energy
  // rather than an abrupt swap. Internal `type` values keep the original
  // 'dough' / 'cookie' / 'mini' names so the animation math above (which
  // keys off those strings) doesn't need to change.
  useEffect(() => {
    const flies = fliesRef.current;
    if (!flies.length) return;

    const timers = [];
    flies.forEach((f, idx) => {
      const nextType = theme === 'light'
        ? (idx % 3 === 0 ? 'mini' : 'cookie')
        : 'dough';
      if (nextType === f.type) return;

      const delay = idx * 55 + Math.random() * 120;
      f.inner.classList.add('morphing');
      const t1 = setTimeout(() => {
        f.inner.innerHTML = buildInner(nextType === 'cookie' ? 'spark' : nextType, f.i);
        f.type = nextType;
        f.spin = f.spin || 0;
        // Force reflow so the class removal re-triggers the transition.
        void f.inner.offsetWidth;
        f.inner.classList.remove('morphing');
      }, 260 + delay);
      timers.push(t1);
    });

    return () => timers.forEach(clearTimeout);
  }, [theme]);

  return (
    <>
      <div className="bg-animation">
        <div className="bg-gradient"></div>
        <div className="bg-grid"></div>
        <canvas id="particles" ref={canvasRef}></canvas>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="aurora" aria-hidden="true">
          <span className="aurora-band a1"></span>
          <span className="aurora-band a2"></span>
          <span className="aurora-band a3"></span>
        </div>
        <div className="celestial" aria-hidden="true">
          <div className="moon-disc"></div>
          <div className="sun-disc"></div>
        </div>
        <div className="wind-streaks" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <FireflyLayer />
      <div className="butterflies" ref={flyWrapRef}></div>
    </>
  );
}

// A handful of drifting energy-glint sparks for the dark theme — purely
// CSS-driven so they cost almost nothing, and they fade out cleanly once
// the bright "clear sky" theme takes over.
function FireflyLayer() {
  const countRef = useRef(null);
  if (countRef.current === null) {
    const count = typeof window !== 'undefined' && window.innerWidth < 700 ? 7 : 13;
    countRef.current = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: 42 + Math.random() * 52,
      dur: 6 + Math.random() * 6,
      delay: Math.random() * 8,
      drift: 40 + Math.random() * 80,
      hue: i % 2 === 0 ? 'var(--sprinkle-gold)' : 'var(--sprinkle-rose)',
    }));
  }

  return (
    <div className="fireflies" aria-hidden="true">
      {countRef.current.map(f => (
        <span
          key={f.id}
          className="firefly"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            '--dur': `${f.dur}s`,
            '--delay': `${f.delay}s`,
            '--drift': `${f.drift}px`,
            '--glow': f.hue,
          }}
        />
      ))}
    </div>
  );
}
