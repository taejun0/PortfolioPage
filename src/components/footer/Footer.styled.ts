import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2.5rem 2rem 2.5rem;
  gap: 1rem;

  @media (max-width: 760px) {
    padding: 1.75rem 1.75rem 1.5rem 1.75rem;
  }

  @media (max-width: 600px) {
    padding: 1.5rem 1.5rem 1.25rem 1.5rem;
  }

  @media (max-width: 430px) {
    padding: 1.25rem 1.25rem 1rem 1.25rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContainerTitle = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};

  @media (max-width: 760px) {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 0.875rem;
  }

  @media (max-width: 430px) {
    font-size: 0.625rem;
  }
`;

export const ContainerText = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.gray200};

  font-size: 0.875rem;

  @media (max-width: 760px) {
    font-size: 0.875rem;
  }

  @media (max-width: 600px) {
    font-size: 0.625rem;
  }

  @media (max-width: 430px) {
    font-size: 0.5rem;
  }
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;

  @media (max-width: 760px) {
    font-size: 0.875rem;
  }

  @media (max-width: 600px) {
    font-size: 0.875rem;
  }

  @media (max-width: 430px) {
    font-size: 0.75rem;
  }
`;
