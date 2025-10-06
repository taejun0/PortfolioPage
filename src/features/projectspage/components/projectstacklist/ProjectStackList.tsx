"use client";

import * as S from "./ProjectStackList.styled";
import { Shimmer } from "./ProjectStackList.styled";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Project {
  name: string;
  description: string;
  categories: string[];
  feature: boolean;
  image: string;
  slug: string;
}

interface Props {
  selectedCategory: string;
  onOpen?: (slug: string) => void;
}

const ProjectStackList = ({ selectedCategory, onOpen }: Props) => {
  const router = useRouter();

  const [data, setData] = useState<Project[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const url =
      selectedCategory === "All Projects"
        ? "/api/projects"
        : `/api/projects?category=${encodeURIComponent(selectedCategory)}`;

    let mounted = true;
    setLoading(true);
    setErr(null);

    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to fetch projects (${r.status})`);
        return r.json();
      })
      .then((res: Project[]) => {
        if (mounted) setData(res);
      })
      .catch((e) => {
        if (mounted) setErr(e.message);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [selectedCategory]);

  if (loading) {
    // 카드 6개 정도 스켈레톤
    const skeletons = Array.from({ length: 6 });
    return (
      <S.Grid>
        {skeletons.map((_, i) => (
          <S.SkeletonCard key={`sk-${i}`}>
            <S.SkThumb>
              <Shimmer />
            </S.SkThumb>
            <S.SkBody>
              {/* 제목 굵은 줄 */}
              <S.SkLine h="18px" w="70%" r="8px">
                <Shimmer />
              </S.SkLine>

              {/* 설명 2~3줄 */}
              <S.SkLine w="100%">
                <Shimmer />
              </S.SkLine>
              <S.SkLine w="85%">
                <Shimmer />
              </S.SkLine>

              {/* 태그 더미 */}
              <S.SkTagRow>
                <S.SkTag>
                  <Shimmer />
                </S.SkTag>
                <S.SkTag>
                  <Shimmer />
                </S.SkTag>
                <S.SkTag>
                  <Shimmer />
                </S.SkTag>
              </S.SkTagRow>

              {/* View Details 자리 */}
              <S.SkLine w="40%" h="12px" style={{ marginTop: 12 }}>
                <Shimmer />
              </S.SkLine>
            </S.SkBody>
          </S.SkeletonCard>
        ))}
      </S.Grid>
    );
  }
  if (err) return <S.Grid>에러가 발생했어요: {err}</S.Grid>;
  if (!data || data.length === 0) return <S.Grid>No projects.</S.Grid>;

  return (
    <S.Grid>
      {data.map((item, index) => {
        const handleClick = () => {
          if (onOpen) onOpen(item.slug);
          else router.push(`/projects?slug=${item.slug}`);
        };

        return (
          <S.Card key={item.slug} onClick={handleClick}>
            <S.Thumbnail>
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // ✅ 추가
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
            </S.Thumbnail>
            {item.feature && <S.Featured>featured</S.Featured>}

            <S.Container>
              <S.Title>{item.name}</S.Title>
              <S.Desc>{item.description}</S.Desc>

              <S.TagContainer>
                {item.categories.map((tag) => (
                  <S.Tag key={tag}>#{tag}</S.Tag>
                ))}
              </S.TagContainer>

              <S.ViewDetail>View Details {"==>"}</S.ViewDetail>
            </S.Container>
          </S.Card>
        );
      })}
    </S.Grid>
  );
};

export default ProjectStackList;
