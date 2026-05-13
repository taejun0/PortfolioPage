"use client";

import { useState } from "react";
import * as S from "./First.styled";
import FilterBar from "../FilterBar";
import TechStackList from "../techstacklist/TechStackList";
import {
  SKILLS_FILTER_ALL,
  SKILLS_FILTER_CATEGORIES,
  SKILLS_HERO_UI,
} from "@constants";

const First = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    SKILLS_FILTER_ALL
  );

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>{SKILLS_HERO_UI.title}</S.Title>
        <S.SubTitle>{SKILLS_HERO_UI.subtitle}</S.SubTitle>
        <FilterBar
          categories={SKILLS_FILTER_CATEGORIES}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </S.Container>
      <S.Container2>
        <TechStackList selectedCategory={selectedCategory} />
      </S.Container2>
    </S.Wrapper>
  );
};

export default First;
