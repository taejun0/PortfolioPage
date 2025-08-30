// Second.styled.ts
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
  padding: 2rem 2rem 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;
`;

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 3rem;

  padding-bottom: 2rem;

  @media (max-width: 760px) {
    font-size: 3rem;
  }

  @media (max-width: 600px) {
    top: -3.5rem;
    font-size: 2.5rem;
  }

  @media (max-width: 430px) {
    top: -2.5rem;
    font-size: 2rem;
  }
`;

export const SemiTitle = styled.div`
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  font-size: 1.125rem;
  text-align: center;

  @media (max-width: 760px) {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 0.875rem;
  }

  @media (max-width: 430px) {
    font-size: 0.75rem;
  }
`;

export const CardContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 20px;
  margin-bottom: -40px;
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
