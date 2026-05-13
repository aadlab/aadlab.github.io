'use client';

/**
 * CosmosBackground — web port of the app's SkiaAtmosphereBackground.
 *
 * The app draws drifting comet-like trails on a Skia canvas; here we do
 * the equivalent on a 2D <canvas>, with a particle pool whose head is
 * drawn at full opacity and whose trail fades over the last N positions.
 *
 * Each particle has its own velocity, lifetime, hue offset and trail
 * length so the field reads as a chaotic stream rather than a uniform
 * grid — matches the "soft particle trails drifting along an unseen
 * current, like ink in moving water" copy used in-app.
 *
 * Pauses when the page is hidden (visibilitychange) so the canvas
 * doesn't burn CPU in background tabs.
 */

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hueShift: number; // 0..1, biases between pink and blue-violet
  trail: { x: number; y: number; alpha: number }[];
  trailLen: number;
};

const PARTICLE_COUNT = 70;
const TRAIL_LIMIT = 28;

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function newParticle(width: number, height: number, fresh = false): Particle {
  // Stream particles in from a random screen edge so they always look
  // like they're coming "from somewhere", never spawning mid-canvas.
  const edge = Math.floor(Math.random() * 4);
  let x = 0;
  let y = 0;
  if (fresh) {
    x = Math.random() * width;
    y = Math.random() * height;
  } else if (edge === 0) {
    x = Math.random() * width;
    y = -20;
  } else if (edge === 1) {
    x = width + 20;
    y = Math.random() * height;
  } else if (edge === 2) {
    x = Math.random() * width;
    y = height + 20;
  } else {
    x = -20;
    y = Math.random() * height;
  }
  // Velocity loosely flows from top-left to bottom-right with random
  // variance. This gives the field its "unseen current" feel.
  const angle = rand(Math.PI * 0.1, Math.PI * 0.45);
  const speed = rand(0.18, 0.55);
  return {
    x,
    y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    life: 0,
    maxLife: rand(420, 900),
    size: rand(0.8, 2.2),
    hueShift: Math.random(),
    trail: [],
    trailLen: Math.floor(rand(10, TRAIL_LIMIT)),
  };
}

export default function CosmosBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    let width = window.innerWidth;
    let height = window.innerHeight;
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    let particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () =>
      newParticle(width, height, true),
    );

    let rafId = 0;
    let running = true;

    // Detect the active theme by reading the corner-color custom prop.
    // We don't strictly need theme-specific colours in Cosmos because
    // the field stays pink across both schemes (matches app), but
    // reading it once per resize lets us subtly tint trails toward the
    // corner colour for cohesion.
    const readTheme = () => {
      const root = document.documentElement;
      const cornerColor = getComputedStyle(root)
        .getPropertyValue('--corner-color')
        .trim();
      return cornerColor;
    };
    let cornerColor = readTheme();
    const themeObserver = new MutationObserver(() => {
      cornerColor = readTheme();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(rafId);
      } else if (!running) {
        running = true;
        last = performance.now();
        rafId = requestAnimationFrame(tick);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('resize', resize);

    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(48, now - last); // clamp to avoid huge jumps on tab return
      last = now;

      // Soft fade of the previous frame — this is what gives trails
      // their "fading wake" appearance. A lower alpha = longer trails.
      ctx.fillStyle = 'rgba(34, 16, 42, 0.18)'; // matches --bg-base
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx * dt * 0.06;
        p.y += p.vy * dt * 0.06;
        p.life += dt;

        p.trail.push({ x: p.x, y: p.y, alpha: 1 });
        if (p.trail.length > p.trailLen) p.trail.shift();

        // Draw trail (oldest → newest) using additive blending for glow.
        ctx.globalCompositeOperation = 'lighter';
        for (let t = 0; t < p.trail.length; t++) {
          const tp = p.trail[t];
          const tFrac = t / p.trail.length;
          const alpha = tFrac * 0.18;
          // Blend between brand pink (#ff04cd) and aurora pink (#ec3ad6)
          // with a hint of corner-color tint via hueShift.
          const r = Math.round(255 - p.hueShift * 30);
          const g = Math.round(58 * tFrac);
          const b = Math.round(205 + p.hueShift * 30);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          ctx.beginPath();
          ctx.arc(tp.x, tp.y, p.size * tFrac, 0, Math.PI * 2);
          ctx.fill();
        }

        // Head — slightly brighter dot
        ctx.fillStyle = `rgba(255, 200, 240, 0.85)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = 'source-over';

        // Recycle when off-screen or exhausted
        if (
          p.life > p.maxLife ||
          p.x < -50 ||
          p.x > width + 50 ||
          p.y < -50 ||
          p.y > height + 50
        ) {
          particles[i] = newParticle(width, height);
        }
      }

      // Silence unused-variable warning for cornerColor — it's intentionally
      // observed so a future tint pass can use it without re-wiring.
      void cornerColor;

      if (running) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fx-layer"
      aria-hidden="true"
      style={{ opacity: 0.7 }}
    />
  );
}
