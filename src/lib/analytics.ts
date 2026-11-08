// Client-side analytics helper supporting PostHog and custom events
export type AnalyticsEvent =
  | { name: "whatsapp_click"; properties: { location: string; label?: string } }
  | { name: "demo_request_started"; properties?: Record<string, any> }
  | { name: "demo_request_submitted"; properties: { properties_range: string; interest: string } }
  | { name: "roi_calculator_used"; properties: { inquiries: number; commission: number; estimatedRevenue: number } }
  | { name: "section_viewed"; properties: { sectionId: string } };

export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;

  // PostHog support if initialized
  const win = window as any;
  if (win.posthog && typeof win.posthog.capture === "function") {
    win.posthog.capture(event.name, event.properties);
  }

  // Fallback log in dev
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] ${event.name}:`, event.properties);
  }
}
