/**
 * UI·라우트 상수 단일 진입점.
 * 세부 정의는 각 페이지/기능의 `constants/` 폴더에서 re-export 합니다.
 */
export { ROUTE_CONSTANTS } from "./routeConstants";

export {
  HEADER_SITE_TITLE,
  HEADER_NAV_ITEMS,
} from "../components/header/constants";

export { FOOTER_UI } from "../components/footer/constants";

export {
  BLOG_DATE_FORMAT,
  BLOG_MODE_LABELS,
  BLOG_LIST_UI,
  BLOG_HERO_UI,
  BLOG_DETAIL_UI,
  BLOG_VELOG_NOTICE_UI,
  blogVelogPostNoticeWithDate,
  blogVelogPostNoticeNoDate,
} from "../features/blogpage/constants";

export {
  PROJECT_FILTER_DEFAULT,
  PROJECT_FILTER_CATEGORIES,
  PROJECTS_HERO_UI,
  PROJECT_DETAIL_MODAL_FIRST_UI,
  PROJECT_DETAIL_SECOND_UI,
  PROJECT_DETAIL_THIRD_UI,
  projectDetailChallengeSummary,
  PROJECT_DETAIL_FOUR_UI,
  PROJECT_STACK_LIST_UI,
} from "../features/projectspage/constants";

export { ABOUT_FIRST_UI } from "../features/aboutpage/constants";

export {
  MAIN_FEATURED_PROJECTS,
  MAIN_FIRST_PAGE_UI,
  MAIN_SIX_PAGE_UI,
  MAIN_FOUR_PAGE_UI,
} from "../features/mainpage/constants";

export {
  SKILLS_FILTER_ALL,
  SKILLS_FILTER_CATEGORIES,
  SKILLS_HERO_UI,
  TECH_STACK_ITEMS,
} from "../features/skillspage/constants";
