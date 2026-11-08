"use client";

import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function WhatsAppFloatingButton() {
  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    "Hola, estoy en la web de RentoAI y quiero consultar por el agente de WhatsApp para mi inmobiliaria."
  )}`;

  return (
    <aside
      aria-label="Atención directa por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center group"
    >
      <div className="hidden sm:flex items-center gap-2 bg-[#090D14]/95 backdrop-blur-md text-slate-200 text-xs px-3.5 py-2 rounded-full border border-white/15 shadow-2xl mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-mono-tech text-[11px]">WhatsApp 24/7 · &lt; 4s</span>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar por WhatsApp con RentoAI"
        className="relative w-13 h-13 rounded-full bg-gradient-to-b from-[#162826] to-[#0A1414] hover:from-[#1B3330] text-emerald-400 flex items-center justify-center border border-emerald-400/50 shadow-[0_8px_30px_rgba(16,185,129,0.3)] hover:scale-105 active:scale-95 transition-all duration-200"
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </aside>
  );
}
