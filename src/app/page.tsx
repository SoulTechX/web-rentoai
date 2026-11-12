import Header from "@/components/editorial/Header";
import Hero from "@/components/editorial/Hero";
import ProblemSpeed from "@/components/editorial/ProblemSpeed";
import FourLayersScrollytelling from "@/components/editorial/FourLayersScrollytelling";
import LeadQualification from "@/components/editorial/LeadQualification";
import HowItWorksSticky from "@/components/editorial/HowItWorksSticky";
import DashboardAndOwnerMode from "@/components/editorial/DashboardAndOwnerMode";
import SecurityPrivacy from "@/components/editorial/SecurityPrivacy";
import ResultsAndEvidence from "@/components/editorial/ResultsAndEvidence";
import PricingQuote from "@/components/editorial/PricingQuote";
import FaqSection from "@/components/editorial/FaqSection";
import FinalCta from "@/components/editorial/FinalCta";
import FooterLegal from "@/components/editorial/FooterLegal";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06080B] text-slate-100 flex flex-col selection:bg-[#00B7D1]/25 selection:text-[#67E8F9]">
      {/* 1. Header estilo Strata con logo oficial RentoAI y cápsula luminosa */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero + Grilla Bento 2x2 con núcleo 3D de 4 capas fijo a la derecha (00:00–00:04) */}
        <Hero />

        {/* 3. Mercado y Velocidad: Gráfico isométrico 3D escalonado + 4 KPIs apilados (00:05–00:08) */}
        <ProblemSpeed />

        {/* 4. Scrollytelling Sticky de 4 Capas Desplegadas del Cerebro RentoAI (00:09–00:18) */}
        <FourLayersScrollytelling />

        {/* 5. Simulador Interactivo de Teléfono WhatsApp + 6 Criterios Comerciales */}
        <LeadQualification />

        {/* 6. Cómo Funciona en 3 Pasos con Iluminación Radial Inferior (00:18–00:20) */}
        <HowItWorksSticky />

        {/* 7. Modo Dueño (/datos) y Patrimonio de Cartera Centralizada */}
        <DashboardAndOwnerMode />

        {/* 8. Bóveda de Seguridad y Ley 25.326 con Diagramas Vectoriales Luminosos (00:21–00:23) */}
        <SecurityPrivacy />

        {/* 9. Transparencia Editorial (Oculto temporalmente hasta tener testimonios reales auditados) */}
        {/* <ResultsAndEvidence /> */}

        {/* 10. Planes y Cotización */}
        <PricingQuote />

        {/* 11. Preguntas Frecuentes */}
        <FaqSection />

        {/* 12. Cierre Centrado con Objeto 3D Reensamblado de Fondo + Formulario Demo (00:24–00:26) */}
        <FinalCta />
      </main>

      {/* 13. Footer Legal con logos oficiales RentoAI y BALUMTech */}
      <FooterLegal />

      {/* Botón flotante accesible de WhatsApp */}
      <WhatsAppFloatingButton />
    </div>
  );
}
