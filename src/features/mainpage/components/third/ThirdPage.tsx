"use client";

import * as S from "./ThirdPage.styled";
import Link from "next/link";
import { ROUTE_CONSTANTS } from "@constants/routeConstants";
import { SiReact, SiTypescript, SiNextdotjs } from "react-icons/si";
import { IoColorPalette } from "react-icons/io5";
import { useState, useCallback } from "react";

const skills = [
  {
    icon: <SiReact />,
    title: "React",
    desc: `React는 컴포넌트 기반의 UI를 설계하고 구현하기에 최적화된 도구입니다.

저는 현재까지 대부분의 프로젝트에 React를 사용하며,
상태 관리, 커스텀 훅 구성, 컴포넌트 아키텍처 설계 등에 적극 활용해왔습니다.`,
  },
  {
    icon: <SiTypescript />,
    title: "TypeScript",
    desc: `TypeScript는 코드의 안정성과 가독성을 높이기 위해 꾸준히 사용하고 있습니다.

props와 state의 타입 지정부터 시작해,
점차 복잡한 타입 설계에도 익숙해지고 있습니다.`,
  },
  {
    icon: <SiNextdotjs />,
    title: "Next.js",
    desc: `Next.js는 SSR과 CSR을 함께 고려할 수 있어,
성능 최적화가 필요한 프로젝트에서 사용했습니다.

App Router, Image 최적화, 서버 컴포넌트 활용까지 경험해봤습니다.`,
  },
  {
    icon: <IoColorPalette />,
    title: "스타일링",
    desc: `Styled-components, Emotion 등
다양한 스타일링 방법을 사용해보았습니다.

디자인 시스템을 고려한 컴포넌트 단위 스타일링에 익숙하며,
UI/UX를 섬세하게 표현하는 데 집중합니다.`,
  },
];

const ThirdPage = () => {
  const [active, setActive] = useState(0);

  const onSelect = useCallback((idx: number) => setActive(idx), []);

  return (
    <S.Wrapper>
      <S.Content>
        <S.HeaderSection>
          <S.SectionLabel>SKILLS</S.SectionLabel>
          <S.Title>Core Tech</S.Title>
          <S.SemiTitle>{`개발자들 간의 코드 안정성과 유지 보수성을 중시하며
현대적이고 성능이 좋은 웹 어플리케이션을 만들기 위해
신중하게 도구를 선택하고 사용합니다.`}</S.SemiTitle>
        </S.HeaderSection>

        <S.Divider />

        <S.Container>
        {skills.map((s, idx) => (
          <S.Box
            key={s.title}
            $active={idx === active}
            onClick={() => onSelect(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect(idx);
              }
            }}
            aria-pressed={idx === active}
          >
            <S.BoxTitle $active={idx === active}>
              {s.icon}
              {s.title}
            </S.BoxTitle>
            <S.BoxText $active={idx === active}>{s.desc}</S.BoxText>
          </S.Box>
        ))}
        </S.Container>

        <S.LinkWrapper>
          <Link href={ROUTE_CONSTANTS.SKILLS}>
            <S.HowManyUse>
              제가 사용하는 기술에 대해 자세히 알아봐요 {"->"}
            </S.HowManyUse>
          </Link>
        </S.LinkWrapper>
      </S.Content>
    </S.Wrapper>
  );
};

export default ThirdPage;
