"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalScrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        totalScrollHeight > 0 ? (currentScrollY / totalScrollHeight) * 100 : 0;
      setScrollProgress(progress);

      if (currentScrollY < 80) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 160) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const links = [
    { label: "Mercado", href: "#problema" },
    { label: "Las 4 Capas", href: "#capas" },
    { label: "Simulador", href: "#simulador" },
    { label: "Cómo Funciona", href: "#como-funciona" },
    { label: "Seguridad", href: "#seguridad" },
    { label: "Planes", href: "#planes" },
    { label: "FAQ", href: "#faq" },
  ];

  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    "Hola, me interesa conocer RentoAI para mi inmobiliaria."
  )}`;

  return (
    <header
      className={`sticky top-0 z-50 transition-transform duration-300 bg-[#06080B]/85 backdrop-blur-xl border-b border-white/[0.06] ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      {/* Reading progress hairline */}
      <div
        className="absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-[#00B7D1] via-[#67E8F9] to-emerald-400 transition-all duration-100 ease-out z-10"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Official RentoAI Horizontal Logo (100% respected) */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-32 sm:w-36 h-11 flex items-center">
            <Image
              src="/brand/rentoai-logo-transparent.png"
              alt="RentoAI Oficial"
              fill
              sizes="(max-width: 640px) 128px, 144px"
              className="object-contain object-left"
              priority
            />
          </div>
          <span className="hidden xl:inline-block pl-3 border-l border-white/10 text-[9px] font-mono-tech text-slate-400 uppercase tracking-widest">
            By BALUMTech
          </span>
        </Link>

        {/* Minimal Strata-style center navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-normal text-slate-400">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors py-2 tracking-tight"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: WhatsApp + Luminous Strata Pill CTA */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-slate-300 hover:text-[#67E8F9] transition-colors flex items-center gap-1 group"
          >
            <span>WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#demo"
            className="strata-pill-primary px-5 py-2.5 text-xs font-medium tracking-tight"
          >
            <span>Agendar Demo</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#67E8F9]" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#080B10]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-2.5">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-white py-2 border-b border-white/[0.06]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-3 flex flex-col gap-3">
            <a
              href="#demo"
              onClick={() => setMobileOpen(false)}
              className="strata-pill-primary justify-center px-5 py-3 text-xs font-medium"
            >
              <span>Agendar Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="strata-pill-secondary justify-center px-5 py-3 text-xs font-medium"
            >
              <span>Hablar por WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#00B7D1]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
