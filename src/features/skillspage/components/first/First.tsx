"use client";

import { useState, useCallback, memo } from "react";
import * as S from "./First.styled";
import FilterBar from "../FilterBar";
import TechStackList from "../techstacklist/TechStackList";
import {
  SKILLS_FILTER_ALL,
  SKILLS_FILTER_CATEGORIES,
  SKILLS_HERO_UI,
} from "@constants";

/** props 없음 — 필터만 바뀌면 이 트리는 리렌더 스킵 */
const SkillsHeroBlock = memo(function SkillsHeroBlock() {
  return (
    <>
      <S.Title>{SKILLS_HERO_UI.title}</S.Title>
      <S.SubTitle>{SKILLS_HERO_UI.subtitle}</S.SubTitle>
    </>
  );
});

const First = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    SKILLS_FILTER_ALL
  );

  const onFilterSelect = useCallback((cat: string) => {
    setSelectedCategory(cat);
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <SkillsHeroBlock />
        <FilterBar
          categories={SKILLS_FILTER_CATEGORIES}
          defaultCategory={SKILLS_FILTER_ALL}
          onSelect={onFilterSelect}
        />
      </S.Container>
      <S.Container2>
        <TechStackList selectedCategory={selectedCategory} />
      </S.Container2>
    </S.Wrapper>
  );
};

export default First;
