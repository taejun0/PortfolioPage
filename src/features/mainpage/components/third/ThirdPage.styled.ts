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
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.gray400};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 3rem;
`;

export const SemiTitle = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.gray200};

  white-space: pre-line;
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

  @media (max-width: 1024px) {
    width: 40vw;
  }

  @media (max-width: 430px) {
    width: 80vw;
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
`;

export const BoxText = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.light};
  color: ${({ theme }) => theme.colors.gray200};

  white-space: pre-line;
`;

export const HowManyUse = styled.div`
  position: relative;

  cursor: pointer;
`;
