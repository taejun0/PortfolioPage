import * as S from "./First.styled";

import { FaCode, FaCalendar } from "react-icons/fa6";
import { HiSquare3Stack3D } from "react-icons/hi2";

const First = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>My Projects</S.Title>
        <S.SubTitle>
          제가 지금까지 만들어온 프로젝트를 보실 수 있습니다
        </S.SubTitle>
        <S.Tags>
          <S.Tag>
            <FaCode /> 6 Projects
          </S.Tag>
          <S.Tag>
            <FaCalendar /> 4 Tags
          </S.Tag>
          <S.Tag>
            <HiSquare3Stack3D /> 2024 -
          </S.Tag>
        </S.Tags>
      </S.Container>
    </S.Wrapper>
  );
};

export default First;
