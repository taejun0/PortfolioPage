import * as S from "./Header.styled";

import Link from "next/link";

import { ROUTE_CONSTANTS } from "@constants/routeConstants";

const Header = () => {
  return (
    <S.Wrapper>
      <Link href={ROUTE_CONSTANTS.MAIN}>
        <S.Title>Taejun's PortFolio</S.Title>
      </Link>
      <S.NaviSet>
        <Link href={ROUTE_CONSTANTS.MAIN}>
          <S.NaviTitle>Main</S.NaviTitle>
        </Link>
        <Link href={ROUTE_CONSTANTS.ABOUT}>
          <S.NaviTitle>About</S.NaviTitle>
        </Link>
        <Link href={ROUTE_CONSTANTS.SKILLS}>
          <S.NaviTitle>Skills</S.NaviTitle>
        </Link>
        <Link href={ROUTE_CONSTANTS.PROJECTS}>
          <S.NaviTitle>Projects</S.NaviTitle>
        </Link>
      </S.NaviSet>
    </S.Wrapper>
  );
};

export default Header;
