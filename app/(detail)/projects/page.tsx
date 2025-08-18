// app/(detail)/projects/page.tsx
import type { Metadata } from "next";
import ProjectsPage from "@features/projectspage/ProjectsPage";

export const metadata: Metadata = { title: "Projects" };

type Qs = { slug?: string };

export default function Projects({ searchParams }: { searchParams?: Qs }) {
  const slug = searchParams?.slug ?? null;
  return <ProjectsPage initialSlug={slug} />;
}
