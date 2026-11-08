"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Zap,
  Clock,
  Sparkles,
  Bot,
  User,
  CheckCheck,
} from "lucide-react";
import { BRAND, METRICS } from "@/lib/constants";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<"tasacion" | "compra" | "soporte">("tasacion");

  const simulatedChats = {
    tasacion: [
      {
        sender: "user",
        time: "23:42",
        text: "Hola, buenas noches. Tengo un 3 ambientes en Palermo que quiero tasar para vender en USD. ¿Cómo hacemos?",
      },
      {
        sender: "ai",
        time: "23:42",
        text: "¡Hola! Qué gusto saludarte. Excelente zona Palermo. Para brindarte una tasación precisa, ¿cuántos metros cuadrados aproximados tiene la propiedad y sobre qué calle o altura se ubica?",
        tag: "⚡ Respondido en 2.8s · Prioridad VIP",
      },
      {
        sender: "user",
        time: "23:43",
        text: "Son 78 m2 con balcón al frente sobre Av. Coronel Díaz. Piso alto.",
      },
      {
        sender: "ai",
        time: "23:43",
        text: "Perfecto, datos registrados. Ya generé el ticket prioritario y en los próximos minutos el corredor matriculado de la agencia se pondrá en contacto directo con vos para coordinar la visita.",
        tag: "🎯 Ticket urgente despachado al martillero",
      },
    ],
    compra: [
      {
        sender: "user",
        time: "01:15",
        text: "Hola, busco 2 ambientes en Belgrano hasta USD 125.000 billete. No apto mascotas no me sirve.",
      },
      {
        sender: "ai",
        time: "01:15",
        text: "¡Hola! Entendido perfectamente. Con nuestra tolerancia comercial activa, tengo 2 opciones excelentes: una en USD 120.000 sobre Monroe y otra en USD 130.000 negociable (apta mascotas). ¿Te envío las fichas con fotos?",
        tag: "⚡ Tolerancia +10% · Detección USD Billete",
      },
    ],
    soporte: [
      {
        sender: "user",
        time: "20:04",
        text: "Hola, soy inquilino en la unidad 4B. Se rompió un caño bajo la mesada y sale agua con olor a gas.",
      },
      {
        sender: "ai",
        time: "20:04",
        text: "⚠️ PROTOCOLO DE URGENCIA ACTIVO: Por tu seguridad, cerrá de inmediato la llave de paso de gas y agua del departamento, y ventilá los ambientes. No enciendas luces ni artefactos. Ya enviamos la alerta crítica a la administración.",
        tag: "🛡️ Escudo Vital · DNU 70/2023 Compliant",
      },
    ],
  };

  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    "Hola, vi la web de RentoAI y quiero coordinar una demo."
  )}`;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-cyber-grid">
      {/* Background glow flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] glow-radial-cyan pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] glow-radial-blue pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow Badge */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono tracking-wider mb-6 shadow-sm shadow-cyan-950">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>CENTRO DE COMANDO OPERATIVO INMOBILIARIO · BY BALUMTECH</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Space_Grotesk'] font-extrabold tracking-tight text-white max-w-5xl leading-[1.08]">
            Mientras dormís, alguien quiere tasar su casa.{" "}
            <span className="text-gradient-cyan block mt-2">
              RentoAI atiende en 4 segundos.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
            El recepcionista digital de élite que transforma tu canal de WhatsApp en un{" "}
            <strong className="text-white font-semibold">prisma operativo silencioso</strong>.
            Filtra el ruido administrativo, detecta negociaciones en{" "}
            <span className="text-cyan-300 font-medium">USD billete</span> y despacha alertas prioritarias
            a tus corredores solo cuando hay un negocio real sobre la mesa.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-200 hover:from-cyan-300 hover:to-cyan-100 rounded-2xl shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-[1.02] transition-all"
            >
              <span>Agendar Demo en Vivo</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 rounded-2xl transition-all hover:scale-[1.02] shadow-lg shadow-emerald-950/40"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>

          {/* Micro trust indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-cyan-400" />
              Respuesta en &lt; 4 segundos
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-cyan-400" />
              Cobertura 24/7 sin guardias humanas
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Sello oficial ARCA & DNU 70/2023
            </span>
          </div>
        </div>

        {/* Live Interactive Simulation Widget (Apple-style preview) */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500/30 via-slate-800/40 to-slate-900/80 shadow-2xl shadow-cyan-950/60">
            <div className="rounded-[22px] bg-slate-950/90 backdrop-blur-xl border border-slate-800/80 p-4 sm:p-6 lg:p-8">
              {/* Simulator Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 border-b border-slate-800 gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-cyan-400/50">
                    <Image
                      src="/brand/rentoai logo.JPG"
                      alt="RentoAI"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-sm font-bold text-white">Centro de Comando RentoAI</h2>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-[10px] text-emerald-400 font-mono">EN VIVO</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Orquestador activo · Canal WhatsApp Inmobiliaria
                    </p>
                  </div>
                </div>

                {/* Scenario Switcher Tabs */}
                <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setActiveTab("tasacion")}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                      activeTab === "tasacion"
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Tasación VIP
                  </button>
                  <button
                    onClick={() => setActiveTab("compra")}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                      activeTab === "compra"
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Compra USD
                  </button>
                  <button
                    onClick={() => setActiveTab("soporte")}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                      activeTab === "soporte"
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Soporte & Urgencia
                  </button>
                </div>
              </div>

              {/* Chat Canvas */}
              <div className="py-6 space-y-4 min-h-[290px] flex flex-col justify-center">
                {simulatedChats[activeTab].map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${
                      msg.sender === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-sm leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-slate-800/90 text-slate-100 rounded-tr-none border border-slate-700/60"
                          : "bg-cyan-950/50 text-cyan-100 rounded-tl-none border border-cyan-500/30 shadow-md shadow-cyan-950/40"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-1 text-[11px] font-mono text-slate-400">
                        <span className="flex items-center gap-1 font-semibold text-slate-300">
                          {msg.sender === "user" ? (
                            <>
                              <User className="w-3 h-3" /> Prospecto
                            </>
                          ) : (
                            <>
                              <Bot className="w-3 h-3 text-cyan-400" /> RentoAI
                            </>
                          )}
                        </span>
                        <span>{msg.time}</span>
                      </div>
                      <p>{msg.text}</p>
                      {msg.tag && (
                        <div className="mt-2.5 pt-2 border-t border-cyan-500/20 flex items-center justify-between text-[11px] font-mono text-cyan-300">
                          <span>{msg.tag}</span>
                          <CheckCheck className="w-3.5 h-3.5 text-cyan-400 inline ml-1" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Simulator Footer Badge */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
                <span className="flex items-center gap-1.5 font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Memoria Transaccional de 72 hs · Lenguaje natural rioplatense
                </span>
                <span className="text-slate-500">
                  Desarrollado y operado por BALUMTech
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
