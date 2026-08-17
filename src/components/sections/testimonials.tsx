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
    <section className="relative overflow-hidden px-6 py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-end justify-center gap-1.5 opacity-[0.07]"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="w-1.5 origin-bottom rounded-full bg-brass animate-[eq-bounce_1.6s_ease-in-out_infinite]"
            style={{
              height: `${30 + Math.abs(Math.sin(i * 0.7)) * 90}px`,
              animationDelay: `${i * 0.08}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
          Lo que dicen nuestros clientes
        </p>
        <div className="mt-10 min-h-[160px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: easeOut }}
            >
              <p className="font-display text-2xl italic text-cream">
                &ldquo;{current.quote}&rdquo;
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-cream-muted">
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
                i === index ? "bg-brass" : "bg-surface"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
