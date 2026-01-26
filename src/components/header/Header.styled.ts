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

export const NaviTitle = styled.div<{ $active?: boolean }>`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.black : theme.colors.black100};
  background-color: ${({ theme }) => theme.colors.BG100};

  cursor: ${({ $active }) => ($active ? "default" : "pointer")};

  padding: 0.25rem 0;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.0625rem;
    left: 0;
    width: ${({ $active }) => ($active ? "100%" : "0")};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.black};
    transition: width 0.3s ease;
  }

  ${({ $active, theme }) =>
    !$active &&
    `
      &:hover {
        &::after {
          width: 100%;
        }
      }
    `}
`;

export const Button = styled.div``;
