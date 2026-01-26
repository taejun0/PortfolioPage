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
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  border: 2px solid ${({ theme }) => theme.colors.gray150};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0.75rem;
    left: 2rem;
    right: 2rem;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.black};
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }
  
  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.gray200};
    
    &::after {
      transform: scaleX(1);
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    font-size: 0.9375rem;
    padding: 0.875rem 1.75rem;
  }
`;
