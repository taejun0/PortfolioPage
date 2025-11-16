// Second.styled.ts
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.BG100} 0%,
    ${({ theme }) => theme.colors.white} 20%
  );
  min-height: 100vh;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: -0.03em;
  margin: 0;
  padding-bottom: 1.5rem;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.75rem;
  }

  @media (max-width: 480px) {
    font-size: 2.25rem;
  }
`;

export const SemiTitle = styled.p`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.gray300};
  text-align: center;
  margin: 0;
  line-height: 1.6;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9375rem;
  }
`;

export const CardContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
`;

export const CardInner = styled(motion.div)`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 3rem;
  text-align: left;
  gap: 1.5rem;
  border: 2px solid ${({ theme }) => theme.colors.gray150};
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12);
    border-color: ${({ theme }) => theme.colors.black};
  }

  @media (max-width: 768px) {
    padding: 2rem;
    gap: 1.25rem;
  }
`;

export const CardTitle = styled.h3`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const CardText = styled.p`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.gray300};
  line-height: 1.8;
  margin: 0;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9375rem;
  }
`;
