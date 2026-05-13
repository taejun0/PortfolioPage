// app/(default)/page.tsx — 메인 랜딩
import type { Metadata } from "next";
import MainPage from "@features/mainpage/MainPage";
import JsonLd from "@components/seo/JsonLd";
import { buildWebSiteJsonLd } from "@lib/buildWebSiteJsonLd";
import {
  AUTHOR_NAME,
  DEFAULT_SITE_DESCRIPTION,
  SITE_NAME,
  SITE_ORIGIN,
  defaultOgImageUrl,
} from "@lib/siteConfig";

const homeTitle = `${AUTHOR_NAME} · 프론트엔드 개발자`;

export const metadata: Metadata = {
  title: { absolute: `${homeTitle} | ${SITE_NAME}` },
  description: DEFAULT_SITE_DESCRIPTION,
  alternates: { canonical: `${SITE_ORIGIN}/` },
  openGraph: {
    title: homeTitle,
    description: DEFAULT_SITE_DESCRIPTION,
    url: `${SITE_ORIGIN}/`,
    type: "website",
    siteName: SITE_NAME,
    locale: "ko_KR",
    images: [
      {
        url: defaultOgImageUrl(),
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: DEFAULT_SITE_DESCRIPTION,
    images: [defaultOgImageUrl()],
  },
};

export default function Main() {
  return (
    <>
      <JsonLd data={buildWebSiteJsonLd()} />
      <MainPage />
    </>
  );
}
