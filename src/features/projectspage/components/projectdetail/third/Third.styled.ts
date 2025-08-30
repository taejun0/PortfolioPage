import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.BG100};
  display: flex;
  flex-direction: row;

  padding: 2rem;
  gap: 1rem;
`;

export const CategorySelector = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CategoryButton = styled.button<{ selected: boolean }>`
  all: unset;
  padding: 1rem 1.2rem;
  border-radius: 1rem;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.white : theme.colors.BG100};
  color: ${({ selected, theme }) =>
    selected ? theme.colors.black : theme.colors.gray200};
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  padding: 1.5rem 2rem;
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 1.75rem;
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
  }

  h4 {
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
    margin: 1rem 0 0.25rem 0;
    color: ${({ theme }) => theme.colors.black};
  }

  ul {
    white-space: pre-line;
    list-style: disc;
    padding-left: 1.75rem;

    line-height: 2;
  }

  p,
  pre {
    color: ${({ theme }) => theme.colors.gray300};
    white-space: pre-wrap;
    font-size: 1rem;
    line-height: 2;
  }
`;
