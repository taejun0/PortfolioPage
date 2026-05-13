import type { BlogFrontMatter } from "./blog";
import { AUTHOR_NAME, SITE_NAME, SITE_ORIGIN } from "./siteConfig";
import { resolveBlogPostOgImage } from "./blogOgImage";

export function buildBlogPostingJsonLd(
  slug: string,
  frontMatter: BlogFrontMatter
): Record<string, unknown> {
  const url = `${SITE_ORIGIN}/blog/${slug}`;
  const imageUrl = resolveBlogPostOgImage(slug, frontMatter.thumbnail);
  const description =
    frontMatter.description?.trim() ||
    `${frontMatter.title} — ${AUTHOR_NAME}의 기술 블로그`;

  const published = new Date(frontMatter.date);
  const datePublished = Number.isNaN(published.getTime())
    ? frontMatter.date
    : published.toISOString();

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontMatter.title,
    description,
    datePublished,
    inLanguage: "ko-KR",
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: [imageUrl],
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_ORIGIN,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_ORIGIN,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_ORIGIN}/icon.ico`,
      },
    },
    ...(frontMatter.tags?.length
      ? { keywords: frontMatter.tags.join(", ") }
      : {}),
    ...(frontMatter.series
      ? { articleSection: frontMatter.series }
      : {}),
  };
}
