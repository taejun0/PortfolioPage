import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2.5rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    padding: 0 1rem;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
`;

export const Item = styled.div<{ category?: string; $isExpanded?: boolean }>`
  position: relative;
  padding: 2.5rem;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray150};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  min-height: 320px;
  height: auto;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.gray200};
  }

  ${({ $isExpanded }) =>
    $isExpanded &&
    `
    border-color: ${({ theme }) => theme.colors.gray300};
    z-index: 10;
  `}

  @media screen and (max-width: 480px) {
    padding: 2rem;
  }
`;

export const TitleBox = styled.div<{ category?: string }>`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  position: relative;

  svg {
    padding: 0.875rem;
    border-radius: 12px;
    width: 48px;
    height: 48px;
    background: ${({ theme }) => theme.colors.gray050};
    color: ${({ theme }) => theme.colors.black};
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
  }

  ${Item}:hover & svg {
    background: ${({ theme }) => theme.colors.gray150};
  }
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: -0.02em;
`;

export const CategoryBadge = styled(motion.span)<{ category?: string }>`
  display: inline-block;
  padding: 0.375rem 0.875rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  background: ${({ theme }) => theme.colors.gray050};
  color: ${({ theme }) => theme.colors.gray300};
  margin-top: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.gray150};
  transition: all 0.3s ease;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.25rem;
`;

export const Tag = styled(motion.span)`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray300};
  font-size: 0.8125rem;
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  padding: 0.5rem 0.875rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray150};
  transition: all 0.3s ease;
  display: inline-block;
  cursor: default;

  &:hover {
    border-color: ${({ theme }) => theme.colors.gray200};
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Text = styled(motion.div)<{ $expanded?: boolean }>`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  color: ${({ theme }) => theme.colors.gray300};
  line-height: 1.8;
  white-space: pre-line;
  font-size: 0.9375rem;

  ${({ $expanded }) =>
    $expanded
      ? `
    display: block;
  `
      : `
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `}

  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;
