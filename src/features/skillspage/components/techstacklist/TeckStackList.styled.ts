import styled from "@emotion/styled";

export const Grid = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  position: relative;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  background-color: ${({ theme }) => theme.colors.white};

  max-width: 500px;
  border-radius: 12px;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-size: 1.375rem;
  margin-bottom: 0.75rem;
`;

export const Text = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.light};
  color: ${({ theme }) => theme.colors.gray200};

  line-height: 1.6;
  white-space: pre-line;
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 24px;
  top: 16px;
  font-size: 0.85rem;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ theme }) => theme.colors.black};
  background: none;
  border: none;
  cursor: pointer;

  text-decoration: underline;

  &:hover {
    opacity: 0.5;
  }
`;
