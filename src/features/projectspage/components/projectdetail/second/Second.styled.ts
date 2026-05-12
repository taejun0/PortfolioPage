import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
  gap: 2.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem;
    gap: 2rem;
  }
`;

export const Top = styled.div`
  width: 100%;
`;

export const Info = styled.div`
  min-width: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
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

export const LinkPreviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const LinkPreviewItem = styled.a`
  ${({ theme }) => theme.fonts.Pretendard};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.gray150};
  background: ${({ theme }) => theme.colors.gray050};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  font-size: 0.9375rem;
  text-decoration: none;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  span {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  }

  svg {
    flex-shrink: 0;
    width: 1.125rem;
    height: 1.125rem;
    color: ${({ theme }) => theme.colors.gray300};
    transition: color 0.2s ease;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.gray200};
    box-shadow: 0 2px 10px rgba(13, 13, 13, 0.06);

    svg {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;
