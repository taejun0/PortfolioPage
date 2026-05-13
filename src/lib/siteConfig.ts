/** Canonical site URL (no trailing slash). Used for metadata, OG, JSON-LD. */
export const SITE_ORIGIN = "https://www.taejun0-portfolio.site" as const;

export const SITE_NAME = "오태준 포트폴리오";
export const AUTHOR_NAME = "오태준";

export const DEFAULT_SITE_DESCRIPTION =
  "프론트엔드 개발자 오태준의 프로젝트, 스킬, 기술 블로그를 소개하는 포트폴리오 사이트입니다.";

/** Default OG/Twitter image path (relative to SITE_ORIGIN). */
export const DEFAULT_OG_IMAGE_PATH = "/images/projectsImage/PortFolio.png";

export const defaultOgImageUrl = () => `${SITE_ORIGIN}${DEFAULT_OG_IMAGE_PATH}`;
