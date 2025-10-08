import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.BG100};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100dvh);
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 760px) {
    padding: 1.5rem;
    gap: 1.5rem;
  }
  @media (max-width: 600px) {
    padding: 1rem;
    gap: 1rem;
  }
  @media (max-width: 430px) {
    padding: 0.5rem;
    gap: 0.75rem;
  }
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.gray400};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 3rem;

  @media (max-width: 760px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
  @media (max-width: 430px) {
    font-size: 2rem;
  }
`;

export const SemiTitle = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.gray200};
  text-align: center;
  white-space: pre-line;
  font-size: 1.125rem;

  @media (max-width: 760px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
  @media (max-width: 430px) {
    font-size: 0.75rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const Box = styled.div<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 20vw;
  min-width: 200px;
  max-width: 360px;
  gap: 0.75rem;

  padding: 0.75rem;
  border-radius: 16px;
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.colors.black : theme.colors.gray150};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.white : theme.colors.BG100};

  box-shadow: ${({ $active }) =>
    $active
      ? "0 8px 24px rgba(0,0,0,0.10), inset 0 0 0 2px rgba(0,0,0,0.05)"
      : "0 4px 14px rgba(0,0,0,0.04)"};

  transform: ${({ $active }) =>
    $active ? "translateY(-2px) scale(1.01)" : "translateY(0) scale(1)"};
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease,
    border-color 0.18s ease;

  cursor: pointer;

  &:hover {
    transform: ${({ $active }) =>
      $active
        ? "translateY(-3px) scale(1.015)"
        : "translateY(-2px) scale(1.005)"};
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 760px) {
    width: 40vw;
  }
  @media (max-width: 430px) {
    width: 80vw;
  }
`;

export const BoxTitle = styled.div<{ $active?: boolean }>`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-size: 1.25rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: ${({ theme, $active }) =>
    $active ? theme.colors.black : theme.colors.gray300};

  svg {
    width: 40px;
    height: 40px;
    padding: 0.5rem;
    border-radius: 10px;

    background-color: ${({ theme, $active }) =>
      $active ? theme.colors.white : theme.colors.gray150};
    color: ${({ theme, $active }) =>
      $active ? theme.colors.white : theme.colors.black};
  }

  @media (max-width: 760px) {
    font-size: 1.125rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
  @media (max-width: 430px) {
    font-size: 0.95rem;
    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const BoxText = styled.div<{ $active?: boolean }>`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.light};
  white-space: pre-line;

  color: ${({ theme, $active }) =>
    $active ? theme.colors.gray400 : theme.colors.gray250};

  /* 가독성 살짝 업 */
  line-height: 1.5;
  transition: color 0.18s ease;

  @media (max-width: 760px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
  @media (max-width: 430px) {
    font-size: 0.75rem;
  }
`;

export const HowManyUse = styled.div`
  position: relative;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 0 ${({ theme }) => theme.colors.black};
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.colors.white};
    box-shadow: inset 300px 0 0 0 ${({ theme }) => theme.colors.black};
  }
`;
