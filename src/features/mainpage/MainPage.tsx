"use client";

import * as S from "./MainPage.styled";
import dynamic from "next/dynamic";
import FirstPage from "./components/first/FirstPage";
import { useRef } from "react";
import StickyAvatar from "./components/stickyavatar.tsx/StickyAvatar";

// 첫 화면은 즉시 로드, 나머지는 동적 임포트
const SecondPage = dynamic(() => import("./components/second/SecondPage"), {
  loading: () => null,
});
const ThirdPage = dynamic(() => import("./components/third/ThirdPage"), {
  loading: () => null,
});

const FourPage = dynamic(() => import("./components/four/FourPage"), {
  ssr: false,
});
const FivePage = dynamic(() => import("./components/five/Fivepage"), {
  ssr: false,
});
const SixPage = dynamic(() => import("./components/six/SixPage"), {
  ssr: false,
});

const MainPage = () => {
  const secondImageRef = useRef<HTMLDivElement>(null);

  return (
    <S.Wrapper data-scroll-root>
      <StickyAvatar targetRef={secondImageRef} />
      <S.Section id="main">
        <FirstPage />
      </S.Section>
      <S.Section id="about">
        <SecondPage profileRef={secondImageRef} />
      </S.Section>
      <S.Section id="skills">
        <ThirdPage />
      </S.Section>
      <S.Section id="projects">
        <FourPage />
      </S.Section>
      <S.Section id="blog">
        <FivePage />
      </S.Section>
      <S.Section id="contact">
        <SixPage />
      </S.Section>
    </S.Wrapper>
  );
};

export default MainPage;
