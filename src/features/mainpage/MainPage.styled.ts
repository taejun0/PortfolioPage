// MainPage.styled.ts
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  min-height: 100svh; /* 핵심: 한 섹션이 최소 한 화면 */
  width: 100%;
  display: flex;
  align-items: center; /* 취향: 수직 가운데 정렬 */
  justify-content: center; /* 취향 */
`;
