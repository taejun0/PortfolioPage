import * as S from "./First.styled";
import { FaCode, FaCalendar } from "react-icons/fa6";
import { HiSquare3Stack3D } from "react-icons/hi2";

const First = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>My Blog</S.Title>
        <S.SubTitle>
          제가 작성한 기술 블로그 글을 모아볼 수 있습니다
        </S.SubTitle>
        <S.Tags>
          <S.Tag>
            <FaCode /> Tech Blog
          </S.Tag>
          <S.Tag>
            <FaCalendar /> Dictionary
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

