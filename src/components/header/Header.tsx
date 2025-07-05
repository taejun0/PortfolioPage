import * as S from "./Header.styled";

import Link from "next/link";

const Header = () => {
  return (
    <S.Wrapper>
      <Link href="/main">
        <S.Title>Taejun's PortFolio</S.Title>
      </Link>
      <S.NaviSet>
        <a href="/main">
          <S.NaviTitle>Main</S.NaviTitle>
        </a>
        <a href="/about">
          <S.NaviTitle>About</S.NaviTitle>
        </a>
        <a href="/skills">
          <S.NaviTitle>Skills</S.NaviTitle>
        </a>
        <a href="/projects">
          <S.NaviTitle>Projects</S.NaviTitle>
        </a>
      </S.NaviSet>
      <S.Button>다크모드</S.Button>
    </S.Wrapper>
  );
};

export default Header;
