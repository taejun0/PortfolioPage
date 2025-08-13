// app/(detail)/projects/page.tsx
import ProjectsPage from "@features/projectspage/ProjectsPage";

type Qs = { slug?: string };

export default async function Projects({
  searchParams,
}: {
  searchParams: Promise<Qs>;
}) {
  const { slug } = await searchParams;

  return <ProjectsPage initialSlug={slug ?? null} />;
}
