import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  display: flex;
  min-height: calc(100dvh);
`;

export const Container1 = styled.div`
  position: relative;
  flex: 1.5;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Container2 = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PortfolioImage = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 10px;
`;

export const GoAboutMe = styled.div`
  position: relative;

  cursor: pointer;

  padding: 0.25rem;

  border-radius: 0.25rem;
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
`;

export const AboutText = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  color: ${({ theme }) => theme.colors.gray250};
  white-space: pre-line;

  margin-bottom: 2rem;
`;
