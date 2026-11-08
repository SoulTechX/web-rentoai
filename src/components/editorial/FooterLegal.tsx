import Link from "next/link";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function FooterLegal() {
  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    "Hola, me comunico desde la web oficial de RentoAI."
  )}`;

  return (
    <footer className="bg-[#05070A] text-slate-400 text-xs py-16 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Official RentoAI Horizontal Logo + BALUMTech Signature */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative w-36 h-12">
              <Image
                src="/brand/rentoai-logo-transparent.png"
                alt="RentoAI Oficial"
                fill
                sizes="144px"
                className="object-contain object-left"
              />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Recepcionista Digital de Élite y Centro de Comando Operativo 24/7 por
              WhatsApp para inmobiliarias de Argentina y LATAM. Calificación comercial,
              soporte DNU 70/2023, ARCA y Modo Dueño.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="relative w-24 h-7 opacity-80">
                <Image
                  src="/brand/balum logo.png"
                  alt="BALUMTech"
                  fill
                  sizes="96px"
                  className="object-contain object-left"
                />
              </div>
              <span className="text-[10px] font-mono-tech text-slate-500 uppercase tracking-widest">
                By BALUMTech
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3 font-mono-tech text-[11px]">
            <span className="text-white uppercase tracking-wider font-semibold block">
              Navegación
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#problema" className="hover:text-white transition-colors">
                  01. Mercado y Velocidad
                </a>
              </li>
              <li>
                <a href="#capas" className="hover:text-white transition-colors">
                  02. Las 4 Capas
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-white transition-colors">
                  03. Simulador en Vivo
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  04. Cómo Funciona
                </a>
              </li>
              <li>
                <a href="#seguridad" className="hover:text-white transition-colors">
                  05. Seguridad y Ley 25.326
                </a>
              </li>
              <li>
                <a href="#planes" className="hover:text-white transition-colors">
                  06. Planes
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="space-y-3 font-mono-tech text-[11px]">
            <span className="text-white uppercase tracking-wider font-semibold block">
              Marco Regulatorio
            </span>
            <ul className="space-y-2">
              <li>
                <Link href="/terminos" className="hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li className="pt-2 text-[10px] text-slate-500 font-sans leading-relaxed">
                Protección de datos conforme a la{" "}
                <strong>Ley Nacional Nº 25.326</strong>. Órgano de Control:{" "}
                <strong>Agencia de Acceso a la Información Pública (AAIP)</strong>.
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 font-mono-tech text-[11px]">
            <span className="text-white uppercase tracking-wider font-semibold block">
              Contacto
            </span>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#67E8F9] hover:underline transition-colors block"
                >
                  WhatsApp Comercial →
                </a>
                <a
                  href={`tel:+${BRAND.whatsappNumber}`}
                  className="text-slate-300 hover:text-white transition-colors text-[11px] mt-1 block"
                >
                  {BRAND.whatsappDisplay}
                </a>
              </li>
              <li className="text-slate-400 font-sans">contacto@rentoai.com.ar</li>
              <li className="text-slate-500 font-sans">
                {BRAND.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono-tech text-slate-500">
          <p>
            © 2026 RentoAI. Todos los derechos reservados. Desarrollado por BALUMTech.
          </p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00B7D1]" />
            <span>Infraestructura Segura · Meta Cloud API Oficial</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
