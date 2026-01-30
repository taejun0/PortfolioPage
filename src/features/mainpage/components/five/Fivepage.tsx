"use client";

import * as S from "./FivePage.styled";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ROUTE_CONSTANTS } from "@constants/routeConstants";
import fetchVelogPosts, { type VelogData } from "utils/fetchVelog";

const FivePage = () => {
  const [data, setData] = useState<VelogData>({ post: null, totalPosts: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVelogPosts()
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch Velog posts:", error);
        setLoading(false);
      });
  }, []);

  const { post } = data;
  const velogPosts = 55; // 벨로그 글 수
  const portfolioPosts = 1; // 개인 포폴 블로그 글 수
  const totalBlogPosts = velogPosts + portfolioPosts;

  return (
    <S.Wrapper>
      <S.HeaderSection>
        <S.SectionLabel>BLOG</S.SectionLabel>
        <S.Title>Best Articles</S.Title>
      </S.HeaderSection>

      <S.Divider />

      {loading ? (
        <S.LoadingText>로딩 중...</S.LoadingText>
      ) : post ? (
        <S.ArticleContainer>
          <S.ArticleCard
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.ArticleImageWrapper>
              <Image
                src="/images/portFolio/vibecoding.png"
                alt="바이브 코딩 글 이미지"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "1rem",
                }}
              />
            </S.ArticleImageWrapper>
            <S.ArticleContent>
              <S.ArticleTitle>{post.title}</S.ArticleTitle>
              <S.ArticleDate>
                {new Date(post.pubDate).toLocaleDateString("ko-KR")}
              </S.ArticleDate>
              {post.stats && (
                <S.ArticleStats>
                  <S.StatItem>좋아요 {post.stats.likes}</S.StatItem>
                  <S.StatItem>조회수 {post.stats.views}+</S.StatItem>
                </S.ArticleStats>
              )}
              <S.ArticleDesc>
                24시간 안에 서비스를 만들면서 느낀 점을 정리한 글입니다.
                바이브 코딩 해커톤에서의 경험과 배운 점을 공유했습니다.
              </S.ArticleDesc>
            </S.ArticleContent>
          </S.ArticleCard>
        </S.ArticleContainer>
      ) : null}

      <S.DescriptionSection>
        <S.DescriptionText>
          지금까지 총 벨로그 {velogPosts}개, 개인 포폴 블로그 {portfolioPosts}개로
          총 {totalBlogPosts}개의 지식을 공유해왔습니다.
        </S.DescriptionText>
        <S.DescriptionText>
          저는 공유의 가치를 알고 있기 때문에 글을 씁니다.
          <br />
          하나의 조직이 잘 굴러가려면 모든 이들이 공유된 생각을 가지는 것이 중요합니다.
          <br />
          지식과 인사이트를 적극적으로 나누어 함께 성장하는 개발자가 되고자 합니다.
        </S.DescriptionText>
      </S.DescriptionSection>

      <S.LinkWrapper>
        <Link href={ROUTE_CONSTANTS.BLOG}>
          <S.BlogLink>저의 기술 블로그를 보러가요 {"->"}</S.BlogLink>
        </Link>
      </S.LinkWrapper>
    </S.Wrapper>
  );
};

export default FivePage;
