"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { easeOut } from "@/lib/motion";

const DISHES = [
  {
    name: "Rocoto relleno",
    desc: "Rocoto arequipeño, carne molida, queso gratinado y pastel de papa.",
    price: "S/ 28",
    image: "/images/rocoto2.jpg",
  },
  {
    name: "Chupe de camarones",
    desc: "Camarones de río, leche, huevo escalfado y hierbabuena.",
    price: "S/ 35",
    image: "/images/chupe.jpg",
  },
  {
    name: "Adobo arequipeño",
    desc: "Cerdo marinado en chicha de jora, servido con arroz.",
    price: "S/ 26",
    image: "/images/adobo3.jpg",
  },
  {
    name: "Ocopa",
    desc: "Papas doradas bañadas en salsa de huacatay, maní y queso fresco.",
    price: "S/ 18",
    image: "/images/ocopa.jpg",
  },
];

export function ProductVisual() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-center font-mono text-xs uppercase tracking-[0.35em] text-rocoto">
          La carta
        </p>
        <h2 className="mt-3 text-center font-display text-3xl font-black text-ink sm:text-4xl">
          Lo que más pide la casa
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {DISHES.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: easeOut }}
              className="ticket-card shadow-[3px_3px_0_rgba(43,33,26,0.15)]"
            >
              <div className="relative h-44 w-full overflow-hidden rounded-t-[3px]">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-lg font-bold text-ink">
                    {dish.name}
                  </span>
                  <span className="translate-y-[-3px] flex-1 border-b border-dotted border-ink-muted/50" />
                  <span className="font-mono text-sm font-bold text-rocoto">
                    {dish.price}
                  </span>
                </div>
                <p className="mt-1 text-sm text-ink-muted">{dish.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
