"use client";

import { motion } from "motion/react";
import { easeOut } from "@/lib/motion";

const STEPS = [
  {
    stage: "01",
    title: "Escribinos",
    copy: "Mandanos un mensaje por WhatsApp con la fecha, hora y cuántos son.",
  },
  {
    stage: "02",
    title: "Confirmamos al toque",
    copy: "Te respondemos en minutos, sin dejarte esperando en el chat.",
  },
  {
    stage: "03",
    title: "Mesa lista",
    copy: "Llegás y tu mesa ya está preparada, sin filas ni imprevistos.",
  },
  {
    stage: "04",
    title: "Disfrutá",
    copy: "El resto es nuestro: cocina arequipeña tradicional, a tu ritmo.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-rocoto">
          Cómo reservar
        </p>
        <h2 className="mt-3 max-w-xl font-display text-4xl font-black text-ink sm:text-5xl">
          Cuatro pasos, una mesa
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.stage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: easeOut }}
              className="ticket-card p-6 shadow-[2px_2px_0_rgba(43,33,26,0.15)]"
            >
              <div className="flex items-center gap-3 border-b border-dashed border-ink/20 pb-4">
                <span className="font-mono text-2xl font-bold text-rocoto">
                  {step.stage}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">{step.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
