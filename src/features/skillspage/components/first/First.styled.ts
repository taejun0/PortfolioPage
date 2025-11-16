import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-height: calc(100dvh - 170px);
  display: flex;
  flex-direction: column;
  align-items: center;
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

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #000, transparent);
    border-radius: 2px;
    opacity: 0.1;
  }

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
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: -0.03em;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.75rem;
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
  color: ${({ theme }) => theme.colors.gray300};
  margin: 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9375rem;
  }
`;
