"use client";

import { ArrowRight, Database, MessageSquare, ArrowLeftRight } from "lucide-react";
import RentoStack3D from "./RentoStack3D";

export default function HowItWorksSticky() {
  const steps = [
    {
      stepTag: "PASO 1",
      title: "Conectá tu línea y catálogo una sola vez",
      description:
        "Integramos Meta Cloud API oficial sobre tu número actual de inmobiliaria sin perder historial y sincronizamos tu inventario vivo cada 15 minutos. Setup llave en mano en 15 días.",
      cta: "Consultar integración",
      href: "#demo",
      icon: Database,
      borderColor: "rgba(229, 169, 60, 0.45)",
      glowBg:
        "radial-gradient(85% 65% at 50% 105%, rgba(229, 169, 60, 0.42) 0%, rgba(229, 169, 60, 0.08) 52%, rgba(9, 13, 19, 0.96) 100%)",
      outerGlow: "0 26px 65px -20px rgba(229, 169, 60, 0.28)",
    },
    {
      stepTag: "PASO 2",
      title: "Calificación real en ARS o USD billete",
      description:
        "Atiende texto y audios de voz las 24 hs con voseo rioplatense natural. Aplica tolerancia comercial del +10%, filtra mascotas o crédito y aísla cada sesión por 72 horas.",
      cta: "Ver el simulador",
      href: "#simulador",
      icon: MessageSquare,
      borderColor: "rgba(186, 230, 253, 0.42)",
      glowBg:
        "radial-gradient(85% 65% at 50% 105%, rgba(148, 197, 235, 0.38) 0%, rgba(56, 189, 248, 0.08) 52%, rgba(9, 13, 19, 0.96) 100%)",
      outerGlow: "0 26px 65px -20px rgba(125, 211, 252, 0.24)",
    },
    {
      stepTag: "PASO 3",
      title: "Despacho VIP o captura en RENTO Match",
      description:
        "Tus martilleros reciben un ticket prioritario en su celular solo cuando hay una visita o tasación firme. Si hoy no hay stock, guarda al interesado en La Bóveda para futuro Match.",
      cta: "Explorar planes",
      href: "#planes",
      icon: ArrowLeftRight,
      borderColor: "rgba(0, 183, 209, 0.52)",
      glowBg:
        "radial-gradient(85% 65% at 50% 105%, rgba(16, 185, 129, 0.36) 0%, rgba(0, 183, 209, 0.14) 48%, rgba(9, 13, 19, 0.96) 100%)",
      outerGlow: "0 26px 65px -20px rgba(16, 185, 129, 0.3)",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="relative py-24 md:py-32 border-b border-white/[0.06] overflow-hidden strata-atmosphere"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Headline + Ghosted 3D Stack on Right (Exact match to sec_19.png) */}
        <div className="flex items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl space-y-3">
            <span className="text-[11px] font-mono-tech text-slate-400 uppercase tracking-[0.18em] block">
              CÓMO FUNCIONA
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-[54px] text-white font-semibold leading-[1.05] tracking-[-0.035em]">
              Del primer WhatsApp a la visita en{" "}
              <span className="font-serif-accent font-normal text-[#E5A93C]">
                tres pasos.
              </span>
            </h2>
          </div>

          <div className="hidden xl:block -mb-10 -mr-6 pointer-events-none">
            <RentoStack3D mode="ghost" />
          </div>
        </div>

        {/* 3 Ambient Radial-Glow Cards Side-by-Side (Exact match to sec_19.png) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.stepTag}
                className="rounded-[28px] p-7 sm:p-8 flex flex-col justify-between min-h-[340px] transition-transform duration-300 hover:-translate-y-1.5"
                style={{
                  background: st.glowBg,
                  border: `1px solid ${st.borderColor}`,
                  boxShadow: `inset 0 1px 0 rgba(255,255,255,0.12), ${st.outerGlow}`,
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <div>
                  {/* Top Rounded Square Icon Box */}
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/15 flex items-center justify-center text-slate-200 mb-10 shadow-inner">
                    <Icon className="w-4 h-4" />
                  </div>

                  <span className="text-[10px] font-mono-tech uppercase tracking-[0.18em] text-slate-400 block mb-2">
                    {st.stepTag}
                  </span>

                  <h3 className="font-display text-2xl text-white font-semibold tracking-tight leading-snug mb-3">
                    {st.title}
                  </h3>

                  <p className="text-sm text-slate-300/90 leading-relaxed">
                    {st.description}
                  </p>
                </div>

                <div className="pt-8">
                  <a
                    href={st.href}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:text-[#67E8F9] transition-colors group"
                  >
                    <span>{st.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
