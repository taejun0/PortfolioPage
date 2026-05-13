"use client";

import * as S from "./Second.styled";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import FilterBar from "../FilterBar";
import ProjectStackList from "../projectstacklist/ProjectStackList";
import ProjectDetail from "../projectdetail/ProjectDetail";
import {
  PROJECT_FILTER_CATEGORIES,
  PROJECT_FILTER_DEFAULT,
} from "@constants";
import {
  trackProjectDetailOpen,
  trackProjectFilter,
} from "@lib/analytics/events";

const Second = ({ initialSlug }: { initialSlug: string | null }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    PROJECT_FILTER_DEFAULT
  );
  const [selectedSlug, setSelectedSlug] = useState<string | null>(initialSlug);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setSelectedSlug(searchParams.get("slug"));
  }, [searchParams]);

  useEffect(() => {
    if (selectedSlug) {
      trackProjectDetailOpen(selectedSlug);
    }
  }, [selectedSlug]);

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

  const handleFilterSelect = useCallback((cat: string) => {
    trackProjectFilter(cat);
    setSelectedCategory(cat);
  }, []);

  return (
    <S.Wrapper>
      <FilterBar
        categories={PROJECT_FILTER_CATEGORIES}
        defaultCategory={PROJECT_FILTER_DEFAULT}
        onSelect={handleFilterSelect}
      />
      <ProjectStackList selectedCategory={selectedCategory} />
      {selectedSlug && (
        <ProjectDetail slug={selectedSlug} onClose={closeProject} />
      )}
    </S.Wrapper>
  );
};

export default Second;
