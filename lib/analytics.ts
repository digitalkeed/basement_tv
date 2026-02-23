/** Optional analytics. Replace with your provider (e.g. GA, Plausible). */
export function track(event: string, props?: Record<string, string | number>) {
  if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", event, props);
  }
}
