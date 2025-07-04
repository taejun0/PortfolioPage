import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3rem;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const StyledLink = styled.a`
  display: inline-block;
  width: fit-content;
  text-decoration: none;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.25rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};

  margin-bottom: 0.5rem;
`;

export const Content = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.colors.gray200};

  display: inline-block;

  white-space: pre-line;
`;

export const Content2 = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.colors.gray200};

  display: inline-block;
  width: fit-content;
  cursor: pointer;
`;
