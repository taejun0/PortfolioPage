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
      <FilterBar
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <S.Line />
      <TechStackList selectedCategory={selectedCategory} />
    </S.Wrapper>
  );
};

export default First;
