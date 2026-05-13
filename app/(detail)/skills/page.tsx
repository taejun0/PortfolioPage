// app/(detail)/skills/page.tsx
import type { Metadata } from "next";
import SkillsPage from "@features/skillspage/SkillsPage";
import { AUTHOR_NAME, SITE_NAME, SITE_ORIGIN, defaultOgImageUrl } from "@lib/siteConfig";

const title = "기술 스택";
const description = `${AUTHOR_NAME}가 사용하는 프론트엔드 스택·도구·역량을 정리한 Skills 페이지입니다.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_ORIGIN}/skills` },
  openGraph: {
    title: `${title} | ${AUTHOR_NAME}`,
    description,
    url: `${SITE_ORIGIN}/skills`,
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

export default function Skills() {
  return <SkillsPage />;
}
