"use client";

import { motion } from "motion/react";
import { easeOut } from "@/lib/motion";

const WHATSAPP_URL =
  "https://wa.me/51983848628?text=Hola%2C%20quiero%20reservar%20una%20mesa%20en%20Sillar";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-10 overflow-hidden px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easeOut }}
        className="text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-rocoto">
          Arequipa · Perú
        </p>
        <h1 className="mt-4 font-display text-6xl font-black tracking-tight text-ink sm:text-8xl">
          Sillar
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
        className="max-w-md text-center font-body text-lg text-ink-muted"
      >
        Cocina arequipeña con alma, en el corazón del Centro Histórico.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
        className="flex flex-col items-center gap-5"
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ticket-stub group relative inline-flex items-center gap-3 border-2 border-ink bg-paper px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest text-ink transition-transform hover:-translate-y-0.5"
        >
          <span
            aria-hidden
            className="h-2.5 w-2.5 rounded-full bg-rocoto animate-[ticket-pulse_2.5s_ease-in-out_infinite]"
          />
          Reservar mesa por WhatsApp
        </a>
        <span className="font-mono text-xs text-ink-muted">
          Lun–Dom · 12pm–11pm · Jerusalén 302
        </span>
      </motion.div>
    </section>
  );
}
