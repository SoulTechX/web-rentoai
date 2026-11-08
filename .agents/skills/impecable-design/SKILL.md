---
name: impecable-design
description: >-
  Estándares de diseño de interfaces Impecable. Reglas estrictas de espaciado óptico,
  jerarquía tipográfica, micro-detalles, bordes hairline, contraste y acabados pulidos
  para erradicar interfaces genéricas de IA.
---

# Sistema de Diseño · Impecable

Esta skill define las pautas de diseño visual para lograr acabados de calidad de estudio de diseño boutique, erradicando los clichés de interfaces de IA genéricas.

---

## 1. Espaciado Óptico y Ritmo Vertical

* **Escala armónica:** Múltiplos consistentes de 4px y 8px (`gap-2`, `gap-4`, `gap-6`, `p-6`, `p-8`, `py-24`, `py-32`).
* **Compensación visual:** El padding matemático suele verse desequilibrado en elementos con iconos o texto en mayúsculas. Reducí el padding vertical en botones si la tipografía tiene un tracking expandido.
* **Respiración:** Las secciones deben tener aire amplio (mínimo `80px` en móvil, `112px` a `128px` en desktop) para denotar exclusividad y calma visual.

---

## 2. Tipografía con Jerarquía Estricta

* **Emparejamiento de fuentes con contraste deliberado:**
  * **Titulares (Display):** Tipografía con personalidad y carácter (Serif editorial refinada como `Fraunces` o `Instrument Serif`).
  * **Cuerpo y lectura:** Sans-serif neutra, geométrica o grotesca de altísima legibilidad (`Inter`, `Geist`).
  * **Metadatos y badges:** Monoespaciada técnica (`font-mono-tech`, `ui-monospace`) en mayúsculas compactas con tracking generoso (`tracking-wider` o `tracking-widest`).
* **Ajuste óptico de titulares:**
  * En titulares grandes (>36px), reducir siempre el tracking (`tracking-tight` o `tracking-[-0.03em]`) para evitar que las letras se dispersen.
  * Mantener `line-height` apretado (`leading-[1.08]` a `leading-[1.15]`) en titulares principales.

---

## 3. Superficies, Profundidad y Bordes Hairline

* **Estratificación de capas (Dark Surface System):**
  * Nivel 0 (Fondo global): Negro obsidiana profundo (`#050505` o `#06080B`).
  * Nivel 1 (Paneles y secciones): `#0A0E14`.
  * Nivel 2 (Tarjetas de contenido): `#0F151F`.
  * Nivel 3 (Elementos activos / hover): `#131B26`.
* **Bordes Hairline sutiles:**
  * Usar bordes de 1px con opacidades controladas de blanco:
    * Borde base tenue: `border-white/[0.07]` a `border-white/[0.1]`.
    * Borde en hover / interactivo: `border-white/[0.2]` o con acento cian `border-[#00B7D1]/50`.
  * **Nunca usar bordes negros o grises sólidos de alto contraste** sobre fondos oscuros.
* **Sombras Difuminadas:**
  * Sombras profundas y suaves con gran dispersión (`shadow-2xl shadow-black/80`), nunca sombras duras o artificiales.

---

## 4. Antídotos contra Clichés de IA Genérica

| Cliché Prohibido | Solución Impecable |
|---|---|
| Gradientes violetas/púrpuras saturados | Paleta sobria: Fondo oscuro con un solo acento cian eléctrico (`#00B7D1`) y detalles ámbar para VIP |
| Iconos de cerebros, cohetes o varitas mágicas | Iconos funcionales de sistemas (escudos, checkmarks dobles, relámpagos sutiles, candados) |
| Fondos con "blobs" o manchas de gradiente borrosas | Fondos limpios, rejillas hairline casi imperceptibles o texturas monocromáticas estructuradas |
| Tarjetas idénticas en filas de 3 sin jerarquía | Composición asimétrica: una tarjeta protagonista y dos de soporte |
| Frases infladas ("La IA del futuro para revolucionar") | Copy directo y enfocado en economía real ("Respondé en 4 segundos, no pierdas tasaciones") |
