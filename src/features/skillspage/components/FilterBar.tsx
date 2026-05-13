import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { memo, useState } from "react";

const Bar = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0.5rem 0;
`;

const Button = styled(motion.button)<{ selected: boolean }>`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: 1px solid ${({ theme, selected }) =>
    selected ? theme.colors.gray300 : theme.colors.gray150};
  background: ${({ theme, selected }) =>
    selected ? theme.colors.white : theme.colors.white};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.black : theme.colors.gray300};
  cursor: pointer;
  font-weight: ${({ theme, selected }) =>
    selected ? theme.fonts.weights.semiBold : theme.fonts.weights.medium};
  font-size: 0.9375rem;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    border-color: ${({ theme }) => theme.colors.gray200};
    color: ${({ theme }) => theme.colors.black};
  }
`;

interface Props {
  categories: readonly string[] | string[];
  defaultCategory: string;
  onSelect: (category: string) => void;
}

function FilterBarInner({ categories, defaultCategory, onSelect }: Props) {
  const [selected, setSelected] = useState(defaultCategory);

  return (
    <Bar>
      {categories.map((cat, index) => (
        <Button
          key={cat}
          selected={selected === cat}
          onClick={() => {
            if (cat === selected) return;
            setSelected(cat);
            onSelect(cat);
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          {cat}
        </Button>
      ))}
    </Bar>
  );
}

const FilterBar = memo(FilterBarInner);

export default FilterBar;
