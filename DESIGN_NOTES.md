# DESIGN NOTES — RentoAI Landing Page

## 1. Dirección Conceptual: "Inmobiliaria Editorial"

La propuesta visual de RentoAI abandona expresamente los patrones genéricos de las landings de inteligencia artificial tradicionales (gradientes violetas, iconografía de cerebros o cohetes, fondos de "blobs" abstractos y afirmaciones grandilocuentes como "la IA del futuro").

En su lugar, adopta un **estilo editorial sobrio y de alta gama**, inspirado en publicaciones arquitectónicas y portales inmobiliarios de lujo, equilibrado con la identidad corporativa de **BALUMTech**:
* **Generosidad espacial:** Márgenes amplios, respiración entre bloques y jerarquía estricta.
* **Tipografía protagonista:** Titulares en una serifa de display con peso óptico editorial (`Fraunces`), combinada con una sans neutral y técnica (`Inter`) para cuerpos de texto y micro-etiquetas monoespaciadas.
* **Sobriedad cromática:** Fondo negro obsidiana profundo con un único color de acento (`#00B7D1`, Cian Eléctrico / Aqua Tech oficial de BALUMTech) y toques de contraste ámbar para estados de prioridad VIP.

---

## 2. Sistema de Tokens de Diseño

Definidos en `src/app/globals.css` y variables CSS:

| Token | Valor | Uso Semántico |
|---|---|---|
| `--bg-main` | `#06080B` | Fondo principal (Negro Obsidiana profundo, nativo de software) |
| `--bg-surface` | `#0A0E14` | Paneles y tarjetas de sección |
| `--bg-card` | `#0F151F` | Superficies de interacción y estado activo |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | Separadores y divisores hairline |
| `--border-strong` | `rgba(255, 255, 255, 0.16)` | Bordes en hover y contenedores destacados |
| `--border-accent` | `rgba(0, 183, 209, 0.35)` | Resaltado de foco comercial |
| `--accent-cyan` | `#00B7D1` | Color de acento primario (Manual de Identidad de BALUMTech) |
| `--accent-gold` | `#D4A359` | Acento secundario para tickets de tasación VIP |
| `--text-primary` | `#F8FAFC` | Tipografía principal (blanco cálido) |
| `--text-secondary` | `#94A3B8` | Cuerpos de texto y descripciones |
| `--text-muted` | `#64748B` | Metadatos y fuentes |

### Tipografía
* **Display / Titulares:** `Fraunces` (Google Fonts, variable con ejes ópticos). Aporta prestancia, carácter institucional y sofisticación inmobiliaria.
* **Cuerpo / Textos técnicos:** `Inter` (Google Fonts). Garantiza legibilidad perfecta en interfaces de chat, tablas de datos y formularios.
* **Etiquetas y Metadatos:** `ui-monospace` (tracking expandido, mayúsculas compactas) para comunicar precisión de ingeniería.

---

## 3. Decisiones de Jerarquía y Experiencia de Usuario (UX)

1. **Hero de Resultado Inmediato:** El titular no describe la tecnología ("un bot con LLM"), sino el resultado comercial para la agencia: *"Respondé en 4 segundos, calificá cada lead y no pierdas ninguna tasación fuera de horario"*.
2. **Mockup de WhatsApp Fiel a la Realidad:** Muestra un intercambio verídico con voseo rioplatense donde se evidencia la calificación semántica: consulta por compra en USD, detección de que el interesado además quiere tasar su propiedad en Recoleta, y despacho inmediato de un ticket urgente al martillero.
3. **Flujo de 3 Pasos con Visualización Fija:** El usuario comprende rápidamente la secuencia operativa (Recepción → Calificación → Derivación) con un panel de estado que acompaña la lectura.
4. **Tarjetas de Calificación (Criterio → Qué averigua → Qué acción dispara):** En lugar de una tabla estática, se organiza en chips visuales que evidencian el criterio comercial (Tolerancia +10%, distinción ARS vs. USD Billete, anti-negaciones y RENTO Match).
5. **Modo Dueño por WhatsApp:** Muestra exactamente cómo el titular de la inmobiliaria interactúa mediante `/datos` y cómo recibe reportes ejecutivos semanales protegidos por Zero-SQL-Injection.

---

## 4. Accesibilidad (a11y) y Rendimiento

* **Contraste AA / AAA:** Todas las combinaciones de texto blanco/gris sobre fondos oscuros cumplen con las pautas WCAG 2.1 AA.
* **Foco Visible:** Indicador de foco `outline: 2px solid #00B7D1` con offset para navegación por teclado.
* **Responsive 375px+:** Probado sin desbordamientos ni scroll horizontal en pantallas móviles.
* **Performance:** Carga de fuentes mediante `next/font` sin saltos de maquetación (CLS 0), assets SVG/PNG optimizados y Server Components por defecto.
