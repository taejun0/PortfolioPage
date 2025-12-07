import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  width: 100%;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.white} 0%,
    ${({ theme }) => theme.colors.BG100} 5%
  );
  display: flex;
  flex-direction: row;
  padding: 2.5rem 2rem;
  gap: 2rem;
  
  @media (max-width: 968px) {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    gap: 1.5rem;
  }
`;

export const CategorySelector = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 200px;
  
  @media (max-width: 968px) {
    flex-direction: row;
    overflow-x: auto;
    min-width: 100%;
    padding-bottom: 0.5rem;
    
    &::-webkit-scrollbar {
      height: 4px;
    }
    
    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.gray050};
    }
    
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.gray150};
      border-radius: 2px;
    }
  }
`;

export const CategoryButton = styled(motion.button)<{ selected: boolean }>`
  all: unset;
  ${({ theme }) => theme.fonts.Pretendard};
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.white : "transparent"};
  color: ${({ selected, theme }) =>
    selected ? theme.colors.black : theme.colors.gray200};
  font-weight: ${({ selected, theme }) =>
    selected ? theme.fonts.weights.bold : theme.fonts.weights.semiBold};
  font-size: 0.9375rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  border: 2px solid ${({ selected, theme }) =>
    selected ? theme.colors.gray150 : "transparent"};
  box-shadow: ${({ selected }) =>
    selected ? "0 2px 8px rgba(0, 0, 0, 0.08)" : "none"};

  &:hover {
    background-color: ${({ selected, theme }) =>
      selected ? theme.colors.white : theme.colors.gray050};
    color: ${({ theme }) => theme.colors.black};
  }
  
  @media (max-width: 968px) {
    white-space: nowrap;
    text-align: center;
    min-width: fit-content;
  }
  
  @media (max-width: 768px) {
    padding: 0.875rem 1rem;
    font-size: 0.875rem;
  }
`;

export const ContentWrapper = styled(motion.div)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray150};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h3 {
    ${({ theme }) => theme.fonts.Pretendard};
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.fonts.weights.extraBold};
    color: ${({ theme }) => theme.colors.black};
    margin: 0 0 0.5rem 0;
    letter-spacing: -0.02em;
    
    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  h4 {
    ${({ theme }) => theme.fonts.Pretendard};
    font-size: 1.25rem;
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
    margin: 1.5rem 0 0.75rem 0;
    color: ${({ theme }) => theme.colors.black};
    
    &:first-of-type {
      margin-top: 0;
    }
    
    @media (max-width: 768px) {
      font-size: 1.125rem;
      margin: 1.25rem 0 0.5rem 0;
    }
  }

  ul {
    ${({ theme }) => theme.fonts.Pretendard};
    white-space: pre-line;
    list-style: none;
    padding-left: 0;
    line-height: 1.8;
    margin: 0;
    
    li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.75rem;
      color: ${({ theme }) => theme.colors.gray200};
      font-size: 1rem;
      
      &::before {
        content: "•";
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.black};
        font-weight: ${({ theme }) => theme.fonts.weights.bold};
        font-size: 1.25rem;
      }
    }
    
    @media (max-width: 768px) {
      li {
        font-size: 0.9375rem;
        padding-left: 1.25rem;
      }
    }
  }

  p,
  pre {
    ${({ theme }) => theme.fonts.Pretendard};
    color: ${({ theme }) => theme.colors.gray200};
    white-space: pre-wrap;
    font-size: 1rem;
    line-height: 1.8;
    margin: 0 0 1rem 0;
    
    @media (max-width: 768px) {
      font-size: 0.9375rem;
      line-height: 1.7;
    }
  }
`;
