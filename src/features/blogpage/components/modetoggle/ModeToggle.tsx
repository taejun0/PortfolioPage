import * as S from "./ModeToggle.styled";
import { motion } from "framer-motion";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { FaFolder } from "react-icons/fa6";

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
          <HiSquare3Stack3D />
          <span>전체글</span>
        </S.ToggleButton>
        <S.ToggleButton
          $active={mode === "series"}
          onClick={() => onModeChange("series")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaFolder />
          <span>폴더</span>
        </S.ToggleButton>
      </S.ToggleContainer>
    </S.Wrapper>
  );
};

export default ModeToggle;

