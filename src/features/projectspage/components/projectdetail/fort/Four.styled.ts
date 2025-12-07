import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  width: 100%;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.BG100} 0%,
    ${({ theme }) => theme.colors.white} 100%
  );
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 0 0 1.5rem 1.5rem;
  padding: 2.5rem 2rem;
  gap: 1rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const Text = styled(motion.button)`
  all: unset;
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.black} 0%, ${({ theme }) => theme.colors.gray350} 100%);
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    font-size: 0.9375rem;
    padding: 0.875rem 1.75rem;
  }
`;
