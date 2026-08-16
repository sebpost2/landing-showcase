export function Cta() {
  return (
    <section id="try" className="px-6 py-32 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
        Ready when you are
      </p>
      <h2 className="mx-auto mt-3 max-w-lg font-display text-4xl italic text-cream sm:text-5xl">
        Upload your first track
      </h2>
      <p className="mx-auto mt-4 max-w-sm text-cream-muted">
        No account, no card. Hear the master before you decide anything.
      </p>
      <div className="relative mt-8 inline-block">
        <span
          aria-hidden
          className="absolute inset-0 rounded-full bg-brass blur-xl animate-[cta-pulse_3s_ease-in-out_infinite]"
        />
        <a
          href="#"
          className="relative inline-block rounded-full bg-brass px-8 py-3 font-mono text-sm text-bg transition hover:bg-cream"
        >
          Try it free
        </a>
      </div>
    </section>
  );
}
