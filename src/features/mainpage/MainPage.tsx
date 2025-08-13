"use client";

import * as S from "./MainPage.styled";
import dynamic from "next/dynamic";
import FirstPage from "./components/first/FirstPage";
import SecondPage from "./components/second/SecondPage";
import ThirdPage from "./components/third/ThirdPage";

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
  return (
    <S.Wrapper>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourPage />
      <FivePage />
      <SixPage />
    </S.Wrapper>
  );
};

export default MainPage;
