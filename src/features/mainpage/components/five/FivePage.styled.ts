import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.BG100};
  position: sticky;
  top: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100dvh - 4px);
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.gray400};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 3rem;
`;
