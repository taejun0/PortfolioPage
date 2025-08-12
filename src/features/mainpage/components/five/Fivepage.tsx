"use client";

import * as S from "./FivePage.styled";

import Image from "next/image";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    fetchVelogPosts().then(setPosts);
  }, []);

  return (
    <S.Wrapper id="blog">
      <S.Title>Latest Articles</S.Title>
      <S.Inner>
        {posts.map((post, idx) => (
          <S.PostCard key={idx} href={post.link} target="_blank">
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
              {new Date(post.pubDate).toLocaleDateString()}
            </S.PostDate>
            <S.PostDesc>{post.description}</S.PostDesc>
          </S.PostCard>
        ))}
      </S.Inner>
    </S.Wrapper>
  );
};

export default FivePage;
