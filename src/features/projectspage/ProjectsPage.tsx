import * as S from "./ProjectsPage.styled";

import First from "./components/first/First";
import Second from "./components/second/Second";

const ProjectsPage = () => {
  return (
    <S.Wrapper>
      <First />
      <Second />
    </S.Wrapper>
  );
};

export default ProjectsPage;
