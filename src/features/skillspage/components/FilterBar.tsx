import styled from "@emotion/styled";

const Bar = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Button = styled.button<{ selected: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  background: ${({ theme, selected }) =>
    selected ? theme.colors.black : theme.colors.white};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.white : theme.colors.black};
  cursor: pointer;
`;

interface Props {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const FilterBar = ({ categories, selected, onSelect }: Props) => {
  return (
    <Bar>
      {categories.map((cat) => (
        <Button
          key={cat}
          selected={selected === cat}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </Button>
      ))}
    </Bar>
  );
};

export default FilterBar;
