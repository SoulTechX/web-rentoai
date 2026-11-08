---
name: emil-kowalski-design
description: >-
  Principios de animación, microinteracciones y física de movimiento de Emil Kowalski.
  Aplica física de resortes (spring physics), timing intencional, animaciones FLIP,
  gestos y transiciones deliberadas para interfaces web de alto rendimiento.
---

# Principios de Animación y Microinteracciones · Emil Kowalski

Esta skill establece los estándares técnicos y estéticos para animar interfaces de usuario según la filosofía de Emil Kowalski (creador de Sonner y especialista en animación web).

---

## 1. Reglas Fundamentales de Movimiento

### A. Física de Resortes (Spring Physics) sobre Curvas Lineales
* **Nunca uses `linear`** para transiciones visuales, salvo en rotaciones continuas o tickers infinitos de logos.
* Las interfaces del mundo real tienen masa, fricción y aceleración. Preferí curvas cúbicas desaceleradas o resortes amortiguados:
  ```css
  /* Desaceleración suave y natural */
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  ```
* **Evitá el rebote excesivo (overshoot):** Los rebotes caricaturescos hacen que una interfaz B2B o editorial se sienta infantil. El resorte debe amortiguarse de forma firme y controlada (*critically damped*).

### B. Tiempos de Respuesta y Duración
* **Microinteracciones inmediatas (Hover, Active, Focus, Toggle):**
  * Duración: `150ms` a `220ms`.
  * Propósito: Dar feedback instantáneo de interactividad sin que el usuario sienta que la interfaz "pesa".
* **Transiciones de estado y apertura de contenedores (Modales, Acordeones, Drawers):**
  * Duración: `280ms` a `380ms`.
  * Curva: `ease-out` o `cubic-bezier(0.16, 1, 0.3, 1)`.
* **Transiciones de página y vistas completas:**
  * Duración: `400ms` a `550ms`.

### C. Coreografía y Escalonamiento (Staggering)
* Cuando múltiples elementos entran en pantalla (tarjetas, filas de tabla, métricas), aplicá un retraso escalonado sutil de **30ms a 60ms** entre elementos.
* **Prohibido:** Retrasos superiores a 150ms que obliguen al usuario a esperar para leer el contenido.
* Dirección: La animación debe seguir el flujo natural de lectura (de arriba hacia abajo y de izquierda a derecha).

---

## 2. Optimización y Rendimiento en GPU

1. **Animar únicamente propiedades compuestas por la GPU:**
   * Usar exclusivamente `transform` (`translate`, `scale`, `rotate`) y `opacity`.
   * **Nunca animar:** `width`, `height`, `top`, `left`, `margin`, `padding` directamente, ya que provocan reflow y layout thrashing.
2. **Animación fluida de acordeones y alturas variables:**
   * Utilizar la técnica moderna de CSS Grid:
   ```css
   .accordion-content {
     display: grid;
     grid-template-rows: 0fr;
     transition: grid-template-rows 300ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms ease;
     opacity: 0;
   }
   .accordion-content[data-open="true"] {
     grid-template-rows: 1fr;
     opacity: 1;
   }
   .accordion-inner {
     overflow: hidden;
   }
   ```
3. **`will-change` moderado:** Solo aplicarlo durante el movimiento activo en elementos complejos para liberar memoria de GPU después.

---

## 3. Accesibilidad: Movimiento Reducido Obligatorio

Toda animación debe respetar la preferencia de movimiento reducido del usuario:
```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
En componentes de React, verificar `window.matchMedia("(prefers-reduced-motion: reduce)")` para inicializar el estado en su valor final sin transiciones.
