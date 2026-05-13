"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { GA_MEASUREMENT_ID, sendGtagPageView } from "@lib/analytics/gtag";

/**
 * App Router 클라이언트 전환마다 page_view를 보냅니다.
 * (루트 스크립트에서는 `gtag('config')`를 호출하지 않습니다.)
 */
export default function GoogleAnalyticsRouteTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !pathname) return;

    const id = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        sendGtagPageView(pathname, document.title);
      });
    });
    return () => window.cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}
