import { GlowCard } from "@/components/glow-card";

const TIERS = [
  {
    name: "Bedroom",
    price: "Free",
    detail: "3 masters / month",
    features: ["-14 LUFS default target", "WAV + MP3 export", "Standard queue"],
  },
  {
    name: "Studio",
    price: "$12/mo",
    detail: "Unlimited masters",
    features: [
      "Custom LUFS target",
      "Reference-track matching",
      "Priority render queue",
    ],
    highlight: true,
  },
  {
    name: "Label",
    price: "Custom",
    detail: "Team seats",
    features: ["Batch processing", "API access", "Shared presets"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass">
          Rates
        </p>
        <h2 className="mt-3 font-display text-4xl italic text-cream sm:text-5xl">
          Pick your room
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TIERS.map((tier) => (
            <GlowCard
              key={tier.name}
              className={`flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brass hover:shadow-[0_0_50px_-10px_rgba(201,124,61,0.5)] ${
                tier.highlight
                  ? "border-brass bg-surface"
                  : "border-surface bg-surface/40"
              }`}
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-cream-muted">
                {tier.name}
              </p>
              <p className="mt-3 font-display text-3xl italic text-cream">
                {tier.price}
              </p>
              <p className="mt-1 text-sm text-cream-muted">{tier.detail}</p>
              <ul className="mt-6 flex-1 space-y-2">
                {tier.features.map((f) => (
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
