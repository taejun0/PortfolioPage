"use client";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

type Props = {
  targetRef: React.RefObject<HTMLElement>;
  startSize?: number; // 우상단 시작 크기(px)
  endSize?: number; // 도킹 시 크기(px) - 타깃에 맞춰 비율만 써도 되고 고정값도 가능
  marginTop?: number; // 우상단 여백
  marginRight?: number; // 우상단 여백
  dockThresholdVh?: number; // 도킹 완료 기준(뷰포트 비율, 0.25 = 25%)
};

const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function StickyAvatar({
  targetRef,
  startSize = 150,
  endSize = 300,
  marginTop = 80,
  marginRight = 40,
  dockThresholdVh = 0.25,
}: Props) {
  const avatarRef = useRef<HTMLDivElement>(null);
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    const prefersReduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const avatar = avatarRef.current;
    if (!avatar) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const target = targetRef.current;
      if (!avatar || !target) return;

      const rect = target.getBoundingClientRect();
      const vh = window.innerHeight;

      // 진행도 t: 타깃 top이 화면 하단(vh)일 때 0, 화면 (vh * dockThresholdVh)일 때 1
      const start = vh;
      const end = vh * dockThresholdVh;
      const t = clamp((start - rect.top) / (start - end), 0, 1);

      // 도킹 완료 조건: t === 1 이거나 rect.top <= end 근처
      const shouldDock = rect.top <= end + 0.5;

      // 시작점(우상단) - "뷰포트 기준"
      const startCx = window.innerWidth - marginRight - startSize / 2;
      const startCy = marginTop + startSize / 2;

      // 타깃 중심(뷰포트 기준)
      const targetCx = rect.left + (rect.width / 3) * 2;
      const targetCy = rect.top + (rect.height / 12) * 5;

      // 크기 보간: 시작 → 종료
      // (타깃 실제 크기에 맞추고 싶다면 endSize 대신 rect.width/height를 사용)
      const sizeNow = lerp(startSize, endSize, t);
      const scale = sizeNow / startSize;

      // 위치 보간: 시작점 → 타깃 중심
      const curX = lerp(startCx, targetCx, t);
      const curY = lerp(startCy, targetCy, t);

      // translate 기준을 시작점으로 잡았으니 현재 이동량 = (현재 중심 - 시작 중심)
      const dx = curX - startCx;
      const dy = curY - startCy;

      // 도킹 상태에서는 타깃은 보여야 하고, 이동 중엔 겹침 방지를 위해 타깃 숨김(선택)
      const setTargetHidden = (hide: boolean) => {
        if (hide) target.classList.add("hidden-by-docking");
        else target.classList.remove("hidden-by-docking");
      };

      // 움직이는 동안은 타깃을 숨겨서 겹쳐 보이지 않게
      if (!shouldDock) {
        setDocked(false);
        setTargetHidden(true);
        avatar.style.opacity = "1";
        // transform-origin: top right (CSS에서 지정) 기준
        avatar.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;
      } else {
        // 도킹 상태: 아바타는 최종 위치와 크기에서 멈추고 사라짐, 타깃 표시
        setDocked(true);
        setTargetHidden(false);
        avatar.style.transform = `translate(${targetCx - startCx}px, ${
          targetCy - startCy
        }px) scale(${endSize / startSize})`;
        avatar.style.opacity = prefersReduce ? "0" : "0"; // 필요 시 0.2 등 미세 보정
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    const onResize = () => {
      // 리사이즈 후 위치 재계산
      requestAnimationFrame(update);
    };

    // 초기 위치 설정
    update();
    
    // 스크롤 이벤트를 window에 추가
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    
    // target이 나중에 로드될 수 있으므로 주기적으로 체크 (최대 5초)
    let checkCount = 0;
    const maxChecks = 50; // 5초 (100ms * 50)
    let checkInterval: NodeJS.Timeout | null = null;
    
    if (!targetRef.current) {
      checkInterval = setInterval(() => {
        checkCount++;
        if (targetRef.current) {
          update();
          if (checkInterval) {
            clearInterval(checkInterval);
            checkInterval = null;
          }
        } else if (checkCount >= maxChecks) {
          // 5초 후에도 target이 없으면 체크 중지
          if (checkInterval) {
            clearInterval(checkInterval);
            checkInterval = null;
          }
        }
      }, 100);
    }
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (checkInterval) {
        clearInterval(checkInterval);
      }
    };
  }, [targetRef, startSize, endSize, marginTop, marginRight, dockThresholdVh]);

  return (
    <div
      ref={avatarRef}
      aria-hidden // 클릭 동작이 필요하면 버튼으로 바꾸고 aria-label 추가
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: `${startSize}px`,
        height: `${startSize}px`,
        marginTop,
        marginRight,
        borderRadius: "100%",
        overflow: "hidden",
        border: "2px solid rgba(255,255,255,.8)",

        transformOrigin: "top right",
        willChange: "transform, opacity",
        zIndex: 50,
        transition: "opacity .2s linear", // 도킹 순간 페이드아웃
        pointerEvents: "none",
      }}
    >
      <Image
        src="/images/portFolio/myPicture.jpeg"
        alt="Portfolio avatar"
        fill
        sizes={`${Math.ceil(endSize)}px`} // ← 항상 최대 크기로 받아오게 힌트
        priority // LCP/초기 선명도 개선
        quality={90}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
