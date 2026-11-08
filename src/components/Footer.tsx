import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Mail, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    "Hola, me comunico desde la web de RentoAI."
  )}`;

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-cyan-400/40">
                <Image
                  src="/brand/rentoai-symbol-transparent.png"
                  alt="RentoAI Logo"
                  fill
                  sizes="40px"
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-['Space_Grotesk'] font-bold text-xl text-white tracking-tight flex items-center gap-1.5">
                  Rento<span className="text-cyan-400">AI</span>
                </span>
                <span className="text-[10px] text-slate-500 font-mono tracking-wider">
                  BY BALUMTECH · CENTRO DE COMANDO
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Centro de Comando Operativo y Recepcionista Digital de Élite para Inmobiliarias.
              Atención inteligente 24/7 en menos de 4 segundos por WhatsApp, Instagram y Facebook.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="relative w-28 h-8 opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src="/brand/balum logo.png"
                  alt="BALUMTech"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Navegación
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#problema" className="hover:text-cyan-300 transition-colors">
                  El Problema
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-cyan-300 transition-colors">
                  Cómo Funciona
                </a>
              </li>
              <li>
                <a href="#modulos" className="hover:text-cyan-300 transition-colors">
                  Módulos Operativos
                </a>
              </li>
              <li>
                <a href="#comparativa" className="hover:text-cyan-300 transition-colors">
                  Comparativa
                </a>
              </li>
              <li>
                <a href="#roi" className="hover:text-cyan-300 transition-colors">
                  Calculadora ROI
                </a>
              </li>
              <li>
                <a href="#planes" className="hover:text-cyan-300 transition-colors">
                  Planes de Inversión
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-300 transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Legal and Compliance */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Marco Legal & Fiscal
            </span>
            <ul className="space-y-2">
              <li>
                <Link href="/terminos" className="hover:text-cyan-300 transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="hover:text-cyan-300 transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li className="text-xs text-slate-500 pt-2 leading-relaxed">
                Alineado al marco normativo del <strong className="text-slate-400">DNU 70/2023</strong> de locaciones
                y <strong className="text-slate-400">Ley 25.326</strong> de Protección de Datos Personales (Argentina).
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Contacto Directo
            </span>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{BRAND.whatsappDisplay}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>contacto@rentoai.com.ar</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{BRAND.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© 2026 RentoAI. Desarrollado por BALUMTech. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1.5 text-cyan-400/80">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Infraestructura Segura & Meta Cloud API Oficial</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
