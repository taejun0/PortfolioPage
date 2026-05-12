// MainPage.styled.ts
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  min-height: 100svh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: clamp(1rem, 4vw, 2rem);
`;
