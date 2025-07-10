import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 2rem 0 2rem;

  gap: 1rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 3rem;
  display: flex;
  justify-content: center;
`;

export const SubTitle = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  font-size: 1rem;
  display: flex;
  justify-content: center;
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;

  color: ${({ theme }) => theme.colors.gray200};

  .svg {
    fill: ${({ theme }) => theme.colors.white};
  }
`;
