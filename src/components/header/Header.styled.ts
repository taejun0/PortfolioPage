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
  padding: 1rem 2rem;
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

  padding: 0.25rem;

  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 0 ${({ theme }) => theme.colors.black};
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.colors.white};
    box-shadow: inset 200px 0 0 0 ${({ theme }) => theme.colors.black};
  }
`;

export const Button = styled.div``;
