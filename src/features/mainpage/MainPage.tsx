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
    <S.Wrapper>
      <StickyAvatar targetRef={secondImageRef} />
      <FirstPage />
      <SecondPage profileRef={secondImageRef} />
      <ThirdPage />
      <FourPage />
      <FivePage />
      <SixPage />
    </S.Wrapper>
  );
};

export default MainPage;
