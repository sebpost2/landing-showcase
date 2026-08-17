const WHATSAPP_URL =
  "https://wa.me/51983848628?text=Hola%2C%20quiero%20reservar%20una%20mesa%20en%20Sillar";

export function Cta() {
  return (
    <section id="try" className="px-6 py-32 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
        Te esperamos
      </p>
      <h2 className="mx-auto mt-3 max-w-lg font-display text-4xl italic text-cream sm:text-5xl">
        Reservá tu mesa
      </h2>
      <p className="mx-auto mt-4 max-w-sm text-cream-muted">
        Un mensaje por WhatsApp y listo. Sin llamadas, sin esperas.
      </p>
      <div className="relative mt-8 inline-block">
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-brass blur-xl animate-[cta-pulse_3s_ease-in-out_infinite]"
        />
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block rounded-full bg-brass px-8 py-3 font-mono text-sm text-bg transition hover:bg-cream"
        >
          Reservar por WhatsApp
        </a>
      </div>
    </section>
  );
}
