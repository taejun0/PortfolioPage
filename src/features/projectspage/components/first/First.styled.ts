import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 4rem 2rem 2.5rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem 2rem;
    gap: 1.5rem;
  }
`;

export const Container2 = styled.div`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.BG100} 0%,
    ${({ theme }) => theme.colors.white} 20%
  );
  width: 100%;
  min-height: calc(100dvh - 400px);
  padding: 3rem 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin-top: 1.5rem;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 3.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray400};
  letter-spacing: -0.03em;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.75rem;
  }

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.25rem;
  }
`;

export const SubTitle = styled.p`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  font-size: 1.125rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray200};
  margin: 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9375rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const Tag = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.gray200};
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-size: 1rem;

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.colors.gray200};
  }

  @media (max-width: 768px) {
    font-size: 0.9375rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    gap: 0.375rem;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;
