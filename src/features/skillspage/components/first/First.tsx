"use client";

import { useState } from "react";
import * as S from "./First.styled";
import FilterBar from "../FilterBar";
import TechStackList from "../techstacklist/TechStackList";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Styling",
  "Testing",
  "DevOps",
  "Tools",
];

const First = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Skills</S.Title>
        <S.SubTitle>
          제가 기술들을 어떻게 사용하였는지 보실 수 있습니다
        </S.SubTitle>
        <FilterBar
          categories={categories}
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
