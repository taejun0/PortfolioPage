// app/(detail)/skills/page.tsx
import type { Metadata } from "next";
import SkillsPage from "@features/skillspage/SkillsPage";

export const metadata: Metadata = { title: "Skills" };

export default function Skills() {
  return <SkillsPage />;
}
