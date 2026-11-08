"use client";

import { useState } from "react";
import Image from "next/image";
import { Lock, CheckCheck } from "lucide-react";

export default function DashboardAndOwnerMode() {
  const [activeTab, setActiveTab] = useState<"dueno" | "panel">("dueno");

  return (
    <section
      id="modo-dueno"
      className="py-24 md:py-32 border-b border-white/[0.06] strata-atmosphere"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Pill Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-[11px] font-mono-tech text-[#00B7D1] uppercase tracking-[0.18em] block">
              CONTROL EJECUTIVO Y CARTERA PROPIA
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-white font-semibold leading-[1.06] tracking-[-0.035em]">
              Modo Dueño y gestión{" "}
              <span className="font-serif-accent font-normal text-[#00B7D1]">
                centralizada.
              </span>
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              Consultá el pulso comercial de tu inmobiliaria un domingo a la noche desde tu
              WhatsApp, mientras el 100% de la cartera queda resguardado en la empresa.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-[#090D14] border border-white/10 self-start">
            <button
              type="button"
              onClick={() => setActiveTab("dueno")}
              className={`px-5 py-2 rounded-full text-xs font-mono-tech transition-all ${
                activeTab === "dueno"
                  ? "bg-[#00B7D1]/25 text-[#67E8F9] border border-[#00B7D1]/50 font-semibold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              01. Modo Dueño (/datos)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("panel")}
              className={`px-5 py-2 rounded-full text-xs font-mono-tech transition-all ${
                activeTab === "panel"
                  ? "bg-[#00B7D1]/25 text-[#67E8F9] border border-[#00B7D1]/50 font-semibold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              02. Cartera & CRM
            </button>
          </div>
        </div>

        {/* Double-Framed Vault Content */}
        <div className="strata-shell">
          {activeTab === "dueno" ? (
            <div className="strata-vault-card p-7 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="text-[10px] font-mono-tech text-[#00B7D1] uppercase tracking-[0.18em] block">
                  COMANDO /DATOS · BUSINESS INTELLIGENCE
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-white font-semibold tracking-tight">
                  Preguntá en lenguaje natural o con un audio de voz
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  El Modo Dueño conecta al director de la inmobiliaria con las métricas reales
                  del negocio mediante el comando{" "}
                  <code className="px-2 py-0.5 rounded bg-white/10 text-[#67E8F9] font-mono-tech text-xs">
                    /datos
                  </code>{" "}
                  sin abrir paneles complejos.
                </p>

                <div className="space-y-3.5 pt-2 text-xs text-slate-300">
                  <div className="p-4 rounded-2xl bg-white/[0.025] border border-white/[0.06]">
                    <strong className="text-white block mb-1">
                      Triple Escudo Zero-SQL-Injection
                    </strong>
                    Motor Text-to-SQL encapsulado en modo estricto de solo lectura. Riesgo cero
                    de alteración o borrado sobre la base corporativa.
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.025] border border-white/[0.06]">
                    <strong className="text-white block mb-1">
                      Resumen Ejecutivo Automático (Lunes 09:00 AM)
                    </strong>
                    Consolidado semanal de tasaciones VIP, prospectos en USD billete, reclamos y
                    facturación ARCA directo en tu celular.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-md rounded-3xl bg-[#070B10] border border-white/10 p-5 sm:p-6 shadow-2xl space-y-4 text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.07] text-[10px] font-mono-tech text-slate-400">
                    <div className="flex items-center gap-2">
                      <div className="relative w-5 h-5">
                        <Image
                          src="/brand/rentoai-symbol-transparent.png"
                          alt="RentoAI"
                          fill
                          sizes="20px"
                          className="object-contain"
                        />
                      </div>
                      <span className="text-white font-medium">
                        Canal Ejecutivo · Modo Dueño
                      </span>
                    </div>
                    <span>23:14</span>
                  </div>

                  <div className="bg-[#172130] text-slate-100 p-3.5 rounded-2xl rounded-tr-none ml-10 border border-white/[0.06] space-y-1">
                    <span className="text-[9px] text-slate-400 font-mono-tech block">
                      Titular de Inmobiliaria
                    </span>
                    <p>
                      /datos ¿cuántos prospectos arriba de USD 100k ingresaron esta semana?
                    </p>
                  </div>

                  <div className="bg-[#0A1924] text-slate-100 p-4 rounded-2xl rounded-tl-none mr-6 border border-[#00B7D1]/35 space-y-2">
                    <div className="flex items-center justify-between text-[9.5px] font-mono-tech text-[#67E8F9]">
                      <span className="flex items-center gap-1">
                        <Lock className="w-3 h-3" /> Solo Lectura Verificada
                      </span>
                      <span>23:14:02</span>
                    </div>
                    <p className="text-white font-medium">
                      📊 Informe consolidado semanal:
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                      Ingresaron <strong>4 prospectos calificados &gt; USD 100k</strong> (3 en
                      Barrio Centro con media USD 135k y 1 en Zona Sur). 2 visitas ya agendadas.
                    </p>
                    <div className="pt-2 border-t border-[#00B7D1]/20 flex items-center justify-between text-[10px] text-slate-400">
                      <span>Próximo envío: Lunes 09:00 AM</span>
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="strata-vault-card p-7 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="text-[10px] font-mono-tech text-[#00B7D1] uppercase tracking-[0.18em] block">
                  PATRIMONIO DE DATOS DE LA AGENCIA
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-white font-semibold tracking-tight">
                  La cartera queda en tu inmobiliaria, no en celulares personales
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  En el esquema tradicional, cuando un vendedor se retira de la firma, las
                  conversaciones y tasaciones quedan en su línea privada. Con RentoAI, cada
                  interacción pertenece al activo institucional de la inmobiliaria.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-4 rounded-2xl bg-white/[0.025] border border-white/[0.06]">
                    <span className="text-[#00B7D1] font-mono-tech text-[10px] block mb-1">
                      4 ÁREAS ENRUTADAS
                    </span>
                    <span className="text-slate-200">
                      Ventas, Tasaciones VIP, Soporte técnico y Cobranzas ARCA.
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.025] border border-white/[0.06]">
                    <span className="text-emerald-400 font-mono-tech text-[10px] block mb-1">
                      TRAZABILIDAD TOTAL
                    </span>
                    <span className="text-slate-200">
                      Auditoría en vivo de tickets derivados y tiempos de atención.
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-3xl bg-[#070B10] border border-white/10 p-6 space-y-4 text-xs font-mono-tech">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.07]">
                    <span className="text-white font-semibold">
                      MONITOR OPERATIVO · RENTOAI
                    </span>
                    <span className="text-emerald-400">● ACTIVO 24/7</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-[11px]">
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1">
                      <span className="text-slate-400 block">VENTAS & STOCK</span>
                      <span className="font-display text-white font-semibold text-base block">
                        Catálogo 15m
                      </span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1">
                      <span className="text-slate-400 block">TASACIONES VIP</span>
                      <span className="font-display text-[#E5A93C] font-semibold text-base block">
                        Alerta Directa
                      </span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1">
                      <span className="text-slate-400 block">RENTO MATCH</span>
                      <span className="font-display text-[#67E8F9] font-semibold text-base block">
                        Bóveda Activa
                      </span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-1">
                      <span className="text-slate-400 block">FACTURACIÓN ARCA</span>
                      <span className="font-display text-emerald-400 font-semibold text-base block">
                        CAE 1-Clic
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#0A1924] border border-[#00B7D1]/25 text-slate-300 text-[11px] flex items-center justify-between gap-2 font-sans">
                    <span>
                      Retención patrimonial: 100% de contactos bajo dominio corporativo.
                    </span>
                    <span className="font-mono-tech text-[#67E8F9] shrink-0">
                      Ley 25.326
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
