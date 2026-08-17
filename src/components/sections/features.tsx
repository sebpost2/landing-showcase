"use client";

import { motion } from "motion/react";
import { easeOut } from "@/lib/motion";
import { GlowCard } from "@/components/glow-card";

const STEPS = [
  {
    stage: "1",
    title: "Escribinos",
    copy: "Mandanos un mensaje por WhatsApp con la fecha, hora y cuántos son.",
  },
  {
    stage: "2",
    title: "Confirmamos al toque",
    copy: "Te respondemos en minutos, sin dejarte esperando en el chat.",
  },
  {
    stage: "3",
    title: "Mesa lista",
    copy: "Llegás y tu mesa ya está preparada, sin filas ni imprevistos.",
  },
  {
    stage: "4",
    title: "Disfrutá",
    copy: "El resto es nuestro: cocina arequipeña tradicional, a tu ritmo.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
          Cómo funciona
        </p>
        <h2 className="mt-3 max-w-xl font-display text-4xl italic text-cream sm:text-5xl">
          Reservar toma menos de un minuto
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-surface sm:grid-cols-4">
          {STEPS.map((step, i) => (
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
