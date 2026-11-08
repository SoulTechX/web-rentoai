<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# Directivas de Diseño, Animación y Verificación · RentoAI

## 1. Principios de Animación de Emil Kowalski
* **Física de Resortes (Springs):** Usar curvas de aceleración naturales (`cubic-bezier(0.16, 1, 0.3, 1)` o resortes amortiguados sin rebotes caricaturescos). Nunca usar `linear` para transiciones de UI.
* **Tiempos de Respuesta:** Microinteracciones (hover, focus, toggles) entre 150ms y 220ms. Transiciones de estado (modales, acordeones) entre 280ms y 380ms.
* **Optimización en GPU:** Animar exclusivamente `transform` y `opacity`. Alturas dinámicas mediante CSS Grid (`grid-template-rows: 1fr / 0fr`).
* **Accesibilidad:** Respetar estrictamente `prefers-reduced-motion`.

## 2. Estándares de Diseño Impecable
* **Espaciado Óptico:** Escala armónica de 4px y 8px con respiración generosa (secciones entre 80px y 128px de separación vertical).
* **Jerarquía Tipográfica:** Titulares editoriales con carácter (`Fraunces`), cuerpos neutros de alta legibilidad (`Inter`) y micro-etiquetas técnicas monoespaciadas (`ui-monospace` con tracking expandido).
* **Superficies y Bordes Hairline:** Estratificación en 4 niveles de oscuridad (`#06080B`, `#0A0E14`, `#0F151F`, `#131B26`), con bordes hairline de 1px semi-transparentes (`border-white/[0.08]`).
* **Cero Clichés de IA Genérica:** Prohibidos gradientes violetas saturados, ilustraciones de cerebros/cohetes, textos inflados y fondos con "blobs".

## 3. Criterio Estético y Dirección de Arte (Taste)
* **Estilo Inmobiliaria Editorial:** Sobrio, premium, inspirado en publicaciones de diseño y arquitectura de alta gama.
* **Paleta Disciplinada:** Fondo negro obsidiana profundo, blanco y grises cálidos para texto, y un único color de acento cian eléctrico (`#00B7D1`, BALUMTech oficial) reservado para conversión y foco comercial.
* **Copywriting:** Tono de voz auténtico en español rioplatense profesional con voseo. Enfocado en retorno de inversión, métricas auditadas y valor real.

## 4. Revisión e Iteración Continua con Playwright
* Toda iteración o cambio en la interfaz debe validarse directamente en el navegador con Playwright:
  * Ejecución de auditoría visual: `python scripts/visual-audit.py http://localhost:3000`.
  * Verificación de desbordamiento horizontal en móvil (390px) y escritorio (1440px).
  * Inspección de la consola para garantizar cero errores de JavaScript o advertencias de hidratación de React.

## 5. Integración con Figma MCP
* Conexión directa con Figma MCP mediante las herramientas:
  * `get_design_context`: Inspección de estructura, tokens, espaciado y tipografía de cualquier nodo de Figma.
  * `get_motion_context`: Extracción de curvas de animación y duraciones de prototipos.
  * `get_screenshot`: Referencia visual para comparar 1:1 el diseño de Figma con el resultado renderizado en Playwright.
