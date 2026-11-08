"use client";

import Image from "next/image";

export interface StackLayerMeta {
  id: string;
  code: string;
  label: string;
  accentHex: string;
  rimGradient: string;
  topGradient: string;
  activeTopGradient: string;
  glowShadow: string;
}

export const RENTO_STACK_LAYERS: StackLayerMeta[] = [
  {
    id: "ventas",
    code: "VENTAS & MATCH",
    label: "01 · Ventas & Match",
    accentHex: "#00B7D1",
    rimGradient:
      "linear-gradient(135deg, rgba(165,243,252,0.95) 0%, rgba(0,183,209,0.75) 38%, rgba(8,47,73,0.9) 75%, rgba(103,232,249,0.7) 100%)",
    topGradient:
      "linear-gradient(145deg, rgba(14,38,52,0.96) 0%, rgba(7,17,26,0.98) 55%, rgba(0,183,209,0.18) 100%)",
    activeTopGradient:
      "linear-gradient(145deg, rgba(20,62,82,0.98) 0%, rgba(9,25,36,0.98) 55%, rgba(0,183,209,0.34) 100%)",
    glowShadow: "0 24px 60px rgba(0, 183, 209, 0.38)",
  },
  {
    id: "soporte",
    code: "SOPORTE DNU",
    label: "02 · Soporte DNU",
    accentHex: "#E5A93C",
    rimGradient:
      "linear-gradient(135deg, rgba(253,230,138,0.92) 0%, rgba(229,169,60,0.72) 40%, rgba(48,34,12,0.92) 78%, rgba(251,191,36,0.65) 100%)",
    topGradient:
      "linear-gradient(145deg, rgba(42,32,16,0.94) 0%, rgba(14,13,10,0.97) 60%, rgba(229,169,60,0.16) 100%)",
    activeTopGradient:
      "linear-gradient(145deg, rgba(78,56,22,0.98) 0%, rgba(24,19,11,0.98) 55%, rgba(229,169,60,0.36) 100%)",
    glowShadow: "0 24px 60px rgba(229, 169, 60, 0.34)",
  },
  {
    id: "admin",
    code: "FINANZAS ARCA",
    label: "03 · Finanzas ARCA",
    accentHex: "#10B981",
    rimGradient:
      "linear-gradient(135deg, rgba(167,243,208,0.92) 0%, rgba(16,185,129,0.72) 40%, rgba(6,44,34,0.92) 78%, rgba(52,211,153,0.65) 100%)",
    topGradient:
      "linear-gradient(145deg, rgba(13,42,34,0.94) 0%, rgba(8,18,16,0.97) 60%, rgba(16,185,129,0.18) 100%)",
    activeTopGradient:
      "linear-gradient(145deg, rgba(18,68,53,0.98) 0%, rgba(9,26,21,0.98) 55%, rgba(16,185,129,0.36) 100%)",
    glowShadow: "0 24px 60px rgba(16, 185, 129, 0.34)",
  },
  {
    id: "dueno",
    code: "MODO DUEÑO",
    label: "04 · Modo Dueño",
    accentHex: "#CBD5E1",
    rimGradient:
      "linear-gradient(135deg, rgba(255,255,255,0.96) 0%, rgba(148,163,184,0.78) 42%, rgba(30,41,59,0.94) 78%, rgba(226,232,240,0.75) 100%)",
    topGradient:
      "linear-gradient(145deg, rgba(38,48,64,0.94) 0%, rgba(13,18,26,0.97) 60%, rgba(203,213,225,0.18) 100%)",
    activeTopGradient:
      "linear-gradient(145deg, rgba(110,125,145,0.96) 0%, rgba(45,55,72,0.98) 58%, rgba(241,245,249,0.42) 100%)",
    glowShadow: "0 24px 60px rgba(203, 213, 225, 0.3)",
  },
];

interface RentoStack3DProps {
  mode?: "hero" | "exploded" | "ghost" | "backdrop";
  activeLayer?: number | null;
  scrollSpread?: number;
  onSelectLayer?: (idx: number) => void;
  className?: string;
}

