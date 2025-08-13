"use client";

import * as S from "./Second.styled";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import FilterBar from "../FilterBar";
import ProjectStackList from "../projectstacklist/ProjectStackList";
import ProjectDetail from "../projectdetail/ProjectDetail";

const categories = ["All Projects", "React", "Next.js", "Solo", "Team"];

const Second = ({ initialSlug }: { initialSlug: string | null }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [selectedSlug, setSelectedSlug] = useState<string | null>(initialSlug);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setSelectedSlug(searchParams.get("slug"));
  }, [searchParams]);

  // 필요한 경우 현재 쿼리를 보존하면서 slug만 교체하는 버전
  const openProject = useCallback(
    (slug: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("slug", slug);
      router.push(`/projects?${params.toString()}`); // shallow 없음
      // router.push(`/projects?${params}`, { scroll: false }); // 스크롤 고정 원하면
    },
    [router, searchParams]
  );

  const closeProject = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("slug");
    const qs = params.toString();
    router.push(qs ? `/projects?${qs}` : "/projects");
  }, [router, searchParams]);

  return (
    <S.Wrapper>
      <FilterBar
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <ProjectStackList selectedCategory={selectedCategory} />
      {selectedSlug && (
        <ProjectDetail slug={selectedSlug} onClose={closeProject} />
      )}
    </S.Wrapper>
  );
};

export default Second;
