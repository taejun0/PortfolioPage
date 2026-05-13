import * as S from "./First.styled";
import { FaCode, FaCalendar } from "react-icons/fa6";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { BLOG_HERO_UI } from "@constants";

const First = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>{BLOG_HERO_UI.title}</S.Title>
        <S.SubTitle>{BLOG_HERO_UI.subtitle}</S.SubTitle>
        <S.Tags>
          <S.Tag>
            <FaCode /> {BLOG_HERO_UI.tagTech}
          </S.Tag>
          <S.Tag>
            <FaCalendar /> {BLOG_HERO_UI.tagDictionary}
          </S.Tag>
          <S.Tag>
            <HiSquare3Stack3D /> {BLOG_HERO_UI.tagYear}
          </S.Tag>
        </S.Tags>
      </S.Container>
    </S.Wrapper>
  );
};

export default First;
