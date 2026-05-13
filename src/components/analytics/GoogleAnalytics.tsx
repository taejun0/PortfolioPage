"use client";

import Script from "next/script";
import GoogleAnalyticsRouteTracker from "./GoogleAnalyticsRouteTracker";
import { GA_MEASUREMENT_ID } from "@lib/analytics/gtag";

export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
          `,
        }}
      />
      <GoogleAnalyticsRouteTracker />
    </>
  );
}
