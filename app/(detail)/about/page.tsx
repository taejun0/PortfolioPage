// app/(detail)/about/page.tsx
import type { Metadata } from "next";
import AboutPage from "@features/aboutpage/AboutPage";
import { AUTHOR_NAME, SITE_NAME, SITE_ORIGIN, defaultOgImageUrl } from "@lib/siteConfig";

const title = "소개";
const description = `${AUTHOR_NAME}의 경력 타임라인, 협업 경험, 관심사를 정리한 About 페이지입니다.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_ORIGIN}/about` },
  openGraph: {
    title: `${title} | ${AUTHOR_NAME}`,
    description,
    url: `${SITE_ORIGIN}/about`,
    type: "website",
    siteName: SITE_NAME,
    locale: "ko_KR",
    images: [
      {
        url: defaultOgImageUrl(),
        width: 1200,
        height: 630,
        alt: `${title} — ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${AUTHOR_NAME}`,
    description,
    images: [defaultOgImageUrl()],
  },
};

export default function About() {
  return <AboutPage />;
}
