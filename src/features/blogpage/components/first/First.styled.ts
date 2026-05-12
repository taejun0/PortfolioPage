import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.gray050} 0%,
    ${({ theme }) => theme.colors.white} 42%,
    ${({ theme }) => theme.colors.white} 100%
  );
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
  padding: 4rem 2rem 1rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem 0.5rem;
    gap: 1.5rem;
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
  font-size: 1.0625rem;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray300};
  margin: 0;
  line-height: 1.55;
  max-width: 28rem;

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
  gap: 0.6rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

export const Tag = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: ${({ theme }) => theme.colors.gray300};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  font-size: 0.8125rem;
  letter-spacing: -0.01em;
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  border: 1px solid rgba(13, 13, 13, 0.08);
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 2px rgba(13, 13, 13, 0.04);

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    opacity: 0.85;
  }

  @media (max-width: 768px) {
    font-size: 0.78rem;
    padding: 0.4rem 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    gap: 0.35rem;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

