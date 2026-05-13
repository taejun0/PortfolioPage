export const PROJECT_FILTER_DEFAULT = "All Projects";

export const PROJECT_FILTER_CATEGORIES: string[] = [
  PROJECT_FILTER_DEFAULT,
  "React",
  "Next.js",
  "Solo",
  "Team",
];

export const PROJECTS_HERO_UI = {
  title: "My Projects",
  subtitle: "제가 지금까지 만들어온 프로젝트를 보실 수 있습니다",
  tagCode: "6 Projects",
  tagCalendar: "4 Tags",
  tagStack: "2024 -",
} as const;

export const PROJECT_DETAIL_MODAL_FIRST_UI = {
  beforeTitle: "Projects",
} as const;

export const PROJECT_DETAIL_SECOND_UI = {
  timeline: "Timeline",
  team: "Team",
  role: "Role",
  github: "Github",
  links: "Links",
} as const;

export const PROJECT_DETAIL_THIRD_UI = {
  tabs: [
    "기술적 의사결정",
    "주요 기능",
    "담당 역할",
    "Challenge & Solution",
  ] as const,
  stackHeading: "기술적 의사결정",
  featureHeading: "주요 기능",
  problemDef: "문제 정의",
  user: "사용자",
  admin: "운영자",
  roleHeading: "담당 역할",
  challengeHeading: "Challenge & Solution",
  problemSituation: "문제 상황",
  solutionApproach: "해결 시도 방법",
  learnings: "알게된 점",
} as const;

export function projectDetailChallengeSummary(
  index: number,
  total: number
): string {
  return `트러블슈팅 회고 (${index + 1} / ${total})`;
}

export const PROJECT_DETAIL_FOUR_UI = {
  cta: "<- View All Projects",
} as const;

export const PROJECT_STACK_LIST_UI = {
  errorPrefix: "에러가 발생했어요:",
  empty: "No projects.",
  featured: "featured",
  viewDetails: "View Details",
  viewDetailsArrow: "==>",
} as const;
