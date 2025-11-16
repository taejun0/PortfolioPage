import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Bar = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0.5rem 0;
`;

const Button = styled(motion.button)<{ selected: boolean }>`
  padding: 0.75rem 1.75rem;
  border-radius: 28px;
  border: 2px solid
    ${({ theme, selected }) =>
      selected ? theme.colors.black : theme.colors.gray150};
  background: ${({ theme, selected }) =>
    selected
      ? "linear-gradient(135deg, #000000 0%, #333333 100%)"
      : "linear-gradient(135deg, #ffffff 0%, #f8f8f8 100%)"};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.white : theme.colors.gray300};
  cursor: pointer;
  font-weight: ${({ theme, selected }) =>
    selected ? theme.fonts.weights.bold : theme.fonts.weights.semiBold};
  font-size: 0.9375rem;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
  box-shadow: ${({ selected }) =>
    selected
      ? "0 4px 12px rgba(0, 0, 0, 0.15)"
      : "0 2px 4px rgba(0, 0, 0, 0.05)"};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.black};
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    background: ${({ theme, selected }) =>
      selected
        ? "linear-gradient(135deg, #000000 0%, #333333 100%)"
        : "linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%)"};
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
  }
`;

interface Props {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const FilterBar = ({ categories, selected, onSelect }: Props) => {
  return (
    <Bar>
      {categories.map((cat, index) => (
        <Button
          key={cat}
          selected={selected === cat}
          onClick={() => onSelect(cat)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          {cat}
        </Button>
      ))}
    </Bar>
  );
};

export default FilterBar;
