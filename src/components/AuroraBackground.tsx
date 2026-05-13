'use client';

/**
 * AuroraBackground — web port of the app's SkiaAuroraBackground.
 *
 * The app draws soft pink ribbons of light "drifting across the screen"
 * using Skia paths. Here we approximate with stacked sine-wave bands
 * rendered to a 2D canvas with additive blending — each band has its
 * own phase, amplitude, frequency and vertical offset so the field
 * shimmers organically.
 *
 * Pauses on visibilitychange and respects prefers-reduced-motion.
 */

import { useEffect, useRef } from 'react';

type Ribbon = {
  yBase: number; // baseline y as a fraction of canvas height
  amplitude: number;
  frequency: number; // waves across the canvas width
  phase: number;
  speed: number; // phase shift per frame
  thickness: number;
  hue: number; // 0..1, biases between pink hues
  opacity: number;
};

function makeRibbon(): Ribbon {
  return {
    yBase: Math.random() * 0.8 + 0.1,
    amplitude: Math.random() * 80 + 25,
    frequency: Math.random() * 1.6 + 0.5,
    phase: Math.random() * Math.PI * 2,
    speed: (Math.random() * 0.0008 + 0.0003) * (Math.random() < 0.5 ? -1 : 1),
    thickness: Math.random() * 90 + 60,
    hue: Math.random(),
    opacity: Math.random() * 0.14 + 0.06,
  };
}

const RIBBON_COUNT = 6;

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

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

    const ribbons: Ribbon[] = Array.from({ length: RIBBON_COUNT }, makeRibbon);

    let rafId = 0;
    let running = true;

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(rafId);
      } else if (!running) {
        running = true;
        rafId = requestAnimationFrame(tick);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('resize', resize);

    // Draw one ribbon as a thick stroked sine, using a vertical gradient
    // so the ribbon fades top and bottom — this is what makes it look
    // like a translucent ribbon rather than a hard band.
    const drawRibbon = (r: Ribbon) => {
      const y0 = r.yBase * height;
      const grad = ctx.createLinearGradient(
        0,
        y0 - r.thickness,
        0,
        y0 + r.thickness,
      );
      // Pink palette: lerp between #ec3ad6 and #ff04cd by r.hue
      const r1 = Math.round(236 + r.hue * 19);
      const g1 = Math.round(58 - r.hue * 54);
      const b1 = Math.round(214 - r.hue * 9);
      grad.addColorStop(0, `rgba(${r1}, ${g1}, ${b1}, 0)`);
      grad.addColorStop(0.5, `rgba(${r1}, ${g1}, ${b1}, ${r.opacity})`);
      grad.addColorStop(1, `rgba(${r1}, ${g1}, ${b1}, 0)`);

      ctx.fillStyle = grad;
      ctx.beginPath();
      const step = Math.max(4, Math.floor(width / 180));
      // Upper edge
      for (let x = 0; x <= width; x += step) {
        const k = (x / width) * Math.PI * 2 * r.frequency + r.phase;
        const y = y0 + Math.sin(k) * r.amplitude - r.thickness;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      // Lower edge (back to start)
      for (let x = width; x >= 0; x -= step) {
        const k = (x / width) * Math.PI * 2 * r.frequency + r.phase;
        const y = y0 + Math.sin(k) * r.amplitude + r.thickness;
        ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
    };

    const tick = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';
      for (const r of ribbons) {
        if (!reduceMotion) r.phase += r.speed * 16;
        drawRibbon(r);
      }
      ctx.globalCompositeOperation = 'source-over';
      if (running) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fx-layer"
      aria-hidden="true"
      style={{ opacity: 0.55 }}
    />
  );
}
