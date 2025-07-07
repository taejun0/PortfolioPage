import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.BG100};
  display: flex;
  position: fixed;
  top: 0;
  min-width: 360px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  z-index: 99;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.black};

  cursor: pointer;
`;

export const NaviSet = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const NaviTitle = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.black100};

  cursor: pointer;
`;

export const Button = styled.div``;
