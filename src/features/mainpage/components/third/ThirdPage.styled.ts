import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100dvh);
  width: 100%;
  padding: 4rem 2rem;

  @media (max-width: 960px) {
    padding: 2.5rem 1.25rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 600px) {
    padding: 1.5rem 0.875rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem 0.75rem;
  }

  @media (max-width: 400px) {
    padding: 1rem 0.625rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 1rem;

  @media (max-width: 960px) {
    gap: 1.5rem;
    padding: 0 0.5rem;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 0 0.25rem;
  }

  @media (max-width: 600px) {
    gap: 1.25rem;
    padding: 0;
  }

  @media (max-width: 480px) {
    gap: 1.25rem;
    padding: 0;
  }

  @media (max-width: 400px) {
    gap: 1rem;
    padding: 0;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-size: 2.5rem;
  line-height: 1.6;
  margin: 0;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
    line-height: 1.5;
  }
`;

export const SemiTitle = styled.p`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.gray300};
  font-size: 1.125rem;
  line-height: 1.9;
  margin: 0;
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  white-space: pre-line;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.7;
  }

  @media (max-width: 480px) {
    font-size: 0.9375rem;
    line-height: 1.6;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 0;
  margin-bottom: 1rem;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 1rem;
  }

  @media (max-width: 768px) {
    gap: 0.875rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 600px) {
    gap: 0.75rem;
    margin-top: 1.25rem;
  }

  @media (max-width: 480px) {
    gap: 0.625rem;
    margin-top: 1rem;
  }

  @media (max-width: 400px) {
    gap: 0.5rem;
    margin-top: 0.875rem;
  }
`;

export const Box = styled.div<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  width: calc(25% - 1.5rem);
  min-width: 200px;
  gap: 1rem;

  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.colors.gray200 : theme.colors.gray150};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.white : theme.colors.white};

  transform: ${({ $active }) =>
    $active ? "translateY(-2px)" : "translateY(0)"};
  transition: transform 0.2s ease, background 0.2s ease,
    border-color 0.2s ease, box-shadow 0.2s ease;

  cursor: pointer;
  box-shadow: ${({ $active }) =>
    $active ? "0 4px 12px rgba(0, 0, 0, 0.04)" : "none"};

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.gray200};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  }

  @media (max-width: 1024px) {
    width: calc(50% - 0.5rem);
    min-width: auto;
    padding: 1.25rem;
    gap: 0.875rem;
  }

  @media (max-width: 768px) {
    width: calc(50% - 0.4375rem);
    padding: 1.125rem;
    gap: 0.75rem;
  }

  @media (max-width: 600px) {
    width: calc(50% - 0.375rem);
    padding: 1rem;
    gap: 0.625rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
    gap: 0.625rem;
  }

  @media (max-width: 400px) {
    padding: 0.875rem;
    gap: 0.5rem;
  }
`;

export const BoxTitle = styled.div<{ $active?: boolean }>`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-size: 1.25rem;

  display: flex;
  align-items: center;
  gap: 1rem;

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
    gap: 0.875rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
    gap: 0.75rem;
  }
  @media (max-width: 430px) {
    font-size: 0.95rem;
    gap: 0.625rem;
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
  text-align: center;
  width: 100%;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const Divider = styled.div`
  width: 4rem;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray200};
  margin: 0 auto;

  @media (max-width: 480px) {
    width: 3rem;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
    height: 2px;
    background-color: ${({ theme }) => theme.colors.black};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
