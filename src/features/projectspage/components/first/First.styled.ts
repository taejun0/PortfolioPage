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

export const SubTitle = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
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
