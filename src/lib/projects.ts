import "server-only";
import { stacks, ProjectsStack } from "./projectData";

const toSlug = (name: string) =>
  encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"));

export async function getProjects(category?: string): Promise<ProjectsStack[]> {
  const cat = !category || category === "All Projects" ? "ALL" : category;
  const withSlug = stacks.map((s) => ({
    ...s,
    slug: s.slug ?? toSlug(s.name),
  }));
  if (cat === "ALL") return withSlug;
  return withSlug.filter((p) => p.categories.includes(cat));
}

export async function getProjectBySlug(
  slug: string
): Promise<ProjectsStack | null> {
  const all = await getProjects();
  return all.find((p) => p.slug! === slug) ?? null;
}
