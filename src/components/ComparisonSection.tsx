import { Check, X, ShieldCheck, Zap } from "lucide-react";

export default function ComparisonSection() {
  const comparisons = [
    {
      feature: "Estilo de Conversación",
      traditional: "Menús numéricos rígidos ('Marque 1 para ventas, 2 para alquiler')",
      rentoai: "Lenguaje natural fluido con voseo rioplatense e interpretación de audios de voz",
    },
    {
      feature: "Criterio Comercial",
      traditional: "Búsqueda rígida: si busca hasta USD 130k y hay una en 132k, dice 'No hay stock'",
      rentoai: "Tolerancia comercial inteligente (+10%) para no perder negociaciones viables",
    },
    {
      feature: "Detección Monetaria",
      traditional: "Confunde ARS y USD o presupuestos ambiguos",
      rentoai: "Distingue con precisión entre ARS y USD Billete",
    },
    {
      feature: "Gestión de Stock Agotado",
      traditional: "Responde 'Por el momento no tenemos' y descarta al lead",
      rentoai: "RENTO Match: Lista de espera activa y alerta automática de 'Match Mágico'",
    },
    {
      feature: "Capacidad Sensorial",
      traditional: "Incapaz de leer comprobantes o fotos de roturas",
      rentoai: "Visión artificial para fallas edilicias y OCR para transferencias bancarias",
    },
    {
      feature: "Blindaje Legal & Fiscal",
      traditional: "Alucinaciones o consejos caseros con riesgo civil",
      rentoai: "Escudo Vital adaptado a DNU 70/2023 y emisión de CAE oficial con ARCA / AFIP",
    },
    {
      feature: "Protección de Cartera",
      traditional: "Los leads quedan en los celulares personales de los vendedores",
      rentoai: "100% de la base centralizada en el sistema corporativo de tu inmobiliaria",
    },
  ];

  return (
    <section id="comparativa" className="py-20 md:py-32 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-4">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>DIFERENCIAL DE ÉLITE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Space_Grotesk'] font-bold text-white tracking-tight">
            Chatbot Tradicional vs.{" "}
            <span className="text-gradient-cyan">RentoAI</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Por qué los bots genéricos ahuyentan a los clientes de alto valor y por qué un
            Centro de Comando agéntico multiplica tus cierres.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-16 overflow-x-auto">
          <div className="min-w-[720px] rounded-3xl border border-slate-800 bg-slate-900/60 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-12 bg-slate-900/90 border-b border-slate-800 p-5 text-sm font-mono font-bold text-slate-300">
              <div className="col-span-4 text-slate-400 uppercase tracking-wider text-xs">
                Capacidad Operativa
              </div>
              <div className="col-span-4 text-rose-400 flex items-center gap-2">
                <X className="w-4 h-4 text-rose-500" />
                <span>Chatbot Genérico</span>
              </div>
              <div className="col-span-4 text-cyan-300 flex items-center gap-2 font-bold">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>RentoAI Centro de Comando</span>
              </div>
            </div>

            <div className="divide-y divide-slate-800/80">
              {comparisons.map((row, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-12 p-5 text-sm items-center transition-colors hover:bg-slate-800/40 ${
                    idx % 2 === 0 ? "bg-slate-950/30" : "bg-transparent"
                  }`}
                >
                  <div className="col-span-4 font-semibold text-white pr-4">
                    {row.feature}
                  </div>
                  <div className="col-span-4 text-slate-400 pr-4 text-xs sm:text-sm flex items-start gap-2">
                    <span className="text-rose-500 font-bold shrink-0">✕</span>
                    <span>{row.traditional}</span>
                  </div>
                  <div className="col-span-4 text-cyan-200 font-medium text-xs sm:text-sm flex items-start gap-2 bg-cyan-950/20 p-2.5 rounded-xl border border-cyan-500/20">
                    <span className="text-cyan-400 font-bold shrink-0">✓</span>
                    <span>{row.rentoai}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
