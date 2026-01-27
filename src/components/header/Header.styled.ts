import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  position: fixed;
  top: 0;
  min-width: 360px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.25rem 2rem;
  z-index: 99;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.black};

  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const NaviSet = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const NaviTitle = styled.div<{ $active?: boolean }>`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.black : theme.colors.black100};

  cursor: ${({ $active }) => ($active ? "default" : "pointer")};

  padding: 0.5rem 0;
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
