"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck, Sparkles, Building2, User, Phone, MapPin, Lock } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";

export default function DemoFormSection() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    nombre: "",
    inmobiliaria: "",
    whatsapp: "",
    ciudad: "",
    propiedades: "25-100",
    interesPrincipal: "Captaciones VIP y Ventas",
    canalActual: "WhatsApp de asesores",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
        interest: formData.interesPrincipal,
      },
    });

    // Simular procesamiento del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
    }, 800);
  };

  const whatsappDemoUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    `Hola! Soy ${formData.nombre || "un interesado"} de la inmobiliaria ${formData.inmobiliaria || ""}. Me gustaría ver una demo en vivo de RentoAI (Cartera: ${formData.propiedades} propiedades).`
  )}`;

  return (
    <section id="demo" className="py-20 md:py-32 relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>DEMOSTRACIÓN PERSONALIZADA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Space_Grotesk'] font-bold text-white tracking-tight">
            Descubrí RentoAI en tu{" "}
            <span className="text-gradient-cyan">propia Inmobiliaria</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Completá este breve formulario de 1 minuto para que un consultor de BALUMTech
            te prepare una demostración adaptada a tu cartera y volumen de consultas.
          </p>
        </div>

        {/* Progress Bar (Efecto Zeigarnik) */}
        <div className="mt-12 max-w-xl mx-auto">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
            <span className={step >= 1 ? "text-cyan-300 font-bold" : ""}>
              Paso 1: Datos de Contacto
            </span>
            <span className={step >= 2 ? "text-cyan-300 font-bold" : ""}>
              Paso 2: Diagnóstico
            </span>
            <span className={step === 3 ? "text-emerald-400 font-bold" : ""}>
              Paso 3: Confirmación
            </span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-cyan-400 to-cyan-300 h-full transition-all duration-300"
              style={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
            />
          </div>
        </div>

        {/* Form Card */}
        <div className="mt-8 glass-panel rounded-3xl p-6 sm:p-10 border-cyan-500/30 bg-slate-900/80 shadow-2xl">
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 uppercase mb-2">
                    Tu Nombre y Apellido *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 uppercase mb-2">
                    Nombre de la Inmobiliaria *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      name="inmobiliaria"
                      required
                      value={formData.inmobiliaria}
                      onChange={handleChange}
                      placeholder="Ej. Propiedades Palermo"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 uppercase mb-2">
                    WhatsApp de Contacto *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="Ej. +54 9 11 1234-5678"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 uppercase mb-2">
                    Ciudad / Zona de Operación
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      name="ciudad"
                      value={formData.ciudad}
                      onChange={handleChange}
                      placeholder="Ej. CABA / Zona Norte"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] text-slate-400 flex items-center gap-1.5 font-mono">
                  <Lock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Datos resguardados bajo Ley 25.326 y supervisión AAIP.</span>
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-xl shadow-lg shadow-cyan-500/25 transition-all"
                >
                  <span>Continuar al Paso 2</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 uppercase mb-2">
                    Cantidad de propiedades en cartera
                  </label>
                  <select
                    name="propiedades"
                    value={formData.propiedades}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Menos de 25">Menos de 25 propiedades</option>
                    <option value="25-100">Entre 25 y 100 propiedades</option>
                    <option value="100-300">Entre 100 y 300 propiedades</option>
                    <option value="Más de 300">Más de 300 propiedades (Red / Franquicia)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 uppercase mb-2">
                    ¿Qué módulo te interesa priorizar?
                  </label>
                  <select
                    name="interesPrincipal"
                    value={formData.interesPrincipal}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Captaciones VIP y Ventas">Captaciones VIP y Ventas USD</option>
                    <option value="Administración de Alquileres y Soporte">Administración Alquileres & Soporte DNU 70/2023</option>
                    <option value="Facturación ARCA & OCR">Facturación Automática ARCA & OCR</option>
                    <option value="Suite Completa Total">Suite Completa (Inmobiliaria Total)</option>
                  </select>
                </div>
              </div>

              {/* AAIP Legal Legend under submit */}
              <div className="pt-2 text-[11px] text-slate-500 leading-relaxed border-t border-slate-800">
                Al enviar, autorizás a BALUMTech al tratamiento de tus datos para coordinar la demostración técnica.
                Podés ejercer tus derechos de acceso, rectificación y supresión enviando un email a{" "}
                <a href="mailto:privacidad@rentoai.com.ar" className="text-cyan-400 underline">
                  privacidad@rentoai.com.ar
                </a>{" "}
                (Ley 25.326). Órgano de Control:{" "}
                <Link href="/privacidad" className="text-cyan-400 underline">
                  Agencia de Acceso a la Información Pública (AAIP)
                </Link>.
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-mono text-slate-400 hover:text-white underline"
                >
                  ← Volver al paso anterior
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 rounded-xl shadow-lg shadow-cyan-500/25 transition-all disabled:opacity-50"
                >
                  <span>{isSubmitting ? "Procesando..." : "Solicitar Demostración"}</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-white">
                ¡Solicitud Registrada con Éxito!
              </h3>

              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Gracias, <strong className="text-white">{formData.nombre}</strong>. Ya recibimos los datos de{" "}
                <strong className="text-cyan-300">{formData.inmobiliaria}</strong>. Nuestro equipo de ingenieros
                en BALUMTech se comunicará por WhatsApp dentro de las próximas 2 horas hábiles.
              </p>

              <div className="pt-4">
                <a
                  href={whatsappDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-emerald-300 bg-emerald-950/70 border border-emerald-500/40 rounded-xl hover:bg-emerald-900/60 shadow-lg shadow-emerald-950/50 transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <span>Acelerar demo directo por WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
