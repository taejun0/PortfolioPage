import {
  AUTHOR_NAME,
  DEFAULT_SITE_DESCRIPTION,
  SITE_NAME,
  SITE_ORIGIN,
} from "./siteConfig";

export function buildWebSiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_ORIGIN,
    description: DEFAULT_SITE_DESCRIPTION,
    inLanguage: "ko-KR",
    publisher: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_ORIGIN,
    },
  };
}
