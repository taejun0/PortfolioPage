"use client";

import * as S from "./AboutPage.styled";

import First from "./components/first/FIrst";
import Second from "./components/second/Second";
import Third from "./components/third/Third";

const AboutPage = () => {
  return (
    <S.Wrapper>
      <First />
      <Third />
      <Second />
    </S.Wrapper>
  );
};

export default AboutPage;
