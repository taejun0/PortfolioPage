"use client";

import * as S from "./ProjectStackList.styled";

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

  if (loading) return <S.Grid>Loading...</S.Grid>;
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
