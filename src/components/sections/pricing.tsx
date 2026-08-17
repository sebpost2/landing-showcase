import { GlowCard } from "@/components/glow-card";

const INFO = [
  {
    name: "Horario",
    price: "12pm – 11pm",
    detail: "Todos los días",
    features: ["Almuerzo desde las 12pm", "Cena hasta las 11pm", "Sin cierre entre turnos"],
  },
  {
    name: "Ubicación",
    price: "Jerusalén 302",
    detail: "Centro Histórico, Arequipa",
    features: ["A 3 cuadras de la Plaza de Armas", "Estacionamiento en la cuadra", "Fácil acceso a pie"],
    highlight: true,
  },
  {
    name: "Reservas",
    price: "Por WhatsApp",
    detail: "Respuesta en minutos",
    features: ["Grupos de hasta 12 personas", "Eventos privados a pedido", "Sin costo de reserva"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
          Información
        </p>
        <h2 className="mt-3 font-display text-4xl italic text-cream sm:text-5xl">
          Todo lo que necesitás saber
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {INFO.map((item) => (
            <GlowCard
              key={item.name}
              className={`flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brass hover:shadow-[0_0_50px_-10px_rgba(201,124,61,0.5)] ${
                item.highlight
                  ? "border-brass bg-surface"
                  : "border-surface bg-surface/40"
              }`}
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-cream-muted">
                {item.name}
              </p>
              <p className="mt-3 font-display text-3xl italic text-cream">
                {item.price}
              </p>
              <p className="mt-1 text-sm text-cream-muted">{item.detail}</p>
              <ul className="mt-6 flex-1 space-y-2">
                {item.features.map((f) => (
                  <li
                    key={f}
                    className="font-mono text-xs text-cream-muted before:mr-2 before:text-brass before:content-['·']"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
