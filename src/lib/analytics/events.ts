import { sendGtagEvent } from "./gtag";

/** 네비게이션(헤더) 클릭 */
export function trackNavClick(
  section: string,
  href: string,
  location?: "header_desktop" | "header_mobile" | "header_logo"
): void {
  sendGtagEvent("nav_click", {
    section,
    href,
    ...(location ? { nav_location: location } : {}),
  });
}

/** 블로그 목록에서 글 카드 클릭 */
export function trackBlogPostCardClick(slug: string, title: string): void {
  sendGtagEvent("blog_post_card_click", { slug, title });
}

/** 블로그 목록 보기 모드 전환 */
export function trackBlogListMode(mode: "all" | "series"): void {
  sendGtagEvent("blog_list_mode", { mode });
}

/** 글 상세 진입 후 클라이언트에서 한 번(조회 의도) */
export function trackBlogPostEngage(slug: string, title: string): void {
  sendGtagEvent("blog_post_engage", { slug, title });
}

/** 블로그에서 목록으로 돌아가기 */
export function trackBlogBackToList(): void {
  sendGtagEvent("blog_back_to_list", {});
}

/** 프로젝트 카테고리 필터 */
export function trackProjectFilter(category: string): void {
  sendGtagEvent("project_filter", { category });
}

/** 프로젝트 카드 클릭 */
export function trackProjectCardClick(payload: {
  slug: string;
  name: string;
  list_category: string;
}): void {
  sendGtagEvent("project_card_click", payload);
}

/** 프로젝트 상세(모달)가 URL 기준으로 열림 */
export function trackProjectDetailOpen(slug: string): void {
  sendGtagEvent("project_detail_open", { slug });
}

/** 프로젝트 상세에서 외부 링크 클릭 */
export function trackProjectOutboundLink(url: string, host: string): void {
  sendGtagEvent("project_outbound_link", { link_url: url, host });
}

/** Velog 안내 등 외부 프로필 링크 */
export function trackOutboundProfile(
  destination: string,
  label: string
): void {
  sendGtagEvent("outbound_profile", { destination, label });
}
