"use client";

import { useState, useEffect, useRef } from "react";
import { RotateCcw } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import RentoStack3D from "./RentoStack3D";

interface PillarSpec {
  id: string;
  cx: number;
  baseY: number;
  targetPct: number;
  targetHeight: number;
  ghostCapHeight?: number;
  timeLabel: string;
  subLabel: string;
  subColor: string;
  isHeroPillar?: boolean;
  detailText: string;
}

const PILLARS: PillarSpec[] = [
  {
    id: "24h",
    cx: 106,
    baseY: 244,
    targetPct: 5,
    targetHeight: 16,
    ghostCapHeight: 54,
    timeLabel: "+24 hs",
    subLabel: "Oficina cerrada",
    subColor: "#64748B",
    detailText: "+24 hs de demora: solo el 5% de los contactos sigue disponible.",
  },
  {
    id: "5m",
    cx: 178,
    baseY: 234,
    targetPct: 20,
    targetHeight: 38,
    ghostCapHeight: 96,
    timeLabel: "> 5 min",
    subLabel: "-80% conversión",
    subColor: "#F43F5E",
    detailText: "Pasados 5 minutos: la tasa de contacto efectivo cae al 20% (-80%).",
  },
  {
    id: "habil",
    cx: 250,
    baseY: 224,
    targetPct: 48,
    targetHeight: 86,
    timeLabel: "Horario hábil",
    subLabel: "Atención manual",
    subColor: "#94A3B8",
    detailText: "Atención manual diurna: 48% de retención (pierde el 55% nocturno).",
  },
  {
    id: "rento",
    cx: 326,
    baseY: 214,
    targetPct: 98,
    targetHeight: 158,
    timeLabel: "< 4 seg · 24/7",
    subLabel: "RentoAI Activo",
    subColor: "#67E8F9",
    isHeroPillar: true,
    detailText: "RentoAI (< 4 seg 24/7): 98% de contacto efectivo y calificación en vivo.",
  },
];

