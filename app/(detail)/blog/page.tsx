import type { Metadata } from "next";
import BlogPage from "@features/blogpage/BlogPage";
import {
  AUTHOR_NAME,
  SITE_NAME,
  SITE_ORIGIN,
  defaultOgImageUrl,
} from "@lib/siteConfig";

const blogIndexTitle = "기술 블로그";
const blogIndexDesc = `${AUTHOR_NAME}의 프론트엔드·웹 개발 회고와 기술 정리 블로그입니다.`;

export const metadata: Metadata = {
  title: blogIndexTitle,
  description: blogIndexDesc,
  alternates: { canonical: `${SITE_ORIGIN}/blog` },
  openGraph: {
    title: `${blogIndexTitle} | ${AUTHOR_NAME}`,
    description: blogIndexDesc,
    url: `${SITE_ORIGIN}/blog`,
    type: "website",
    siteName: SITE_NAME,
    locale: "ko_KR",
    images: [
      {
        url: defaultOgImageUrl(),
        width: 1200,
        height: 630,
        alt: `${blogIndexTitle} — ${SITE_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${blogIndexTitle} | ${AUTHOR_NAME}`,
    description: blogIndexDesc,
    images: [defaultOgImageUrl()],
  },
};

export default function Blog() {
  return <BlogPage />;
}
