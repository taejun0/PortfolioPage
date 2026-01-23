import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100dvh);
  width: 100%;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 2.5rem;
  }

  @media (max-width: 480px) {
    gap: 2rem;
  }
`;

export const SectionLabel = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.gray300};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  font-size: 0.875rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const MainText = styled.h2`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-size: 2.5rem;
  line-height: 1.4;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
    line-height: 1.5;
  }
`;

export const HighlightText = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0.1em;
    left: 0;
    right: 0;
    height: 0.3em;
    background-color: ${({ theme }) => theme.colors.gray100};
    opacity: 0.4;
    z-index: -1;
    transition: opacity 0.3s ease;
  }
`;

export const Divider = styled.div`
  width: 4rem;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray200};
  margin: 1rem 0;

  @media (max-width: 480px) {
    width: 3rem;
  }
`;

export const Description = styled.p`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.gray300};
  font-size: 1.125rem;
  line-height: 1.8;
  margin: 0;
  font-weight: ${({ theme }) => theme.fonts.weights.regular};

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.7;
  }

  @media (max-width: 480px) {
    font-size: 0.9375rem;
    line-height: 1.6;
  }
`;

export const LinkButton = styled(motion.div)`
  ${({ theme }) => theme.fonts.Pretendard};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  font-size: 1rem;
  padding: 0.75rem 0;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: 0.325rem;
    left: 0;
    width: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.black};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 0.9375rem;
  }
`;
