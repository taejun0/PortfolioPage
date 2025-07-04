import { useEffect, useState } from "react";

export const useSectionObserver = (sectionIds: string[]) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);

        if (window.scrollY === 0) {
          setActiveId("");
          return;
        }

        if (visibleSections.length === 0) return;

        const topMost = visibleSections.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        )[0];

        const id = topMost.target.getAttribute("id");
        if (id !== null && id !== activeId) {
          setActiveId(id);
        }
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0.1,
      }
    );

    sectionIds
      .filter((id) => id)
      .forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

    const onScroll = () => {
      if (window.scrollY === 0 && activeId !== "") {
        setActiveId("");
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [sectionIds, activeId]);

  return activeId;
};
