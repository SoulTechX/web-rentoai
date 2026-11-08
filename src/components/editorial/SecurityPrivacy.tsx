"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, RotateCcw, Check } from "lucide-react";

interface TiltState {
  rx: number;
  ry: number;
  mx: number;
  my: number;
  active: boolean;
}

export default function SecurityPrivacy() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [replayKey, setReplayKey] = useState(0);
  const [bootProgress, setBootProgress] = useState<number[]>([0, 0, 0, 0]);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  // Mouse tracking state for each of the 4 cards
  const [tilts, setTilts] = useState<TiltState[]>([
    { rx: 0, ry: 0, mx: 140, my: 180, active: false },
    { rx: 0, ry: 0, mx: 140, my: 180, active: false },
    { rx: 0, ry: 0, mx: 140, my: 180, active: false },
    { rx: 0, ry: 0, mx: 140, my: 180, active: false },
  ]);

  // Trigger boot/login animation when scrolled into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.18 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [hasTriggered]);

  // Staggered login/verification progress 0 -> 1 for the 4 cards
  useEffect(() => {
    if (!hasTriggered) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setBootProgress([1, 1, 1, 1]);
      return;
    }

    let rafId: number;
    const startTime = performance.now();
    const duration = 1100;
    const stagger = 140;

    setBootProgress([0, 0, 0, 0]);

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const next = [0, 1, 2, 3].map((idx) => {
        const local = Math.max(0, elapsed - idx * stagger);
        const raw = Math.min(local / duration, 1);
        return 1 - Math.pow(1 - raw, 4);
      });

      setBootProgress(next);

      if (elapsed < duration + stagger * 4) {
        rafId = requestAnimationFrame(tick);
      } else {
        setBootProgress([1, 1, 1, 1]);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [hasTriggered, replayKey]);

  const handleMouseMove = (
    idx: number,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const nx = (mx / rect.width - 0.5) * 2;
    const ny = (my / rect.height - 0.5) * 2;

    setTilts((prev) => {
      const copy = [...prev];
      copy[idx] = {
        rx: -ny * 5.5,
        ry: nx * 5.5,
        mx,
        my,
        active: true,
      };
      return copy;
    });
  };

  const handleMouseLeave = (idx: number) => {
    setTilts((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], rx: 0, ry: 0, active: false };
      return copy;
    });
  };

  const getCardStyle = (idx: number) => {
    const t = tilts[idx];
    return {
      background: t.active
        ? `radial-gradient(240px circle at ${t.mx}px ${t.my}px, rgba(0, 183, 209, 0.22), transparent 80%), radial-gradient(95% 60% at 50% 102%, rgba(16, 185, 129, 0.3) 0%, rgba(0, 183, 209, 0.14) 44%, rgba(9, 13, 19, 0.97) 100%)`
        : "radial-gradient(95% 60% at 50% 102%, rgba(16, 185, 129, 0.28) 0%, rgba(0, 183, 209, 0.12) 44%, rgba(9, 13, 19, 0.97) 100%)",
      border: t.active
        ? "1px solid rgba(103, 232, 249, 0.55)"
        : "1px solid rgba(52, 211, 153, 0.28)",
      boxShadow: t.active
        ? "inset 0 1px 0 rgba(255,255,255,0.18), 0 28px 65px -16px rgba(0, 183, 209, 0.32)"
        : "inset 0 1px 0 rgba(255,255,255,0.1), 0 24px 60px -20px rgba(16, 185, 129, 0.22)",
      transform: `perspective(900px) rotateX(${t.rx}deg) rotateY(${t.ry}deg) translateY(${
        t.active ? -3 : 0
      }px)`,
      transition: t.active
        ? "transform 90ms ease-out, border-color 200ms ease, box-shadow 200ms ease"
        : "transform 420ms cubic-bezier(0.16, 1, 0.3, 1), border-color 220ms ease, box-shadow 220ms ease",
    };
  };

  const p0 = bootProgress[0] ?? 0;
  const p1 = bootProgress[1] ?? 0;
  const p2 = bootProgress[2] ?? 0;
  const p3 = bootProgress[3] ?? 0;

  return (
    <section
      id="seguridad"
      ref={sectionRef}
      className="py-24 md:py-32 border-b border-white/[0.06] strata-atmosphere"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Replay Verification Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <span className="text-[11px] font-mono-tech text-slate-400 uppercase tracking-[0.18em] block">
              CONSTRUIDO COMO UNA BÓVEDA
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-[56px] text-white font-semibold leading-[1.04] tracking-[-0.035em]">
              Seguridad que podés{" "}
              <span className="font-serif-accent font-normal text-[#E5A93C]">
                verificar.
              </span>
            </h2>
          </div>

          <button
            type="button"
            onClick={() => {
              setHasTriggered(true);
              setReplayKey((k) => k + 1);
            }}
            className="strata-pill-secondary px-4 py-2 text-[11px] font-mono-tech self-start sm:self-end cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#00B7D1]" />
            <span>Ejecutar verificación en vivo</span>
          </button>
        </div>

        {/* 4-Column Interactive & Animated Security Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* ==============================================================
              CARD 1: Blindaje de Cartera (Animated 0% -> 100% Bars + Hover)
             ============================================================== */}
          <div
            onMouseMove={(e) => handleMouseMove(0, e)}
            onMouseLeave={() => handleMouseLeave(0)}
            className="rounded-[26px] p-6 flex flex-col justify-between min-h-[360px] overflow-hidden relative"
            style={getCardStyle(0)}
          >
            <div>
              <div className="flex items-center justify-between text-[9.5px] font-mono-tech text-emerald-300/90 mb-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {p0 < 0.99 ? "CIFRANDO CARTERA..." : "PATRIMONIO BLINDADO"}
                </span>
                <span>{Math.round(p0 * 100)}%</span>
              </div>

              <h3 className="font-display text-lg text-white font-semibold mb-2">
                Blindaje de cartera
              </h3>
              <p className="text-xs text-slate-300/85 leading-relaxed">
                El 100% de contactos y tasaciones se aloja en tu base empresarial. Si un asesor
                se retira, los datos quedan en tu agencia.
              </p>
            </div>

            {/* Interactive Vector Diagram 1: Pill + 3 Animated Ascending Bars */}
            <div className="mt-6 pt-3 flex flex-col items-center">
              <span
                className="px-3 py-1 rounded-full bg-emerald-300/90 text-[#051510] text-[10px] font-mono-tech font-semibold shadow-[0_0_20px_rgba(110,231,183,0.45)] mb-4 flex items-center gap-1 transition-transform duration-200"
                style={{
                  transform: `scale(${0.92 + p0 * 0.08})`,
                }}
              >
                <Check className="w-3 h-3 stroke-[2.5]" />
                <span>Cartera = {Math.round(p0 * 100)}% Agencia</span>
              </span>

              <div className="flex items-end justify-center gap-3 h-24 w-full px-4">
                {[
                  { targetH: 46, pct: 42 },
                  { targetH: 66, pct: 70 },
                  { targetH: 92, pct: 100 },
                ].map((bar, bIdx) => {
                  const extraLift =
                    tilts[0].active ? (bIdx + 1) * 2.5 : 0;
                  const h = Math.max(8, bar.targetH * p0 + extraLift);
                  return (
                    <div
                      key={bIdx}
                      className="w-11 rounded-t-lg border border-emerald-300/50 bg-gradient-to-t from-emerald-400/35 to-emerald-200/10 relative flex items-start justify-center pt-1.5 transition-all duration-150"
                      style={{ height: `${h}px` }}
                    >
                      <span className="text-[8.5px] font-mono-tech text-emerald-100 font-semibold">
                        {Math.round(bar.pct * p0)}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ==============================================================
              CARD 2: Ley 25.326 y AAIP (Shield Scan + Locking Padlock + Parallax)
             ============================================================== */}
          <div
            onMouseMove={(e) => handleMouseMove(1, e)}
            onMouseLeave={() => handleMouseLeave(1)}
            className="rounded-[26px] p-6 flex flex-col justify-between min-h-[360px] overflow-hidden relative"
            style={getCardStyle(1)}
          >
            <div>
              <div className="flex items-center justify-between text-[9.5px] font-mono-tech text-emerald-300/90 mb-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {p1 < 0.99 ? "VALIDANDO FIRMA AAIP..." : "HABEAS DATA VERIFICADO"}
                </span>
                <span>{Math.round(p1 * 100)}%</span>
              </div>

              <h3 className="font-display text-lg text-white font-semibold mb-2">
                Ley 25.326 y AAIP
              </h3>
              <p className="text-xs text-slate-300/85 leading-relaxed">
                Tratamiento de datos bajo Habeas Data argentino, con órgano de control AAIP y
                derechos ARCO garantizados.
              </p>
            </div>

            {/* Interactive Vector Diagram 2: Parallax Shield + Locking Shackle */}
            <div className="mt-6 pt-2 flex items-center justify-center h-32 relative">
              <svg
                viewBox="0 0 180 120"
                className="w-44 h-28"
                fill="none"
                aria-hidden="true"
                style={{
                  transform: tilts[1].active
                    ? `translate(${(tilts[1].mx - 130) * 0.06}px, ${
                        (tilts[1].my - 180) * 0.06
                      }px)`
                    : "translate(0px, 0px)",
                  transition: "transform 150ms ease-out",
                }}
              >
                <defs>
                  <linearGradient id="shieldGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E6FFFA" />
                    <stop offset="100%" stopColor="#34D399" />
                  </linearGradient>
                </defs>

                {/* Outer radar ring that expands on boot */}
                <circle
                  cx="90"
                  cy="60"
                  r={24 + p1 * 24}
                  stroke="rgba(167,243,208,0.2)"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />

                {/* Lateral connection lines */}
                <line
                  x1="12"
                  y1="46"
                  x2="58"
                  y2="54"
                  stroke="rgba(167,243,208,0.35)"
                  strokeWidth="1"
                />
                <circle
                  cx={12 + p1 * 34}
                  cy={46 + p1 * 6}
                  r="2.5"
                  fill="#A7F3D0"
                />
                <line
                  x1="168"
                  y1="46"
                  x2="122"
                  y2="54"
                  stroke="rgba(167,243,208,0.35)"
                  strokeWidth="1"
                />
                <circle
                  cx={168 - p1 * 34}
                  cy={46 + p1 * 6}
                  r="2.5"
                  fill="#A7F3D0"
                />

                {/* Shield silhouette */}
                <path
                  d="M90 16 L124 28 V58 C124 82 108 98 90 106 C72 98 56 82 56 58 V28 L90 16 Z"
                  fill="url(#shieldGlow)"
                  fillOpacity={0.35 + p1 * 0.58}
                />

                {/* Padlock Body */}
                <rect
                  x="81"
                  y="56"
                  width="18"
                  height="15"
                  rx="3"
                  fill="#052018"
                />
                {/* Padlock Shackle that closes down as p1 goes 0 -> 1 */}
                <path
                  d="M84.5 56 V51 C84.5 47.8 87 45.5 90 45.5 C93 45.5 95.5 47.8 95.5 51 V56"
                  stroke="#052018"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  style={{
                    transform: `translateY(${-(1 - p1) * 5}px)`,
                  }}
                />
                <circle cx="90" cy="63" r="2" fill="#6EE7B7" />
              </svg>
            </div>
          </div>

          {/* ==============================================================
              CARD 3: Escudo Zero-SQL y 72h (Login/Terminal Auth Progress Bars)
             ============================================================== */}
          <div
            onMouseMove={(e) => handleMouseMove(2, e)}
            onMouseLeave={() => handleMouseLeave(2)}
            className="rounded-[26px] p-6 flex flex-col justify-between min-h-[360px] overflow-hidden relative"
            style={getCardStyle(2)}
          >
            <div>
              <div className="flex items-center justify-between text-[9.5px] font-mono-tech text-emerald-300/90 mb-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {p2 < 0.99 ? "AUTENTICANDO CAPAS..." : " ACCESO ENCAPSULADO"}
                </span>
                <span>{Math.round(p2 * 100)}%</span>
              </div>

              <h3 className="font-display text-lg text-white font-semibold mb-2">
                Escudo Zero-SQL y 72h
              </h3>
              <p className="text-xs text-slate-300/85 leading-relaxed">
                Consultas del Modo Dueño encapsuladas en solo lectura y sesiones aisladas cada
                72 horas sin cruce de hilos.
              </p>
            </div>

            {/* Interactive Vector Diagram 3: 3 Sequential Login/Auth Verification Bars */}
            <div className="mt-6 space-y-2.5">
              {[
                {
                  tag: "SQL",
                  status: "Read-Only",
                  offset: "ml-0 mr-3",
                  delayFactor: 1,
                },
                {
                  tag: "72h",
                  status: "Aislado",
                  offset: "ml-4 mr-0",
                  delayFactor: 0.92,
                },
                {
                  tag: "DNU",
                  status: "Verificado",
                  offset: "ml-1 mr-2",
                  delayFactor: 0.85,
                },
              ].map((row) => {
                const rowProg = Math.min(1, p2 * row.delayFactor * 1.15);
                const pct = Math.round(rowProg * 100);
                return (
                  <div
                    key={row.tag}
                    className={`${row.offset} px-2.5 py-2 rounded-full bg-[#061312]/90 border border-emerald-300/30 hover:border-[#67E8F9]/60 transition-colors flex items-center justify-between gap-2`}
                  >
                    <span className="w-7 h-6 rounded-full bg-emerald-300/90 text-[#041812] text-[8.5px] font-mono-tech font-bold flex items-center justify-center shrink-0">
                      {row.tag}
                    </span>
                    <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#00B7D1] to-emerald-300 rounded-full transition-all duration-150"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-[9.5px] font-mono-tech text-emerald-200 pr-1 shrink-0">
                      {pct < 100 ? `${pct}%` : `${row.status} ✓`}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ==============================================================
              CARD 4: Omnicanal Meta API (Live Data Packets + Magnetic Hub)
             ============================================================== */}
          <div
            onMouseMove={(e) => handleMouseMove(3, e)}
            onMouseLeave={() => handleMouseLeave(3)}
            className="rounded-[26px] p-6 flex flex-col justify-between min-h-[360px] overflow-hidden relative"
            style={getCardStyle(3)}
          >
            <div>
              <div className="flex items-center justify-between text-[9.5px] font-mono-tech text-emerald-300/90 mb-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B7D1] animate-pulse" />
                  {p3 < 0.99 ? "CONECTANDO NODOS..." : "4 CANALES EN LÍNEA"}
                </span>
                <span>{Math.round(p3 * 100)}%</span>
              </div>

              <h3 className="font-display text-lg text-white font-semibold mb-2">
                Orquestador oficial
              </h3>
              <p className="text-xs text-slate-300/85 leading-relaxed">
                Conectado a WhatsApp Business API oficial, Instagram, ARCA y tu catálogo bajo
                una única capa de cumplimiento.
              </p>
            </div>

            {/* Interactive Vector Diagram 4: Central RentoAI Hub + Pulsing Beams */}
            <div className="mt-6 relative h-32 flex items-center justify-center">
              <svg
                viewBox="0 0 220 120"
                className="absolute inset-0 w-full h-full pointer-events-none"
                fill="none"
              >
                {[
                  { x1: 46, y1: 26, id: 0 },
                  { x1: 174, y1: 26, id: 1 },
                  { x1: 46, y1: 94, id: 2 },
                  { x1: 174, y1: 94, id: 3 },
                ].map((line) => {
                  const isHighlighted = hoveredNode === line.id;
                  return (
                    <g key={line.id}>
                      {/* Base hairline */}
                      <line
                        x1={line.x1}
                        y1={line.y1}
                        x2="110"
                        y2="60"
                        stroke={
                          isHighlighted
                            ? "rgba(103,232,249,0.85)"
                            : "rgba(103,232,249,0.28)"
                        }
                        strokeWidth={isHighlighted ? "1.75" : "1"}
                      />
                      {/* Animated data packet flowing along the ray */}
                      <line
                        x1={line.x1}
                        y1={line.y1}
                        x2="110"
                        y2="60"
                        stroke="#67E8F9"
                        strokeWidth="2"
                        className="animate-data-packet"
                        style={{ opacity: p3 }}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* 4 Interactive Satellite Pills */}
              {[
                { label: "WhatsApp", pos: "top-2 left-1", idx: 0 },
                { label: "Meta Sync", pos: "top-2 right-1", idx: 1 },
                { label: "ARCA SDK", pos: "bottom-2 left-1", idx: 2 },
                { label: "Instagram", pos: "bottom-2 right-1", idx: 3 },
              ].map((node) => (
                <button
                  key={node.label}
                  type="button"
                  onMouseEnter={() => setHoveredNode(node.idx)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`absolute ${node.pos} px-2.5 py-1 rounded-full bg-[#061314]/95 border text-[9.5px] font-mono-tech transition-all cursor-pointer ${
                    hoveredNode === node.idx
                      ? "border-[#67E8F9] text-white shadow-[0_0_14px_rgba(0,183,209,0.5)] scale-105"
                      : "border-white/15 text-slate-200 hover:border-white/35"
                  }`}
                >
                  {node.label}
                </button>
              ))}

              {/* Central Hub Node with Official RentoAI Symbol + Magnetic Parallax */}
              <div
                className="relative z-10 w-12 h-12 rounded-2xl bg-[#050A0E] border border-[#00B7D1]/80 shadow-[0_0_28px_rgba(0,183,209,0.6)] flex items-center justify-center p-2"
                style={{
                  transform: tilts[3].active
                    ? `translate(${(tilts[3].mx - 130) * 0.05}px, ${
                        (tilts[3].my - 180) * 0.05
                      }px) scale(1.06)`
                    : "scale(1)",
                  transition: "transform 160ms ease-out",
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/brand/rentoai-symbol-transparent.png"
                    alt="RentoAI Hub"
                    fill
                    sizes="36px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal ARCO Strip */}
        <div className="mt-10 rounded-2xl border border-white/[0.08] bg-[#090D14]/90 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <span className="text-white font-medium block">
              Derechos ARCO garantizados (Art. 14 y 16 · Ley Nacional Nº 25.326)
            </span>
            <p className="mt-0.5">
              Acceso gratuito en un máximo de 10 días corridos y rectificación o supresión en 5
              días hábiles ante requerimiento del titular.
            </p>
          </div>
          <Link
            href="/privacidad"
            className="strata-pill-secondary px-4 py-2 text-xs font-mono-tech shrink-0"
          >
            <span>Política de Privacidad</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#00B7D1]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
