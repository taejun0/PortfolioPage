"use client";

import * as S from "./MainPage.styled";
import dynamic from "next/dynamic";
import FirstPage from "./components/first/FirstPage";
import SecondPage from "./components/second/SecondPage";
import ThirdPage from "./components/third/ThirdPage";
import { useRef } from "react";
import StickyAvatar from "./components/stickyavatar.tsx/StickyAvatar";

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
  const secondImageRef = useRef<HTMLImageElement>(null);

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
