import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;

  padding: 2rem;
  gap: 1rem;
`;

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 3rem;
`;

export const SemiTitle = styled.div`
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
`;
