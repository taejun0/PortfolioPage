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
  border: 1.5px solid ${({ theme }) => theme.colors.gray150};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  min-height: 320px;
  height: auto;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px
      ${({ category }) =>
        category === "Frontend"
          ? "rgba(255, 107, 53, 0.15)"
          : category === "Backend"
          ? "rgba(74, 144, 226, 0.15)"
          : category === "Styling"
          ? "rgba(255, 107, 157, 0.15)"
          : category === "Testing"
          ? "rgba(78, 205, 196, 0.15)"
          : category === "DevOps"
          ? "rgba(149, 225, 211, 0.15)"
          : "rgba(0, 0, 0, 0.1)"};
    border-color: ${({ category, theme }) =>
      category === "Frontend"
        ? "#FF6B35"
        : category === "Backend"
        ? "#4A90E2"
        : category === "Styling"
        ? "#FF6B9D"
        : category === "Testing"
        ? "#4ECDC4"
        : category === "DevOps"
        ? "#95E1D3"
        : theme.colors.gray200};
    background: ${({ category }) =>
      category === "Frontend"
        ? "linear-gradient(135deg, #FFFFFF 0%, #FFF5F0 100%)"
        : category === "Backend"
        ? "linear-gradient(135deg, #FFFFFF 0%, #F0F7FF 100%)"
        : category === "Styling"
        ? "linear-gradient(135deg, #FFFFFF 0%, #FFF0F5 100%)"
        : category === "Testing"
        ? "linear-gradient(135deg, #FFFFFF 0%, #F0FFFE 100%)"
        : category === "DevOps"
        ? "linear-gradient(135deg, #FFFFFF 0%, #F0FFF8 100%)"
        : "#FFFFFF"};
  }

  ${({ $isExpanded }) =>
    $isExpanded &&
    `
    transform: scale(1.03);
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.12);
    z-index: 10;
  `}

  &:active {
    transform: translateY(-4px) scale(1.01);
  }

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
    padding: 1rem;
    border-radius: 16px;
    width: 56px;
    height: 56px;
    background: ${({ category }) =>
      category === "Frontend"
        ? "linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)"
        : category === "Backend"
        ? "linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)"
        : category === "Styling"
        ? "linear-gradient(135deg, #FF6B9D 0%, #FF8FA3 100%)"
        : category === "Testing"
        ? "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)"
        : category === "DevOps"
        ? "linear-gradient(135deg, #95E1D3 0%, #5EC8B7 100%)"
        : "linear-gradient(135deg, #E0E0E0 0%, #BDBDBD 100%)"};
    color: white;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 4px 12px
      ${({ category }) =>
        category === "Frontend"
          ? "rgba(255, 107, 53, 0.25)"
          : category === "Backend"
          ? "rgba(74, 144, 226, 0.25)"
          : category === "Styling"
          ? "rgba(255, 107, 157, 0.25)"
          : category === "Testing"
          ? "rgba(78, 205, 196, 0.25)"
          : category === "DevOps"
          ? "rgba(149, 225, 211, 0.25)"
          : "rgba(0, 0, 0, 0.1)"};
    position: relative;
    z-index: 1;

    &::after {
      content: "";
      position: absolute;
      inset: -2px;
      border-radius: 16px;
      padding: 2px;
      background: ${({ category }) =>
        category === "Frontend"
          ? "linear-gradient(135deg, #FF6B35, #F7931E)"
          : category === "Backend"
          ? "linear-gradient(135deg, #4A90E2, #357ABD)"
          : category === "Styling"
          ? "linear-gradient(135deg, #FF6B9D, #FF8FA3)"
          : category === "Testing"
          ? "linear-gradient(135deg, #4ECDC4, #44A08D)"
          : category === "DevOps"
          ? "linear-gradient(135deg, #95E1D3, #5EC8B7)"
          : "linear-gradient(135deg, #E0E0E0, #BDBDBD)"};
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  }

  ${Item}:hover & svg {
    transform: scale(1.15) rotate(8deg);
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
  }

  ${Item}:hover & svg::after {
    opacity: 1;
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
  padding: 0.375rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  background: ${({ category }) =>
    category === "Frontend"
      ? "linear-gradient(135deg, rgba(255, 107, 53, 0.15) 0%, rgba(247, 147, 30, 0.15) 100%)"
      : category === "Backend"
      ? "linear-gradient(135deg, rgba(74, 144, 226, 0.15) 0%, rgba(53, 122, 189, 0.15) 100%)"
      : category === "Styling"
      ? "linear-gradient(135deg, rgba(255, 107, 157, 0.15) 0%, rgba(255, 143, 163, 0.15) 100%)"
      : category === "Testing"
      ? "linear-gradient(135deg, rgba(78, 205, 196, 0.15) 0%, rgba(68, 160, 141, 0.15) 100%)"
      : category === "DevOps"
      ? "linear-gradient(135deg, rgba(149, 225, 211, 0.15) 0%, rgba(94, 200, 183, 0.15) 100%)"
      : "rgba(168, 168, 168, 0.1)"};
  color: ${({ category }) =>
    category === "Frontend"
      ? "#FF6B35"
      : category === "Backend"
      ? "#4A90E2"
      : category === "Styling"
      ? "#FF6B9D"
      : category === "Testing"
      ? "#4ECDC4"
      : category === "DevOps"
      ? "#5EC8B7"
      : "#666"};
  margin-top: 0.75rem;
  border: 1.5px solid
    ${({ category }) =>
      category === "Frontend"
        ? "rgba(255, 107, 53, 0.2)"
        : category === "Backend"
        ? "rgba(74, 144, 226, 0.2)"
        : category === "Styling"
        ? "rgba(255, 107, 157, 0.2)"
        : category === "Testing"
        ? "rgba(78, 205, 196, 0.2)"
        : category === "DevOps"
        ? "rgba(149, 225, 211, 0.2)"
        : "rgba(168, 168, 168, 0.2)"};
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 0.6875rem;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.25rem;
`;

export const Tag = styled(motion.span)`
  background: ${({ theme }) => theme.colors.gray050};
  color: ${({ theme }) => theme.colors.gray300};
  font-size: 0.8125rem;
  font-weight: ${({ theme }) => theme.fonts.weights.semiBold};
  padding: 0.5rem 0.875rem;
  border-radius: 12px;
  border: 1.5px solid ${({ theme }) => theme.colors.gray150};
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: inline-block;
  cursor: default;

  &:hover {
    background: ${({ theme }) => theme.colors.gray150};
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.colors.gray200};
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
