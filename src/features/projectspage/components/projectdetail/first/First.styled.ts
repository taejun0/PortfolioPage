import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.BG100} 0%,
    ${({ theme }) => theme.colors.white} 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.5rem 1.5rem 0 0;
  padding: 3rem 2rem 2.5rem;
  gap: 1.5rem;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.gray150}, transparent);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem 2rem;
    gap: 1.25rem;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const BeforeTitle = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  color: ${({ theme }) => theme.colors.gray200};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.9375rem;

  svg {
    width: 16px;
    height: 16px;
    fill: ${({ theme }) => theme.colors.gray200};
  }
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const AfterTitle = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.gray300};
  font-size: 0.9375rem;
  
  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.gray400};
  text-align: center;
  margin: 0;
  letter-spacing: -0.02em;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.875rem;
  }
`;

export const SemiTitle = styled.p`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  color: ${({ theme }) => theme.colors.gray200};
  text-align: center;
  white-space: pre-line;
  line-height: 1.7;
  font-size: 1.125rem;
  max-width: 800px;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9375rem;
  }
`;
