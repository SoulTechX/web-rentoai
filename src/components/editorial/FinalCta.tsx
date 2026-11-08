"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, CheckCircle2, Lock } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import RentoStack3D from "./RentoStack3D";

export default function FinalCta() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    nombre: "",
    inmobiliaria: "",
    whatsapp: "",
    ciudad: "",
    propiedades: "25-100",
    canalActual: "WhatsApp de asesores",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.inmobiliaria || !formData.whatsapp) {
      alert("Por favor completá los campos principales para avanzar.");
      return;
    }
    trackEvent({ name: "demo_request_started" });
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    trackEvent({
      name: "demo_request_submitted",
      properties: {
        properties_range: formData.propiedades,
        interest: "Final CTA Demo",
      },
    });
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
    }, 700);
  };

  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    "Hola, vi la web de RentoAI y quiero coordinar una demo para mi inmobiliaria."
  )}`;

  return (
    <section
      id="demo"
      className="relative py-28 md:py-36 border-b border-white/[0.06] overflow-hidden strata-atmosphere"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================================================================
            CENTERED STRATA CLOSING STAGE (Matches sec_25.png 1:1)
            Reassembled 4-layer 3D stack floating behind centered headline
           ================================================================ */}
        <div className="relative py-12 sm:py-16 flex flex-col items-center text-center">
          {/* Reassembled 3D 4-Layer Stack Backdrop */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0 opacity-90">
            <RentoStack3D mode="backdrop" />
          </div>

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <span className="text-[11px] font-mono-tech text-[#E5A93C] uppercase tracking-[0.2em] block">
              SETUP LLAVE EN MANO · 15 DÍAS
            </span>

            <h2 className="font-display text-4xl sm:text-6xl lg:text-[68px] text-white font-semibold leading-[1.02] tracking-[-0.04em] drop-shadow-[0_6px_28px_rgba(0,0,0,0.85)]">
              Poné tu cartera
              <br />
              inmobiliaria a{" "}
              <span className="font-serif-accent font-normal text-[#00B7D1]">
                trabajar.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto leading-relaxed drop-shadow">
              Mientras nadie atiende de noche, la próxima tasación se va con otra
              agencia. Activá RentoAI sobre tu línea oficial y calificá las 24 hs.
            </p>

            {/* Dual Strata Capsule Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#formulario-demo"
                className="w-full sm:w-auto strata-pill-primary pl-6 pr-2.5 py-2.5 text-sm font-medium justify-center"
              >
                <span>Solicitar demostración</span>
                <span className="w-7 h-7 rounded-full bg-[#67E8F9]/20 border border-[#67E8F9]/50 flex items-center justify-center text-white">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto strata-pill-secondary px-6 py-3.5 text-sm font-medium justify-center"
              >
                <MessageCircle className="w-4 h-4 text-[#00B7D1]" />
                <span>Hablar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Multi-step Demo Booking Vault Form */}
        <div
          id="formulario-demo"
          className="mt-14 max-w-2xl mx-auto strata-shell text-left relative z-10"
        >
          <div className="strata-vault-card p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6 text-xs font-mono-tech text-slate-400">
              <span className="text-white font-medium">
                AGENDAR DEMOSTRACIÓN EN VIVO
              </span>
              <span className="text-[#67E8F9]">PASO {step} DE 3</span>
            </div>

            {step === 1 && (
              <form onSubmit={handleNext} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono-tech uppercase text-slate-300 mb-1.5">
                      Tu Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ej. Martín Rodríguez"
                      className="w-full bg-[#06080B] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#00B7D1]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono-tech uppercase text-slate-300 mb-1.5">
                      Nombre de la Inmobiliaria *
                    </label>
                    <input
                      type="text"
                      name="inmobiliaria"
                      required
                      value={formData.inmobiliaria}
                      onChange={handleChange}
                      placeholder="Ej. Inmobiliaria Norte"
                      className="w-full bg-[#06080B] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#00B7D1]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono-tech uppercase text-slate-300 mb-1.5">
                      WhatsApp de Contacto *
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="Ej. +54 9 11 4000-0000"
                      className="w-full bg-[#06080B] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#00B7D1]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono-tech uppercase text-slate-300 mb-1.5">
                      Ciudad / Zona
                    </label>
                    <input
                      type="text"
                      name="ciudad"
                      value={formData.ciudad}
                      onChange={handleChange}
                      placeholder="Ej. CABA / Zona Norte / Córdoba"
                      className="w-full bg-[#06080B] border border-white/15 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#00B7D1]"
                    />
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[10px] font-mono-tech text-slate-400 flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-[#00B7D1]" />
                    Protegido por Ley 25.326 y AAIP
                  </span>

                  <button
                    type="submit"
                    className="strata-pill-primary px-6 py-2.5 text-xs font-medium cursor-pointer"
                  >
                    <span>Continuar al paso 2</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-[10px] font-mono-tech uppercase text-slate-300 mb-1.5">
                    Propiedades activas en cartera
                  </label>
                  <select
                    name="propiedades"
                    value={formData.propiedades}
                    onChange={handleChange}
                    className="w-full bg-[#06080B] border border-white/15 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00B7D1]"
                  >
                    <option value="Menos de 25">Menos de 25 propiedades</option>
                    <option value="25-100">Entre 25 y 100 propiedades</option>
                    <option value="100-300">Entre 100 y 300 propiedades</option>
                    <option value="Más de 300">
                      Más de 300 propiedades (Red / Franquicia)
                    </option>
                  </select>
                </div>

                <div className="pt-2 text-[11px] text-slate-400 leading-relaxed border-t border-white/[0.06]">
                  Al enviar autorizás el contacto comercial de BALUMTech para la
                  demo. Podés ejercer acceso o supresión según Ley 25.326 en{" "}
                  <Link href="/privacidad" className="text-[#67E8F9] underline">
                    Política de Privacidad
                  </Link>
                  .
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-slate-400 hover:text-white font-mono-tech cursor-pointer"
                  >
                    ← Volver
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="strata-pill-primary px-6 py-2.5 text-xs font-medium cursor-pointer"
                  >
                    <span>
                      {isSubmitting ? "Enviando..." : "Confirmar Demostración"}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            {step === 3 && (
              <div className="py-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display text-2xl text-white font-semibold">
                  Solicitud confirmada
                </h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Gracias, <strong>{formData.nombre}</strong>. Te contactaremos al
                  WhatsApp indicado dentro de las próximas horas hábiles para
                  coordinar tu demostración personalizada.
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
                      `Hola! Soy ${formData.nombre} de ${formData.inmobiliaria} (${
                        formData.ciudad || "Argentina"
                      }). Quiero coordinar una demo de RentoAI.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="strata-pill-primary px-6 py-2.5 text-xs font-medium inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Abrir chat directo ({BRAND.whatsappDisplay})</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
