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
  border: 2px solid ${({ theme, selected }) =>
    selected ? theme.colors.gray300 : theme.colors.gray150};
  background: ${({ theme, selected }) =>
    selected ? theme.colors.gray050 : theme.colors.white};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.black : theme.colors.gray300};
  cursor: pointer;
  font-weight: ${({ theme, selected }) =>
    selected ? theme.fonts.weights.bold : theme.fonts.weights.semiBold};
  font-size: 0.9375rem;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: visible;
  box-shadow: ${({ selected }) =>
    selected
      ? "0 4px 12px rgba(0, 0, 0, 0.1)"
      : "0 2px 4px rgba(0, 0, 0, 0.05)"};

  &:hover {
    border-color: ${({ theme, selected }) =>
      selected ? theme.colors.gray300 : theme.colors.gray200};
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
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
