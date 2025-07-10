import * as S from "./Second.styled";

import { useState } from "react";

import FilterBar from "../FilterBar";
import ProjectStackList from "../projectstacklist/ProjectStackList";

const categories = ["All Projects", "React", "Next.js", "Solo", "Team"];

const Second = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  return (
    <S.Wrapper>
      <FilterBar
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <ProjectStackList selectedCategory={selectedCategory} />
    </S.Wrapper>
  );
};

export default Second;
