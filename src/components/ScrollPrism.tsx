"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";

const TOTAL_FRAMES = 192;

export default function ScrollPrism() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Preload frames
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let count = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new window.Image();
      const paddedIndex = String(i).padStart(3, "0");
      img.src = `/frames/frame_${paddedIndex}.webp`;
      img.onload = () => {
        count++;
        if (count === 1) {
          // Draw first frame immediately
          drawFrame(0);
        }
        setImagesLoaded(count);
      };
      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;
  }, []);

  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (img && img.complete) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollable = container.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(1, Math.max(0, currentScroll / totalScrollable));
      setScrollProgress(progress);

      const targetFrame = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.floor(progress * (TOTAL_FRAMES - 1)))
      );

      requestAnimationFrame(() => drawFrame(targetFrame));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[220vh] bg-slate-950 border-t border-slate-900"
    >
      {/* Sticky Showcase Window */}
      <div className="sticky top-16 md:top-20 h-[85vh] flex flex-col items-center justify-center overflow-hidden px-4">
        {/* Subtle background glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
          <div className="w-[600px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />
        </div>

        {/* Section title over sticky */}
        <div className="text-center mb-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>ARQUITECTURA 3D · DESPIECE EN TIEMPO REAL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-['Space_Grotesk'] font-bold text-white tracking-tight">
            El Prisma Operativo en Acción
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Hacé scroll para observar la refracción y el desacople de las 3 capas semánticas.
          </p>
        </div>

        {/* 3D Canvas Frame */}
        <div className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden border border-cyan-500/30 bg-slate-950/80 shadow-2xl shadow-cyan-950/50">
          <canvas
            ref={canvasRef}
            width={1280}
            height={720}
            className="w-full h-full object-contain"
          />

          {/* Loading indicator if frames are downloading */}
          {imagesLoaded < 15 && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950/90 z-20">
              <div className="text-center space-y-3">
                <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto" />
                <span className="text-xs font-mono text-cyan-300">
                  Cargando visuales 3D ({Math.round((imagesLoaded / TOTAL_FRAMES) * 100)}%)...
                </span>
              </div>
            </div>
          )}

          {/* Dynamic contextual overlay badges based on scroll */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <div className="bg-slate-950/85 backdrop-blur-md border border-slate-800 px-3.5 py-1.5 rounded-xl text-xs font-mono text-cyan-300 flex items-center gap-2 shadow-lg">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>
                {scrollProgress < 0.33
                  ? "Capa 1: Prisma Ensamblado (Unificación Omnicanal)"
                  : scrollProgress < 0.66
                  ? "Capa 2: Desacople & Memoria Transaccional 72h"
                  : "Capa 3: Despacho a Módulos (Ventas, Tasación, ARCA)"}
              </span>
            </div>

            <div className="bg-slate-950/85 backdrop-blur-md border border-slate-800 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-400">
              {Math.round(scrollProgress * 100)}%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
