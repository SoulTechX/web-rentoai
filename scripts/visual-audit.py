import os
import sys
import time
from playwright.sync_api import sync_playwright

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

BASE_URL = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3000"
OUTPUT_DIR = r"C:\Users\Cacho\referencias-animacion\audits"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def run_audit():
    print(f"=== INICIANDO AUDITORÍA VISUAL CON PLAYWRIGHT EN {BASE_URL} ===")
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        
        # 1. Desktop Audit (1440x900)
        print("1. Evaluando Desktop (1440x900)...")
        context_d = browser.new_context(viewport={"width": 1440, "height": 900})
        page_d = context_d.new_page()
        
        console_errors = []
        page_d.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)
        
        page_d.goto(BASE_URL, wait_until="networkidle")
        time.sleep(2)
        
        # Check horizontal overflow (CLS / layout overflow)
        has_h_overflow = page_d.evaluate("() => document.documentElement.scrollWidth > window.innerWidth")
        print(f"   - Desbordamiento horizontal: {'DETECTADO (ERROR)' if has_h_overflow else 'Ninguno (OK)'}")
        
        # Capture Desktop Full Page
        desktop_shot = os.path.join(OUTPUT_DIR, "desktop-audit-full.png")
        page_d.screenshot(path=desktop_shot, full_page=True)
        print(f"   - Captura completa guardada: {desktop_shot}")
        context_d.close()
        
        # 2. Mobile Audit (390x844 iPhone 14/15)
        print("2. Evaluando Móvil (390x844)...")
        context_m = browser.new_context(
            viewport={"width": 390, "height": 844},
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
        )
        page_m = context_m.new_page()
        page_m.goto(BASE_URL, wait_until="networkidle")
        time.sleep(2)
        
        has_m_overflow = page_m.evaluate("() => document.documentElement.scrollWidth > window.innerWidth")
        print(f"   - Desbordamiento horizontal en móvil: {'DETECTADO (ERROR)' if has_m_overflow else 'Ninguno (OK)'}")
        
        mobile_shot = os.path.join(OUTPUT_DIR, "mobile-audit-full.png")
        page_m.screenshot(path=mobile_shot, full_page=True)
        print(f"   - Captura completa móvil guardada: {mobile_shot}")
        context_m.close()
        
        browser.close()
        
        print("\n=== RESUMEN DE LA AUDITORÍA ===")
        print(f"Errores de consola: {len(console_errors)}")
        if console_errors:
            for err in console_errors:
                print(f"  [ERROR] {err}")
        print("Auditoría completada exitosamente.")

if __name__ == "__main__":
    run_audit()
