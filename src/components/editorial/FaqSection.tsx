"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/constants";

const EXTENDED_FAQS = [
  ...FAQS,
  {
    category: "Privacidad y Datos",
    question:
      "¿Cómo garantiza RentoAI el cumplimiento de la Ley 25.326 de Protección de Datos Personales y AAIP?",
    answer:
      "RentoAI opera bajo Privacidad por Diseño conforme a la Ley Nacional Nº 25.326 y su órgano de control AAIP. El 100% de los contactos recabados por WhatsApp pertenece exclusivamente a tu inmobiliaria y se aloja en base corporativa cifrada (Art. 9). Además contempla flujos de atención para derechos ARCO: acceso en menos de 10 días corridos y rectificación o supresión en 5 días hábiles.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");

  const categories = [
    "Todas",
    "General",
    "Comercial",
    "Técnico",
    "Legal y Fiscal",
    "Privacidad y Datos",
  ];

  const filteredFaqs =
    selectedCategory === "Todas"
      ? EXTENDED_FAQS
      : EXTENDED_FAQS.filter((f) => f.category === selectedCategory);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="py-24 md:py-32 border-b border-white/[0.06] strata-atmosphere"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-[11px] font-mono-tech text-[#00B7D1] uppercase tracking-[0.18em] block">
            PREGUNTAS FRECUENTES
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-white font-semibold leading-[1.06] tracking-[-0.035em]">
            Todo claro antes de{" "}
            <span className="font-serif-accent font-normal text-[#00B7D1]">
              implementar.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Respuestas directas sobre tu línea actual de WhatsApp, costos de Meta API,
            cumplimiento legal y tiempos de puesta en marcha.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono-tech transition-all border ${
                selectedCategory === cat
                  ? "bg-[#00B7D1]/25 text-[#67E8F9] border-[#00B7D1]/50 font-semibold"
                  : "bg-[#090D14] text-slate-400 border-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion Vaults (Emil Kowalski CSS Grid 1fr/0fr) */}
        <div className="mt-10 strata-shell space-y-2">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`strata-vault-card overflow-hidden ${
                  isOpen ? "border-[#00B7D1]/45" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <span className="text-[9.5px] font-mono-tech uppercase text-[#67E8F9] px-2.5 py-0.5 rounded-full bg-[#00B7D1]/15 border border-[#00B7D1]/30 w-fit shrink-0">
                      {faq.category}
                    </span>
                    <span className="text-sm sm:text-base font-display text-white font-medium">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#00B7D1]/20 border-[#00B7D1]/60 text-[#67E8F9] rotate-180"
                        : "bg-white/[0.04] border-white/10 text-slate-400"
                    }`}
                    style={{
                      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-6 pt-3 text-xs sm:text-sm text-slate-300/90 leading-relaxed border-t border-white/[0.06]">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
