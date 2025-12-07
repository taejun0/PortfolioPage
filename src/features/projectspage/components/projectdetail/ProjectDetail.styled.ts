import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ModalBox = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  max-height: 90vh;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.5rem 0 0 1.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  overflow-x: hidden;

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray050};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray200};
    border-radius: 0 0.25rem 0.25rem 0;

    &:hover {
      background: ${({ theme }) => theme.colors.gray300};
    }
  }

  @media (max-width: 768px) {
    max-height: 95vh;
    border-radius: 0 1rem 1rem 0;
  }
`;

export const CloseButton = styled(motion.button)`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  svg {
    width: 28px;
    height: 28px;
    color: ${({ theme }) => theme.colors.black};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.black};
    transform: rotate(90deg);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

    svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    top: 1rem;
    right: 1rem;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
