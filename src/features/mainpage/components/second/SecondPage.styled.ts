import styled from "@emotion/styled";
import Image from "next/image";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100dvh);
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const Container1 = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 760px) {
    padding: 1rem;
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }

  @media (max-width: 430px) {
    padding: 0.5rem;
  }
`;

export const Container2 = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 760px) {
    padding: 1rem;
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }

  @media (max-width: 430px) {
    padding: 0.5rem;
    @media (max-width: 430px) {
      display: none;
    }
  }
`;

export const PortfolioImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 20px;
  &.hidden-by-docking {
    opacity: 0;
    pointer-events: none;
  }
`;

export const GoAboutMe = styled.div`
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

export const AboutTitle = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.gray400};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 3rem;

  @media (max-width: 760px) {
    font-size: 3rem;
  }

  @media (max-width: 600px) {
    top: -3.5rem;
    font-size: 2.5rem;
  }

  @media (max-width: 430px) {
    top: -2.5rem;
    font-size: 2rem;
  }
`;

export const AboutText = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.gray200};
  font-size: 1.125rem;
  line-height: 1.5;
  margin-bottom: 2rem;

  hr {
    margin: 1rem 0;
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colors.gray150};
  }

  .highlight {
    color: ${({ theme }) => theme.colors.black};
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
  }

  @media (max-width: 760px) {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    margin-bottom: 1rem;
    line-height: 1.25;
  }

  @media (max-width: 430px) {
    font-size: 0.625rem;
    margin-bottom: 0.5rem;
    line-height: 1;
  }
`;

export const TextLine = styled.div`
  display: block;
  margin-bottom: 0.5rem;
  word-break: keep-all;
  overflow-wrap: break-word;

  &:last-child {
    margin-bottom: 0;
  }
`;
