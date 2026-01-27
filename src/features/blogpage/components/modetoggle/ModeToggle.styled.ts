import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem 0 1.5rem;
`;

export const ToggleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.gray050};
  border: 1px solid ${({ theme }) => theme.colors.gray150};
  border-radius: 12px;
  padding: 0.25rem;
`;

export const ToggleButton = styled(motion.button)<{ $active: boolean }>`
  ${({ theme }) => theme.fonts.Pretendard};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  background: ${({ theme, $active }) =>
    $active ? theme.colors.white : "transparent"};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.black : theme.colors.gray300};
  font-weight: ${({ theme, $active }) =>
    $active ? theme.fonts.weights.semiBold : theme.fonts.weights.medium};
  font-size: 0.9375rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${({ $active }) =>
    $active ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none"};

  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 768px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
    gap: 0.375rem;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

