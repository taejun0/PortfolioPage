import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  min-height: calc(100dvh - 59px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 4rem;
  gap: 4rem;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    padding: 4rem 2rem;
    gap: 3rem;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 3rem;
  }
`;

export const Quote = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  line-height: 1.6;
  position: relative;
  padding: 0 2rem;

  &::before,
  &::after {
    content: '"';
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.gray200};
    opacity: 0.3;
    position: absolute;
    top: -0.5rem;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0 1rem;

    &::before,
    &::after {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const TextSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MainText = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  color: ${({ theme }) => theme.colors.gray300};
  line-height: 2;
  text-align: center;
  max-width: 700px;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.9;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.8;
  }
`;

export const InfoSection = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray150};

  @media (max-width: 768px) {
    gap: 1.25rem;
    padding-top: 1.5rem;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const InfoLabel = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ theme }) => theme.colors.gray300};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  min-width: 80px;

  @media (max-width: 768px) {
    font-size: 0.8125rem;
  }
`;

export const InfoValue = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  color: ${({ theme }) => theme.colors.black};
  text-align: right;
  flex: 1;

  @media (max-width: 768px) {
    text-align: left;
    font-size: 0.9375rem;
  }
`;

export const HistoryText = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ theme }) => theme.colors.gray300};
  font-size: 0.9375rem;
  text-align: center;
`;

export const DownArrow = styled(motion.div)`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  svg {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.colors.gray300};
  }
`;
