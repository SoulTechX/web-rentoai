"use client";

import { useState } from "react";
import {
  TrendingUp,
  KeyRound,
  Sparkles,
  ShieldAlert,
  ReceiptText,
  Cpu,
  Coins,
  Check,
  ChevronRight,
} from "lucide-react";
import { MODULES } from "@/lib/constants";

export default function ModulesSection() {
  const [selectedModule, setSelectedModule] = useState(MODULES[0].id);

  const iconsMap: Record<string, any> = {
    TrendingUp,
    KeyRound,
    Sparkles,
    ShieldAlert,
    ReceiptText,
    Cpu,
    Coins,
  };

  const active = MODULES.find((m) => m.id === selectedModule) || MODULES[0];
  const ActiveIcon = iconsMap[active.iconName] || TrendingUp;

  return (
    <section id="modulos" className="py-20 md:py-32 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-4">
            <span>ARQUITECTURA MODULAR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Space_Grotesk'] font-bold text-white tracking-tight">
            Los 7 Módulos del{" "}
            <span className="text-gradient-cyan">Centro de Comando</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Cada módulo está diseñado a medida para resolver una fricción crítica
            del día a día de una agencia inmobiliaria moderna.
          </p>
        </div>

        {/* Modules interactive layout: sidebar list on desktop + rich showcase on the right */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Module Selector List */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {MODULES.map((mod) => {
              const Icon = iconsMap[mod.iconName] || TrendingUp;
              const isSelected = mod.id === selectedModule;

              return (
                <button
                  key={mod.id}
                  onClick={() => setSelectedModule(mod.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-center justify-between border ${
                    isSelected
                      ? "bg-slate-900 border-cyan-500/60 shadow-lg shadow-cyan-950/50 scale-[1.01]"
                      : "bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700 text-slate-400"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-cyan-400 font-bold">
                          {mod.number}
                        </span>
                        <h3
                          className={`text-sm sm:text-base font-bold ${
                            isSelected ? "text-white" : "text-slate-300"
                          }`}
                        >
                          {mod.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {mod.tagline}
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-cyan-400 translate-x-1" : "text-slate-600"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Module Detail Card */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border-cyan-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-bold">
                      MÓDULO {active.number}
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      {active.title}
                    </h3>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950/80 text-cyan-300 border border-cyan-500/40">
                  {active.badge}
                </span>
              </div>

              <h4 className="text-lg font-semibold text-cyan-200 mb-3">
                {active.tagline}
              </h4>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                {active.description}
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3 mb-8">
                {active.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-slate-200">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Highlight Metric Banner */}
              {active.highlightMetric && (
                <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between text-xs sm:text-sm font-mono text-cyan-300">
                  <span className="font-semibold">Métrica de impacto:</span>
                  <span className="text-white font-bold">{active.highlightMetric}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
