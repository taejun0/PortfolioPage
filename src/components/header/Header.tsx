"use client";

import * as S from "./Header.styled";

import Link from "next/link";

import { usePathname } from "next/navigation";
import {
  HEADER_NAV_ITEMS,
  HEADER_SITE_TITLE,
  ROUTE_CONSTANTS,
} from "@constants";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { AnimatePresence } from "framer-motion";
import { trackNavClick } from "@lib/analytics/events";

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (route: string) => {
    if (route === ROUTE_CONSTANTS.BLOG) {
      return pathname === route || pathname.startsWith(`${route}/`);
    }
    return pathname === route;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // 메뉴 항목 클릭 시 모바일 메뉴 닫기
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // 모바일 메뉴가 열려있을 때 body 스크롤 방지
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <S.Wrapper>
      <Link
        href={ROUTE_CONSTANTS.MAIN}
        onClick={() =>
          trackNavClick("logo", ROUTE_CONSTANTS.MAIN, "header_logo")
        }
      >
        <S.Title>{HEADER_SITE_TITLE}</S.Title>
      </Link>
      <S.NaviSet>
        {HEADER_NAV_ITEMS.map((item) => (
          <Link
            key={item.route}
            href={item.route}
            onClick={() =>
              trackNavClick(item.label, item.route, "header_desktop")
            }
          >
            <S.NaviTitle $active={isActive(item.route)}>
              {item.label}
            </S.NaviTitle>
          </Link>
        ))}
      </S.NaviSet>
      <S.MobileMenuButton onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <HiX /> : <HiMenu />}
      </S.MobileMenuButton>
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <S.MobileMenu
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <S.MobileMenuContent>
              {HEADER_NAV_ITEMS.map((item, index) => (
                <S.MobileMenuItemWrapper
                  key={item.route}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={item.route}
                    onClick={() => {
                      trackNavClick(item.label, item.route, "header_mobile");
                      closeMobileMenu();
                    }}
                  >
                    <S.MobileMenuItem $active={isActive(item.route)}>
                      {item.label}
                    </S.MobileMenuItem>
                  </Link>
                </S.MobileMenuItemWrapper>
              ))}
            </S.MobileMenuContent>
          </S.MobileMenu>
        )}
      </AnimatePresence>
    </S.Wrapper>
  );
};

export default Header;
