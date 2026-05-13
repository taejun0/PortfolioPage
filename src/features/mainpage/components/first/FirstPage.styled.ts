import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: sticky;

  width: 100%;
  height: calc(100dvh - 59px);
  margin-top: 59px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 2rem 2rem;

  @media (max-width: 600px) {
    padding: 1.5rem 1rem;
  }
`;

export const FrontEnd = styled(motion.h1)`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: clamp(3.25rem, 13vw, 10rem);
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  margin-top: -8rem;
  letter-spacing: -0.04em;
  white-space: nowrap;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(55, 65, 81, 0.15) 45%,
    rgba(0, 0, 0, 0.09) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  user-select: none;
  pointer-events: none;
  text-align: center;
  width: 100%;

  @media (max-width: 960px) {
    margin-top: -6rem;
  }

  @media (max-width: 600px) {
    margin-top: -5rem;
  }

  @media (max-width: 430px) {
    margin-top: -4rem;
  }
`;

export const NameTitle = styled.h2`
  font-size: clamp(1.75rem, 4.2vw, 2.5rem);
  position: relative;
  z-index: 1;
  margin-top: 0.5rem;
  margin-bottom: 1.75rem;
  width: 100%;
  max-width: min(42rem, 92vw);
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.45em 0.28em;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  letter-spacing: -0.035em;
  line-height: 1.28;
  text-align: center;

  @media (max-width: 600px) {
    margin-bottom: 1.5rem;
  }
`;

export const WordWrapper = styled.span`
  display: inline-flex;
  position: relative;
  cursor: default;
  white-space: nowrap;

  span {
    display: inline-block;
    position: relative;

    &:hover {
      transform: scale(1.03);
      transition: transform 0.22s ease;
    }
  }
`;

export const TypewriterWrapper = styled(motion.div)`
  margin-bottom: 2.25rem;
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  color: ${({ theme }) => theme.colors.gray200};
  text-align: center;
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  line-height: 1.65;
  letter-spacing: -0.01em;

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  @media (max-width: 430px) {
    font-size: 0.9rem;
  }
`;

export const ButtonList = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`;

export const Buttons1 = styled(motion.div)`
  position: relative;
  width: fit-content;
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  padding: 1.25rem 2.5rem;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray150};
  transition: all 0.3s ease;

  span {
    position: relative;
    z-index: 1;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.gray200};
    transform: translateY(-1px);
  }

  @media (max-width: 600px) {
    width: 100%;
    max-width: 300px;
    padding: 0.875rem 1.5rem;
    font-size: 0.9rem;
  }
`;

export const Buttons2 = styled(motion.div)`
  position: relative;
  width: fit-content;
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  padding: 1.25rem 2.5rem;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray150};
  transition: all 0.3s ease;

  span {
    position: relative;
    z-index: 1;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.gray200};
    transform: translateY(-1px);
  }

  @media (max-width: 600px) {
    width: 100%;
    max-width: 300px;
    padding: 0.875rem 1.5rem;
    font-size: 0.9rem;
  }
`;

export const ButtonUnderline = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.5),
    transparent
  );
  transform-origin: left;
`;

export const IconList = styled(motion.div)`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.25rem;

  a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem 1rem;
    border-radius: 14px;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid rgba(13, 13, 13, 0.07);
    box-shadow: 0 1px 2px rgba(13, 13, 13, 0.04);
    transition:
      border-color 0.22s ease,
      box-shadow 0.22s ease,
      transform 0.22s ease,
      background 0.22s ease;

    &:hover {
      border-color: rgba(13, 13, 13, 0.14);
      background: ${({ theme }) => theme.colors.gray050};
      box-shadow: 0 4px 14px rgba(13, 13, 13, 0.07);
    }

    svg {
      color: ${({ theme }) => theme.colors.black};
      width: 26px;
      height: 26px;
      cursor: pointer;
      position: relative;
      z-index: 1;
    }
  }

  @media (max-width: 600px) {
    gap: 0.625rem;

    a {
      padding: 0.6rem 0.85rem;

      svg {
        width: 22px;
        height: 22px;
      }
    }
  }
`;

export const DownArrow = styled(motion.div)`
  position: absolute;
  width: 40px;
  height: 40px;
  bottom: -2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  svg {
    width: 28px;
    height: 28px;
    color: ${({ theme }) => theme.colors.gray250};
    opacity: 0.85;
    transition: color 0.22s ease;
  }

  &:hover svg {
    color: ${({ theme }) => theme.colors.gray300};
    opacity: 1;
  }

  @media (max-width: 600px) {
    bottom: -1rem;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
