---
name: playwright-reviewer
description: >-
  Auditoría e iteración visual continua en el navegador con Playwright.
  Abre la aplicación local, captura screenshots de página completa y componentes,
  detecta errores de consola, desbordamientos horizontales y verifica la experiencia
  responsive en móvil y escritorio.
---

# Auditoría e Iteración Visual con Playwright

Esta skill permite inspeccionar y probar la aplicación web directamente en un navegador automatizado sin cabeza (Chromium headless), capturando evidencia visual para evaluar y refinar la interfaz.

---

## 1. Procedimiento de Inspección Visual

Para realizar una auditoría visual completa tras cualquier cambio en el código:

1. **Asegurar que el servidor local esté activo:**
   * `http://localhost:3000`
2. **Ejecutar el script de auditoría visual automatizado:**
   ```powershell
   python scripts/visual-audit.py http://localhost:3000
   ```
3. **Verificar los resultados obtenidos:**
   * `desktop-audit-full.png`: Inspección en resolución estándar de escritorio (1440x900).
   * `mobile-audit-full.png`: Inspección en viewport móvil estándar (390x844).
   * Verificación de desbordamiento horizontal: `document.documentElement.scrollWidth > window.innerWidth`.
   * Bitácora de errores de consola de JavaScript.

---

## 2. Inspección Específica de Componentes Interactivos

Para probar un componente interactivo o estado de hover/clic puntual (como el simulador de WhatsApp, acordeones o pestañas):

```python
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.goto("http://localhost:3000", wait_until="networkidle")
    
    # Ejemplo: Clic en escenario VIP
    btn_vip = page.query_selector("button:has-text('2. Tasación VIP')")
    if btn_vip:
        btn_vip.click()
        page.wait_for_timeout(2500)
        page.screenshot(path="captura-escenario-vip.png")
        
    browser.close()
```

---

## 3. Checklist de Validación Visual

- [ ] ¿Hay desbordamiento horizontal (scroll horizontal indeseado) en 390px?
- [ ] ¿Los contrastes de texto sobre fondos oscuros cumplen con legibilidad AA?
- [ ] ¿Los botones y enlaces interactivos tienen estados de hover y active definidos?
- [ ] ¿Las imágenes cargan con el ratio de aspecto correcto sin saltos de maquetación (CLS)?
