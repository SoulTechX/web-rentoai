"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  CheckCheck,
  ShieldCheck,
  Zap,
  RotateCcw,
  Sparkles,
} from "lucide-react";

interface PhoneMessage {
  sender: "lead" | "ai";
  text: string;
  subtext?: string;
  badge?: string;
  badgeColor?: "cyan" | "gold" | "emerald";
  time: string;
  meta?: string;
}

interface CriterionScenario {
  id: string;
  shortTab: string;
  chip: string;
  criterio: string;
  queAverigua: string;
  accionDispara: string;
  badge: string;
  crmDispatch: string;
  messages: PhoneMessage[];
}

const CRITERIA_SCENARIOS: CriterionScenario[] = [
  {
    id: "presupuesto",
    shortTab: "Compra USD",
    chip: "USD Billete · +10%",
    criterio: "Presupuesto y Moneda",
    queAverigua:
      "Distingue con rigor entre ARS y USD billete, evalúa el techo real del comprador y aplica tolerancia comercial del +10%.",
    accionDispara:
      "Presenta unidades de hasta USD 135k con margen de negociación a quien busca en USD 130k y deriva ficha lista.",
    badge: "Tolerancia Comercial +10%",
    crmDispatch: "Ficha calificada en USD billete enviada al corredor de zona",
    messages: [
      {
        sender: "lead",
        text: "Hola buenas noches, vi un 3 ambientes en Barrio Norte por USD 130.000. ¿Sigue disponible?",
        time: "22:41",
      },
      {
        sender: "ai",
        badge: "Respuesta en 2.1s · Meta Sync 15m",
        badgeColor: "cyan",
        text: "¡Hola! Sí, la unidad sobre Av. Santa Fe sigue disponible (74 m², balcón y cochera). Con tolerancia del +10%, tenemos también una opción en USD 135.000 sobre Arenales donde escuchan ofertas.",
        subtext:
          "¿Buscás mudanza inmediata o inversión? Operamos directo en USD billete.",
        time: "22:41",
        meta: "Tolerancia +10% aplicada",
      },
      {
        sender: "lead",
        text: "Es para mudarme en 60 días con mi familia en USD billete. ¿Coordinamos visita?",
        time: "22:43",
      },
      {
        sender: "ai",
        badge: "Lead Calificado · Derivación a Corredor",
        badgeColor: "emerald",
        text: "Excelente. Ya registré tu disponibilidad de sábados y le pasé la ficha directa al martillero asignado para confirmarte mañana a las 9:00 AM.",
        time: "22:43",
        meta: "Ticket enviado al corredor",
      },
    ],
  },
  {
    id: "operacion",
    shortTab: "Tasación VIP",
    chip: "Captación Prioritaria",
    criterio: "Tipo de Operación (VIP)",
    queAverigua:
      "Identifica al instante si escribe un propietario que quiere tasar y poner su inmueble en venta.",
    accionDispara:
      "Activa el Protocolo VIP de máxima cortesía y despacha alerta urgente al WhatsApp del martillero matriculado.",
    badge: "VIP Lane en Segundos",
    crmDispatch: "Alerta urgente de captación despachada al celular del martillero",
    messages: [
      {
        sender: "lead",
        text: "Hola, tengo un semipiso en Recoleta (Callao y Quintana) y quiero saber cuánto pedir para venderlo este mes.",
        time: "23:05",
      },
      {
        sender: "ai",
        badge: "Protocolo VIP · Prioridad Máxima",
        badgeColor: "gold",
        text: "¡Buenas noches! Es una ubicación de altísima demanda. Para asignarte al tasador especialista de Recoleta, ¿qué superficie aproximada tiene y en qué estado está?",
        time: "23:05",
        meta: "Captación VIP Activa",
      },
      {
        sender: "lead",
        text: "Tiene 145 m², dependencia, cochera fija y fue reciclado a nuevo hace dos años.",
        time: "23:06",
      },
      {
        sender: "ai",
        badge: "VIP Lane · Martillero Notificado",
        badgeColor: "gold",
        text: "Perfecto. Ya notifiqué al celular del martillero matriculado a cargo de Recoleta. Mañana a primera hora te contacta con comparables reales de cierre.",
        time: "23:06",
        meta: "Ticket VIP enviado",
      },
    ],
  },
  {
    id: "stock",
    shortTab: "RENTO Match",
    chip: "Lista de Espera Activa",
    criterio: "Búsqueda Sin Stock",
    queAverigua:
      "Cuando no hay inventario exacto hoy, jamás responde un 'no tenemos' seco que regale el cliente a otra agencia.",
    accionDispara:
      "Guarda el perfil en La Bóveda (RENTO Match) y dispara alerta automática apenas ingresa una captación compatible.",
    badge: "Reverse Matching Activo",
    crmDispatch: "Demanda registrada en La Bóveda para Match Mágico prioritario",
    messages: [
      {
        sender: "lead",
        text: "Buenas tardes, busco PH 4 ambientes con terraza propia en Colegiales hasta USD 220.000.",
        time: "15:20",
      },
      {
        sender: "ai",
        badge: "Reverse Matching · Escaneo Catálogo",
        badgeColor: "cyan",
        text: "¡Hola! Hoy no tenemos un PH con terraza en ese valor exacto en cartera activa, pero ingresé tu búsqueda en nuestra Bóveda de Espera Activa (RENTO Match).",
        time: "15:20",
        meta: "Guardado en La Bóveda",
      },
      {
        sender: "lead",
        text: "¡Buenísimo! Si entra algo con parrilla avísenme enseguida por favor.",
        time: "15:21",
      },
      {
        sender: "ai",
        badge: "Alerta Match Mágico Programada",
        badgeColor: "emerald",
        text: "Quedó configurado. Apenas ingrese un PH con esas características vas a recibir el aviso por WhatsApp antes de que salga en portales.",
        time: "15:21",
        meta: "Match automático activo",
      },
    ],
  },
  {
    id: "zona",
    shortTab: "4. Catálogo",
    chip: "Meta Sync · 15m",
    criterio: "Zona y Tipología",
    queAverigua:
      "Releva barrio, radio de búsqueda, ambientes, metros y comodidades clave como cochera o balcón.",
    accionDispara:
      "Filtra sobre el catálogo vivo sincronizado cada 15m y envía las fichas oficiales verificadas.",
    badge: "Sincronizado cada 15m",
    crmDispatch: "Fichas técnicas oficiales despachadas en 2.2 segundos",
    messages: [
      {
        sender: "lead",
        text: "Busco 3 ambientes luminoso con cochera cubierta en Núñez o Belgrano R.",
        time: "19:14",
      },
      {
        sender: "ai",
        badge: "Catálogo Meta Sync · Stock Real",
        badgeColor: "cyan",
        text: "¡Hola! Contamos con 2 unidades activas en Núñez con cochera fija cubierta y balcón corrido al frente. Te comparto las fichas oficiales actualizadas.",
        time: "19:14",
        meta: "2 propiedades enviadas",
      },
      {
        sender: "lead",
        text: "Me gustó la de Congreso al 2100, ¿es apto crédito?",
        time: "19:15",
      },
      {
        sender: "ai",
        badge: "Documentación Verificada",
        badgeColor: "emerald",
        text: "Sí, cuenta con planos aprobados y escritura inmediata apta crédito bancario. ¿Querés que agendemos visita esta semana?",
        time: "19:15",
        meta: "Pre-calificación lista",
      },
    ],
  },
  {
    id: "exclusiones",
    shortTab: "5. Filtros",
    chip: "Mascotas · Crédito",
    criterio: "Anti-Negaciones Semánticas",
    queAverigua:
      "Detecta condiciones excluyentes ('sí o sí acepta mascotas', 'apto profesional') incluso en audios de voz.",
    accionDispara:
      "Descarta unidades incompatibles de forma automática, ahorrando visitas frustradas a tus asesores.",
    badge: "Cero Visitas Frustradas",
    crmDispatch: "Unidades no aptas excluidas antes de coordinar agenda",
    messages: [
      {
        sender: "lead",
        text: "Tengo un perro mediano, solo me sirven edificios donde el reglamento acepte mascotas sí o sí.",
        time: "20:08",
      },
      {
        sender: "ai",
        badge: "Filtro Anti-Negación Activo",
        badgeColor: "cyan",
        text: "Entendido. Excluí las unidades con restricción de consorcio y filtré únicamente los 3 departamentos pet-friendly confirmados en Palermo.",
        time: "20:08",
        meta: "Reglamento validado",
      },
      {
        sender: "lead",
        text: "Excelente, mandame el de calle Gorriti.",
        time: "20:09",
      },
      {
        sender: "ai",
        badge: "Ficha Verificada Enviada",
        badgeColor: "emerald",
        text: "Acá tenés la ficha completa de Gorriti 4800 con patio propio. Ya dejé asentado el requisito pet-friendly para tu visita.",
        time: "20:09",
        meta: "Filtro 100% preciso",
      },
    ],
  },
  {
    id: "soporte",
    shortTab: "6. Soporte IA",
    chip: "Visión + DNU 70/2023",
    criterio: "Reclamos Técnicos",
    queAverigua:
      "Inspecciona fotos de desperfectos edilicios enviadas por inquilinos con visión artificial.",
    accionDispara:
      "Clasifica urgencia bajo DNU 70/2023 y bloquea consejos caseros para proteger legalmente a la agencia.",
    badge: "DNU 70/2023 Compliant",
    crmDispatch: "Ticket urgente en administración con blindaje civil",
    messages: [
      {
        sender: "lead",
        text: "[Envía foto] Hola, se rompió el flexible debajo de la mesada y está saliendo bastante agua.",
        time: "21:50",
      },
      {
        sender: "ai",
        badge: "Visión Artificial · Urgencia Alta",
        badgeColor: "gold",
        text: "Recibí la fotografía del daño. Ya generé un ticket prioritario para administración. Por seguridad, cerrá la llave de paso general de la unidad.",
        time: "21:50",
        meta: "Blindaje DNU 70/2023",
      },
      {
        sender: "lead",
        text: "Listo, ya cerré la llave de paso. Gracias.",
        time: "21:52",
      },
      {
        sender: "ai",
        badge: "Guardia Técnica Notificada",
        badgeColor: "emerald",
        text: "Perfecto. El responsable técnico de mantenimiento ya recibió la foto y tu dirección para coordinar la reparación a primera hora.",
        time: "21:52",
        meta: "Ticket #402 activo",
      },
    ],
  },
];

