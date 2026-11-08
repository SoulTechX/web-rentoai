import { Filter, GitFork, Cpu, ShieldCheck, Zap, Database } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      layer: "CAPA 01",
      title: "Filtro Anti-Ruido & Escudo Meta",
      badge: "Protección Perimetral",
      description:
        "Cada mensaje que ingresa por WhatsApp, Instagram o Facebook es evaluado de inmediato. El Escudo Financiero filtra emojis sueltos, spam y mensajes irrelevantes, compactando la comunicación para mantener tu consumo de Meta API al costo mínimo operativo (USD $3 a $12/mes).",
      icon: Filter,
      stats: "Latencia < 50ms · Ahorro 70% Meta API",
    },
    {
      layer: "CAPA 02",
      title: "Router Semántico & Memoria Aislada",
      badge: "Inteligencia Contextual",
      description:
        "Identifica en milisegundos la intención real: ¿es un comprador con USD billete, un propietario queriendo tasar, o un reclamo de consorcio? Mantiene una Memoria Transaccional Aislada de 72 horas para no mezclar una consulta comercial nueva con un ticket técnico previo.",
      icon: GitFork,
      stats: "Memoria contextual 72h · Cero confusión de hilos",
    },
    {
      layer: "CAPA 03",
      title: "Despacho a Módulos de Alto Rendimiento",
      badge: "Acción & Ejecución",
      description:
        "La consulta se delega al agente especializado: el Módulo Ventas aplica tolerancia del 10% sobre el catálogo; Captaciones VIP dispara alerta inmediata al martillero; Soporte activa visión artificial bajo DNU 70/2023; y Finanzas concilia comprobantes ante ARCA.",
      icon: Cpu,
      stats: "7 Módulos especializados integrados",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-32 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-4">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>EL NÚCLEO DE PROCESAMIENTO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Space_Grotesk'] font-bold text-white tracking-tight">
            El Orquestador de{" "}
            <span className="text-gradient-cyan">3 Capas Semánticas</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Así es como RentoAI procesa cientos de mensajes simultáneos sin alucinaciones,
            con criterio comercial y blindaje financiero.
          </p>
        </div>

        {/* 3 Steps Pipeline Layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="glass-panel rounded-3xl p-8 border-slate-800 bg-gradient-to-b from-slate-900/70 to-slate-950 relative flex flex-col justify-between group hover:border-cyan-500/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-cyan-400 font-bold px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30">
                      {step.layer}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {step.badge}
                    </span>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-cyan-950/50 border border-cyan-500/30 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-cyan-300/80">
                  <Database className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{step.stats}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
