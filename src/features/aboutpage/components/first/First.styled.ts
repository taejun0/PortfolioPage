import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  height: calc(100dvh - 51px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  gap: 4rem;
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
`;

export const Container2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};

  font-size: 3rem;
`;

export const Text = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  color: ${({ theme }) => theme.colors.gray200};
  font-size: 1.125rem;

  white-space: pre-wrap;
`;

export const Text2 = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  color: ${({ theme }) => theme.colors.gray200};

  font-size: 1.125rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.colors.gray200};
  }
`;

export const DownArrow = styled(motion.div)`
  position: absolute;
  width: 30px;
  height: 30px;
  bottom: 5.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
  }
`;
