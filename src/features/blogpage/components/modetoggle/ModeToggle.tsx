import * as S from "./ModeToggle.styled";
import { motion } from "framer-motion";
import {
  HiOutlineSquares2X2,
  HiOutlineRectangleStack,
} from "react-icons/hi2";

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
          onClick={() => onModeChange("all")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <HiOutlineSquares2X2 />
          <span>전체 글</span>
        </S.ToggleButton>
        <S.ToggleButton
          $active={mode === "series"}
          onClick={() => onModeChange("series")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <HiOutlineRectangleStack />
          <span>시리즈</span>
        </S.ToggleButton>
      </S.ToggleContainer>
    </S.Wrapper>
  );
};

export default ModeToggle;

