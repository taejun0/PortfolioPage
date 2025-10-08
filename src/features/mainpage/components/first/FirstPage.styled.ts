import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.BG100};
  position: sticky;
  top: 59px;
  width: 100%;
  height: calc(100dvh - 59px);
  margin-top: 59px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FrontEnd = styled(motion.div)`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 6rem;

  position: absolute;
  z-index: -1;
  top: -5rem;

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

export const NameTitle = styled(motion.div)`
  font-size: 2.5rem;

  position: relative;
  z-index: 1;
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;

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

export const ButtonList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 0rem 2rem 0;
  gap: 1rem;
`;

export const Buttons1 = styled(motion.div)`
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray300};
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray400};
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const Buttons2 = styled(motion.div)`
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ theme }) => theme.colors.gray400};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray050};
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const IconList = styled(motion.div)`
  display: flex;
  gap: 1.5rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.15);
    }

    svg {
      color: ${({ theme }) => theme.colors.black};
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
`;

export const DownArrow = styled(motion.div)`
  position: absolute;
  width: 30px;
  height: 30px;
  bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.colors.gray300};
  }
`;
