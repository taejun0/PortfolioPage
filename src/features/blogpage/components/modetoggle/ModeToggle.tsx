"use client";

import * as S from "./ModeToggle.styled";
import { motion } from "framer-motion";
import {
  HiOutlineSquares2X2,
  HiOutlineRectangleStack,
} from "react-icons/hi2";
import { trackBlogListMode } from "@lib/analytics/events";
import { BLOG_MODE_LABELS } from "@constants";

interface ModeToggleProps {
  mode: "all" | "series";
  onModeChange: (mode: "all" | "series") => void;
}

const ModeToggle = ({ mode, onModeChange }: ModeToggleProps) => {
  return (
    <S.Wrapper>
      <S.ToggleContainer>
        <S.ToggleButton
          $active={mode === "all"}
          onClick={() => {
            trackBlogListMode("all");
            onModeChange("all");
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <HiOutlineSquares2X2 />
          <span>{BLOG_MODE_LABELS.all}</span>
        </S.ToggleButton>
        <S.ToggleButton
          $active={mode === "series"}
          onClick={() => {
            trackBlogListMode("series");
            onModeChange("series");
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <HiOutlineRectangleStack />
          <span>{BLOG_MODE_LABELS.series}</span>
        </S.ToggleButton>
      </S.ToggleContainer>
    </S.Wrapper>
  );
};

export default ModeToggle;
