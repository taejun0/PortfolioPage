// app/(detail)/projects/page.tsx
import type { Metadata } from "next";
import ProjectsPage from "@features/projectspage/ProjectsPage";

export const metadata: Metadata = { title: "Projects" };

type Qs = { slug?: string };

export default async function Projects({
  searchParams,
}: {
  searchParams: Promise<Qs>;
}) {
  const { slug } = await searchParams;

  return <ProjectsPage initialSlug={slug ?? null} />;
}
