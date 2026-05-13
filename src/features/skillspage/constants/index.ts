export { TECH_STACK_ITEMS } from "./TechStackDefinitions";

export const SKILLS_FILTER_ALL = "All" as const;

export const SKILLS_FILTER_CATEGORIES: string[] = [
  SKILLS_FILTER_ALL,
  "Frontend",
  "Backend",
  "Styling",
  "Testing",
  "DevOps",
  "Tools",
];

export const SKILLS_HERO_UI = {
  title: "Skills",
  subtitle: "제가 기술들을 어떻게 사용하였는지 보실 수 있습니다",
} as const;
