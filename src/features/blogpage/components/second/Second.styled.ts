import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  min-height: calc(100dvh - 400px);
  padding: 1rem 2rem 3rem;
  margin-top: 0;

  @media (max-width: 768px) {
    padding: 0.5rem 1.5rem 2rem;
  }
`;

