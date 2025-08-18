// app/(detail)/projects/page.tsx
import type { Metadata } from "next";
import ProjectsPage from "@features/projectspage/ProjectsPage";

export const metadata: Metadata = { title: "Projects" };

type SearchParams = Record<string, string | string[] | undefined>;

export default function Projects({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const raw = searchParams?.slug;
  const slug = Array.isArray(raw) ? raw[0] : raw ?? null;
  return <ProjectsPage initialSlug={slug} />;
}
