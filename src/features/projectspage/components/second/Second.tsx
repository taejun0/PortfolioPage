import * as S from "./Second.styled";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import FilterBar from "../FilterBar";
import ProjectStackList from "../projectstacklist/ProjectStackList";
import ProjectDetail from "../projectdetail/ProjectDetail";

const categories = ["All Projects", "React", "Next.js", "Solo", "Team"];

const Second = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (typeof slug === "string") {
      setSelectedSlug(slug);
    } else {
      setSelectedSlug(null);
    }
  }, [slug]);

  const openProject = (slug: string) => {
    router.push(`/projects?slug=${slug}`, undefined, { shallow: true });
  };

  const closeProject = () => {
    setSelectedSlug(null);
    router.push("/projects", undefined, { shallow: true });
  };

  return (
    <S.Wrapper>
      <FilterBar
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <ProjectStackList selectedCategory={selectedCategory} />
      {selectedSlug && (
        <ProjectDetail slug={selectedSlug} onClose={closeProject} />
      )}
    </S.Wrapper>
  );
};

export default Second;
