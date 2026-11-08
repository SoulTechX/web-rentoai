import { Check, X, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { PLANS, BRAND, METRICS } from "@/lib/constants";

export default function PlansSection() {
  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    "Hola, me interesa conocer la propuesta y cotización de RentoAI."
  )}`;

  return (
    <section id="planes" className="py-20 md:py-32 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-4">
            <span>PLANES A MEDIDA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Space_Grotesk'] font-bold text-white tracking-tight">
            Diseñado para la escala de{" "}
            <span className="text-gradient-cyan">tu Inmobiliaria</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Sin contratos abusivos ni costes ocultos. Implementación integral garantizada con{" "}
            <strong className="text-white font-semibold">Setup Llave en Mano en {METRICS.setupDays}</strong>.
          </p>
        </div>

        {/* 2 Clean Cards (Hick's Law) */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 border relative ${
                plan.isPopular
                  ? "bg-gradient-to-b from-cyan-950/50 via-slate-900 to-slate-950 border-cyan-400/60 shadow-2xl shadow-cyan-950/70 scale-[1.02]"
                  : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300 text-slate-950 text-xs font-bold font-mono tracking-wider shadow-md shadow-cyan-400/30 uppercase">
                  ⭐ Más Elegido por Inmobiliarias Líderes
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-mono font-bold px-3 py-1 rounded-lg ${
                      plan.isPopular
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "bg-slate-800 text-slate-300"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {plan.name}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-8">
                  {plan.description}
                </p>

                <div className="space-y-3.5 border-t border-slate-800/80 pt-6">
                  <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block mb-2 font-semibold">
                    Incluye:
                  </span>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}

                  {plan.excludedFeatures && plan.excludedFeatures.length > 0 && (
                    <div className="pt-4 space-y-2.5 opacity-60">
                      {plan.excludedFeatures.map((ex, i) => (
                        <div key={i} className="flex items-start gap-3 text-xs text-slate-400">
                          <X className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                          <span>{ex}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-800">
                <a
                  href="#demo"
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold transition-all shadow-md ${
                    plan.isPopular
                      ? "bg-gradient-to-r from-cyan-400 to-cyan-300 text-slate-950 hover:from-cyan-300 hover:to-cyan-200 shadow-cyan-500/30 hover:scale-[1.01]"
                      : "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700"
                  }`}
                >
                  <span>{plan.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Setup Llave en Mano Banner */}
        <div className="mt-16 max-w-4xl mx-auto rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              Puesta en marcha: Setup Llave en Mano en 15 Días
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              El equipo de ingenieros de BALUMTech audita tu catálogo, calibra los agentes y entrega
              el sistema 100% operativo sin interrumpir tus operaciones habituales.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-5 py-2.5 text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 rounded-xl hover:bg-cyan-900/50 transition-all"
          >
            Hablar con un consultor
          </a>
        </div>
      </div>
    </section>
  );
}
