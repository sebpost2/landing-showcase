"use client";

import { motion } from "motion/react";
import { easeOut } from "@/lib/motion";
import { GlowCard } from "@/components/glow-card";

const CHAIN = [
  {
    stage: "INPUT",
    title: "Drop it in",
    copy: "WAV or MP3, up to 24-bit. No account needed to hear the first result.",
  },
  {
    stage: "EQ",
    title: "Balanced automatically",
    copy: "Frequency curve matched to genre, and to a reference track if you give it one.",
  },
  {
    stage: "COMP",
    title: "Glued, not squashed",
    copy: "Multiband dynamics tuned the way an engineer rides a compressor, not a loudness knob.",
  },
  {
    stage: "MASTER",
    title: "Commercial loudness",
    copy: "Full-band limiting without pumping or pre-echo, tuned to genre targets.",
  },
  {
    stage: "OUT",
    title: "Streaming-ready",
    copy: "-14 LUFS by default. Stems back in under a minute.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
          Signal chain
        </p>
        <h2 className="mt-3 max-w-xl font-display text-4xl italic text-cream sm:text-5xl">
          Five stages, one pass
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-surface sm:grid-cols-5">
          {CHAIN.map((step, i) => (
            <motion.div
              key={step.stage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: easeOut }}
              className="bg-bg"
            >
              <GlowCard className="h-full p-6">
                <p className="font-mono text-[11px] tracking-[0.2em] text-brass">
                  {step.stage}
                </p>
                <h3 className="mt-4 font-display text-lg text-cream">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-cream-muted">{step.copy}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
