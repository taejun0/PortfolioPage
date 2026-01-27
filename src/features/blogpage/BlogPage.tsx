"use client";

import * as S from "./BlogPage.styled";
import First from "./components/first/First";
import Second from "./components/second/Second";
import VelogNotice from "./components/velognotice/VelogNotice";

const BlogPage = () => {
  return (
    <S.Wrapper>
      <First />
      <Second />
      <VelogNotice 
        cutoffDate="2026-01-02"
        velogUrl="https://velog.io/@taejun0"
      />
    </S.Wrapper>
  );
};

export default BlogPage;

