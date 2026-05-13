import * as S from "./First.styled";

import { IoIosArrowForward } from "react-icons/io";
import { PROJECT_DETAIL_MODAL_FIRST_UI } from "@constants";

interface Props {
  projectName: string;
  overview: string;
}

const First = ({ projectName, overview }: Props) => {
  return (
    <S.Wrapper>
      <S.TitleBox>
        <S.BeforeTitle>
          {PROJECT_DETAIL_MODAL_FIRST_UI.beforeTitle} <IoIosArrowForward />
        </S.BeforeTitle>
        <S.AfterTitle>{projectName}</S.AfterTitle>
      </S.TitleBox>
      <S.Title>{projectName}</S.Title>
      <S.SemiTitle>{overview}</S.SemiTitle>
    </S.Wrapper>
  );
};

export default First;
