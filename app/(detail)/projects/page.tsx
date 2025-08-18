// app/(detail)/projects/page.tsx
import type { Metadata } from "next";
import ProjectsPage from "@features/projectspage/ProjectsPage";

export const metadata: Metadata = { title: "Projects" };

type SearchParamsPromise = Promise<
  Record<string, string | string[] | undefined>
>;

export default async function Projects({
  searchParams,
}: {
  searchParams: SearchParamsPromise;
}) {
  const params = await searchParams;

  const raw = params?.slug;
  const slug = Array.isArray(raw) ? raw[0] : raw ?? null;

  return <ProjectsPage initialSlug={slug} />;
}
