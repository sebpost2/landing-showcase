"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { easeOut } from "@/lib/motion";

const POINT_COUNT = 160;
const WIDTH = 600;
const STEP = WIDTH / (POINT_COUNT - 1);

function rawWave(i: number, t: number) {
  return 60 + Math.sin(i * 0.35 + t) * 12 + Math.sin(i * 1.1 - t * 1.7) * 7;
}

function masteredWave(i: number, t: number) {
  return 60 + Math.sin(i * 0.2 + t * 0.8) * 32;
}

function buildPoints(fn: (i: number, t: number) => number, t: number) {
  let out = "";
  for (let i = 0; i < POINT_COUNT; i++) {
    out += `${(i * STEP).toFixed(2)},${fn(i, t).toFixed(2)} `;
  }
  return out;
}

function useFlowingWave(fn: (i: number, t: number) => number, speed: number) {
  const ref = useRef<SVGPolylineElement>(null);

  useEffect(() => {
    let raf: number;
    const start = performance.now();

    const tick = (now: number) => {
      const t = ((now - start) / 1000) * speed;
      ref.current?.setAttribute("points", buildPoints(fn, t));
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [fn, speed]);

  return ref;
}

export function ProductVisual() {
  const rawRef = useFlowingWave(rawWave, 1);
  const masteredRef = useFlowingWave(masteredWave, 0.8);

  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-4xl rounded-2xl border border-surface bg-surface/40 p-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
          Before / after
        </p>
        <h2 className="mt-3 font-display text-3xl italic text-cream sm:text-4xl">
          Hear the difference before you commit
        </h2>

        <div className="relative mt-12 space-y-10">
          <svg width="0" height="0" className="absolute">
            <defs>
              <filter id="waveform-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          </svg>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-cream-muted">
              Raw input · -22 LUFS
            </p>
            <svg viewBox="0 0 600 120" className="h-20 w-full text-cream-muted">
              <polyline
                ref={rawRef}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                filter="url(#waveform-glow)"
              />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.15, ease: easeOut }}
          >
            <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-brass">
              Mastered output · -14 LUFS
            </p>
            <svg viewBox="0 0 600 120" className="h-20 w-full text-brass">
              <polyline
                ref={masteredRef}
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                filter="url(#waveform-glow)"
              />
            </svg>
          </motion.div>

          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 w-px bg-brass shadow-[0_0_12px_4px_rgba(201,124,61,0.6)]"
            initial={{ left: "0%", opacity: 0 }}
            whileInView={{ left: "100%", opacity: [0, 1, 1, 0] }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              left: { duration: 1.8, ease: "linear", delay: 0.6 },
              opacity: { duration: 1.8, times: [0, 0.05, 0.85, 1], delay: 0.6 },
            }}
          />
        </div>
      </div>
    </section>
  );
}
