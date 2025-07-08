import styled from "@emotion/styled";

export const Grid = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  position: relative;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray150};
  background-color: ${({ theme }) => theme.colors.white};

  width: 30%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TitleBox = styled.div<{ category?: string }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    padding: 0.375rem;
    border-radius: 4px;
    width: 30px;
    height: 30px;
    background-color: ${({ category, theme }) =>
      category === "Frontend"
        ? theme.colors.orange100
        : category === "Backend"
        ? theme.colors.blue100
        : category === "Styling"
        ? theme.colors.pink100
        : category === "Testing"
        ? theme.colors.green100
        : theme.colors.gray150};
  }
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-size: 1.375rem;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.5rem;
`;

export const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors.gray150};
  color: ${({ theme }) => theme.colors.gray300};
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  padding: 4px 8px;
  border-radius: 12px;
`;

export const Text = styled.div<{ $expanded?: boolean }>`
  ${({ theme }) => theme.fonts.Pretendard};
  font-weight: ${({ theme }) => theme.fonts.weights.light};
  color: ${({ theme }) => theme.colors.gray200};

  line-height: 1.6;
  white-space: pre-line;

  ${({ $expanded }) =>
    $expanded
      ? `
    display: block;
  `
      : `
    display: -webkit-box;
    -webkit-line-clamp: 2; // ✨ 2줄까지 보이기
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `}

  transition: all 0.3s ease;
`;

export const ToggleButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  padding: 6px 12px;
  font-size: 0.85rem;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 6px;
  cursor: pointer;

  transition: all 0.2s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray150};
    transform: translateY(-1px);
  }

  svg {
    font-size: 1rem;
  }
`;
