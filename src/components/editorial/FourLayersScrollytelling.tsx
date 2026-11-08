"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  DollarSign,
  ShieldCheck,
  Receipt,
  Lock,
  Zap,
  CheckCheck,
  Camera,
  Sparkles,
  Layers,
  Percent,
  Clock,
  Database,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import RentoStack3D, { RENTO_STACK_LAYERS } from "./RentoStack3D";

interface LayerVaultData {
  idx: number;
  code: string;
  accentHex: string;
  accentText: string;
  accentBorder: string;
  title: string;
  italicWord: string;
  description: string;
  stats: {
    label: string;
    value: string;
    icon: typeof Percent;
  }[];
  chat: {
    roleLabel: string;
    incoming: string;
    aiBadge: string;
    aiResponse: string;
    dispatchNote: string;
  };
}

const LAYER_VAULTS: LayerVaultData[] = [
  {
    idx: 0,
    code: "VENTAS & MATCH",
    accentHex: "#00B7D1",
    accentText: "text-[#00B7D1]",
    accentBorder: "border-[#00B7D1]/35",
    title: "Ventas, precios y RENTO",
    italicWord: "Match.",
    description:
      "Sincroniza tu inventario cada 15 minutos con Meta Commerce Manager. Distingue con rigor entre ARS y USD billete, aplica tolerancia comercial del +10% para defender oportunidades negociables y guarda búsquedas sin stock en La Bóveda activa.",
    stats: [
      { label: "TOLERANCIA COMERCIAL", value: "+10%", icon: Percent },
      { label: "SINCRONIZACIÓN CATÁLOGO", value: "Cada 15m", icon: Clock },
      { label: "BÚSQUEDA SIN STOCK", value: "RENTO Match", icon: Sparkles },
    ],
    chat: {
      roleLabel: "Comprador · 22:41 hs",
      incoming:
        "“Hola, vi un 3 ambientes por USD 130.000. ¿Sigue disponible? Contamos con USD billete.”",
      aiBadge: "Respuesta en 2.1s · Tolerancia +10% Aplicada",
      aiResponse:
        "¡Hola! Sí, sigue disponible (74 m² y cochera). Por tu rango en USD billete también tenemos una unidad en USD 135.000 con balcón aterrazado donde los propietarios escuchan ofertas.",
      dispatchNote: "Ficha calificada + Top 3 Catálogo Meta enviados al corredor",
    },
  },
  {
    idx: 1,
    code: "SOPORTE TÉCNICO",
    accentHex: "#E5A93C",
    accentText: "text-[#E5A93C]",
    accentBorder: "border-[#E5A93C]/35",
    title: "Soporte técnico y escudo",
    italicWord: "DNU 70/2023.",
    description:
      "Recibe fotografías de desperfectos enviadas por inquilinos y diagnostica la urgencia mediante visión artificial. Ante fugas de gas o riesgo eléctrico activa protocolos preventivos y prohíbe recetas caseras para blindar civilmente a la agencia.",
    stats: [
      { label: "DIAGNÓSTICO DE DAÑOS", value: "Visión IA", icon: Camera },
      { label: "MARCO REGULATORIO", value: "DNU 70/2023", icon: ShieldCheck },
      { label: "RIESGO CIVIL", value: "Blindado", icon: Lock },
    ],
    chat: {
      roleLabel: "Inquilino · Envía fotografía",
      incoming:
        "[Foto adjunta] “Tengo una pérdida fuerte de agua debajo de la bacha de la cocina.”",
      aiBadge: "Visión Artificial · Prioridad Urgente",
      aiResponse:
        "Recibí la foto del daño y ya derivé el ticket urgente a administración. Por seguridad, cerrá la llave de paso general hasta que te contacte el matriculado.",
      dispatchNote: "Cero diagnósticos caseros · Ticket técnico categorizado",
    },
  },
  {
    idx: 2,
    code: "FINANZAS ARCA",
    accentHex: "#10B981",
    accentText: "text-emerald-400",
    accentBorder: "border-emerald-400/35",
    title: "Cobranzas por OCR y sello",
    italicWord: "oficial ARCA.",
    description:
      "Lee comprobantes de transferencia bancaria y expensas mediante OCR inteligente, concilia montos y CUIT, y con la aprobación del administrador en 1 clic emite la factura con código CAE oficial ante ARCA enviando el PDF por WhatsApp.",
    stats: [
      { label: "LECTURA DE COMPROBANTES", value: "OCR Activo", icon: Receipt },
      { label: "VALIDACIÓN HUMANA", value: "1 solo clic", icon: Zap },
      { label: "FACTURACIÓN FISCAL", value: "CAE ARCA", icon: CheckCheck },
    ],
    chat: {
      roleLabel: "Inquilino · Administración",
      incoming:
        "“Adjunto el comprobante de transferencia bancaria del alquiler y expensas de este mes.”",
      aiBadge: "OCR Validado + Emisión CAE Oficial",
      aiResponse:
        "Transferencia verificada por monto y CUIT. Adjunto tu factura oficial emitida ante ARCA con código CAE asignado en formato PDF.",
      dispatchNote: "Asiento conciliado y comprobante archivado en el sistema",
    },
  },
  {
    idx: 3,
    code: "MODO DUEÑO",
    accentHex: "#CBD5E1",
    accentText: "text-slate-200",
    accentBorder: "border-slate-300/35",
    title: "Modo Dueño directo en",
    italicWord: "tu WhatsApp.",
    description:
      "Consultá el estado real de tu inmobiliaria un domingo a la noche con un texto o audio mediante el comando /datos. Opera sobre un motor Text-to-SQL encapsulado en solo lectura con Triple Escudo Zero-SQL-Injection.",
    stats: [
      { label: "COMANDO EJECUTIVO", value: "/datos", icon: DollarSign },
      { label: "SEGURIDAD DE BASE", value: "Read-Only", icon: Database },
      { label: "REPORTE SEMANAL", value: "Lun 09:00", icon: Clock },
    ],
    chat: {
      roleLabel: "Titular de Inmobiliaria · 23:14 hs",
      incoming:
        "“/datos ¿cuántos prospectos arriba de USD 100k ingresaron esta semana y cuántas visitas hay?”",
      aiBadge: "Consulta Text-to-SQL en 0.4s · Zero-SQL-Injection",
      aiResponse:
        "📊 Ingresaron 4 prospectos calificados > USD 100k (3 en Barrio Norte, 1 en Núñez). 2 visitas ya agendadas con martilleros. Próximo resumen: Lunes 09:00 AM.",
      dispatchNote: "Lectura segura sobre base corporativa de la agencia",
    },
  },
];

