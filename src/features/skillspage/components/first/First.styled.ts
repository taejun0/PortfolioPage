import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-height: calc(100dvh - 170px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;
`;

export const Container2 = styled.div`
  background-color: ${({ theme }) => theme.colors.white};

  width: 100%;
  min-height: calc(100dvh - 375.5px);

  padding: 2rem;
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
