import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-height: calc(100dvh - 51px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray200};

  margin: 1rem 0;
`;