export default function FourLayersScrollytelling() {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    blockRefs.current.forEach((el, index) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveLayer(index);
            }
          });
        },
        {
          rootMargin: "-32% 0px -42% 0px",
          threshold: 0.15,
        }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  const scrollToLayer = (index: number) => {
    setActiveLayer(index);
    const target = blockRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section
      id="capas"
      className="relative py-24 md:py-36 border-b border-white/[0.06] strata-atmosphere"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="max-w-3xl space-y-4 mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
            <div className="relative w-4 h-4">
              <Image
                src="/brand/rentoai-symbol-transparent.png"
                alt="RentoAI"
                fill
                sizes="16px"
                className="object-contain"
              />
            </div>
            <span className="text-[10px] font-mono-tech uppercase tracking-[0.16em] text-[#00B7D1]">
              ARQUITECTURA EXPLOSIONADA · LAS 4 CAPAS DEL CEREBRO RENTOAI
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl text-white font-semibold leading-[1.06] tracking-[-0.035em]">
            Un solo núcleo agéntico,{" "}
            <span className="font-serif-accent font-normal text-[#00B7D1]">
              cuatro áreas resueltas.
            </span>
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            A medida que recorrés cada módulo, el bloque central de RentoAI ilumina la capa
            operativa que interviene en la conversación y despacha la acción exacta a tu equipo.
          </p>
        </div>

        {/* ================================================================
            MOBILE INTERACTIVE 4-LAYER EXPERIENCE (lg:hidden)
            Solves the problem where 3D was scrolled away and lost on mobile.
            ================================================================ */}
        <div className="lg:hidden space-y-6">
          {/* Mobile Sticky Control Dock */}
          <div className="sticky top-20 z-30 bg-[#06080B]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-[0_12px_40px_rgba(0,0,0,0.85)]">
            <div className="flex items-center justify-between px-1 pb-2.5 text-[10px] font-mono-tech text-slate-400 border-b border-white/[0.06] mb-2.5">
              <span className="flex items-center gap-1.5 text-white">
                <Layers className="w-3.5 h-3.5 text-[#00B7D1]" />
                <span>CAPA 0{activeLayer + 1} DE 04</span>
              </span>
              <span
                className="font-semibold tracking-wider uppercase text-[11px]"
                style={{ color: RENTO_STACK_LAYERS[activeLayer]?.accentHex }}
              >
                {RENTO_STACK_LAYERS[activeLayer]?.code}
              </span>
            </div>

            {/* 4 Quick Tabs with colored active indicators */}
            <div className="grid grid-cols-4 gap-1.5">
              {RENTO_STACK_LAYERS.map((layer, idx) => {
                const isActive = activeLayer === idx;
                const shortNames = ["Ventas", "Soporte", "Finanzas", "Dueño"];
                return (
                  <button
                    key={layer.id}
                    type="button"
                    onClick={() => setActiveLayer(idx)}
                    className={`py-2 px-1 rounded-xl text-center text-[10px] font-mono-tech transition-all flex flex-col items-center justify-center gap-1 border ${
                      isActive
                        ? "bg-white/10 text-white border-white/30 shadow-[0_0_15px_rgba(0,183,209,0.2)]"
                        : "bg-white/[0.02] text-slate-400 border-transparent hover:text-slate-200"
                    }`}
                  >
                    <span
                      className="w-2 h-2 rounded-full transition-transform"
                      style={{
                        backgroundColor: layer.accentHex,
                        transform: isActive ? "scale(1.25)" : "scale(1)",
                        boxShadow: isActive ? `0 0 8px ${layer.accentHex}` : "none",
                      }}
                    />
                    <span className="truncate max-w-full text-[10px] font-medium uppercase tracking-tight">
                      {shortNames[idx]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3D Exploded Viewer Stage for Mobile */}
          <div className="w-full rounded-[28px] bg-gradient-to-b from-[#0A0E14] to-[#06080B] border border-white/[0.08] p-4 flex flex-col items-center relative overflow-hidden">
            <div className="pt-6 pb-14 w-full flex items-center justify-center">
              <RentoStack3D
                mode="exploded"
                activeLayer={activeLayer}
                onSelectLayer={(idx) => setActiveLayer(idx)}
                className="scale-85 sm:scale-95"
              />
            </div>

            {/* Prev / Next controls for one-handed mobile navigation */}
            <div className="w-full flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-mono-tech">
              <button
                type="button"
                onClick={() => setActiveLayer((prev) => (prev > 0 ? prev - 1 : 3))}
                className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white flex items-center gap-1 active:scale-95 transition-transform"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Anterior</span>
              </button>

              {/* Step indicator pill dots */}
              <div className="flex items-center gap-1.5">
                {[0, 1, 2, 3].map((dotIdx) => {
                  const isCurrent = activeLayer === dotIdx;
                  return (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setActiveLayer(dotIdx)}
                      className="p-1 cursor-pointer focus:outline-none"
                      aria-label={`Ir a capa 0${dotIdx + 1}`}
                    >
                      <span
                        className={`block h-1.5 rounded-full transition-all duration-300 ${
                          isCurrent
                            ? "w-5"
                            : "w-1.5 bg-white/20 hover:bg-white/40"
                        }`}
                        style={{
                          backgroundColor: isCurrent
                            ? RENTO_STACK_LAYERS[dotIdx].accentHex
                            : undefined,
                        }}
                      />
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setActiveLayer((prev) => (prev < 3 ? prev + 1 : 0))}
                className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white flex items-center gap-1 active:scale-95 transition-transform"
              >
                <span>Siguiente</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Active Layer Content Card for Mobile */}
          {(() => {
            const vault = LAYER_VAULTS[activeLayer];
            return (
              <div
                key={vault.code}
                className="rounded-[28px] bg-[#0A0E14]/80 border border-white/[0.08] p-5 sm:p-6 space-y-6 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <span
                      className="w-3 h-1.5 rounded-full"
                      style={{ backgroundColor: vault.accentHex }}
                    />
                    <span className="text-[11px] font-mono-tech uppercase tracking-[0.16em] text-slate-300">
                      {vault.code} · CAPA 0{activeLayer + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-white font-semibold tracking-[-0.03em] leading-[1.15]">
                    {vault.title}{" "}
                    <span
                      className="font-serif-accent font-normal"
                      style={{ color: vault.accentHex }}
                    >
                      {vault.italicWord}
                    </span>
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {vault.description}
                  </p>
                </div>

                {/* 3 Metric Rows */}
                <div className="strata-shell space-y-2">
                  {vault.stats.map((st) => {
                    const StIcon = st.icon;
                    return (
                      <div
                        key={st.label}
                        className="strata-vault-card px-4 py-3 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center">
                            <StIcon
                              className="w-3 h-3"
                              style={{ color: vault.accentHex }}
                            />
                          </div>
                          <span className="text-[10px] font-mono-tech uppercase tracking-wider text-slate-400">
                            {st.label}
                          </span>
                        </div>
                        <span className="font-display text-sm font-semibold text-white">
                          {st.value}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* WhatsApp Chat Simulation Snippet */}
                <div
                  className={`rounded-2xl p-4 space-y-3 bg-[#06080B] border ${vault.accentBorder}`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono-tech text-slate-400">
                    <span>{vault.chat.roleLabel}</span>
                    <span className={vault.accentText}>{vault.chat.aiBadge}</span>
                  </div>

                  <div className="p-3 rounded-xl rounded-tr-none bg-white/[0.04] border border-white/[0.07] text-xs text-slate-200 ml-4">
                    {vault.chat.incoming}
                  </div>

                  <div className="p-3 rounded-xl rounded-tl-none bg-[#07121A] border border-white/[0.1] text-xs text-slate-100 mr-2 flex items-start gap-2.5">
                    <div className="relative w-4 h-4 shrink-0 mt-0.5">
                      <Image
                        src="/brand/rentoai-symbol-transparent.png"
                        alt="RentoAI"
                        fill
                        sizes="16px"
                        className="object-contain"
                      />
                    </div>
                    <p className="leading-relaxed">{vault.chat.aiResponse}</p>
                  </div>

                  <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono-tech text-slate-400">
                    <span className="text-[9px] truncate max-w-[240px]">
                      {vault.chat.dispatchNote}
                    </span>
                    <CheckCheck className={`w-3.5 h-3.5 shrink-0 ${vault.accentText}`} />
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* ================================================================
            DESKTOP STICKY SCROLLYTELLING 12-COL LAYOUT (hidden lg:grid)
            ================================================================ */}
        <div className="hidden lg:grid grid-cols-12 gap-14 items-start">
          {/* LEFT STICKY COLUMN: Exploded 4-Layer 3D Stack */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-center">
            <div className="w-full rounded-[32px] bg-[#080C12]/80 border border-white/[0.07] p-6 sm:p-8 flex flex-col items-center relative overflow-hidden">
              {/* Top live layer indicator */}
              <div className="w-full flex items-center justify-between text-[10px] font-mono-tech text-slate-400 pb-4 border-b border-white/[0.06] mb-6">
                <span className="flex items-center gap-2 text-white">
                  <Layers className="w-3.5 h-3.5 text-[#00B7D1]" />
                  <span>CAPA ACTIVA 0{activeLayer + 1} / 04</span>
                </span>
                <span
                  className="font-semibold"
                  style={{ color: RENTO_STACK_LAYERS[activeLayer]?.accentHex }}
                >
                  {RENTO_STACK_LAYERS[activeLayer]?.code}
                </span>
              </div>

              {/* Exploded 4-Layer 3D Stack */}
              <div className="py-16 sm:py-20">
                <RentoStack3D
                  mode="exploded"
                  activeLayer={activeLayer}
                  onSelectLayer={scrollToLayer}
                />
              </div>

              {/* Quick Layer Jump Pills */}
              <div className="w-full pt-5 border-t border-white/[0.06] grid grid-cols-2 gap-2">
                {RENTO_STACK_LAYERS.map((layer, idx) => {
                  const isCurrent = activeLayer === idx;
                  return (
                    <button
                      key={layer.id}
                      type="button"
                      onClick={() => scrollToLayer(idx)}
                      className={`px-3 py-2 rounded-xl text-[11px] font-mono-tech text-left transition-all border flex items-center gap-2 ${
                        isCurrent
                          ? "bg-white/[0.09] text-white border-white/25"
                          : "bg-white/[0.02] text-slate-400 border-white/[0.06] hover:text-slate-200"
                      }`}
                    >
                      <span
                        className="w-2 h-2 rounded-sm shrink-0"
                        style={{ backgroundColor: layer.accentHex }}
                      />
                      <span className="truncate">{layer.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================================================================
              RIGHT SCROLLING COLUMN: 4 Vault Modules (Matches sec_12.png)
              ================================================================ */}
          <div className="lg:col-span-7 divide-y divide-white/[0.08]">
            {LAYER_VAULTS.map((vault, vIdx) => {
              const isFocused = activeLayer === vIdx;
              return (
                <div
                  key={vault.code}
                  ref={(el) => {
                    blockRefs.current[vIdx] = el;
                  }}
                  onClick={() => setActiveLayer(vIdx)}
                  className={`py-14 first:pt-2 last:pb-4 transition-opacity duration-300 ${
                    isFocused ? "opacity-100" : "opacity-65 hover:opacity-95"
                  }`}
                >
                  {/* Module Eyebrow Pill */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <span
                      className="w-3.5 h-1.5 rounded-full"
                      style={{ backgroundColor: vault.accentHex }}
                    />
                    <span className="text-[11px] font-mono-tech uppercase tracking-[0.16em] text-slate-300">
                      {vault.code} · CAPA 0{vIdx + 1}
                    </span>
                  </div>

                  {/* Module Title */}
                  <h3 className="font-display text-3xl sm:text-4xl text-white font-semibold tracking-[-0.03em] leading-[1.1]">
                    {vault.title}{" "}
                    <span
                      className="font-serif-accent font-normal"
                      style={{ color: vault.accentHex }}
                    >
                      {vault.italicWord}
                    </span>
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
                    {vault.description}
                  </p>

                  {/* Double-Framed Stat Rows (Identical structure to sec_12.png) */}
                  <div className="mt-7 strata-shell space-y-2">
                    {vault.stats.map((st) => {
                      const StIcon = st.icon;
                      return (
                        <div
                          key={st.label}
                          className="strata-vault-card px-5 py-3.5 flex items-center justify-between gap-4"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center">
                              <StIcon
                                className="w-3.5 h-3.5"
                                style={{ color: vault.accentHex }}
                              />
                            </div>
                            <span className="text-[11px] font-mono-tech uppercase tracking-wider text-slate-400">
                              {st.label}
                            </span>
                          </div>
                          <span className="font-display text-base sm:text-lg font-semibold text-white">
                            {st.value}
                          </span>
                        </div>
                      );
                    })}

                    {/* Embedded Live WhatsApp Exchange Snippet */}
                    <div
                      className={`strata-vault-card p-5 space-y-3 border ${vault.accentBorder}`}
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono-tech text-slate-400">
                        <span>{vault.chat.roleLabel}</span>
                        <span className={vault.accentText}>{vault.chat.aiBadge}</span>
                      </div>

                      <div className="p-3 rounded-xl rounded-tr-none bg-white/[0.04] border border-white/[0.07] text-xs text-slate-200 ml-4 sm:ml-10">
                        {vault.chat.incoming}
                      </div>

                      <div className="p-3.5 rounded-xl rounded-tl-none bg-[#07121A] border border-white/[0.1] text-xs text-slate-100 mr-4 sm:mr-8 flex items-start gap-2.5">
                        <div className="relative w-5 h-5 shrink-0 mt-0.5">
                          <Image
                            src="/brand/rentoai-symbol-transparent.png"
                            alt="RentoAI"
                            fill
                            sizes="20px"
                            className="object-contain"
                          />
                        </div>
                        <p className="leading-relaxed">{vault.chat.aiResponse}</p>
                      </div>

                      <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono-tech text-slate-400">
                        <span>{vault.chat.dispatchNote}</span>
                        <CheckCheck className={`w-3.5 h-3.5 ${vault.accentText}`} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
