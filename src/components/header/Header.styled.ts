import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  position: fixed;
  top: 0;
  min-width: 320px;
  width: 100%;
  max-width: 100vw;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 2rem;
  z-index: 99;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  @media (max-width: 640px) {
    padding: 1rem 1.5rem;
  }

  @media (max-width: 375px) {
    padding: 1rem 1rem;
    min-width: 320px;
  }
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-size: 1.125rem;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9375rem;
  }

  @media (max-width: 375px) {
    font-size: 0.875rem;
  }
`;

export const NaviSet = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const NaviTitle = styled.div<{ $active?: boolean }>`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.black : theme.colors.black100};
  font-size: 0.9375rem;
  cursor: ${({ $active }) => ($active ? "default" : "pointer")};
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
  white-space: nowrap;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.0625rem;
    left: 0;
    width: ${({ $active }) => ($active ? "100%" : "0")};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.black};
    transition: width 0.3s ease;
  }

  ${({ $active, theme }) =>
    !$active &&
    `
      &:hover {
        &::after {
          width: 100%;
        }
      }
    `}
`;

export const MobileMenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  min-width: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.5rem;
  z-index: 101;
  transition: color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.gray300};
  }

  @media (max-width: 640px) {
    display: flex;
  }

  @media (max-width: 375px) {
    width: 36px;
    height: 36px;
    min-width: 36px;
    font-size: 1.375rem;
  }
`;

export const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  min-width: 320px;
  height: 100vh;
  height: 100dvh;
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  z-index: 100;
  overflow-y: auto;

  @media (min-width: 641px) {
    display: none !important;
  }
`;

export const MobileMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-height: 100dvh;
  padding: 5rem 2rem 2rem;
  gap: 2rem;

  @media (max-width: 375px) {
    padding: 4rem 1.5rem 2rem;
    gap: 1.5rem;
  }
`;

export const MobileMenuItemWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MobileMenuItem = styled.div<{ $active?: boolean }>`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.black : theme.colors.black100};
  font-size: 1.5rem;
  font-weight: ${({ theme, $active }) =>
    $active ? theme.fonts.weights.bold : theme.fonts.weights.regular};
  cursor: pointer;
  padding: 0.75rem 0;
  position: relative;
  transition: color 0.3s ease;
  text-align: center;
  width: 100%;
  max-width: 200px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ $active }) => ($active ? "60%" : "0")};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.black};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.black};
    &::after {
      width: 60%;
    }
  }

  @media (max-width: 375px) {
    font-size: 1.25rem;
    max-width: 180px;
  }
`;

export const Button = styled.div``;
