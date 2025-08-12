import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.BG100};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100dvh);
  gap: 2rem;

  padding: 2rem;

  @media (max-width: 760px) {
    padding: 1.5rem;
    gap: 1.5rem;
  }

  @media (max-width: 600px) {
    padding: 1rem;
    gap: 1rem;
  }

  @media (max-width: 430px) {
    padding: 0.5rem;
    gap: 0.75rem;
  }
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.gray400};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 3rem;

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
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.gray200};

  text-align: center;

  white-space: pre-line;

  font-size: 1.125rem;

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

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;

  margin-bottom: 2rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  gap: 1rem;

  @media (max-width: 760px) {
    width: 40vw;
    gap: 0.75rem;
  }

  @media (max-width: 600px) {
    gap: 0.5rem;
  }

  @media (max-width: 430px) {
    width: 80vw;
    gap: 0.25rem;
  }
`;

export const BoxTitle = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-size: 1.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;
  svg {
    width: 40px;
    height: 40px;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.colors.gray150};
    border-radius: 10px;
  }

  @media (max-width: 760px) {
    font-size: 1.375rem;
    gap: 0.75rem;
  }

  @media (max-width: 600px) {
    top: -3.5rem;
    font-size: 1.25rem;
    gap: 0.5rem;
  }

  @media (max-width: 430px) {
    top: -2.5rem;
    font-size: 1rem;
    gap: 0.5rem;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const BoxText = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.light};
  color: ${({ theme }) => theme.colors.gray200};

  white-space: pre-line;

  @media (max-width: 760px) {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    top: -3.5rem;
    font-size: 0.8rem;
  }

  @media (max-width: 430px) {
    top: -2.5rem;
    font-size: 0.625rem;
  }
`;

export const HowManyUse = styled.div`
  position: relative;

  cursor: pointer;

  padding: 0.25rem;
  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 0 ${({ theme }) => theme.colors.black};
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.colors.white};
    box-shadow: inset 300px 0 0 0 ${({ theme }) => theme.colors.black};
  }
`;
