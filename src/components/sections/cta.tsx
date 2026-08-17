const WHATSAPP_URL =
  "https://wa.me/51983848628?text=Hola%2C%20quiero%20reservar%20una%20mesa%20en%20Sillar";

export function Cta() {
  return (
    <section id="try" className="px-6 py-20 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.35em] text-rocoto">
        Te esperamos
      </p>
      <h2 className="mx-auto mt-3 max-w-lg font-display text-4xl font-black text-ink sm:text-5xl">
        Reservá tu mesa
      </h2>
      <p className="mx-auto mt-4 max-w-sm text-ink-muted">
        Un mensaje por WhatsApp y listo. Sin llamadas, sin esperas.
      </p>
      <div className="mt-8 flex justify-center">
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
          Reservar por WhatsApp
        </a>
      </div>
    </section>
  );
}
