"use client";

import { motion } from "motion/react";
import { easeOut } from "@/lib/motion";

const WHATSAPP_URL =
  "https://wa.me/51983848628?text=Hola%2C%20quiero%20reservar%20una%20mesa%20en%20Sillar";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeOut }}
        className="text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
          Arequipa
        </p>
        <h1 className="mt-3 font-display text-5xl italic text-cream sm:text-7xl">
          Sillar
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
        className="max-w-md text-center font-body text-cream-muted"
      >
        Cocina arequipeña con alma, en el corazón del Centro Histórico. Mesa
        lista en minutos, sin llamadas ni esperas.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
        className="flex flex-col items-center gap-4"
      >
        <div className="relative inline-block">
          <span
            aria-hidden
            className="absolute inset-0 rounded-full bg-brass blur-xl animate-[cta-pulse_3s_ease-in-out_infinite]"
          />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block rounded-full bg-brass px-6 py-3 font-mono text-sm text-bg transition hover:bg-cream"
          >
            Reservá tu mesa por WhatsApp
          </a>
        </div>
        <span className="font-mono text-xs text-cream-muted">
          Lun–Dom · 12pm–11pm · Jerusalén 302, Arequipa
        </span>
      </motion.div>
    </section>
  );
}
