// app/(detail)/projects/page.tsx
import type { Metadata } from "next";
import ProjectsPage from "@features/projectspage/ProjectsPage";
import { AUTHOR_NAME, SITE_NAME, SITE_ORIGIN, defaultOgImageUrl } from "@lib/siteConfig";

const title = "프로젝트";
const description = `${AUTHOR_NAME}가 참여·기획한 웹·앱 프로젝트를 카테고리별로 소개합니다.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_ORIGIN}/projects` },
  openGraph: {
    title: `${title} | ${AUTHOR_NAME}`,
    description,
    url: `${SITE_ORIGIN}/projects`,
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

type Qs = { slug?: string };

export default async function Projects({
  searchParams,
}: {
  searchParams: Promise<Qs>;
}) {
  const { slug } = await searchParams;

  return <ProjectsPage initialSlug={slug ?? null} />;
}