export default function RentoStack3D({
  mode = "hero",
  activeLayer = null,
  scrollSpread = 0,
  onSelectLayer,
  className = "",
}: RentoStack3DProps) {
  const isExploded = mode === "exploded";
  const isGhost = mode === "ghost";
  const isBackdrop = mode === "backdrop";

  const baseZGap = isExploded
    ? 86
    : isGhost
    ? 18
    : isBackdrop
    ? 26
    : 30 + scrollSpread * 16;

  const sceneTransform = isExploded
    ? "rotateX(55deg) rotateZ(-22deg)"
    : isBackdrop
    ? "rotateX(52deg) rotateZ(-4deg)"
    : isGhost
    ? "rotateX(56deg) rotateZ(-26deg) scale(0.45)"
    : `rotateX(${54 - scrollSpread * 2}deg) rotateZ(${-28 + scrollSpread * 4}deg)`;

  const sizeClass = isGhost
    ? "w-[180px] h-[180px]"
    : isBackdrop
    ? "w-[250px] h-[250px] sm:w-[330px] sm:h-[330px]"
    : isExploded
    ? "w-[220px] h-[220px] sm:w-[270px] sm:h-[270px]"
    : "w-[230px] h-[230px] sm:w-[295px] sm:h-[295px]";

  const extrusionSlices = [-4, -8, -12, -16, -20];

  return (
    <div
      className={`relative select-none flex items-center justify-center ${className}`}
      style={{ perspective: "1400px" }}
    >
      {!isGhost && (
        <div
          className="pointer-events-none absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full blur-3xl opacity-35 transition-all duration-500"
          style={{
            background:
              activeLayer !== null && RENTO_STACK_LAYERS[activeLayer]
                ? `radial-gradient(circle, ${RENTO_STACK_LAYERS[activeLayer].accentHex}44 0%, transparent 70%)`
                : "radial-gradient(circle, rgba(0,183,209,0.28) 0%, rgba(16,185,129,0.12) 45%, transparent 72%)",
            transform: isExploded ? "translateY(40px)" : "translateY(28px)",
          }}
        />
      )}

      <div
        className={`relative ${sizeClass}`}
        style={{
          transformStyle: "preserve-3d",
          transform: sceneTransform,
          transition: "transform 420ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {RENTO_STACK_LAYERS.map((layer, idx) => {
          const centeredOffset = (1.5 - idx) * baseZGap;
          const isSelected = activeLayer === idx;
          const isDimmed =
            (isExploded && activeLayer !== null && !isSelected) ||
            isGhost ||
            isBackdrop;

          const activeSlideX = isExploded && isSelected ? 14 : 0;
          const activeSlideY = isExploded && isSelected ? 14 : 0;
          const activeLiftZ = !isExploded && isSelected ? 10 : 0;

          const plateOpacity = isGhost
            ? 0.22
            : isBackdrop
            ? 0.62
            : isExploded
            ? isSelected
              ? 1
              : 0.28
            : activeLayer !== null && !isSelected
            ? 0.55
            : 1;

          return (
            <div
              key={layer.id}
              onClick={onSelectLayer ? () => onSelectLayer(idx) : undefined}
              role={onSelectLayer ? "button" : undefined}
              tabIndex={onSelectLayer ? 0 : undefined}
              onKeyDown={
                onSelectLayer
                  ? (e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onSelectLayer(idx);
                      }
                    }
                  : undefined
              }
              aria-label={onSelectLayer ? `Seleccionar ${layer.label}` : undefined}
              className={`absolute inset-0 rounded-[38px] ${
                onSelectLayer ? "cursor-pointer" : ""
              }`}
              style={{
                transformStyle: "preserve-3d",
                transform: `translate3d(${activeSlideX}px, ${activeSlideY}px, ${
                  centeredOffset + activeLiftZ
                }px)`,
                opacity: plateOpacity,
                transition:
                  "transform 420ms cubic-bezier(0.16, 1, 0.3, 1), opacity 340ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {extrusionSlices.map((zDepth, sIdx) => (
                <div
                  key={zDepth}
                  className="pointer-events-none absolute inset-0 rounded-[38px]"
                  style={{
                    transform: `translateZ(${zDepth}px)`,
                    background: isDimmed
                      ? "linear-gradient(135deg, rgba(148,163,184,0.24) 0%, rgba(15,23,42,0.55) 55%, rgba(255,255,255,0.14) 100%)"
                      : layer.rimGradient,
                    filter:
                      sIdx === 0
                        ? "brightness(1.12)"
                        : sIdx >= 3
                        ? "brightness(0.52)"
                        : "brightness(0.82)",
                    boxShadow:
                      sIdx === extrusionSlices.length - 1
                        ? isSelected
                          ? layer.glowShadow
                          : "0 18px 34px rgba(0, 0, 0, 0.78)"
                        : undefined,
                  }}
                />
              ))}

              <div
                className="absolute inset-0 rounded-[38px] overflow-hidden flex items-center justify-center"
                style={{
                  background: isDimmed
                    ? "linear-gradient(145deg, rgba(16,24,34,0.72) 0%, rgba(7,10,15,0.82) 100%)"
                    : isSelected
                    ? layer.activeTopGradient
                    : layer.topGradient,
                  border: isSelected
                    ? `1.5px solid ${layer.accentHex}`
                    : "1.25px solid rgba(255, 255, 255, 0.24)",
                  boxShadow:
                    "inset 0 2px 3px rgba(255, 255, 255, 0.22), inset 0 -10px 24px rgba(0, 0, 0, 0.55)",
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(125deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.03) 34%, transparent 60%)",
                  }}
                />

                {idx === 0 && !isBackdrop && (
                  <div
                    className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#05080C]/95 flex items-center justify-center p-4"
                    style={{
                      border: "1.5px solid rgba(0, 183, 209, 0.48)",
                      boxShadow:
                        "inset 0 4px 12px rgba(0,0,0,0.9), 0 1px 0 rgba(255,255,255,0.18), 0 0 28px rgba(0,183,209,0.22)",
                    }}
                  >
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16">
                      <Image
                        src="/brand/rentoai-symbol-transparent.png"
                        alt="RentoAI Oficial"
                        fill
                        sizes="64px"
                        className="object-contain drop-shadow-[0_0_10px_rgba(0,183,209,0.35)]"
                      />
                    </div>
                  </div>
                )}

                {idx > 0 && !isGhost && !isBackdrop && (
                  <div className="px-3 py-1 rounded-full bg-[#05080C]/80 border border-white/15 text-[10px] font-mono-tech tracking-widest text-slate-200 uppercase">
                    {layer.code}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
