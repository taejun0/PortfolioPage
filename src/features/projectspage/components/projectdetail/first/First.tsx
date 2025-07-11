import * as S from "./First.styled";

import { IoIosArrowForward } from "react-icons/io";

interface Props {
  projectName: string;
  projectdetailDescription: string;
}

const First = ({ projectName, projectdetailDescription }: Props) => {
  return (
    <S.Wrapper>
      <S.TitleBox>
        <S.BeforeTitle>
          Projects <IoIosArrowForward />
        </S.BeforeTitle>
        <S.AfterTitle>{projectName}</S.AfterTitle>
      </S.TitleBox>
      <S.Title>{projectName}</S.Title>
      <S.SemiTitle>{projectdetailDescription}</S.SemiTitle>
    </S.Wrapper>
  );
};

export default First;
