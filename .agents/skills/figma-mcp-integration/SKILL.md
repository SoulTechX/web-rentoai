---
name: figma-mcp-integration
description: >-
  Integración de prototipos y rediseños desde Figma mediante Figma MCP.
  Extrae contexto de diseño, tokens, tipografías, componentes y animaciones
  directamente de archivos de Figma para traducirlos a código Next.js y Tailwind CSS.
---

# Integración con Figma MCP · De Diseño a Código

Esta skill guía la conexión y traducción de maquetas y prototipos de Figma al código de la web de RentoAI utilizando las herramientas del servidor MCP de Figma.

---

## 1. Herramientas MCP Disponibles en el Entorno

El servidor `figma_figma` está conectado y expone las siguientes herramientas:

| Herramienta MCP | Cuándo usarla |
|---|---|
| `get_design_context` | Obtener el árbol de nodos, estilos, auto-layout, relleno, tipografía y tokens de un frame de Figma. |
| `get_motion_context` | Extraer curvas de easing, duración de transiciones y keyframes definidos en prototipos de Figma. |
| `get_screenshot` | Capturar una imagen renderizada del frame o componente de Figma para referencia visual. |
| `get_metadata` | Inspeccionar capas, nombres de componentes y variantes dentro del archivo. |

---

## 2. Flujo de Trabajo para Traducir Diseños de Figma

Cuando el usuario comparta un enlace de Figma (por ejemplo: `https://www.figma.com/design/:file_key/:title?node-id=:node_id`):

1. **Extraer el contexto del diseño:**
   * Invocar `get_design_context` pasando el `fileKey` y `nodeId`.
   * Identificar la escala de espaciado, nombres de variantes y fuentes tipográficas usadas.
2. **Mapeo a Tokens del Proyecto:**
   * Traducir colores a las variables de Tailwind de RentoAI:
     * Fondo oscuro principal -> `#06080B` (`var(--bg-main)`).
     * Color de acento cian -> `#00B7D1` (`var(--accent-cyan)`).
     * Borde hairline -> `border-white/[0.08]`.
     * Tipografía de titulares -> `font-editorial` (`Fraunces`).
     * Tipografía de lectura -> `font-sans` (`Inter`).
3. **Comprobación Visual con Playwright:**
   * Tras implementar el código en Next.js, ejecutar una captura con Playwright y comparar visualmente con el diseño original de Figma para garantizar fidelidad 1:1.
