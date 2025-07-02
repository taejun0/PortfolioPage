import * as S from "./Header.styled";

const Header = () => {
  return (
    <S.Wrapper>
      <S.Title>오태준</S.Title>
      <S.NaviSet>
        <S.NaviTitle>Home</S.NaviTitle>
        <S.NaviTitle>About</S.NaviTitle>
        <S.NaviTitle>Skills</S.NaviTitle>
        <S.NaviTitle>Projects</S.NaviTitle>
        <S.NaviTitle>Blog</S.NaviTitle>
        <S.NaviTitle>Contact</S.NaviTitle>
      </S.NaviSet>
      <S.Button>다크모드</S.Button>
    </S.Wrapper>
  );
};

export default Header;
