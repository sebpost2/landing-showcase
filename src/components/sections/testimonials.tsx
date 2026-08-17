"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { easeOut } from "@/lib/motion";

const QUOTES = [
  {
    quote:
      "Reservé por WhatsApp un viernes a última hora y ya tenían mesa lista cuando llegamos. El rocoto relleno, espectacular.",
    name: "Mariana Chávez",
    role: "Cliente frecuente",
  },
  {
    quote:
      "Llevé a mis papás por su aniversario. La atención se sintió como de casa, no como un restaurante turístico más.",
    name: "Renzo Delgado",
    role: "Arequipa",
  },
  {
    quote:
      "El chupe de camarones me recordó al de mi abuela. Y responden al toque por WhatsApp, eso ya vale mucho.",
    name: "Fiorella Ampuero",
    role: "Cliente frecuente",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % QUOTES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const current = QUOTES[index];

  return (
    <section className="px-6 py-32">
      <div className="relative mx-auto max-w-2xl text-center">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 font-display text-[10rem] font-black leading-none text-rocoto/10"
        >
          &rdquo;
        </span>

        <p className="font-mono text-xs uppercase tracking-[0.35em] text-rocoto">
          Lo que dicen nuestros clientes
        </p>
        <div className="relative mt-10 min-h-[160px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: easeOut }}
            >
              <p className="font-display text-2xl font-medium text-ink">
                {current.quote}
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-ink-muted">
                {current.name} · {current.role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {QUOTES.map((q, i) => (
            <button
              key={q.name}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${q.name}`}
              className={`h-1.5 w-6 rounded-full transition-colors ${
                i === index ? "bg-rocoto" : "bg-ink/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
