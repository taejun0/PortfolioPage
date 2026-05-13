export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

export function gtag(...args: unknown[]): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag(...args);
}

/** GA4 page_view는 `config` 한 번에 묶여 전송됩니다. */
export function sendGtagPageView(path: string, pageTitle?: string): void {
  if (!GA_MEASUREMENT_ID) return;
  gtag("config", GA_MEASUREMENT_ID, {
    page_path: path,
    ...(pageTitle ? { page_title: pageTitle } : {}),
  });
}

export function sendGtagEvent(
  name: string,
  params?: Record<string, string | number | boolean | undefined>
): void {
  if (!GA_MEASUREMENT_ID) return;
  const payload =
    params &&
    Object.fromEntries(
      Object.entries(params).filter(([, v]) => v !== undefined)
    );
  gtag("event", name, payload);
}
