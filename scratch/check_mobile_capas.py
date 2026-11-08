import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(
            viewport={"width": 390, "height": 844},
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15"
        )
        page = await context.new_page()
        await page.goto("http://localhost:3000", wait_until="networkidle")

        # 1. Hero Mobile
        await page.screenshot(path="scratch/m_new_01_hero.png")

        # 2. Capas Mobile top
        capas = page.locator("#capas")
        await capas.scroll_into_view_if_needed()
        await page.wait_for_timeout(1000)
        await page.screenshot(path="scratch/m_new_02_capas.png")

        # 3. Click tab 2 (Soporte) in mobile dock
        tab_soporte = page.locator("#capas button:has-text('Soporte')").first
        await tab_soporte.click()
        await page.wait_for_timeout(600)
        await page.screenshot(path="scratch/m_new_03_capas_soporte.png")

        # 4. Click tab 3 (Finanzas)
        tab_finanzas = page.locator("#capas button:has-text('Finanzas')").first
        await tab_finanzas.click()
        await page.wait_for_timeout(600)
        await page.screenshot(path="scratch/m_new_04_capas_finanzas.png")

        # 5. Full page visual audit check
        overflow = await page.evaluate("() => document.documentElement.scrollWidth > document.documentElement.clientWidth")
        print(f"HORIZONTAL OVERFLOW DETECTED: {overflow}")

        await browser.close()
        print("MOBILE CHECKS COMPLETED")

if __name__ == "__main__":
    asyncio.run(main())
