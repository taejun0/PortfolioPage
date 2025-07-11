import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: row;
  border-radius: 0 0 1rem 1rem;

  padding: 2rem;
  gap: 1rem;
`;

export const Text = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.875rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;

  display: flex;
  gap: 1rem;
  cursor: pointer;
`;
