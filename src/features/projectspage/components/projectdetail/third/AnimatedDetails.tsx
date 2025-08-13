"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";

interface Props {
  summary: string;
  children: React.ReactNode;
}

const Summary = styled.div`
  font-weight: 600;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.BG100};
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.BG100};
  cursor: pointer;
`;

const AnimatedDetails = ({ summary, children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper onClick={() => setOpen((prev) => !prev)}>
      <Summary>{summary}</Summary>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default AnimatedDetails;
