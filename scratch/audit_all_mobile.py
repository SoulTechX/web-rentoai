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

        # Capture Hero mobile
        await page.screenshot(path="scratch/m_01_hero.png")

        # Capture Bento cards
        await page.evaluate("window.scrollBy(0, 600)")
        await page.wait_for_timeout(400)
        await page.screenshot(path="scratch/m_02_bento.png")

        # Capture Problem Speed
        await page.locator("#problema").scroll_into_view_if_needed()
        await page.wait_for_timeout(800)
        await page.screenshot(path="scratch/m_03_problema.png")

        # Capture Capas top
        await page.locator("#capas").scroll_into_view_if_needed()
        await page.wait_for_timeout(800)
        await page.screenshot(path="scratch/m_04_capas_top.png")

        # Capture Simulador
        await page.locator("#simulador").scroll_into_view_if_needed()
        await page.wait_for_timeout(800)
        await page.screenshot(path="scratch/m_05_simulador.png")

        # Capture Seguridad
        await page.locator("#seguridad").scroll_into_view_if_needed()
        await page.wait_for_timeout(800)
        await page.screenshot(path="scratch/m_06_seguridad.png")

        # Capture Demo CTA
        await page.locator("#demo").scroll_into_view_if_needed()
        await page.wait_for_timeout(800)
        await page.screenshot(path="scratch/m_07_demo.png")

        await browser.close()
        print("FULL MOBILE AUDIT CAPTURED")

if __name__ == "__main__":
    asyncio.run(main())
