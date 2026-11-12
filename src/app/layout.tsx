import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Instrument_Serif,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rentoai.com.ar"),
  title: "RentoAI | Recepcionista de IA y Centro de Comando 24/7",
  description:
    "Atención 24/7 por WhatsApp, calificación de prospectos, soporte DNU 70/2023, ARCA y Modo Dueño. Desarrollado para inmobiliarias por BALUMTech.",
  alternates: {
    canonical: "https://www.rentoai.com.ar",
  },
  openGraph: {
    title: "RentoAI | Recepcionista de IA y Centro de Comando 24/7",
    description:
      "Tu inmobiliaria responde en menos de 4 segundos las 24 hs. Ventas ARS/USD billete, soporte DNU 70/2023, cobranzas ARCA y Modo Dueño.",
    url: "https://www.rentoai.com.ar",
    siteName: "RentoAI by BALUMTech",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/brand/rentoai-logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "RentoAI Oficial · By BALUMTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RentoAI | Recepcionista de IA y Centro de Comando 24/7",
    description:
      "Tu inmobiliaria responde en menos de 4 segundos las 24 hs. Ventas ARS/USD billete, soporte DNU 70/2023, cobranzas ARCA y Modo Dueño.",
    images: ["/brand/rentoai-logo-transparent.png"],
  },
  icons: {
    icon: "/brand/rentoai-symbol-transparent.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.rentoai.com.ar/#software",
      name: "RentoAI",
      operatingSystem: "All (Cloud/WhatsApp)",
      applicationCategory: "BusinessApplication",
      description:
        "Recepcionista digital de Inteligencia Artificial para inmobiliarias en Argentina: atención 24/7 por WhatsApp, calificación de prospectos, soporte DNU 70/2023, facturación ARCA y Modo Dueño.",
      url: "https://www.rentoai.com.ar",
      author: {
        "@type": "Organization",
        name: "BALUMTech",
        url: "https://balumtech.site",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "0",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.rentoai.com.ar/#organization",
      name: "RentoAI",
      url: "https://www.rentoai.com.ar",
      logo: "https://www.rentoai.com.ar/brand/rentoai-logo-transparent.png",
      parentOrganization: {
        "@type": "Organization",
        name: "BALUMTech",
        url: "https://balumtech.site",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${plusJakarta.variable} ${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased bg-[#06080B] text-slate-100 font-sans selection:bg-[#00B7D1]/25 selection:text-[#67E8F9]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
