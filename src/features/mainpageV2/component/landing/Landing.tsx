"use client";

import styled from "@emotion/styled";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 100%;
  padding: clamp(2rem, 6vw, 4rem);
  max-width: 36rem;
`;

const Kicker = styled.p`
  margin: 0 0 0.75rem;
  font-size: 0.8125rem;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray200};
`;

const Title = styled.h1`
  margin: 0 0 1rem;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  line-height: 1.15;
  color: ${({ theme }) => theme.colors.gray400};
`;

const Lead = styled.p`
  margin: 0;
  font-size: 1.0625rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.black100};
`;

const Landing = () => {
  return (
    <Wrap>
      <Kicker>Portfolio</Kicker>
      <Title>안녕하세요.</Title>
      <Lead>
        메인 페이지 v2 레이아웃입니다. 오른쪽 네비에서 섹션을 열 수 있습니다.
      </Lead>
    </Wrap>
  );
};

export default Landing;
