import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailPage from "@features/blogpage/BlogDetailPage";
import JsonLd from "@components/seo/JsonLd";
import { getBlogPostBySlug, getAllBlogPosts } from "@lib/blog";
import { buildBlogPostingJsonLd } from "@lib/buildBlogPostingJsonLd";
import { resolveBlogPostOgImage } from "@lib/blogOgImage";
import { AUTHOR_NAME, SITE_NAME, SITE_ORIGIN } from "@lib/siteConfig";

type Props = {
  params: Promise<{ slug: string }>;
};

function toIsoDate(dateStr: string): string | undefined {
  const d = new Date(dateStr);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString();
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "글을 찾을 수 없습니다" };
  }

  const { frontMatter } = post;
  const canonical = `${SITE_ORIGIN}/blog/${slug}`;
  const ogImage = resolveBlogPostOgImage(slug, frontMatter.thumbnail);
  const description =
    frontMatter.description?.trim() ||
    `${frontMatter.title} — ${AUTHOR_NAME}의 기술 블로그`;

  const publishedTime = toIsoDate(frontMatter.date);
  const modifiedTime = frontMatter.velogDate
    ? toIsoDate(frontMatter.velogDate)
    : publishedTime;

  return {
    title: frontMatter.title,
    description,
    keywords: frontMatter.tags,
    authors: [{ name: AUTHOR_NAME, url: SITE_ORIGIN }],
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "ko_KR",
      url: canonical,
      siteName: SITE_NAME,
      title: frontMatter.title,
      description,
      publishedTime,
      modifiedTime,
      authors: [AUTHOR_NAME],
      tags: frontMatter.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: frontMatter.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: frontMatter.title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd data={buildBlogPostingJsonLd(slug, post.frontMatter)} />
      <BlogDetailPage post={post} />
    </>
  );
}
