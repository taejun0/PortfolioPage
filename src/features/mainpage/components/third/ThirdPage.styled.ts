import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100dvh);
  gap: 2rem;
  padding: 4rem 2rem;

  @media (max-width: 760px) {
    padding: 3rem 1.5rem;
    gap: 1.5rem;
  }
  @media (max-width: 600px) {
    padding: 2rem 1rem;
    gap: 1rem;
  }
  @media (max-width: 430px) {
    padding: 1.5rem 1rem;
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
  gap: 1rem;

  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.colors.gray200 : theme.colors.gray150};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.white : theme.colors.white};

  transform: ${({ $active }) =>
    $active ? "translateY(-1px)" : "translateY(0)"};
  transition: transform 0.18s ease, background 0.18s ease,
    border-color 0.18s ease;

  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
    border-color: ${({ theme }) => theme.colors.gray200};
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
  line-height: 1.7;
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

export const SectionLabel = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.gray300};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  font-size: 0.875rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const HowManyUse = styled.div`
  position: relative;
  cursor: pointer;
  padding: 0.25rem 0;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  transition: color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.0625rem;
    left: 0;
    width: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.black};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
