import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
  padding: 6rem 2rem;
  gap: 3rem;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.white} 0%,
    ${({ theme }) => theme.colors.BG100} 100%
  );

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
    gap: 2rem;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: -0.03em;
  margin: 0;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.75rem;
  }

  @media (max-width: 480px) {
    font-size: 2.25rem;
  }
`;

export const SemiTitle = styled.p`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.gray300};
  margin: 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9375rem;
  }
`;

export const Containers = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const ContainerWrap = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    bottom: -3rem;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 4rem;
    background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.3) 100%);
    opacity: 0.3;
    z-index: 100000;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;

    &:not(:last-child)::after {
      height: 1.5rem;
    }
  }
`;

export const JourneyCard = styled.div`
  width: 100%;
  max-width: 800px;
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.gray150};
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    border-color: ${({ theme }) => theme.colors.black};
  }

  @media (max-width: 768px) {
    padding: 2rem;
    gap: 1.25rem;
    align-items: flex-start;
    text-align: start;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

export const Container1 = styled.div`
  width: 100%;
`;

export const Container2 = styled.div`
  width: 100%;
`;

export const TimelineCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.gray150};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, #000000 0%, #333333 100%);
    transition: width 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    border-color: ${({ theme }) => theme.colors.black};

    &::before {
      width: 6px;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const ContainerTitle = styled.h3`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 1rem 0;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const ContainerTextBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const ContainerTextBoxCOL = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 600px;
`;

export const SemiTitleText = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.125rem;
  line-height: 1.6;
  white-space: pre-line;
  text-align: center;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: start;
    margin-bottom: 0.375rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9375rem;
  }
`;

export const ContainerText = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  color: ${({ theme }) => theme.colors.gray300};
  font-size: 1rem;
  line-height: 1.8;
  white-space: pre-line;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9375rem;
    text-align: start;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

export const Time = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 1.125rem;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  color: white;
  width: fit-content;
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
  margin: 0 auto 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  position: relative;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin: 0 0 1rem 0;
  }

  @media (max-width: 480px) {
    font-size: 0.9375rem;
    padding: 0.375rem 0.875rem;
  }
`;

export const Keywords = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  justify-content: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Keyword = styled.span`
  font-size: 0.875rem;
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  color: white;
  border-radius: 20px;
  white-space: nowrap;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    font-size: 0.8125rem;
    padding: 0.375rem 0.875rem;
  }
`;
