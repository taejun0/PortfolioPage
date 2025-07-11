import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.BG100};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem 1rem 0 0;

  padding: 2rem;
  gap: 1rem;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const BeforeTitle = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.light};
  color: ${({ theme }) => theme.colors.gray200};
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    fill: ${({ theme }) => theme.colors.gray200};
  }
`;

export const AfterTitle = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.black};
  color: ${({ theme }) => theme.colors.black};
`;

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 3rem;
`;

export const SemiTitle = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ theme }) => theme.colors.gray200};
`;
