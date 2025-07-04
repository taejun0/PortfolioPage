// components/ScrollIndicator.tsx
import { useSectionObserver } from "@hooks/useSectionObserver";
import styled from "@emotion/styled";

const sections = [
  { id: "", label: "Main" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
];

const ScrollIndicator = () => {
  const activeId = useSectionObserver(sections.map((s) => s.id));

  return (
    <Wrapper>
      {sections.map(({ id, label }) => {
        const isActive = activeId === id || (id === "" && activeId === "");

        return (
          <a href={`#${id}`} key={id}>
            <Dot
              data-label={label}
              className={isActive ? "active" : ""}
              data-main={id === "" ? "true" : undefined}
            />
          </a>
        );
      })}
    </Wrapper>
  );
};

export default ScrollIndicator;

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 999;
`;

const Dot = styled.div`
  width: 6px;
  height: 28px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray200};
  opacity: 0.2;
  transition: all 0.3s;
  position: relative;

  &.active {
    background-color: ${({ theme }) => theme.colors.black};
    opacity: 1;
    box-shadow: 0 0 6px white;
  }

  &:hover::after {
    content: attr(data-label);
    position: absolute;
    right: 20px;
    top: 50%;

    transform: translateY(-50%);
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    padding: 4px 8px;
    font-size: 0.75rem;
    border-radius: 6px;
    white-space: nowrap;
  }
`;
