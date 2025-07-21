import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100dvh;

  padding: 2rem;
  gap: 1rem;
`;

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 3rem;
`;

export const SemiTitle = styled.div`
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
`;

export const Line = styled.div`
  position: absolute;
  width: 2px;
  height: 100%;

  top: 0;
  left: 50%;
  transform: translateX(-50%);

  background-color: ${({ theme }) => theme.colors.gray100};
`;

export const ContainerWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 1.75rem;
`;

export const Containers = styled.div`
  width: 100%;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1rem;
`;

export const Container1 = styled.div`
  width: 50%;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: end;

  gap: 0.875rem;
`;

export const Container2 = styled.div`
  width: 50%;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: start;

  gap: 0.875rem;
`;

export const ContainerTitle = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-size: 1.75rem;
`;

export const ContainerTextBox = styled.div`
  display: flex;
  flex-direction: row;

  gap: 0.25rem;
`;

export const ContainerTextBoxCOL = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

export const ContainerText = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.gray200};
  font-size: 1.125rem;

  width: 100%;

  white-space: pre-line;
`;

export const Time = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-size: 1rem;

  background-color: ${({ theme }) => theme.colors.white};

  width: fit-content;
  padding: 0.125rem 0.25rem;
  border-radius: 4px;
`;

export const Keywords = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Keyword = styled.span`
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.gray100};
  border-radius: 999px;
  white-space: nowrap;
`;
