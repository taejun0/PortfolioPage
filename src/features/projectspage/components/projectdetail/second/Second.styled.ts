import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: row;
  padding: 2.5rem 2rem;
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1.5rem;
    gap: 2rem;
  }
`;

export const Container1 = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    width: 100%;
    gap: 1.25rem;
  }
`;

export const Container2 = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    width: 100%;
    gap: 1.25rem;
  }
`;

export const SemiBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray150};
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const SemiTitle = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.gray300};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const SemiTitle2 = styled.h2`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const SemiContent = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  color: ${({ theme }) => theme.colors.gray200};
  line-height: 1.7;
  white-space: pre-line;
  word-break: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
  font-size: 1rem;
  
  a {
    color: ${({ theme }) => theme.colors.black};
    font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
    text-decoration: underline;
    transition: opacity 0.2s ease;
    
    &:hover {
      opacity: 0.7;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 0.9375rem;
    line-height: 1.6;
  }
`;
