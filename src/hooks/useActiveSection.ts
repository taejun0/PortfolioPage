"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Options = {
  /** 내부 스크롤 컨테이너 선택자 (없으면 window) */
  rootSelector?: string;
  /** 고정 헤더 높이(px) */
  offsetTop?: number;
  /** 중심선 비율 (0~1, default: 0.35 = 화면 위쪽 35%) */
  activeRatio?: number;
  /** 맨 위일 때 활성화할 섹션 id */
  topId?: string;
};

/**
 * 긴 섹션에서도 안정적인 active 감지 훅.
 * 스크롤 방향에 관계없이 "뷰포트 중심선"에 가장 가까운 섹션을 활성화합니다.
 */
export function useActiveSection(sectionIds: string[], opts: Options = {}) {
  const {
    rootSelector,
    offsetTop = 0,
    activeRatio = 0.35,
    topId = sectionIds[0] ?? "",
  } = opts;

  const [activeId, setActiveId] = useState(topId);
  const activeRef = useRef(activeId);
  activeRef.current = activeId;

  const root = useMemo(
    () =>
      typeof document !== "undefined" && rootSelector
        ? (document.querySelector(rootSelector) as HTMLElement | null)
        : null,
    [rootSelector]
  );

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (els.length === 0) return;

    const getScrollTop = () => (root ? root.scrollTop : window.scrollY);
    const getViewportH = () => (root ? root.clientHeight : window.innerHeight);

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const top = getScrollTop();
        const vh = getViewportH();
        const centerY = offsetTop + vh * activeRatio;

        // 화면 중심선과 가장 가까운 섹션 찾기
        let nearestId = topId;
        let nearestDist = Infinity;

        els.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const elCenter = rect.top + rect.height / 2;
          const dist = Math.abs(elCenter - centerY);
          if (dist < nearestDist) {
            nearestDist = dist;
            nearestId = el.id;
          }
        });

        if (nearestId !== activeRef.current) setActiveId(nearestId);
        if (top <= 1 && activeRef.current !== topId) setActiveId(topId);
      });
    };

    const target = (root ?? window) as EventTarget;
    target.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // 초기 한 번 실행

    return () => {
      target.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [sectionIds.join(","), root, offsetTop, activeRatio, topId]);

  return activeId;
}
