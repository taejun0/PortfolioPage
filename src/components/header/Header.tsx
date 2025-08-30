"use client";

import * as S from "./Header.styled";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { ROUTE_CONSTANTS } from "@constants/routeConstants";

const Header = () => {
  const pathname = usePathname();

  const isActive = (route: string) => pathname === route;

  return (
    <S.Wrapper>
      <Link href={ROUTE_CONSTANTS.MAIN}>
        <S.Title>Taejun's PortFolio</S.Title>
      </Link>
      <S.NaviSet>
        <Link href={ROUTE_CONSTANTS.MAIN}>
          <S.NaviTitle $active={isActive(ROUTE_CONSTANTS.MAIN)}>
            Main
          </S.NaviTitle>
        </Link>
        <Link href={ROUTE_CONSTANTS.ABOUT}>
          <S.NaviTitle $active={isActive(ROUTE_CONSTANTS.ABOUT)}>
            About
          </S.NaviTitle>
        </Link>
        <Link href={ROUTE_CONSTANTS.SKILLS}>
          <S.NaviTitle $active={isActive(ROUTE_CONSTANTS.SKILLS)}>
            Skills
          </S.NaviTitle>
        </Link>
        <Link href={ROUTE_CONSTANTS.PROJECTS}>
          <S.NaviTitle $active={isActive(ROUTE_CONSTANTS.PROJECTS)}>
            Projects
          </S.NaviTitle>
        </Link>
      </S.NaviSet>
    </S.Wrapper>
  );
};

export default Header;
