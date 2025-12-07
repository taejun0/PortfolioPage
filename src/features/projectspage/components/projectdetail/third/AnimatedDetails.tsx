"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";
import { HiChevronDown } from "react-icons/hi2";

interface Props {
  summary: string;
  children: React.ReactNode;
}

const Summary = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  
  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }
`;

const Wrapper = styled(motion.div)<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray050};
  padding: 1.25rem 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme, open }) =>
    open ? theme.colors.gray150 : theme.colors.gray100};
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 1rem;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.gray200};
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }
  
  ${Summary} svg {
    transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
    color: ${({ theme }) => theme.colors.gray300};
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray150};
  
  h4 {
    ${({ theme }) => theme.fonts.Pretendard};
    font-size: 1.125rem;
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
    margin: 1rem 0 0.5rem 0;
    color: ${({ theme }) => theme.colors.black};
    
    &:first-of-type {
      margin-top: 0;
    }
  }
  
  p {
    ${({ theme }) => theme.fonts.Pretendard};
    color: ${({ theme }) => theme.colors.gray200};
    line-height: 1.7;
    margin-bottom: 1rem;
    font-size: 0.9375rem;
  }
`;

const AnimatedDetails = ({ summary, children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper
      open={open}
      onClick={() => setOpen((prev) => !prev)}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <Summary>
        <span>{summary}</span>
        <HiChevronDown />
      </Summary>
      <AnimatePresence initial={false}>
        {open && (
          <ContentWrapper
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {children}
          </ContentWrapper>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default AnimatedDetails;
