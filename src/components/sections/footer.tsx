export function Footer() {
  return (
    <footer className="border-t border-surface px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg italic text-cream">Sillar</p>
          <p className="font-mono text-[11px] text-cream-muted">
            Cocina arequipeña con alma
          </p>
        </div>
        <nav className="flex gap-6 font-mono text-xs uppercase tracking-widest text-cream-muted">
          <a href="#features" className="transition-colors hover:text-brass">
            Cómo funciona
          </a>
          <a href="#pricing" className="transition-colors hover:text-brass">
            Ubicación
          </a>
          <a href="#try" className="transition-colors hover:text-brass">
            Reservar
          </a>
        </nav>
      </div>
    </footer>
  );
}
