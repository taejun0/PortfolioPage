import { SITE_ORIGIN, defaultOgImageUrl } from "./siteConfig";

/**
 * Absolute OG image URL for a blog post (Velog CDN URL or local API image).
 */
export function resolveBlogPostOgImage(
  slug: string,
  thumbnail?: string
): string {
  if (!thumbnail) return defaultOgImageUrl();
  if (/^https?:\/\//i.test(thumbnail)) return thumbnail;
  const encoded = thumbnail
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
  return `${SITE_ORIGIN}/api/blog/${slug}/image/${encoded}`;
}
