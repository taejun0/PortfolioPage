import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.BG100};
  position: sticky;
  top: 51px;
  width: 100%;
  height: calc(100dvh - 51px);
  margin-top: 51px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FrontEnd = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 6rem;

  position: absolute;
  z-index: -1;
  top: -5rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const NameTitle = styled.div`
  font-size: 2.5rem;

  position: relative;
  z-index: 1;
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ButtonList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  gap: 1rem;
`;

export const Buttons1 = styled.div`
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray350};
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray400};
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const Buttons2 = styled.div`
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ theme }) => theme.colors.gray400};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray050};
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const IconList = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.15);
    }

    svg {
      color: ${({ theme }) => theme.colors.black};
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
`;
