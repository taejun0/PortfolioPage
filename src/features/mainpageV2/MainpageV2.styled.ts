import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Root = styled.div`
  display: flex;
  min-height: 100dvh;
  width: 100%;
  background: ${({ theme }) => theme.colors.BG100};
  color: ${({ theme }) => theme.colors.gray400};
`;

export const MainStage = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
  min-height: 100dvh;
`;

export const PanelLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }
`;

export const SectionBlock = styled.div`
  width: min(420px, 100%);
  margin: 1rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray150};
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
`;

export const SideNavMotion = styled(motion.aside)`
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  align-self: stretch;
  min-height: 100dvh;
  border-left: 1px solid ${({ theme }) => theme.colors.gray150};
  background: ${({ theme }) => theme.colors.white};
`;

export const NavColumnMotion = styled(motion.button)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  min-height: 100%;
  padding: 1rem 0.35rem;
  border: none;
  border-left: 1px solid ${({ theme }) => theme.colors.gray150};
  background: transparent;
  cursor: pointer;
  font: inherit;
  color: inherit;
  overflow: hidden;
  transition: background 0.2s ease;

  &:first-of-type {
    border-left: none;
  }

  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme.colors.gray050};
    outline: none;
  }
`;

export const NavLabel = styled.span`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  font-size: 0.7rem;
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const NavPlus = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.45;
  flex-shrink: 0;

  svg {
    width: 14px;
    height: 14px;
  }
`;
