import * as S from "./Second.styled";

interface Props {
  SemiInfo: string[];
  overview: string;
}

const Second = ({ SemiInfo, overview }: Props) => {
  return (
    <S.Wrapper>
      <S.Container1>
        <S.SemiBox>
          <S.SemiTitle>Timeline</S.SemiTitle>
          <S.SemiContent>{SemiInfo[0]}</S.SemiContent>
        </S.SemiBox>
        <S.SemiBox>
          <S.SemiTitle>Team</S.SemiTitle>
          <S.SemiContent>{SemiInfo[1]}</S.SemiContent>
        </S.SemiBox>
        <S.SemiBox>
          <S.SemiTitle>Role</S.SemiTitle>
          <S.SemiContent>{SemiInfo[2]}</S.SemiContent>
        </S.SemiBox>
        <S.SemiBox>
          <S.SemiTitle>Links</S.SemiTitle>
          <S.SemiContent>{SemiInfo[3]}</S.SemiContent>
        </S.SemiBox>
      </S.Container1>
      <S.Container2>
        <S.SemiTitle2>Overview</S.SemiTitle2>
        <S.SemiContent>{overview}</S.SemiContent>
      </S.Container2>
    </S.Wrapper>
  );
};

export default Second;
