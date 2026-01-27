import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 4rem auto 2rem;
  padding: 0 2rem;

  @media (max-width: 768px) {
    margin: 3rem auto 1.5rem;
    padding: 0 1.5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.5rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray150};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray150};

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

export const Text = styled.p`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.gray300};
  margin: 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const Link = styled.a`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  font-size: inherit;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline;
  margin-left: 0.25rem;

  &:hover {
    color: ${({ theme }) => theme.colors.gray300};
    text-decoration: underline;
  }
`;