export default function LeadQualification() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isTyping, setIsTyping] = useState(false);
  const [replayTick, setReplayTick] = useState(0);

  const activeScenario = CRITERIA_SCENARIOS[activeIdx];

  useEffect(() => {
    setVisibleCount(1);
    setIsTyping(false);

    const t1 = setTimeout(() => setIsTyping(true), 550);
    const t2 = setTimeout(() => {
      setIsTyping(false);
      setVisibleCount(2);
    }, 1550);
    const t3 = setTimeout(() => setVisibleCount(3), 2750);
    const t4 = setTimeout(() => setIsTyping(true), 3400);
    const t5 = setTimeout(() => {
      setIsTyping(false);
      setVisibleCount(4);
    }, 4500);

    return () => {
      [t1, t2, t3, t4, t5].forEach(clearTimeout);
    };
  }, [activeIdx, replayTick]);

  return (
    <section
      id="simulador"
      className="py-24 md:py-32 border-b border-white/[0.06] strata-atmosphere"
    >
      <div
        id="calificacion"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <span className="text-[11px] font-mono-tech text-[#00B7D1] uppercase tracking-[0.18em] block">
            SIMULADOR DE WHATSAPP EN VIVO & CRITERIO COMERCIAL
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-white font-semibold leading-[1.06] tracking-[-0.035em]">
            Probá cómo responde y{" "}
            <span className="font-serif-accent font-normal text-[#00B7D1]">
              califica cada consulta.
            </span>
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Elegí cualquiera de las 6 situaciones reales inmobiliarias para ver en el teléfono
            cómo RentoAI conversa con voseo rioplatense y qué orden dispara en tu agencia.
          </p>
        </div>

        {/* 12-Col Grid: Left 6 Criteria Bento + Right Sticky WhatsApp Phone */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT: 6 Interactive Qualification Vault Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="strata-shell">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {CRITERIA_SCENARIOS.map((item, idx) => {
                  const isSelected = idx === activeIdx;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveIdx(idx)}
                      className={`text-left strata-vault-card p-5 sm:p-6 flex flex-col justify-between transition-all ${
                        isSelected
                          ? "border-[#00B7D1]/70 bg-[#0E1824] shadow-[0_0_30px_rgba(0,183,209,0.12)]"
                          : "opacity-85 hover:opacity-100"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span
                            className={`text-[10px] font-mono-tech px-2.5 py-0.5 rounded-full border ${
                              isSelected
                                ? "bg-[#00B7D1]/20 text-[#67E8F9] border-[#00B7D1]/50"
                                : "bg-white/[0.03] text-slate-400 border-white/10"
                            }`}
                          >
                            {item.chip}
                          </span>
                          <span className="text-[11px] font-mono-tech text-slate-500">
                            0{idx + 1}
                          </span>
                        </div>

                        <h3 className="font-display text-lg text-white font-semibold mb-2">
                          {item.criterio}
                        </h3>

                        <p className="text-xs text-slate-400 leading-relaxed mb-3">
                          {item.queAverigua}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/[0.06] space-y-1.5">
                        <p className="text-[11px] text-slate-300 leading-snug">
                          <span className="text-[#00B7D1] font-mono-tech uppercase text-[9.5px] block mb-0.5">
                            Acción que dispara:
                          </span>
                          {item.accionDispara}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active CRM Dispatch Banner */}
            <div className="rounded-2xl bg-[#090E15] border border-[#00B7D1]/25 px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5 text-slate-200">
                <Sparkles className="w-4 h-4 text-[#00B7D1] shrink-0" />
                <span>{activeScenario.crmDispatch}</span>
              </div>
              <span className="text-[10px] font-mono-tech text-emerald-400 uppercase tracking-wider shrink-0">
                ● Latencia &lt; 400ms
              </span>
            </div>
          </div>

          {/* RIGHT: Sticky Realistic WhatsApp Phone Simulator */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-center">
            {/* Quick Top Switcher + Replay */}
            <div className="w-full max-w-[370px] mb-3 flex items-center justify-between gap-1 bg-[#090D14] p-1.5 rounded-full border border-white/10 text-[10px] font-mono-tech">
              {CRITERIA_SCENARIOS.slice(0, 3).map((sc, idx) => (
                <button
                  key={sc.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`flex-1 py-1.5 px-2 rounded-full text-center transition-all truncate ${
                    activeIdx === idx
                      ? "bg-[#00B7D1]/25 text-[#67E8F9] border border-[#00B7D1]/50 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {sc.shortTab}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setReplayTick((t) => t + 1)}
                className="p-1.5 rounded-full text-slate-400 hover:text-[#67E8F9] transition-colors"
                title="Repetir conversación"
                aria-label="Repetir conversación"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Titanium Obsidian Phone Chassis */}
            <div
              className="w-full max-w-[360px] rounded-[42px] p-3 bg-gradient-to-b from-[#161E2B] to-[#0A0E15] border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.9)]"
              style={{
                boxShadow:
                  "inset 0 1px 1px rgba(255,255,255,0.2), 0 32px 80px -12px rgba(0,0,0,0.9)",
              }}
            >
              <div className="rounded-[33px] bg-[#080C12] border border-white/[0.08] overflow-hidden flex flex-col">
                {/* Status Bar & Dynamic Island */}
                <div className="bg-[#0B1018] px-6 py-2 flex items-center justify-between text-[10px] font-mono-tech text-slate-400 border-b border-white/[0.05]">
                  <span>22:41</span>
                  <div className="w-16 h-4 bg-black rounded-full mx-auto border border-white/[0.05]" />
                  <span>5G · 100%</span>
                </div>

                {/* WhatsApp Header with Official RentoAI Symbol */}
                <div className="bg-[#0D141F] px-4 py-3 flex items-center gap-3 border-b border-white/[0.08]">
                  <div className="w-9 h-9 rounded-full overflow-hidden relative border border-[#00B7D1]/40 shrink-0 bg-[#06090E]">
                    <Image
                      src="/brand/rentoai-symbol-transparent.png"
                      alt="RentoAI Oficial"
                      fill
                      sizes="36px"
                      className="object-contain p-1.5"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold text-white truncate">
                        RentoAI · Recepcionista 24/7
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    </div>
                    <span className="text-[10px] text-slate-400 block truncate font-mono-tech">
                      {activeScenario.criterio}
                    </span>
                  </div>
                </div>

                {/* Chat Thread */}
                <div className="p-3.5 space-y-2.5 bg-[#06090F] min-h-[430px] max-h-[450px] overflow-y-auto text-[12px] flex flex-col justify-end">
                  {activeScenario.messages
                    .slice(0, visibleCount)
                    .map((msg, mIdx) => {
                      const isAi = msg.sender === "ai";
                      return (
                        <div
                          key={`${activeScenario.id}-${mIdx}`}
                          className={`transition-all duration-300 ${
                            isAi
                              ? "self-start max-w-[89%] bg-[#0A1924] text-slate-100 p-3 rounded-2xl rounded-tl-none border border-[#00B7D1]/30 space-y-1 shadow-lg"
                              : "self-end max-w-[85%] bg-[#172130] text-slate-100 p-3 rounded-2xl rounded-tr-none border border-white/[0.07] space-y-1"
                          }`}
                        >
                          {isAi && msg.badge && (
                            <div
                              className={`flex items-center gap-1 text-[9px] font-mono-tech ${
                                msg.badgeColor === "gold"
                                  ? "text-[#E5A93C]"
                                  : msg.badgeColor === "emerald"
                                  ? "text-emerald-400"
                                  : "text-[#67E8F9]"
                              }`}
                            >
                              {msg.badgeColor === "gold" ? (
                                <ShieldCheck className="w-2.5 h-2.5" />
                              ) : msg.badgeColor === "emerald" ? (
                                <CheckCheck className="w-2.5 h-2.5" />
                              ) : (
                                <Zap className="w-2.5 h-2.5" />
                              )}
                              <span>{msg.badge}</span>
                            </div>
                          )}

                          <p className="leading-snug text-slate-100">
                            {msg.text}
                          </p>
                          {msg.subtext && (
                            <p className="text-slate-300 leading-snug pt-1 text-[11px]">
                              {msg.subtext}
                            </p>
                          )}

                          <div className="flex items-center justify-between pt-1 text-[9px] text-slate-400">
                            {isAi && msg.meta ? (
                              <span className="text-[#00B7D1] font-mono-tech">
                                {msg.meta}
                              </span>
                            ) : (
                              <span />
                            )}
                            <span className="flex items-center gap-1">
                              {msg.time}
                              {!isAi && (
                                <CheckCheck className="w-3 h-3 text-[#00B7D1]" />
                              )}
                            </span>
                          </div>
                        </div>
                      );
                    })}

                  {isTyping && (
                    <div className="self-start bg-[#0A1924] border border-[#00B7D1]/30 px-3.5 py-2.5 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#00B7D1] animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#00B7D1] animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#00B7D1] animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                      <span className="text-[10px] font-mono-tech text-slate-400 ml-1">
                        RentoAI escribiendo...
                      </span>
                    </div>
                  )}
                </div>

                {/* WhatsApp Bottom Input Bar */}
                <div className="bg-[#0D141F] p-3 border-t border-white/[0.08] flex items-center gap-2">
                  <div className="flex-1 bg-[#162030] rounded-full px-3.5 py-1.5 text-[11px] text-slate-400 flex items-center justify-between border border-white/[0.05]">
                    <span>Mensaje en WhatsApp...</span>
                    <Sparkles className="w-3 h-3 text-[#00B7D1] opacity-70" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#00B7D1] flex items-center justify-center text-[#06080B]">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
