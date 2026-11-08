"use client";

import { AlertTriangle } from "lucide-react";

export default function ResultsAndEvidence() {
  return (
    <section className="py-16 md:py-20 border-b border-white/[0.06] strata-atmosphere">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict Editorial Transparency Block (No fabricated logos/reviews) */}
        <div className="strata-shell">
          <div className="strata-vault-card p-6 sm:p-8 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-[11px] font-mono-tech text-[#E5A93C] uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>TRANSPARENCIA COMERCIAL · EVIDENCIA DE CASOS REALES</span>
              </div>
              <span className="text-[10px] font-mono-tech text-slate-500">
                Política Cero Testimonios Ficticios · BALUMTech
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-3xl">
              No publicamos reseñas inventadas ni logotipos de agencias ficticias. Los bloques de
              casos de éxito se habilitan exclusivamente con métricas verificadas y autorización
              expresa de cada titular matriculado:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div className="p-4 rounded-2xl bg-[#070A0F] border border-dashed border-white/15 text-xs text-slate-400 space-y-1.5">
                <span className="font-mono-tech text-[10px] text-[#E5A93C] uppercase block">
                  [TODO: Testimonios Auditados de Titulares]
                </span>
                <p>
                  Reservado para citas reales con nombre, matrícula profesional y razón social de
                  las agencias implementadas en producción.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#070A0F] border border-dashed border-white/15 text-xs text-slate-400 space-y-1.5">
                <span className="font-mono-tech text-[10px] text-[#E5A93C] uppercase block">
                  [TODO: Marquesina de Inmobiliarias Activas]
                </span>
                <p>
                  Reservado para logotipos oficiales de inmobiliarias asociadas tras la firma de
                  conformidad comercial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