export default function ProblemSpeed() {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [replayKey, setReplayKey] = useState(0);
  const [pillarProgress, setPillarProgress] = useState<number[]>([0, 0, 0, 0]);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Trigger when scrolled into view
  useEffect(() => {
    const el = chartRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasTriggered]);

  // Smooth staggered 0% -> target% animation for all 4 isometric 3D pillars
  useEffect(() => {
    if (!hasTriggered) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setPillarProgress([1, 1, 1, 1]);
      return;
    }

    let rafId: number;
    const startTime = performance.now();
    const duration = 1150;
    const stagger = 110;

    setPillarProgress([0, 0, 0, 0]);

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const next = PILLARS.map((_, idx) => {
        const localElapsed = Math.max(0, elapsed - idx * stagger);
        const raw = Math.min(localElapsed / duration, 1);
        // Emil Kowalski spring-inspired ease-out quart
        return 1 - Math.pow(1 - raw, 4);
      });

      setPillarProgress(next);

      if (elapsed < duration + stagger * PILLARS.length) {
        rafId = requestAnimationFrame(tick);
      } else {
        setPillarProgress([1, 1, 1, 1]);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [hasTriggered, replayKey]);

  const dx = 34;
  const dy = 16;

  return (
    <section
      id="problema"
      className="relative py-24 md:py-32 border-b border-white/[0.06] overflow-hidden strata-atmosphere"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row + Ghosted 3D Stack Emblem */}
        <div className="flex items-start justify-between gap-8 mb-14">
          <div className="max-w-2xl space-y-4">
            <span className="text-[11px] font-mono-tech text-[#E5A93C] uppercase tracking-[0.18em] block">
              DIAGNÓSTICO DE MERCADO INMOBILIARIO
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-white font-semibold leading-[1.06] tracking-[-0.035em]">
              La velocidad de respuesta decide quién{" "}
              <span className="font-serif-accent font-normal text-[#00B7D1]">
                cierra la operación.
              </span>
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              Las inmobiliarias invierten miles de dólares en portales y pauta digital, pero más
              de la mitad de los propietarios y compradores escribe cuando la oficina ya cerró.
            </p>
          </div>

          <div className="hidden xl:block -mt-8 -mr-6 pointer-events-none">
            <RentoStack3D mode="ghost" />
          </div>
        </div>

        {/* Main 2-Column Strata Market Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT: Animated Isometric 3D Stepped Bar Chart Card (0% -> target%) */}
          <div className="lg:col-span-6" ref={chartRef}>
            <div
              className="relative rounded-[28px] p-6 sm:p-8 bg-[#080C12]/95 overflow-hidden"
              style={{
                border: "1px solid rgba(0, 183, 209, 0.28)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.08), 0 28px 70px -20px rgba(0, 183, 209, 0.18)",
              }}
            >
              {/* Soft bottom radial ambient light */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-44 opacity-45"
                style={{
                  background:
                    "radial-gradient(ellipse at 55% 100%, rgba(0, 183, 209, 0.32) 0%, rgba(229, 169, 60, 0.1) 45%, transparent 75%)",
                }}
              />

              {/* Card Header + Replay Button */}
              <div className="flex items-center justify-between gap-2 text-[10px] font-mono-tech uppercase tracking-widest text-slate-400 relative z-10">
                <span>TASA DE CONTACTO EFECTIVO SEGÚN DEMORA</span>
                <div className="flex items-center gap-2">
                  <span className="text-[#00B7D1]">0% → 98%</span>
                  <button
                    type="button"
                    onClick={() => {
                      setHasTriggered(true);
                      setReplayKey((k) => k + 1);
                    }}
                    className="p-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-400 hover:text-[#67E8F9] hover:border-[#00B7D1]/40 transition-colors cursor-pointer"
                    title="Repetir animación de pilares"
                    aria-label="Repetir animación de pilares"
                  >
                    <RotateCcw className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Animated Isometric 3D Stepped Prisms SVG */}
              <div className="my-5 relative z-10 flex items-center justify-center">
                <svg
                  viewBox="0 0 460 300"
                  className="w-full max-w-[440px] h-auto select-none"
                  role="img"
                  aria-label="Gráfico isométrico 3D animado de 0% al porcentaje de retención según velocidad de respuesta"
                >
                  <defs>
                    <linearGradient id="slateLeft" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#334155" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#0F172A" stopOpacity="0.96" />
                    </linearGradient>
                    <linearGradient id="slateRight" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1E293B" stopOpacity="0.92" />
                      <stop offset="100%" stopColor="#090D16" stopOpacity="0.98" />
                    </linearGradient>
                    <linearGradient id="cyanTop" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#A5F3FC" />
                      <stop offset="100%" stopColor="#00B7D1" />
                    </linearGradient>
                    <linearGradient id="cyanLeft" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00B7D1" stopOpacity="0.94" />
                      <stop offset="100%" stopColor="#083344" stopOpacity="0.96" />
                    </linearGradient>
                    <linearGradient id="cyanRight" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0E7490" stopOpacity="0.96" />
                      <stop offset="100%" stopColor="#041E2B" stopOpacity="0.98" />
                    </linearGradient>
                    <pattern
                      id="prismRibs"
                      width="4"
                      height="10"
                      patternUnits="userSpaceOnUse"
                    >
                      <line
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="10"
                        stroke="rgba(255,255,255,0.09)"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>

                  {/* Floor glow ellipse */}
                  <ellipse
                    cx="235"
                    cy="246"
                    rx="172"
                    ry="34"
                    fill="rgba(0, 183, 209, 0.08)"
                  />

                  {PILLARS.map((p, idx) => {
                    const prog = pillarProgress[idx] ?? 0;
                    const h = Math.max(2, p.targetHeight * prog);
                    const currentPct = Math.round(p.targetPct * prog);
                    const isHovered = hoveredIdx === idx;
                    const { cx, baseY } = p;

                    const topDiamond = `${cx - dx},${baseY - h} ${cx},${
                      baseY - dy - h
                    } ${cx + dx},${baseY - h} ${cx},${baseY + dy - h}`;
                    const leftWall = `${cx - dx},${baseY - h} ${cx},${
                      baseY + dy - h
                    } ${cx},${baseY + dy} ${cx - dx},${baseY}`;
                    const rightWall = `${cx + dx},${baseY - h} ${cx},${
                      baseY + dy - h
                    } ${cx},${baseY + dy} ${cx + dx},${baseY}`;

                    const ghostH = p.ghostCapHeight ? p.ghostCapHeight * prog : 0;
                    const ghostDiamond = p.ghostCapHeight
                      ? `${cx - dx},${baseY - ghostH} ${cx},${
                          baseY - dy - ghostH
                        } ${cx + dx},${baseY - ghostH} ${cx},${
                          baseY + dy - ghostH
                        }`
                      : "";

                    const labelAnchorY = p.ghostCapHeight
                      ? baseY - ghostH - 30
                      : baseY - h - 28;

                    return (
                      <g
                        key={p.id}
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                        className="cursor-pointer"
                        style={{
                          opacity:
                            hoveredIdx !== null && !isHovered ? 0.55 : 1,
                          transition: "opacity 180ms ease",
                        }}
                      >
                        {/* Extruded Left Wall */}
                        <polygon
                          points={leftWall}
                          fill={
                            p.isHeroPillar ? "url(#cyanLeft)" : "url(#slateLeft)"
                          }
                        />
                        <polygon points={leftWall} fill="url(#prismRibs)" />

                        {/* Extruded Right Wall */}
                        <polygon
                          points={rightWall}
                          fill={
                            p.isHeroPillar
                              ? "url(#cyanRight)"
                              : "url(#slateRight)"
                          }
                        />

                        {/* Top Isometric Cap */}
                        <polygon
                          points={topDiamond}
                          fill={
                            p.isHeroPillar
                              ? "url(#cyanTop)"
                              : idx === 0
                              ? "#475569"
                              : "#64748B"
                          }
                          stroke={
                            isHovered || p.isHeroPillar
                              ? "rgba(165,243,252,0.75)"
                              : "rgba(255,255,255,0.18)"
                          }
                          strokeWidth={isHovered ? "1.5" : "0.75"}
                        />

                        {/* Translucent Floating Comparison Cap (for +24h and >5m) */}
                        {p.ghostCapHeight && (
                          <polygon
                            points={ghostDiamond}
                            fill="rgba(255,255,255,0.08)"
                            stroke="rgba(255,255,255,0.34)"
                            strokeWidth="1"
                          />
                        )}

                        {/* Animated Live Percentage Badge (0% -> targetPct%) */}
                        <text
                          x={cx}
                          y={labelAnchorY - 15}
                          textAnchor="middle"
                          fill={p.isHeroPillar ? "#67E8F9" : "#FFFFFF"}
                          fontSize={p.isHeroPillar ? "16" : "13"}
                          fontWeight="700"
                        >
                          {currentPct}%
                        </text>

                        {/* Time Window Label */}
                        <text
                          x={cx}
                          y={labelAnchorY - 2}
                          textAnchor="middle"
                          fill={p.isHeroPillar ? "#F8FAFC" : "#CBD5E1"}
                          fontSize="10.5"
                          fontWeight="600"
                        >
                          {p.timeLabel}
                        </text>

                        {/* Subtitle */}
                        <text
                          x={cx}
                          y={labelAnchorY + 9}
                          textAnchor="middle"
                          fill={p.subColor}
                          fontSize="8.5"
                        >
                          {p.subLabel}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Interactive Hover / Live Status Footer */}
              <div className="pt-4 border-t border-white/[0.07] flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400 relative z-10">
                {hoveredIdx !== null ? (
                  <span className="text-[#67E8F9] font-mono-tech text-[10.5px]">
                    ● {PILLARS[hoveredIdx].detailText}
                  </span>
                ) : (
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-sm bg-slate-500" />
                      Guardia tradicional (5%–48%)
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-200">
                      <span className="w-2 h-2 rounded-sm bg-[#00B7D1]" />
                      RentoAI 24/7 (98%)
                    </span>
                  </div>
                )}
                <span className="font-mono-tech text-[#67E8F9]">
                  1 sola venta cubre 3 años
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: 4 Giant Stacked Figures with Hairline Dividers */}
          <div className="lg:col-span-6 divide-y divide-white/[0.08]">
            <div className="py-6 first:pt-0 flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6">
              <div className="font-display text-4xl sm:text-5xl font-semibold text-white tracking-tight shrink-0 sm:w-44">
                <AnimatedCounter end={55} duration={950} suffix="%" />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                de las consultas por compras en USD y tasaciones ingresan entre las{" "}
                <span className="text-slate-200">18:00 y las 24:00 hs</span> o fines de semana,
                cuando la oficina está cerrada.
              </p>
            </div>

            <div className="py-6 flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6">
              <div className="font-display text-4xl sm:text-5xl font-semibold text-rose-400 tracking-tight shrink-0 sm:w-44">
                <AnimatedCounter end={-80} duration={950} suffix="%" />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                cae la probabilidad de contacto efectivo pasados los primeros{" "}
                <span className="text-slate-200">5 minutos de demora</span>. El propietario ya le
                escribió a otra agencia de la zona.
              </p>
            </div>

            <div className="py-6 flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6">
              <div className="font-display text-4xl sm:text-5xl font-semibold text-[#E5A93C] tracking-tight shrink-0 sm:w-44">
                $<AnimatedCounter end={3} duration={900} />k–4k
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                en USD de comisión promedio por operación inmobiliaria. Rescatar{" "}
                <span className="text-slate-200">una única tasación nocturna</span> paga 3 años
                completos de suscripción (<span className="text-[#E5A93C]">ROI 36x</span>).
              </p>
            </div>

            <div className="py-6 flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6">
              <div className="font-display text-4xl sm:text-5xl font-semibold text-[#00B7D1] tracking-tight shrink-0 sm:w-44">
                $3–$12
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                en USD por mes de consumo operativo en Meta Cloud API gracias al{" "}
                <span className="text-slate-200">Escudo Financiero de BALUMTech</span> que compacta
                mensajes y filtra ráfagas.
              </p>
            </div>

            <div className="pt-5 text-[11px] font-mono-tech text-slate-500">
              Fuente: Diagnóstico Operativo RentoAI · Auditado por BALUMTech en Argentina.
            </div>
          </div>
        </div>

        {/* Contrast Strip: Sin RentoAI vs Con RentoAI */}
        <div className="mt-16 strata-shell">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="strata-vault-card p-6 sm:p-8 space-y-2.5">
              <span className="text-[10px] font-mono-tech uppercase tracking-widest text-rose-400 block">
                SIN RENTOAI · ATENCIÓN TRADICIONAL
              </span>
              <h3 className="font-display text-lg text-white font-medium">
                La tasación de las 22:30 queda sin leer hasta mañana
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Un propietario escribe a la noche para tasar su departamento en USD. El mensaje
                espera hasta las 10:00 AM del día siguiente. Para ese momento, ya coordinó visita
                con la inmobiliaria que le respondió en el acto.
              </p>
            </div>

            <div className="strata-vault-card p-6 sm:p-8 space-y-2.5 border-[#00B7D1]/30">
              <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#00B7D1] block">
                CON RENTOAI · RECEPCIONISTA DE ÉLITE 24/7
              </span>
              <h3 className="font-display text-lg text-white font-medium">
                Respuesta a las 22:30:03 y alerta VIP al martillero
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                RentoAI saluda con voseo rioplatense cordial, releva metros, estado y barrio, y
                despacha un ticket prioritario al WhatsApp del corredor matriculado. En dos minutos
                la captación ya quedó asegurada para tu agencia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
