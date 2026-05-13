export const BLOG_DATE_FORMAT = "yyyy년 M월 d일" as const;

export const BLOG_MODE_LABELS = {
  all: "전체 글",
  series: "시리즈",
} as const;

export const BLOG_LIST_UI = {
  emptyAll: "작성된 글이 없습니다.",
  emptySeries: "시리즈로 분류된 글이 없습니다.",
  readMore: "Read More",
  seriesCountSuffix: "개",
} as const;

export const BLOG_HERO_UI = {
  title: "My Blog",
  subtitle: "제가 작성한 기술 블로그 글을 모아볼 수 있습니다",
  tagTech: "Tech Blog",
  tagDictionary: "Dictionary",
  tagYear: "2024 -",
} as const;

export const BLOG_DETAIL_UI = {
  dateFormat: BLOG_DATE_FORMAT,
  markdownToggleFallback: "토글",
  backToList: "목록으로",
  velogBadge: "Velog",
  velogCta: "Velog에서 보기 →",
  tocTitle: "목차",
} as const;

/** Velog 이전 글 안내 (본문 상단 블록) */
export const blogVelogPostNoticeWithDate = (velogDate: string) =>
  `${velogDate} 까지의 기술 블로그는 Velog에서 작성되었습니다.`;

export const blogVelogPostNoticeNoDate =
  "까지의 기술 블로그는 Velog에서 작성되었습니다.";

export const BLOG_VELOG_NOTICE_UI = {
  withCutoff: " 까지의 기술 블로그는 Velog에서 작성되었습니다. ",
  legacy: "이전의 기술 블로그는 Velog에서 작성되었습니다. ",
  link: "Velog에서 보기 →",
} as const;
