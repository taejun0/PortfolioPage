// Second.styled.ts
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
  padding: 2rem 0 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 3rem;
`;

export const CardContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 20px;
  margin-bottom: -60px;
  width: 100%;
`;

export const CardInner = styled(motion.div)`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  text-align: center;

  gap: 1rem;

  z-index: 100;
`;

export const CardTitle = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};

  font-size: 1.25rem;
`;

export const CardText = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  font-size: 1rem;

  white-space: pre-wrap;
`;
