import { Check, X, ArrowRight, Zap } from "lucide-react";
import { PLANS, BRAND, METRICS } from "@/lib/constants";

export default function PricingQuote() {
  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    "Hola, me gustaría solicitar una cotización personalizada para mi inmobiliaria."
  )}`;

  return (
    <section
      id="planes"
      className="py-24 md:py-32 border-b border-white/[0.06] strata-atmosphere"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <span className="text-[11px] font-mono-tech text-[#00B7D1] uppercase tracking-[0.18em] block">
            PROPUESTA DE IMPLEMENTACIÓN
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-white font-semibold leading-[1.06] tracking-[-0.035em]">
            Planes adaptados a tu{" "}
            <span className="font-serif-accent font-normal text-[#00B7D1]">
              estructura comercial.
            </span>
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Cotización a medida según cartera activa y volumen de canales. Todos los planes
            incluyen{" "}
            <strong className="text-slate-200 font-medium">
              Setup Llave en Mano en {METRICS.setupDays}
            </strong>{" "}
            por BALUMTech.
          </p>
        </div>

        {/* 2 Plans inside Strata Double-Framed Vaults */}
        <div className="strata-shell">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-stretch">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`strata-vault-card p-7 sm:p-10 flex flex-col justify-between relative overflow-hidden ${
                  plan.isPopular ? "border-[#00B7D1]/50" : ""
                }`}
                style={
                  plan.isPopular
                    ? {
                        background:
                          "radial-gradient(90% 55% at 50% 105%, rgba(0, 183, 209, 0.24) 0%, rgba(16, 24, 36, 0.96) 60%, rgba(9, 13, 19, 0.98) 100%)",
                      }
                    : undefined
                }
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono-tech uppercase text-[#00B7D1] tracking-wider">
                      {plan.badge}
                    </span>
                    {plan.isPopular && (
                      <span className="text-[10px] font-mono-tech uppercase px-3 py-1 rounded-full bg-[#00B7D1]/15 text-[#67E8F9] border border-[#00B7D1]/40">
                        Suite Completa Recomendada
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-white font-semibold tracking-tight mb-3">
                    {plan.name}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mb-8">
                    {plan.description}
                  </p>

                  <div className="space-y-3 border-t border-white/[0.07] pt-6">
                    <span className="text-[10px] font-mono-tech uppercase text-slate-400 tracking-widest block mb-2">
                      ALCANCE OPERATIVO:
                    </span>
                    {plan.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-xs sm:text-sm text-slate-200"
                      >
                        <div className="w-4 h-4 rounded-full bg-[#00B7D1]/20 text-[#67E8F9] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}

                    {plan.excludedFeatures && plan.excludedFeatures.length > 0 && (
                      <div className="pt-4 space-y-2 opacity-50">
                        {plan.excludedFeatures.map((ex, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 text-xs text-slate-400"
                          >
                            <X className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                            <span>{ex}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/[0.07]">
                  <a
                    href="#demo"
                    className={`w-full py-3.5 text-xs sm:text-sm font-medium justify-center ${
                      plan.isPopular
                        ? "strata-pill-primary"
                        : "strata-pill-secondary"
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Setup Llave en Mano Strip */}
        <div className="mt-8 rounded-2xl bg-[#090D14] border border-white/[0.08] p-5 sm:px-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2.5 text-slate-200">
            <Zap className="w-4 h-4 text-[#00B7D1] shrink-0" />
            <span>
              Puesta en marcha llave en mano en 15 días con calibración de catálogo y
              capacitación del equipo comercial.
            </span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-tech text-[#67E8F9] hover:underline whitespace-nowrap"
          >
            Cotizar por WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
