"use client";

import * as S from "./ProjectsPage.styled";

import First from "./components/first/First";
import Second from "./components/second/Second";

const ProjectsPage = ({ initialSlug }: { initialSlug: string | null }) => {
  return (
    <S.Wrapper>
      <First />
      <Second initialSlug={initialSlug} />
    </S.Wrapper>
  );
};

export default ProjectsPage;
