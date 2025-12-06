import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.white} 0%,
    ${({ theme }) => theme.colors.BG100} 10%,
    ${({ theme }) => theme.colors.white} 100%
  );
  min-height: calc(100dvh - 300px);

  gap: 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    gap: 1.5rem;
  }
`;
