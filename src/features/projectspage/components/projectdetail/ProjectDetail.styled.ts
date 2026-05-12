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
  width: 100%;
  max-width: 1480px;
  max-height: min(92vh, calc(100dvh - 4rem));
  min-height: 0;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1.25rem;
  box-shadow:
    0 24px 80px rgba(13, 13, 13, 0.18),
    0 0 0 1px rgba(13, 13, 13, 0.06);
  overflow: hidden;
  isolation: isolate;

  @media (max-width: 768px) {
    max-height: min(96vh, calc(100dvh - 2rem));
    border-radius: 1rem;
  }
`;

/** 스크롤은 모달 껍데가 아니라 내부에서만 — radius와 스크롤바가 겹치지 않게 */
export const ModalScrollBody = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  scrollbar-gutter: stable;

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => `${theme.colors.gray200} transparent`};

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    margin: 10px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray200};
    border-radius: 999px;
    border: 3px solid transparent;
    background-clip: padding-box;

    &:hover {
      background: ${({ theme }) => theme.colors.gray250};
      background-clip: padding-box;
    }
  }

  @media (max-width: 768px) {
    &::-webkit-scrollbar {
      width: 6px;
    }
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
    transform: rotate(90deg);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
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
