const INFO = [
  {
    name: "Horario",
    value: "12pm – 11pm",
    detail: "Todos los días",
    features: ["Almuerzo desde las 12pm", "Cena hasta las 11pm", "Sin cierre entre turnos"],
  },
  {
    name: "Ubicación",
    value: "Jerusalén 302",
    detail: "Centro Histórico, Arequipa",
    features: ["A 3 cuadras de la Plaza de Armas", "Estacionamiento en la cuadra", "Fácil acceso a pie"],
    highlight: true,
  },
  {
    name: "Reservas",
    value: "Por WhatsApp",
    detail: "Respuesta en minutos",
    features: ["Grupos de hasta 12 personas", "Eventos privados a pedido", "Sin costo de reserva"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-rocoto">
          Información
        </p>
        <h2 className="mt-3 font-display text-4xl font-black text-ink sm:text-5xl">
          Todo lo que necesitás saber
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {INFO.map((item) => (
            <div
              key={item.name}
              className={`relative bg-paper p-8 shadow-[3px_3px_0_rgba(43,33,26,0.15)] ${
                item.highlight ? "border-2 border-rocoto" : "border border-ink/10"
              }`}
            >
              <span
                aria-hidden
                className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink/70"
              />
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
                {item.name}
              </p>
              <p className="mt-3 font-display text-2xl font-black text-ink">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-ink-muted">{item.detail}</p>
              <ul className="mt-6 space-y-2">
                {item.features.map((f) => (
                  <li
                    key={f}
                    className="font-mono text-xs text-ink-muted before:mr-2 before:text-rocoto before:content-['·']"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
