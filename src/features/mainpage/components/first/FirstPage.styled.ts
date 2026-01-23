import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.BG100};
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

export const BackgroundGradient = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    135deg,
    #f2f2f2 0%,
    #e8e8e8 25%,
    #f5f5f5 50%,
    #eeeeee 75%,
    #f2f2f2 100%
  );
  background-size: 200% 200%;
  z-index: 0;
  opacity: 0.6;
  pointer-events: none;
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
  padding: 2rem;
`;

export const FrontEnd = styled(motion.h1)`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 6rem;
  position: absolute;
  z-index: 0;
  top: -5rem;
  letter-spacing: 0.1em;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.03) 0%,
    rgba(0, 0, 0, 0.08) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  user-select: none;
  pointer-events: none;

  @media (max-width: 760px) {
    font-size: 5.5rem;
  }

  @media (max-width: 600px) {
    top: -3.5rem;
    font-size: 4rem;
  }

  @media (max-width: 430px) {
    top: -2.5rem;
    font-size: 3rem;
  }
`;

export const NameTitle = styled.h2`
  font-size: 2.5rem;
  position: relative;
  z-index: 1;
  margin-bottom: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5em 0.3em;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  line-height: 1.6;
  text-align: center;

  @media (max-width: 760px) {
    font-size: 2rem;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }

  @media (max-width: 430px) {
    font-size: 1.25rem;
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
      transform: scale(1.1);
      transition: transform 0.2s ease;
    }
  }
`;

export const TypewriterWrapper = styled(motion.div)`
  margin-bottom: 2rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.gray300};
  text-align: center;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};

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
  padding: 1rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  font-size: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.gray200};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  span {
    position: relative;
    z-index: 1;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.gray300};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
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
  padding: 1rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  font-size: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.gray200};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  span {
    position: relative;
    z-index: 1;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.gray300};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
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
  gap: 2rem;
  margin-top: 1rem;

  a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

    &:hover {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      background: ${({ theme }) => theme.colors.gray050};
    }

    svg {
      color: ${({ theme }) => theme.colors.black};
      width: 28px;
      height: 28px;
      cursor: pointer;
      position: relative;
      z-index: 1;
    }
  }

  @media (max-width: 600px) {
    gap: 1.5rem;

    a {
      padding: 0.625rem;

      svg {
        width: 24px;
        height: 24px;
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
  cursor: pointer;

  svg {
    width: 32px;
    height: 32px;
    color: ${({ theme }) => theme.colors.gray300};
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    transition: all 0.3s ease;
  }

  &:hover svg {
    color: ${({ theme }) => theme.colors.gray400};
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
  }

  @media (max-width: 600px) {
    bottom: -1rem;
    svg {
      width: 28px;
      height: 28px;
    }
  }
`;
