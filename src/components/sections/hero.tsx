"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { Knob } from "@/components/knob";
import { easeOut } from "@/lib/motion";

const HeroScene = dynamic(() => import("@/components/three/hero-scene"), {
  ssr: false,
});

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeOut }}
        className="flex items-center gap-6"
      >
        <Knob label="Warmth" />
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
            Mesa
          </p>
          <h1 className="text-5xl font-display italic text-cream sm:text-7xl">
            Master your sound
          </h1>
        </div>
        <Knob label="Presence" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
        className="max-w-md text-center font-body text-cream-muted"
      >
        AI mastering, studio-grade, in under a minute. Upload a track, hear it
        tuned like a real engineer did it.
      </motion.p>

      <div
        className="h-64 w-full max-w-3xl"
        style={{
          maskImage:
            "radial-gradient(ellipse 60% 70% at center, black 45%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 70% at center, black 45%, transparent 100%)",
        }}
      >
        <HeroScene />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
        className="flex items-center gap-4"
      >
        <a
          href="#try"
          className="rounded-full bg-brass px-6 py-3 font-mono text-sm text-bg transition hover:bg-cream"
        >
          Try it free
        </a>
        <span className="font-mono text-xs text-cream-muted">
          -14 LUFS · 24-bit · &lt;40ms
        </span>
      </motion.div>
    </section>
  );
}
