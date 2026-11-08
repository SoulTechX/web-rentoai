"use client";

import { useState } from "react";
import { Calculator, DollarSign, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

export default function RoiCalculator() {
  const [inquiriesPerMonth, setInquiriesPerMonth] = useState<number>(300);
  const [averageCommissionUSD, setAverageCommissionUSD] = useState<number>(3500);

  // 55% fuera de horario
  const offHoursInquiries = Math.round(inquiriesPerMonth * 0.55);
  // Estimación conservadora de rescate: 1% de esas consultas fuera de horario convertidas en venta anual adicional
  const additionalDealsPerYear = Math.max(1, Math.round((offHoursInquiries * 12 * 0.008)));
  const estimatedAnnualRevenue = additionalDealsPerYear * averageCommissionUSD;

  return (
    <section id="roi" className="py-20 md:py-32 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-mono mb-4">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>RETORNO DE INVERSIÓN (ROI)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Space_Grotesk'] font-bold text-white tracking-tight">
            Calculá cuánto capital dejás escapar{" "}
            <span className="text-gradient-gold">por responder tarde</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Una sola operación inmobiliaria rescatada paga la implementación y el servicio de RentoAI
            por los próximos 3 años.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="mt-16 max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 border-amber-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Interactive Sliders */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-slate-200">
                    Consultas mensuales recibidas (WhatsApp / Portales):
                  </label>
                  <span className="text-lg font-mono font-bold text-cyan-400">
                    {inquiriesPerMonth}
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1500"
                  step="25"
                  value={inquiriesPerMonth}
                  onChange={(e) => setInquiriesPerMonth(Number(e.target.value))}
                  className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                  <span>50 msjs/mes</span>
                  <span>1.500 msjs/mes</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-slate-200">
                    Comisión promedio por venta (en USD):
                  </label>
                  <span className="text-lg font-mono font-bold text-amber-400">
                    USD ${averageCommissionUSD.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="1500"
                  max="12000"
                  step="250"
                  value={averageCommissionUSD}
                  onChange={(e) => setAverageCommissionUSD(Number(e.target.value))}
                  className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                  <span>USD $1.500</span>
                  <span>USD $12.000</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-1.5 font-mono">
                <div className="flex justify-between text-slate-300">
                  <span>Consultas fuera de horario (55%):</span>
                  <span className="font-bold text-cyan-400">~{offHoursInquiries} al mes</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Total anual de oportunidades nocturnas:</span>
                  <span className="font-bold text-cyan-400">~{offHoursInquiries * 12} leads</span>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-amber-950/40 via-slate-900 to-cyan-950/40 border border-amber-500/40 text-center flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold">
                  Recuperación Estimada Anual
                </span>

                <div className="mt-4 text-4xl sm:text-5xl font-['Space_Grotesk'] font-extrabold text-amber-300 font-mono">
                  +USD ${estimatedAnnualRevenue.toLocaleString()}
                </div>

                <p className="mt-2 text-xs text-slate-300">
                  en honorarios adicionales por rescatar {additionalDealsPerYear} operaciones al año
                </p>

                <div className="mt-6 pt-6 border-t border-slate-800 text-xs text-slate-300 text-left space-y-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Respuesta en 4s antes de que la competencia conteste.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Tasaciones VIP derivadas al instante a tu celular.</span>
                  </div>
                </div>
              </div>

              <a
                href="#demo"
                className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md shadow-amber-500/25"
              >
                <span>Blindar mis ventas ahora</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
