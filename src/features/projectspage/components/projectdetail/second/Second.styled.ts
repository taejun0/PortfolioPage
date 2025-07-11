import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: row;
  border-radius: 0;

  padding: 2rem;
  gap: 1rem;
`;

export const Container1 = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

export const Container2 = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  height: 100%;

  gap: 1rem;
`;

export const SemiBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

export const SemiTitle = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.black};
`;

export const SemiTitle2 = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.black};

  font-size: 1.75rem;
`;

export const SemiContent = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.light};
  color: ${({ theme }) => theme.colors.gray200};

  line-height: 1.5;

  white-space: pre-line;
  word-break: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
`;
