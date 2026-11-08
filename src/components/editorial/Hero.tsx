"use client";

import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Layers,
  Zap,
  Moon,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import RentoStack3D, { RENTO_STACK_LAYERS } from "./RentoStack3D";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollSpread, setScrollSpread] = useState(0);
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const total = Math.max(rect.height - window.innerHeight * 0.5, 1);
      const scrolled = Math.min(Math.max(-rect.top / total, 0), 1);
      setScrollSpread(scrolled);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const vaultCards = [
    {
      code: "VENTAS & CATÁLOGO",
      metric: "< 4s",
      unit: "respuesta real",
      desc: "Catálogo sincronizado cada 15m con Meta",
      href: "#capas",
      icon: Zap,
      accent: "text-[#00B7D1]",
      layerIdx: 0,
      hasSparkline: false,
    },
    {
      code: "GUARDIA NOCTURNA",
      metric: "55%",
      unit: "consultas nocturnas",
      desc: "Atención continua de 18:00 a 24:00 hs",
      href: "#problema",
      icon: Moon,
      accent: "text-[#E5A93C]",
      layerIdx: 1,
      hasSparkline: false,
    },
    {
      code: "RETENCIÓN ACTIVA",
      metric: "-80%",
      unit: "fuga evitada (>5m)",
      desc: "Contacto efectivo antes que otra agencia",
      href: "#capas",
      icon: ShieldCheck,
      accent: "text-emerald-400",
      layerIdx: 2,
      hasSparkline: false,
    },
    {
      code: "RENTO MATCH",
      metric: "+10%",
      unit: "tolerancia comercial",
      desc: "Operaciones USD billete y lista de espera",
      href: "#simulador",
      icon: Sparkles,
      accent: "text-[#67E8F9]",
      layerIdx: 3,
      hasSparkline: true,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative pt-12 pb-24 md:pt-20 md:pb-32 border-b border-white/[0.06] strata-atmosphere"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* LEFT COLUMN: Headline + Dual Pills -> Scrolls into 2x2 Vaults */}
          <div className="lg:col-span-7 space-y-14">
            <div className="space-y-7 pt-2">
              <div className="inline-flex items-center gap-2.5 text-[11px] font-mono-tech uppercase tracking-[0.18em] text-[#00B7D1]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B7D1] shadow-[0_0_10px_#00B7D1]" />
                <span>CENTRO DE COMANDO OPERATIVO · BY BALUMTECH</span>
              </div>

              <h1 className="font-display text-[44px] sm:text-6xl lg:text-[72px] font-semibold text-white leading-[1.02] tracking-[-0.04em]">
                Tu inmobiliaria
                <br />
                responde en 4s,
                <br />
                <span className="font-serif-accent font-normal text-[#00B7D1] pr-1">
                  sin perder ventas.
                </span>
              </h1>

              <p className="text-base sm:text-[17px] text-slate-400 font-normal leading-relaxed max-w-xl">
                RentoAI integra ventas en ARS o USD billete, captación de tasaciones VIP,
                soporte bajo DNU 70/2023 y cobranzas ARCA en un único recepcionista digital
                de élite activo las 24 horas en tu WhatsApp oficial.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#demo"
                  className="strata-pill-primary pl-6 pr-2.5 py-2.5 text-sm font-medium"
                >
                  <span>Agendar demostración</span>
                  <span className="w-7 h-7 rounded-full bg-[#67E8F9]/20 border border-[#67E8F9]/50 flex items-center justify-center text-white">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>

                <a
                  href="#capas"
                  className="strata-pill-secondary px-6 py-3.5 text-sm font-medium"
                >
                  <Layers className="w-4 h-4 text-[#00B7D1]" />
                  <span>Explorar las 4 capas</span>
                </a>
              </div>
            </div>

            {/* Part 2: Double-Framed 2x2 Bento Vault Grid */}
            <div className="space-y-3">
              <div className="strata-shell">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {vaultCards.map((card) => {
                    const Icon = card.icon;
                    return (
                      <a
                        key={card.code}
                        href={card.href}
                        onMouseEnter={() => setHoveredLayer(card.layerIdx)}
                        onMouseLeave={() => setHoveredLayer(null)}
                        className="strata-vault-card p-5 sm:p-6 flex flex-col justify-between min-h-[168px] group relative overflow-hidden"
                      >
                        <div className="flex items-center justify-between">
                          <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center">
                            <Icon className={`w-4 h-4 ${card.accent}`} />
                          </div>
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] text-slate-300 group-hover:border-[#00B7D1]/40 group-hover:text-white transition-colors">
                            <span>Ver capa</span>
                            <ArrowUpRight className="w-3 h-3 opacity-75" />
                          </span>
                        </div>

                        <div className="mt-5 relative z-10">
                          <span className="text-[10px] font-mono-tech uppercase tracking-widest text-slate-400 block">
                            {card.code}
                          </span>
                          <div className="mt-1 flex items-baseline gap-2">
                            <span className="font-display text-3xl sm:text-[34px] font-semibold text-white tracking-tight">
                              {card.metric}
                            </span>
                            <span className="text-xs text-slate-400 font-normal">
                              {card.unit}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1.5 leading-snug">
                            {card.desc}
                          </p>
                        </div>

                        {card.hasSparkline && (
                          <svg
                            viewBox="0 0 120 36"
                            className="pointer-events-none absolute bottom-3 right-4 w-24 h-8 opacity-45 group-hover:opacity-80 transition-opacity"
                            fill="none"
                          >
                            <path
                              d="M2 30 C 24 28, 38 22, 56 20 C 76 18, 92 8, 118 4"
                              stroke="#00B7D1"
                              strokeWidth="1.75"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                      </a>
                    );
                  })}
                </div>
              </div>

              <p className="text-[11px] text-slate-500 pl-2 font-sans">
                Métricas auditadas sobre diagnóstico inmobiliario argentino · Setup llave en mano en 15 días.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky 3D 4-Layer RentoAI Stack */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-center justify-center pt-4 lg:pt-12">
            <div className="w-full rounded-[32px] p-6 sm:p-8 flex flex-col items-center justify-center relative">
              <RentoStack3D
                mode="hero"
                activeLayer={hoveredLayer}
                scrollSpread={scrollSpread}
                onSelectLayer={(idx) =>
                  setHoveredLayer((prev) => (prev === idx ? null : idx))
                }
                className="py-10 sm:py-14"
              />

              {/* Interactive Layer Legend Pills */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5">
                {RENTO_STACK_LAYERS.map((layer, idx) => {
                  const isActive = hoveredLayer === idx;
                  return (
                    <button
                      key={layer.id}
                      type="button"
                      onMouseEnter={() => setHoveredLayer(idx)}
                      onMouseLeave={() => setHoveredLayer(null)}
                      onClick={() =>
                        setHoveredLayer((prev) => (prev === idx ? null : idx))
                      }
                      className={`px-3 py-1.5 rounded-full text-[10px] font-mono-tech transition-all border flex items-center gap-1.5 ${
                        isActive
                          ? "bg-white/10 text-white border-white/30 shadow-sm"
                          : "bg-[#0A0E14]/80 text-slate-400 border-white/[0.07] hover:text-slate-200"
                      }`}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: layer.accentHex }}
                      />
                      <span>{layer.code}</span>
                    </button>
                  );
                })}
              </div>

              <span className="mt-3 text-[10px] font-mono-tech text-slate-500 uppercase tracking-widest text-center">
                Núcleo Agéntico de 4 Capas · RentoAI Oficial
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
