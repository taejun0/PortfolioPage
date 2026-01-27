import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-height: 100dvh;
  padding-top: 59px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    gap: 1.5rem;
  }
`;

export const BackButton = styled.button`
  ${({ theme }) => theme.fonts.Pretendard};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray300};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 0;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.3;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const VelogBadge = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-size: 0.875rem;
  background: ${({ theme }) => theme.colors.blue100};
  color: ${({ theme }) => theme.colors.black};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  white-space: nowrap;
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray150};
`;

export const Date = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray300};
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tag = styled.span`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.gray300};
  background: ${({ theme }) => theme.colors.gray050};
  padding: 0.375rem 0.75rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray150};
`;

export const VelogNotice = styled.div`
  background: ${({ theme }) => theme.colors.blue100};
  border: 1px solid ${({ theme }) => theme.colors.gray150};
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const VelogNoticeText = styled.p`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  line-height: 1.6;
`;

export const VelogLink = styled.a`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: underline;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const Content = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Markdown 스타일
export const MarkdownH1 = styled.h1`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
  font-size: 2.25rem;
  margin: 2rem 0 1rem;
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`;

export const MarkdownH2 = styled.h2`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-size: 1.875rem;
  margin: 1.75rem 0 0.875rem;
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.625rem;
  }
`;

export const MarkdownH3 = styled.h3`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-size: 1.5rem;
  margin: 1.5rem 0 0.75rem;
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.375rem;
  }
`;

export const MarkdownH4 = styled.h4`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-size: 1.25rem;
  margin: 1.25rem 0 0.625rem;
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const MarkdownP = styled.p`
  margin: 1rem 0;
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.8;
`;

export const MarkdownUl = styled.ul`
  margin: 1rem 0;
  padding-left: 2rem;
  list-style-type: disc;
`;

export const MarkdownOl = styled.ol`
  margin: 1rem 0;
  padding-left: 2rem;
  list-style-type: decimal;
`;

export const MarkdownLi = styled.li`
  margin: 0.5rem 0;
  line-height: 1.8;
`;

export const MarkdownCodeBlock = styled.code`
  ${({ theme }) => theme.fonts.Pretendard};
  display: block;
  background: ${({ theme }) => theme.colors.gray050};
  border: 1px solid ${({ theme }) => theme.colors.gray150};
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  overflow-x: auto;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.black};
`;

export const MarkdownInlineCode = styled.code`
  ${({ theme }) => theme.fonts.Pretendard};
  background: ${({ theme }) => theme.colors.gray050};
  border: 1px solid ${({ theme }) => theme.colors.gray150};
  border-radius: 4px;
  padding: 0.125rem 0.375rem;
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.black};
`;

export const MarkdownPre = styled.pre`
  margin: 1rem 0;
  overflow-x: auto;
`;

export const MarkdownBlockquote = styled.blockquote`
  border-left: 4px solid ${({ theme }) => theme.colors.gray200};
  padding-left: 1rem;
  margin: 1rem 0;
  color: ${({ theme }) => theme.colors.gray300};
  font-style: italic;
`;

export const MarkdownLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const MarkdownImg = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1.5rem auto;
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.gray150};
`;

export const MarkdownHr = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.gray150};
  margin: 2rem 0;
`;

export const MarkdownStrong = styled.strong`
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.black};
`;

export const MarkdownEm = styled.em`
  font-style: italic;
`;

