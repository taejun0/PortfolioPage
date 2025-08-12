import * as S from "./Header.styled";

import Link from "next/link";

const Header = () => {
  return (
    <S.Wrapper>
      <Link href="/">
        <S.Title>Taejun's PortFolio</S.Title>
      </Link>
      <S.NaviSet>
        <Link href="/">
          <S.NaviTitle>Main</S.NaviTitle>
        </Link>
        <Link href="/about">
          <S.NaviTitle>About</S.NaviTitle>
        </Link>
        <Link href="/skills">
          <S.NaviTitle>Skills</S.NaviTitle>
        </Link>
        <Link href="/projects">
          <S.NaviTitle>Projects</S.NaviTitle>
        </Link>
      </S.NaviSet>
    </S.Wrapper>
  );
};

export default Header;
