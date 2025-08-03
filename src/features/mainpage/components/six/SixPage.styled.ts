import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100dvh);

  padding: 2rem;
  gap: 5rem;
`;

export const Title1 = styled.div`
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
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2rem;
`;

export const ContainerWrap = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledLink = styled.a`
  display: inline-block;
  width: fit-content;
  text-decoration: none;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-size: 2rem;

  margin-bottom: 0.5rem;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 1rem;
`;

export const Content2 = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.colors.gray200};

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  white-space: pre-line;
`;

export const Text = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};

  font-size: 1.125rem;
`;

export const Text2 = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ theme }) => theme.colors.gray200};

  font-size: 1.125rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 6px;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 160px;
  min-height: 160px;
  max-height: 160px;
  padding: 12px;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 6px;
  font-size: 1rem;
  resize: vertical;
  overflow-y: auto;
`;

export const SendButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.gray400 || "#333"};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray400 || "#222"};
  }

  svg {
    font-size: 1.2rem;
    background-color: ${({ theme }) => theme.colors.gray100};
    border-radius: 30%;
  }
`;
