import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShieldCheck, Lock, ExternalLink } from "lucide-react";

export default function PrivacidadPage() {
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
            MARCO REGULATORIO · REPÚBLICA ARGENTINA
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-semibold text-white mt-2">
            Política de Privacidad y Protección de Datos Personales
          </h1>
          <p className="text-xs text-slate-500 font-mono-tech mt-2">
            Conforme a la Ley Nacional Nº 25.326 (Habeas Data) y normativas de la Agencia de Acceso a la Información Pública (AAIP) · BALUMTech
          </p>
        </div>

        {/* Mandatory AAIP Official Notice Box */}
        <div className="rounded-2xl p-5 bg-cyan-950/40 border border-cyan-500/40 text-xs sm:text-sm text-cyan-100 space-y-2">
          <div className="flex items-center gap-2 font-mono text-cyan-300 font-bold">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Leyenda Legal Obligatoria (Disposición AAIP / DNPDP)</span>
          </div>
          <p className="leading-relaxed text-slate-300 italic">
            &ldquo;El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos
            en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo
            al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326.
            La AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, Órgano de Control de la Ley Nº 25.326, tiene la atribución
            de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre
            protección de datos personales.&rdquo;
          </p>
        </div>

        <div className="space-y-6 text-sm leading-relaxed border-t border-slate-800 pt-6">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Responsable del Tratamiento y Base de Datos</h2>
            <p>
              El responsable del tratamiento de los datos personales recopilados a través de este sitio web
              es <strong>BALUMTech</strong> (en adelante, &ldquo;RentoAI&rdquo;), con sede en Sarmiento, Chubut,
              República Argentina. Las bases de datos que almacenan información de clientes, prospectos y
              operaciones se encuentran debidamente registradas o en proceso de inscripción formal ante el{" "}
              <strong>Registro Nacional de Bases de Datos</strong> administrado por la AAIP, en cumplimiento de los
              artículos 21 y 24 de la Ley 25.326.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. Información Recopilada y Consentimiento Previo (Art. 6)</h2>
            <p>
              Al completar nuestros formularios de contacto, solicitud de demostración o interactuar con nuestros
              canales automatizados, el usuario toma conocimiento previo y presta consentimiento expreso para el
              tratamiento de sus datos:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li>Nombre, apellido, correo electrónico y número de teléfono/WhatsApp.</li>
              <li>Razón social de la inmobiliaria o matrícula profesional de corretaje.</li>
              <li>Zona geográfica de operación, volumen de cartera y preferencias operativas.</li>
            </ul>
            <p>
              El suministro de estos datos es voluntario, si bien indispensable para coordinar demostraciones técnicas
              y brindar cotizaciones comerciales adaptadas.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. Memoria Transaccional Aislada y Principio de Calidad</h2>
            <p>
              RentoAI procesa las consultas de mensajería bajo el principio de minimización de datos. Implementa
              una <strong>Memoria Transaccional Aislada de 72 horas</strong>, tras lo cual las sesiones temporales
              se desvinculan del procesamiento operativo activo, garantizando que no se mezclen historiales comerciales
              con consultas administrativas o de soporte.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">4. Ejercicio de Derechos ARCO y Plazos de Ley</h2>
            <p>
              En estricto cumplimiento de la Ley 25.326, garantizamos el ejercicio irrestricto y gratuito de los
              derechos de Acceso, Rectificación, Actualización, Cancelación/Supresión y Oposición:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <span className="font-mono text-cyan-400 font-bold text-xs uppercase block mb-1">
                  Derecho de Acceso (Art. 14)
                </span>
                <p className="text-xs text-slate-300">
                  Plazo máximo de respuesta de <strong>10 días corridos</strong> desde la recepción fehaciente de la solicitud.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <span className="font-mono text-cyan-400 font-bold text-xs uppercase block mb-1">
                  Rectificación y Supresión (Art. 16)
                </span>
                <p className="text-xs text-slate-300">
                  Plazo máximo de ejecución de <strong>5 días hábiles</strong> ante datos inexactos, desactualizados o prohibidos.
                </p>
              </div>
            </div>
            <p className="pt-2">
              Para ejercer cualquiera de estos derechos o solicitar el bloqueo publicitario (Art. 27), el titular
              debe remitir un correo electrónico acreditando identidad a:{" "}
              <a href="mailto:privacidad@rentoai.com.ar" className="text-cyan-400 font-semibold underline">
                privacidad@rentoai.com.ar
              </a>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">5. Órgano de Control (AAIP)</h2>
            <p>
              Se hace saber que la <strong>Agencia de Acceso a la Información Pública (AAIP)</strong>, sita en Av. Pte.
              Gral. Julio A. Roca 710, Piso 3º (CABA), es el órgano de control encargado de velar por el cumplimiento
              de la Ley 25.326. Sitio web oficial:{" "}
              <a
                href="https://www.argentina.gob.ar/aaip"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 inline-flex items-center gap-1 hover:underline"
              >
                argentina.gob.ar/aaip <ExternalLink className="w-3 h-3" />
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
