export function Footer() {
  return (
    <footer className="border-t-2 border-ink/10 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg font-black text-ink">Sillar</p>
          <p className="font-mono text-[11px] text-ink-muted">
            Cocina arequipeña con alma
          </p>
        </div>
        <nav className="flex gap-6 font-mono text-xs uppercase tracking-widest text-ink-muted">
          <a href="#features" className="transition-colors hover:text-rocoto">
            Cómo funciona
          </a>
          <a href="#pricing" className="transition-colors hover:text-rocoto">
            Ubicación
          </a>
          <a href="#try" className="transition-colors hover:text-rocoto">
            Reservar
          </a>
        </nav>
      </div>
    </footer>
  );
}
