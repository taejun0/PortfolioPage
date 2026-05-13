"use client";

import * as S from "./BlogList.styled";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { ko } from "date-fns/locale/ko";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";
import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import { trackBlogPostCardClick } from "@lib/analytics/events";
import { BLOG_DATE_FORMAT, BLOG_LIST_UI } from "@constants";

interface BlogPost {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    description?: string;
    tags?: string[];
    isVelogPost?: boolean;
    velogUrl?: string;
    velogDate?: string;
    series?: string;
    thumbnail?: string;
  };
}

interface Props {
  mode: "all" | "series";
  posts: BlogPost[];
  series: string[];
  loading: boolean;
}

const BlogList = ({ mode, posts, series, loading }: Props) => {
  const router = useRouter();
  const [expandedSeries, setExpandedSeries] = useState<Set<string>>(new Set());

  // 시리즈 모드일 때 시리즈별로 그룹화 (시리즈가 있는 포스트만)
  const groupedBySeries = posts
    .filter((post) => post.frontMatter.series) // 시리즈가 있는 포스트만 필터링
    .reduce((acc, post) => {
      const seriesName = post.frontMatter.series!;
      if (!acc[seriesName]) {
        acc[seriesName] = [];
      }
      acc[seriesName].push(post);
      return acc;
    }, {} as Record<string, BlogPost[]>);

  const displayData =
    mode === "all"
      ? posts
      : Object.entries(groupedBySeries).map(([seriesName, posts]) => ({
          series: seriesName,
          posts,
        }));

  if (loading) {
    const skeletons = Array.from({ length: 6 });
    return (
      <S.Grid>
        {skeletons.map((_, i) => (
          <S.SkeletonCard key={`sk-${i}`}>
            <S.SkThumb />
            <S.SkBody>
              <S.SkLine h="24px" w="80%" r="8px" />
              <S.SkLine w="100%" h="14px" />
              <S.SkLine w="85%" h="14px" />
              <S.SkTagRow>
                <S.SkTag />
                <S.SkTag />
              </S.SkTagRow>
              <S.SkLine w="30%" h="12px" />
            </S.SkBody>
          </S.SkeletonCard>
        ))}
      </S.Grid>
    );
  }

  if (mode === "all") {
    if (!displayData || displayData.length === 0) {
      return <S.Grid>{BLOG_LIST_UI.emptyAll}</S.Grid>;
    }

    return (
      <S.Grid>
        {(displayData as BlogPost[]).map((post, index) => {
          const handleClick = () => {
            trackBlogPostCardClick(post.slug, post.frontMatter.title);
            router.push(`/blog/${post.slug}`);
          };

          const formattedDate = format(
            new Date(post.frontMatter.date),
            BLOG_DATE_FORMAT,
            {
              locale: ko,
            }
          );

          const thumbnailSrc = post.frontMatter.thumbnail
            ? post.frontMatter.thumbnail.startsWith("http")
              ? post.frontMatter.thumbnail
              : `/api/blog/${post.slug}/image/${post.frontMatter.thumbnail}`
            : null;

          return (
            <S.Card key={post.slug} onClick={handleClick}>
              {thumbnailSrc && (
                <S.Thumbnail>
                  <Image
                    src={thumbnailSrc}
                    alt={post.frontMatter.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    priority={index === 0}
                  />
                </S.Thumbnail>
              )}
              <S.Container>
                <S.Title>{post.frontMatter.title}</S.Title>
                {post.frontMatter.description && (
                  <S.Desc>{post.frontMatter.description}</S.Desc>
                )}
                <S.TagContainer>
                  {post.frontMatter.tags?.map((tag) => (
                    <S.Tag key={tag}>#{tag}</S.Tag>
                  ))}
                </S.TagContainer>
                <S.Footer>
                  <S.Date>{formattedDate}</S.Date>
                  <S.ViewDetail>
                    {BLOG_LIST_UI.readMore} <HiArrowRight />
                  </S.ViewDetail>
                </S.Footer>
              </S.Container>
            </S.Card>
          );
        })}
      </S.Grid>
    );
  }

  // 시리즈 모드
  if (!displayData || displayData.length === 0) {
    return <S.Grid>{BLOG_LIST_UI.emptySeries}</S.Grid>;
  }

  const toggleSeries = (seriesName: string) => {
    setExpandedSeries((prev) => {
      const next = new Set(prev);
      if (next.has(seriesName)) {
        next.delete(seriesName);
      } else {
        next.add(seriesName);
      }
      return next;
    });
  };

  return (
    <S.SeriesContainer>
      {(displayData as Array<{ series: string; posts: BlogPost[] }>).map(
        ({ series: seriesName, posts: seriesPosts }) => {
          const isExpanded = expandedSeries.has(seriesName);

          return (
            <S.SeriesSection key={seriesName}>
              <S.SeriesHeader onClick={() => toggleSeries(seriesName)}>
                <S.SeriesTitleWrapper>
                  {isExpanded ? (
                    <FaChevronDown size={16} />
                  ) : (
                    <FaChevronRight size={16} />
                  )}
                  <S.SeriesTitle>{seriesName}</S.SeriesTitle>
                </S.SeriesTitleWrapper>
                <S.SeriesCount>
                  {seriesPosts.length}
                  {BLOG_LIST_UI.seriesCountSuffix}
                </S.SeriesCount>
              </S.SeriesHeader>
              {isExpanded && (
                <S.SeriesPostList>
                  {seriesPosts.map((post) => {
                    const handlePostClick = (e: React.MouseEvent) => {
                      e.stopPropagation();
                      trackBlogPostCardClick(post.slug, post.frontMatter.title);
                      router.push(`/blog/${post.slug}`);
                    };

                    const formattedDate = format(
                      new Date(post.frontMatter.date),
                      BLOG_DATE_FORMAT,
                      {
                        locale: ko,
                      }
                    );

                    return (
                      <S.SeriesPostItem key={post.slug} onClick={handlePostClick}>
                        <S.SeriesPostTitle>{post.frontMatter.title}</S.SeriesPostTitle>
                        <S.SeriesPostDate>{formattedDate}</S.SeriesPostDate>
                      </S.SeriesPostItem>
                    );
                  })}
                </S.SeriesPostList>
              )}
            </S.SeriesSection>
          );
        }
      )}
    </S.SeriesContainer>
  );
};

export default BlogList;
