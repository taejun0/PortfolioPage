"use client";

import {
  useMemo,
  useRef,
  useState,
  type ComponentProps,
  type FocusEvent,
} from "react";
import {
  animate,
  motionValue,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { FiPlus } from "react-icons/fi";

import Landing from "./component/landing/Landing";

import {
  SIDE_NAV_BASE_PX,
  SIDE_NAV_HOVER_EXTRA_PX,
  splitTotalPxAcrossParts,
} from "./navSizing";
import * as S from "./MainpageV2.styled";

const NAV_DURATION = 0.46;
const NAV_EASE = [0.32, 0.72, 0, 1] as const;

type PanelKey = "AboutMe" | "Skills" | "Projects" | "Blog";

const NAV_ITEMS: { key: PanelKey; label: string }[] = [
  { key: "AboutMe", label: "About Me" },
  { key: "Skills", label: "Skills" },
  { key: "Projects", label: "Projects" },
  { key: "Blog", label: "Blog" },
];

type NavColumnMotionProps = ComponentProps<typeof S.NavColumnMotion>;

function NavRailColumn({
  bonusMv,
  colBasePx,
  label,
  ...rest
}: {
  bonusMv: MotionValue<number>;
  colBasePx: number;
  label: string;
} & Omit<NavColumnMotionProps, "style">) {
  const width = useTransform(bonusMv, (b) => colBasePx + b);
  return (
    <S.NavColumnMotion style={{ width }} {...rest}>
      <S.NavLabel>{label}</S.NavLabel>
      <S.NavPlus aria-hidden>
        <FiPlus strokeWidth={3} />
      </S.NavPlus>
    </S.NavColumnMotion>
  );
}

const MainpageV2 = () => {
  const [panel, setPanel] = useState<PanelKey | null>(null);

  const bonusMvsRef = useRef<MotionValue<number>[] | null>(null);
  if (bonusMvsRef.current === null) {
    bonusMvsRef.current = NAV_ITEMS.map(() => motionValue(0));
  }
  const bonusMvs = bonusMvsRef.current;

  const collapseGeneration = useRef(0);

  const columnBaseWidthsPx = useMemo(
    () => splitTotalPxAcrossParts(SIDE_NAV_BASE_PX, NAV_ITEMS.length),
    [NAV_ITEMS.length],
  );

  const EPS = 0.25;

  const animateIfNeeded = (mv: MotionValue<number>, target: number) => {
    if (Math.abs(mv.get() - target) < EPS) {
      return Promise.resolve();
    }
    return animate(mv, target, { duration: NAV_DURATION, ease: NAV_EASE });
  };

  const totalBonusPx = () => bonusMvs.reduce((sum, mv) => sum + mv.get(), 0);

  const animateBonusesToward = (activeIndex: number) => {
    return Promise.all(
      bonusMvs.map((mv, j) =>
        animateIfNeeded(mv, j === activeIndex ? SIDE_NAV_HOVER_EXTRA_PX : 0),
      ),
    );
  };

  /** 레일 전체 너비가 이미 (기본+추가)인 상태 — 칸만 바꿀 때는 트윈 없이 즉시 스왑 */
  const applyBonusTargetsInstant = (targets: number[]) => {
    bonusMvs.forEach((mv, j) => {
      mv.stop();
      mv.set(targets[j]!);
    });
  };

  const runExpand = (index: number) => {
    const targets = bonusMvs.map((_, j) =>
      j === index ? SIDE_NAV_HOVER_EXTRA_PX : 0,
    );
    const alreadyThere = targets.every(
      (t, j) => Math.abs(bonusMvs[j]!.get() - t) < 0.5,
    );
    if (alreadyThere) return;

    collapseGeneration.current += 1;

    const railAlreadyFullSize =
      Math.abs(totalBonusPx() - SIDE_NAV_HOVER_EXTRA_PX) < 1.5;

    if (railAlreadyFullSize) {
      applyBonusTargetsInstant(targets);
      return;
    }

    void animateBonusesToward(index);
  };

  const runCollapse = () => {
    const gen = ++collapseGeneration.current;
    bonusMvs.forEach((mv) => mv.stop());
    Promise.all(bonusMvs.map((mv) => animateIfNeeded(mv, 0))).then(() => {
      if (collapseGeneration.current !== gen) return;
      setPanel(null);
    });
  };

  return (
    <S.Root>
      <S.MainStage>
        <Landing />
        {panel === "AboutMe" && (
          <S.PanelLayer>
            <S.SectionBlock />
          </S.PanelLayer>
        )}
      </S.MainStage>

      <S.SideNavMotion aria-label="포트폴리오 섹션" onMouseLeave={runCollapse}>
        {NAV_ITEMS.map((item, index) => (
          <NavRailColumn
            key={`${item.key}-${index}`}
            bonusMv={bonusMvs[index]!}
            colBasePx={columnBaseWidthsPx[index]!}
            type="button"
            onClick={() => {
              const prefersFinePointer = window.matchMedia(
                "(hover: hover) and (pointer: fine)",
              ).matches;
              if (prefersFinePointer) {
                setPanel(item.key);
              } else {
                setPanel((p) => (p === item.key ? null : item.key));
              }
            }}
            onMouseEnter={() => {
              runExpand(index);
              setPanel(item.key);
            }}
            onFocus={() => {
              runExpand(index);
              setPanel(item.key);
            }}
            onBlur={(e: FocusEvent<HTMLButtonElement>) => {
              if (!e.currentTarget.parentElement?.contains(e.relatedTarget)) {
                runCollapse();
              }
            }}
            label={item.label}
          />
        ))}
      </S.SideNavMotion>
    </S.Root>
  );
};

export default MainpageV2;
