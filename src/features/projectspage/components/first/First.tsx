import * as S from "./First.styled";

import { FaCode, FaCalendar } from "react-icons/fa6";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { PROJECTS_HERO_UI } from "@constants";
import { memo } from "react";

/** 필터 state 변경 시 히어로는 다시 그리지 않음 */
const First = memo(function First() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>{PROJECTS_HERO_UI.title}</S.Title>
        <S.SubTitle>{PROJECTS_HERO_UI.subtitle}</S.SubTitle>
        <S.Tags>
          <S.Tag>
            <FaCode /> {PROJECTS_HERO_UI.tagCode}
          </S.Tag>
          <S.Tag>
            <FaCalendar /> {PROJECTS_HERO_UI.tagCalendar}
          </S.Tag>
          <S.Tag>
            <HiSquare3Stack3D /> {PROJECTS_HERO_UI.tagStack}
          </S.Tag>
        </S.Tags>
      </S.Container>
    </S.Wrapper>
  );
});

export default First;
