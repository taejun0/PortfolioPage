import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
  padding: 6rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: -0.02em;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SemiTitle = styled.p`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray300};
  text-align: center;
  margin: 1rem 0 4rem 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9375rem;
    margin-bottom: 3rem;
  }
`;

export const PhilosophiesContainer = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media (max-width: 768px) {
    gap: 4rem;
  }
`;

export const PhilosophyItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    bottom: -2.5rem;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.gray150},
      transparent
    );
  }

  @media (max-width: 768px) {
    gap: 1.5rem;

    &:not(:last-child)::after {
      bottom: -2rem;
    }
  }
`;

export const PhilosophyTitle = styled.h3`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const PhilosophyDescription = styled.p`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.gray300};
  line-height: 2;
  margin: 0;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.9;
  }

  @media (max-width: 480px) {
    font-size: 0.9375rem;
    line-height: 1.8;
  }
`;
