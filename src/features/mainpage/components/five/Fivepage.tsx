"use client";

import * as S from "./FivePage.styled";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ROUTE_CONSTANTS } from "@constants/routeConstants";
import fetchVelogPosts from "utils/fetchVelog";

type VelogPost = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string;
};

const FivePage = () => {
  const [posts, setPosts] = useState<VelogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVelogPosts()
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch Velog posts:", error);
        setLoading(false);
      });
  }, []);

  return (
    <S.Wrapper>
      <S.HeaderSection>
        <S.SectionLabel>BLOG</S.SectionLabel>
        <S.Title>Best Articles</S.Title>
      </S.HeaderSection>

      <S.Divider />

      {loading ? (
        <S.LoadingText>로딩 중...</S.LoadingText>
      ) : (
        <S.Inner>
          {posts.map((post, idx) => (
            <S.PostCard
              key={idx}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {post.thumbnail && (
                <Image
                  src={post.thumbnail}
                  alt={`${post.title} 썸네일`}
                  width={600}
                  height={400}
                  sizes="(max-width: 500px) 90vw, 260px"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "1rem",
                    marginBottom: "0.75rem",
                  }}
                />
              )}
              <S.PostTitle>{post.title}</S.PostTitle>
              <S.PostDate>
                {new Date(post.pubDate).toLocaleDateString("ko-KR")}
              </S.PostDate>
              <S.PostDesc>{post.description}</S.PostDesc>
            </S.PostCard>
          ))}
        </S.Inner>
      )}

      <S.LinkWrapper>
        <Link href={ROUTE_CONSTANTS.BLOG}>
          <S.BlogLink>기술 블로그 더 보러가기 {"->"}</S.BlogLink>
        </Link>
      </S.LinkWrapper>
    </S.Wrapper>
  );
};

export default FivePage;
