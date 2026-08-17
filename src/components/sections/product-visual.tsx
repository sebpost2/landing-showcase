"use client";

import { motion } from "motion/react";
import { easeOut } from "@/lib/motion";

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
  {
    name: "Ocopa",
    desc: "Papas doradas bañadas en salsa de huacatay, maní y queso fresco.",
    price: "S/ 18",
  },
];

export function ProductVisual() {
  return (
    <section className="px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="ticket-card mx-auto max-w-2xl p-10 shadow-[3px_3px_0_rgba(43,33,26,0.15)]"
      >
        <p className="text-center font-mono text-xs uppercase tracking-[0.35em] text-rocoto">
          La carta
        </p>
        <h2 className="mt-3 text-center font-display text-3xl font-black text-ink">
          Lo que más pide la casa
        </h2>

        <div className="mt-10 space-y-6 border-t border-dashed border-ink/20 pt-8">
          {DISHES.map((dish) => (
            <div key={dish.name}>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-lg font-bold text-ink">
                  {dish.name}
                </span>
                <span className="flex-1 border-b border-dotted border-ink-muted/50 translate-y-[-3px]" />
                <span className="font-mono text-sm font-bold text-rocoto">
                  {dish.price}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-muted">{dish.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
