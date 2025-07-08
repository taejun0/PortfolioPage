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
`;

export const SubTitle = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  font-size: 1rem;
  display: flex;
  justify-content: center;
`;
