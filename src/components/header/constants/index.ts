import { ROUTE_CONSTANTS } from "@constants/routeConstants";

export const HEADER_SITE_TITLE = "Taejun's PortFolio";

export const HEADER_NAV_ITEMS = [
  { route: ROUTE_CONSTANTS.MAIN, label: "Main" },
  { route: ROUTE_CONSTANTS.ABOUT, label: "About" },
  { route: ROUTE_CONSTANTS.SKILLS, label: "Skills" },
  { route: ROUTE_CONSTANTS.PROJECTS, label: "Projects" },
  { route: ROUTE_CONSTANTS.BLOG, label: "Blog" },
] as const;
