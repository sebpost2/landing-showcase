"use client";

import { motion } from "motion/react";
import { easeOut } from "@/lib/motion";
import { GlowCard } from "@/components/glow-card";

const DISHES = [
  {
    name: "Rocoto relleno",
    desc: "Rocoto arequipeño, carne molida, queso gratinado y pastel de papa.",
    price: "S/ 28",
  },
  {
    name: "Chupe de camarones",
    desc: "Camarones de río, leche, huevo escalfado y hierbabuena.",
    price: "S/ 35",
  },
  {
    name: "Adobo arequipeño",
    desc: "Cerdo marinado en chicha de jora, servido con pan de tres puntas.",
    price: "S/ 26",
  },
];

export function ProductVisual() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-4xl rounded-2xl border border-surface bg-surface/40 p-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
          Platos destacados
        </p>
        <h2 className="mt-3 font-display text-3xl italic text-cream sm:text-4xl">
          Lo que más pide la casa
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {DISHES.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: easeOut }}
            >
              <GlowCard className="h-full rounded-xl border border-surface p-6">
                <h3 className="font-display text-lg italic text-cream">
                  {dish.name}
                </h3>
                <p className="mt-2 text-sm text-cream-muted">{dish.desc}</p>
                <p className="mt-4 font-mono text-sm text-brass">
                  {dish.price}
                </p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
