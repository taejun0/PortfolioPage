import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-height: 100dvh;
  padding-top: 59px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0rem 2rem 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    gap: 1.5rem;
  }
`;

export const BackButton = styled.button`
  ${({ theme }) => theme.fonts.Pretendard};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray300};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 0;
  transition: color 0.2s ease;
  line-height: 1.5;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    vertical-align: middle;
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
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.gray050};
  padding: 0.25rem 0.625rem;
  border-radius: 12px;
  border: none;
  display: inline-flex;
  align-items: center;
  transition: background 0.2s ease;

  &::before {
    content: "#";
    color: ${({ theme }) => theme.colors.gray300};
    margin-right: 0.125rem;
    font-weight: ${({ theme }) => theme.fonts.weights.regular};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.gray100};
  }
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
  margin: 1.5rem 0 1rem;
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
  margin: 1.5rem 0;
`;

export const MarkdownStrong = styled.strong`
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.black};
`;

export const MarkdownEm = styled.em`
  font-style: italic;
`;

// 목차 스타일
export const TOCContainer = styled.div`
  margin: 0;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray150};

  @media (max-width: 768px) {
    margin: 0;
    padding-bottom: 1.25rem;
  }
`;

export const TOCTitle = styled.h3`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.gray300};
  margin: 0 0 0.875rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const TOCList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

interface TOCItemProps {
  $level: number;
  $active: boolean;
}

export const TOCItem = styled.li<TOCItemProps>`
  ${({ theme }) => theme.fonts.Pretendard};
  font-size: 0.875rem;
  color: ${({ theme, $active }) =>
    $active ? theme.colors.black : theme.colors.gray300};
  cursor: pointer;
  padding: 0.25rem 0;
  padding-left: ${({ $level }) => {
    const calculatedPadding = ($level - 1) * 1;
    return `${calculatedPadding}rem`;
  }};
  transition: color 0.2s ease;
  font-weight: ${({ $active, theme }) =>
    $active ? theme.fonts.weights.medium : theme.fonts.weights.regular};

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }

  @media (max-width: 768px) {
    font-size: 0.8125rem;
    padding-left: ${({ $level }) => {
      const calculatedPadding = ($level - 1) * 0.875;
      return `${calculatedPadding}rem`;
    }};
  }
`;

// 토글 스타일
export const ToggleContainer = styled.div`
  margin: 1.5rem 0;
  border: 1px solid ${({ theme }) => theme.colors.gray150};
  border-radius: 8px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
`;

export const ToggleHeader = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.gray050};
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.gray100};
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.colors.gray300};
    transition: transform 0.2s ease;
  }

  @media (max-width: 768px) {
    padding: 0.875rem 1rem;
    font-size: 0.9375rem;
  }
`;

export const ToggleContent = styled.div`
  padding: 1.25rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray150};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

