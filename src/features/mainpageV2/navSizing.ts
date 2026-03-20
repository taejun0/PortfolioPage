/** 사이드 레일 전체 기본 너비(px). 칸 수로 균등 분배된다. */
export const SIDE_NAV_BASE_PX = 280;

/** 호버/포커스 시 활성 칸에 더해지는 추가 너비(px). */
export const SIDE_NAV_HOVER_EXTRA_PX = 56;

export function splitTotalPxAcrossParts(
  total: number,
  partCount: number,
): number[] {
  if (partCount <= 0) return [];
  const base = Math.floor(total / partCount);
  const remainder = total - base * partCount;
  return Array.from(
    { length: partCount },
    (_, i) => base + (i < remainder ? 1 : 0),
  );
}
