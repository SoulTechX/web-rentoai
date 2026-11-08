import { Clock, TrendingDown, Smartphone, ShieldAlert, CheckCircle2 } from "lucide-react";
import { METRICS } from "@/lib/constants";

export default function ProblemSection() {
  return (
    <section id="problema" className="py-20 md:py-32 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs font-mono mb-4">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            <span>EL DIAGNÓSTICO CRÍTICO DEL MERCADO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Space_Grotesk'] font-bold text-white tracking-tight">
            La Fuga Silenciosa del{" "}
            <span className="text-rose-400">Capital Inmobiliario</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Las inmobiliarias tradicionales invierten fortunas en portales y pauta publicitaria,
            pero sufren un cuello de botella letal en el canal de entrada: la demora en responder.
          </p>
        </div>

        {/* 3 Major Alarm Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Metric 1 */}
          <div className="glass-panel rounded-3xl p-8 border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-950 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Clock className="w-24 h-24 text-rose-400" />
            </div>
            <div className="text-5xl lg:text-6xl font-['Space_Grotesk'] font-extrabold text-rose-400 font-mono">
              {METRICS.offHoursInquiries}
            </div>
            <h3 className="mt-4 text-xl font-bold text-white">
              Consultas fuera de horario
            </h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Más de la mitad de las tasaciones de alto valor y compradores serios escriben entre
              las <strong className="text-slate-200">18:00 y las 24:00 hs</strong> o durante el fin
              de semana. Si la oficina está cerrada, el lead se va a la siguiente inmobiliaria.
            </p>
          </div>

          {/* Metric 2 */}
          <div className="glass-panel rounded-3xl p-8 border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-950 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <TrendingDown className="w-24 h-24 text-amber-400" />
            </div>
            <div className="text-5xl lg:text-6xl font-['Space_Grotesk'] font-extrabold text-amber-400 font-mono">
              {METRICS.conversionDropAfter5m}
            </div>
            <h3 className="mt-4 text-xl font-bold text-white">
              Caída en la tasa de cierre
            </h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              La probabilidad de calificar y cerrar un contacto cae en picada si la respuesta tarda
              más de <strong className="text-slate-200">5 minutos</strong>. Los chatbots lentos o
              menús numéricos frustran al cliente y destruyen la conversión.
            </p>
          </div>

          {/* Metric 3 */}
          <div className="glass-panel rounded-3xl p-8 border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-950 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Smartphone className="w-24 h-24 text-cyan-400" />
            </div>
            <div className="text-5xl lg:text-6xl font-['Space_Grotesk'] font-extrabold text-cyan-400 font-mono">
              {METRICS.dataRetained}
            </div>
            <h3 className="mt-4 text-xl font-bold text-white">
              Fuga de cartera en celulares personales
            </h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Cuando los agentes atienden desde sus números privados, la información queda atomizada.
              Si un vendedor se retira de la empresa, los contactos y tasaciones históricas se van con él.
            </p>
          </div>
        </div>

        {/* Contrast Comparison Banner */}
        <div className="mt-12 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-cyan-950/40 p-6 sm:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>LA SOLUCIÓN CON RENTOAI</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                De un canal caótico a un prisma silencioso y rentable.
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl">
                Tus asesores comerciales dejan de ser recepcionistas desbordados y se convierten en
                cerradores de operaciones. RentoAI califica, retiene y solo pasa la pelota cuando hay
                dinero sobre la mesa.
              </p>
            </div>

            <a
              href="#como-funciona"
              className="whitespace-nowrap px-6 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shadow-cyan-500/20"
            >
              Ver cómo funciona
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
