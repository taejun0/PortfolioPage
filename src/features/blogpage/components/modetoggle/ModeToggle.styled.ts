import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem 0 1.75rem;
`;

export const ToggleContainer = styled.div`
  display: flex;
  gap: 0.35rem;
  background: ${({ theme }) => theme.colors.gray050};
  border: 1px solid rgba(13, 13, 13, 0.08);
  border-radius: 999px;
  padding: 0.35rem;
  box-shadow: 0 1px 2px rgba(13, 13, 13, 0.04);
`;

export const ToggleButton = styled(motion.button)<{ $active: boolean }>`
  ${({ theme }) => theme.fonts.Pretendard};
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.65rem 1.35rem;
  border-radius: 999px;
  border: none;
  background: ${({ theme, $active }) =>
    $active ? theme.colors.white : "transparent"};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.black : theme.colors.gray300};
  font-weight: ${({ theme, $active }) =>
    $active ? theme.fonts.weights.semiBold : theme.fonts.weights.medium};
  font-size: 0.875rem;
  letter-spacing: -0.02em;
  cursor: pointer;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;
  box-shadow: ${({ $active }) =>
    $active
      ? "0 2px 8px rgba(13, 13, 13, 0.08), 0 0 0 1px rgba(13, 13, 13, 0.04)"
      : "none"};

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    opacity: ${({ $active }) => ($active ? 1 : 0.75)};
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
