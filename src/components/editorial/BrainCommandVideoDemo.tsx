"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Play, Pause, RotateCcw, Brain, ShieldCheck, Zap, Receipt, DollarSign, Lock, CheckCheck, Camera, Sparkles } from "lucide-react";

type AnimationPhase = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export default function BrainCommandVideoDemo() {
  const [phase, setPhase] = useState<AnimationPhase>(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Phases timeline:
  // Phase 0 (0s - 4s): Logo Inicial
  // Phase 1 (4s - 8s): Metamorfosis: El Cerebro toma el centro
  // Phase 2 (8s - 13s): Flujo 1: Ventas y Precios
  // Phase 3 (13s - 18s): Flujo 2: Soporte y Escudo DNU 70/2023
  // Phase 4 (18s - 23s): Flujo 3: Administración y Facturas ARCA
  // Phase 5 (23s - 28s): Flujo 4: Modo Dueño (/datos)
  // Phase 6 (28s - 34s): Cierre: Recepcionista de Élite y Centro de Comando 24/7

  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const interval = 250; // tick every 250ms
    const totalDuration = 32000; // 32 seconds total loop

    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + interval;
        if (next >= totalDuration) {
          setPhase(0);
          return 0;
        }

        // Map milliseconds to phases
        if (next < 4000) setPhase(0);
        else if (next < 8000) setPhase(1);
        else if (next < 14000) setPhase(2);
        else if (next < 20000) setPhase(3);
        else if (next < 26000) setPhase(4);
        else if (next < 30000) setPhase(5);
        else setPhase(6);

        return next;
      });
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const handleSeekPhase = (targetPhase: AnimationPhase) => {
    setIsPlaying(false);
    setPhase(targetPhase);
    const times: Record<AnimationPhase, number> = {
      0: 0,
      1: 4500,
      2: 9000,
      3: 15000,
      4: 21000,
      5: 27000,
      6: 30500,
    };
    setProgress(times[targetPhase]);
  };

  const handleReset = () => {
    setPhase(0);
    setProgress(0);
    setIsPlaying(true);
  };

  return (
    <section className="py-24 md:py-32 bg-[#06080B] border-b border-white/[0.07] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00B7D1]/30 bg-[#00B7D1]/10 text-xs font-mono-tech text-[#00B7D1]">
            <Brain className="w-3.5 h-3.5 animate-pulse" />
            <span>ANIMACIÓN DE VIDEO CONCEPTUAL · EL CEREBRO CENTRAL</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-tight">
            De imagotipo a Centro de Comando: cómo procesa el Cerebro de RentoAI
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-sans">
            El cerebro sináptico del logo toma el control absoluto del plano y se convierte en el núcleo
            agéntico que enruta consultas de precios, soporte edilicio, finanzas y modo dueño las 24 horas del día.
          </p>
        </div>

        {/* Video Canvas Container (16:9 Aspect Ratio on Desktop) */}
        <div className="mt-12 rounded-3xl bg-[#040608] border border-white/[0.12] p-6 sm:p-10 relative overflow-hidden shadow-2xl min-h-[580px] flex flex-col justify-between">
          {/* Top Bar with Status and Timeline Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 z-20">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00B7D1] animate-ping" />
              <span className="text-xs font-mono-tech text-white uppercase tracking-wider">
                {phase === 0 && "01. APERTURA: IMAGOTIPO OFICIAL"}
                {phase === 1 && "02. METAMORFOSIS: EL CEREBRO TOMA EL CENTRO"}
                {phase === 2 && "03. FLUJO 1: VENTAS Y PRECIOS (USD +10%)"}
                {phase === 3 && "04. FLUJO 2: SOPORTE Y ESCUDO DNU 70/2023"}
                {phase === 4 && "05. FLUJO 3: ADMINISTRACIÓN Y FACTURACIÓN ARCA"}
                {phase === 5 && "06. FLUJO 4: MODO DUEÑO (/DATOS EN WHATSAPP)"}
                {phase === 6 && "07. CIERRE: CENTRO DE COMANDO OPERATIVO 24/7"}
              </span>
            </div>

            {/* Play/Pause & Scrubbing Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all font-mono-tech text-xs flex items-center gap-1.5"
                title={isPlaying ? "Pausar animación" : "Reproducir animación"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? "Pausar" : "Reproducir"}</span>
              </button>

              <button
                onClick={handleReset}
                className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors"
                title="Reiniciar secuencia"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Central Animation Stage */}
          <div className="relative my-8 flex-1 flex items-center justify-center min-h-[380px]">
            {/* Background Reticle (Hairline Grid) */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

            {/* ======================================================== */}
            {/* PHASE 0: LOGO INICIAL COMPLETO */}
            {/* ======================================================== */}
            {phase === 0 && (
              <div className="text-center space-y-6 animate-in fade-in zoom-in-95 duration-500 z-10">
                <div className="relative w-72 sm:w-96 h-28 sm:h-36 mx-auto rounded-2xl overflow-hidden border border-white/10 bg-black/60 p-4 flex items-center justify-center shadow-2xl">
                  <Image
                    src="/brand/rentoai-logo-transparent.png"
                    alt="RentoAI Logo"
                    fill
                    sizes="(max-width: 640px) 288px, 384px"
                    className="object-contain p-2"
                    priority
                  />
                </div>
                <p className="text-xs font-mono-tech text-slate-400 tracking-widest uppercase">
                  Identidad Oficial · Arquitectura Inmobiliaria con IA
                </p>
              </div>
            )}

            {/* ======================================================== */}
            {/* PHASE 1: METAMORFOSIS: EL CEREBRO TOMA EL CENTRO */}
            {/* ======================================================== */}
            {phase === 1 && (
              <div className="relative text-center space-y-6 animate-in fade-in zoom-in-110 duration-700 z-10">
                <div className="relative w-36 h-36 mx-auto rounded-full bg-[#00B7D1]/10 border-2 border-[#00B7D1] flex items-center justify-center shadow-[0_0_60px_rgba(0,183,209,0.35)] animate-pulse">
                  <Brain className="w-20 h-20 text-[#00B7D1] drop-shadow-[0_0_20px_#00B7D1]" />
                  {/* Orbital Sinapsis Waves */}
                  <span className="absolute -inset-3 rounded-full border border-[#00B7D1]/30 animate-ping opacity-60" />
                  <span className="absolute -inset-8 rounded-full border border-[#00B7D1]/20 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-white font-normal">
                    El Núcleo Agéntico se Desprende
                  </h3>
                  <p className="text-xs font-mono-tech text-[#00B7D1] mt-1 tracking-wider uppercase">
                    Activando Orquestador Central de Intenciones (Latencia &lt; 2s)
                  </p>
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* PHASES 2, 3, 4, 5: LOS 4 FLUJOS SALIENDO DEL CEREBRO */}
            {/* ======================================================== */}
            {(phase >= 2 && phase <= 5) && (
              <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
                {/* Central Brain Core */}
                <div className="lg:col-span-5 flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 rounded-full bg-[#0A1A24] border-2 border-[#00B7D1] flex items-center justify-center shadow-[0_0_50px_rgba(0,183,209,0.4)]">
                    <Brain className="w-16 h-16 text-[#00B7D1] animate-pulse" />
                    {/* Beam pulse */}
                    <span className="absolute -inset-2 rounded-full border border-[#00B7D1]/40 animate-ping opacity-50" />
                  </div>
                  <span className="text-[11px] font-mono-tech text-white font-bold mt-3 block">
                    CEREBRO CENTRAL RENTO AI
                  </span>
                  <span className="text-[10px] font-mono-tech text-slate-400">
                    Procesamiento en 1.8 segundos
                  </span>
                </div>

                {/* Branching Chat Bubble for Active Phase */}
                <div className="lg:col-span-7 space-y-4">
                  {phase === 2 && (
                    <div className="rounded-2xl bg-[#080C12] border-2 border-[#00B7D1] p-6 shadow-2xl space-y-3 animate-in slide-in-from-right-4 duration-300">
                      <div className="flex items-center justify-between text-[11px] font-mono-tech">
                        <span className="text-[#00B7D1] font-bold flex items-center gap-1.5">
                          <DollarSign className="w-3.5 h-3.5" /> 01. FLUJO VENTAS & PRECIOS
                        </span>
                        <span className="text-slate-400">Meta Sync 15m</span>
                      </div>

                      {/* Lead message */}
                      <div className="p-3 rounded-xl rounded-tr-none bg-[#1E293B] text-slate-200 text-xs ml-8 border border-white/5">
                        <span className="text-[9px] text-slate-400 font-mono-tech block">Comprador</span>
                        &ldquo;Hola, vi un 3 amb por USD 130k. ¿Sigue disponible? Tenemos USD billete.&rdquo;
                      </div>

                      {/* AI Agent Response */}
                      <div className="p-3.5 rounded-xl rounded-tl-none bg-[#0A1A24] text-slate-100 text-xs mr-4 border border-[#00B7D1]/30 space-y-1">
                        <div className="flex items-center gap-1 text-[9px] font-mono-tech text-[#00B7D1]">
                          <Zap className="w-2.5 h-2.5" />
                          <span>Tolerancia Comercial +10% Aplicada</span>
                        </div>
                        <p>
                          ¡Hola! Sí, está disponible (74 m² y cochera). Por ese presupuesto y con tolerancia del +10%, tenemos también una opción en USD 135.000 con balcón aterrazado donde los dueños escuchan ofertas.
                        </p>
                      </div>

                      <div className="pt-2 text-[10px] font-mono-tech text-emerald-400 flex items-center justify-between border-t border-white/5">
                        <span>Acción: Top 3 Catálogo Meta despachado</span>
                        <CheckCheck className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  )}

                  {phase === 3 && (
                    <div className="rounded-2xl bg-[#080C12] border-2 border-amber-400 p-6 shadow-2xl space-y-3 animate-in slide-in-from-right-4 duration-300">
                      <div className="flex items-center justify-between text-[11px] font-mono-tech">
                        <span className="text-amber-400 font-bold flex items-center gap-1.5">
                          <Camera className="w-3.5 h-3.5" /> 02. SOPORTE TÉCNICO & ESCUDO VITAL
                        </span>
                        <span className="text-slate-400">DNU 70/2023 Compliant</span>
                      </div>

                      {/* Lead message */}
                      <div className="p-3 rounded-xl rounded-tr-none bg-[#1E293B] text-slate-200 text-xs ml-8 border border-white/5 space-y-1">
                        <span className="text-[9px] text-slate-400 font-mono-tech block">Inquilino con Reclamo</span>
                        <p>[Envía foto de rotura] &ldquo;Tengo una pérdida importante de agua debajo de la bacha.&rdquo;</p>
                      </div>

                      {/* AI Agent Response */}
                      <div className="p-3.5 rounded-xl rounded-tl-none bg-[#0A1A24] text-slate-100 text-xs mr-4 border border-amber-400/40 space-y-1">
                        <div className="flex items-center gap-1 text-[9px] font-mono-tech text-amber-300">
                          <ShieldCheck className="w-2.5 h-2.5" />
                          <span>Visión Artificial · Gravedad Alta</span>
                        </div>
                        <p>
                          Recibí la fotografía del daño. Ya derivé el reclamo técnico a la administración con prioridad urgente. Por seguridad, te sugerimos cerrar la llave de paso general.
                        </p>
                      </div>

                      <div className="pt-2 text-[10px] font-mono-tech text-amber-300 flex items-center justify-between border-t border-white/5">
                        <span>Acción: Prohíbe recetas caseras · Blindaje legal</span>
                        <CheckCheck className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  )}

                  {phase === 4 && (
                    <div className="rounded-2xl bg-[#080C12] border-2 border-emerald-400 p-6 shadow-2xl space-y-3 animate-in slide-in-from-right-4 duration-300">
                      <div className="flex items-center justify-between text-[11px] font-mono-tech">
                        <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                          <Receipt className="w-3.5 h-3.5" /> 03. ADMINISTRACIÓN & ARCA
                        </span>
                        <span className="text-slate-400">Sello Oficial CAE</span>
                      </div>

                      {/* Lead message */}
                      <div className="p-3 rounded-xl rounded-tr-none bg-[#1E293B] text-slate-200 text-xs ml-8 border border-white/5">
                        <span className="text-[9px] text-slate-400 font-mono-tech block">Inquilino</span>
                        &ldquo;Adjunto comprobante de transferencia bancaria de expensas de Noviembre.&rdquo;
                      </div>

                      {/* AI Agent Response */}
                      <div className="p-3.5 rounded-xl rounded-tl-none bg-[#0A1A24] text-slate-100 text-xs mr-4 border border-emerald-400/40 space-y-1">
                        <div className="flex items-center gap-1 text-[9px] font-mono-tech text-emerald-400">
                          <CheckCheck className="w-2.5 h-2.5" />
                          <span>OCR Inteligente + Aprobación 1-Clic</span>
                        </div>
                        <p>
                          Comprobante procesado con éxito. Se validó el monto y el CUIT. Factura oficial emitida ante ARCA con CAE obtenido y PDF despachado por WhatsApp.
                        </p>
                      </div>

                      <div className="pt-2 text-[10px] font-mono-tech text-emerald-400 flex items-center justify-between border-t border-white/5">
                        <span>Acción: CAE asignado y factura archivada</span>
                        <CheckCheck className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  )}

                  {phase === 5 && (
                    <div className="rounded-2xl bg-[#080C12] border-2 border-cyan-300 p-6 shadow-2xl space-y-3 animate-in slide-in-from-right-4 duration-300">
                      <div className="flex items-center justify-between text-[11px] font-mono-tech">
                        <span className="text-cyan-300 font-bold flex items-center gap-1.5">
                          <Lock className="w-3.5 h-3.5" /> 04. MODO DUEÑO (/DATOS)
                        </span>
                        <span className="text-slate-400">Zero-SQL-Injection</span>
                      </div>

                      {/* Owner message */}
                      <div className="p-3 rounded-xl rounded-tr-none bg-[#1E293B] text-slate-200 text-xs ml-8 border border-white/5">
                        <span className="text-[9px] text-slate-400 font-mono-tech block">Titular de Agencia</span>
                        &ldquo;/datos ¿cuántos prospectos de más de USD 100k ingresaron esta semana?&rdquo;
                      </div>

                      {/* AI Agent Response */}
                      <div className="p-3.5 rounded-xl rounded-tl-none bg-[#0A1A24] text-slate-100 text-xs mr-4 border border-cyan-400/40 space-y-1">
                        <div className="flex items-center gap-1 text-[9px] font-mono-tech text-cyan-300">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>Consulta Text-to-SQL Solo Lectura</span>
                        </div>
                        <p>
                          📊 Ingresaron 4 prospectos calificados arriba de USD 100k (3 en Centro, 1 en Zona Sur). 2 visitas coordinadas. Próximo reporte automático: Lunes 9:00 AM.
                        </p>
                      </div>

                      <div className="pt-2 text-[10px] font-mono-tech text-cyan-300 flex items-center justify-between border-t border-white/5">
                        <span>Acción: Consulta en 0.4s · Sin riesgo de SQL injection</span>
                        <CheckCheck className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ======================================================== */}
            {/* PHASE 6: CIERRE INSTITUCIONAL */}
            {/* ======================================================== */}
            {phase === 6 && (
              <div className="text-center space-y-6 animate-in fade-in zoom-in-95 duration-700 z-10">
                <div className="relative w-40 h-40 mx-auto rounded-full bg-[#0A1A24] border-2 border-[#00B7D1] flex items-center justify-center shadow-[0_0_70px_rgba(0,183,209,0.5)]">
                  <Brain className="w-24 h-24 text-[#00B7D1]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-editorial text-3xl sm:text-4xl text-white font-normal">
                    Recepcionista Digital de Élite
                  </h3>
                  <h4 className="font-mono-tech text-sm sm:text-base text-[#00B7D1] font-bold uppercase tracking-wider">
                    Centro de Comando Operativo 24/7 para Inmobiliarias
                  </h4>
                  <p className="text-xs font-mono-tech text-slate-400 max-w-md mx-auto pt-2">
                    Arquitectura Agéntica Multicapa · Desarrollado por BALUMTech
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Interactive Phase Stepper */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 z-20">
            <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono-tech">
              <span className="text-slate-500 mr-2">Fases:</span>
              <button
                onClick={() => handleSeekPhase(0)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  phase === 0 ? "bg-white text-black font-bold" : "bg-white/5 text-slate-400 hover:text-white"
                }`}
              >
                01. Logo
              </button>
              <button
                onClick={() => handleSeekPhase(1)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  phase === 1 ? "bg-[#00B7D1] text-black font-bold" : "bg-white/5 text-slate-400 hover:text-white"
                }`}
              >
                02. Cerebro
              </button>
              <button
                onClick={() => handleSeekPhase(2)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  phase === 2 ? "bg-[#00B7D1] text-black font-bold" : "bg-white/5 text-slate-400 hover:text-white"
                }`}
              >
                03. Precios
              </button>
              <button
                onClick={() => handleSeekPhase(3)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  phase === 3 ? "bg-amber-400 text-black font-bold" : "bg-white/5 text-slate-400 hover:text-white"
                }`}
              >
                04. Soporte
              </button>
              <button
                onClick={() => handleSeekPhase(4)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  phase === 4 ? "bg-emerald-400 text-black font-bold" : "bg-white/5 text-slate-400 hover:text-white"
                }`}
              >
                05. Finanzas
              </button>
              <button
                onClick={() => handleSeekPhase(5)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  phase === 5 ? "bg-cyan-300 text-black font-bold" : "bg-white/5 text-slate-400 hover:text-white"
                }`}
              >
                06. Modo Dueño
              </button>
              <button
                onClick={() => handleSeekPhase(6)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  phase === 6 ? "bg-white text-black font-bold" : "bg-white/5 text-slate-400 hover:text-white"
                }`}
              >
                07. Cierre
              </button>
            </div>

            {/* Time code display */}
            <div className="text-xs font-mono-tech text-slate-500">
              {Math.floor(progress / 1000)}s / 32s
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
