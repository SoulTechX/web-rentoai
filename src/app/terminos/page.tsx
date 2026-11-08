import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-[#06080B] text-slate-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/[0.07]">
          <Link href="/" className="relative w-32 h-10 block">
            <Image
              src="/brand/rentoai-logo-transparent.png"
              alt="RentoAI Oficial"
              fill
              sizes="128px"
              className="object-contain object-left"
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#67E8F9] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al inicio</span>
          </Link>
        </div>

        <div>
          <span className="text-xs font-mono-tech text-[#00B7D1] uppercase tracking-wider">
            MARCO LEGAL
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-semibold text-white mt-2">
            Términos y Condiciones de Uso
          </h1>
          <p className="text-xs text-slate-500 font-mono-tech mt-2">
            Última actualización: Noviembre 2026 · Desarrollado por BALUMTech
          </p>
        </div>

        <div className="space-y-6 text-sm leading-relaxed border-t border-slate-800 pt-6">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Identificación del Servicio</h2>
            <p>
              RentoAI es un software de Centro de Comando Operativo y orquestación agéntica
              desarrollado por <strong>BALUMTech</strong>, diseñado exclusivamente para inmobiliarias,
              corredores y martilleros públicos matriculados, y administradores de propiedades.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. Objeto y Alcance</h2>
            <p>
              RentoAI actúa como un asistente tecnológico y recepcionista digital de comunicaciones
              omnicanal (WhatsApp Cloud API de Meta, Instagram, Facebook). En ningún caso RentoAI
              reemplaza el asesoramiento legal, la firma de contratos inmobiliarios ni la matriculación
              profesional requerida por las leyes locales correspondientes.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. Marco Normativo DNU 70/2023</h2>
            <p>
              Las respuestas, protocolos y categorizaciones del Módulo Soporte de RentoAI se encuentran
              calibradas bajo el régimen de locaciones establecido en el <strong>DNU 70/2023</strong> de la
              República Argentina. RentoAI está programado expresamente para abstenerse de brindar instrucciones
              caseras de reparación ante siniestros de infraestructura (gas, electricidad, agua) a efectos de
              evitar responsabilidad civil y salvaguardar la integridad de las partes.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">4. Facturación e Integración ARCA</h2>
            <p>
              La emisión de comprobantes electrónicos con Código de Autorización Electrónico (CAE) a través
              del sistema se realiza mediante la conexión autorizada con los servicios web de la Agencia de
              Recaudación y Control Aduanero (ARCA, ex AFIP), mediando siempre la validación administrativa del
              usuario responsable de la inmobiliaria.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">5. Propiedad de los Datos</h2>
            <p>
              El cliente (la inmobiliaria) es el único y exclusivo propietario de la totalidad de las
              conversaciones, números de teléfono, catálogos e información comercial procesada. BALUMTech no
              comercializa, cede ni transfiere datos de clientes finales a terceros.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
