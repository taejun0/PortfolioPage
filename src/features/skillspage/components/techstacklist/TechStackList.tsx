"use client";

import * as S from "./TeckStackList.styled";

import {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  useMemo,
  useCallback,
} from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  SiHtml5,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiSpringboot,
  SiStyledcomponents,
  SiJest,
  SiGithubactions,
  SiVercel,
  SiGithub,
  SiSlack,
  SiTrello,
} from "react-icons/si";

import { MdOutlineEmojiEmotions } from "react-icons/md";

import { TbBrandReactNative } from "react-icons/tb";

import { FaJava } from "react-icons/fa6";

const techStacks = [
  {
    name: "HTML & CSS",
    icon: <SiHtml5 />,
    category: "Frontend",
    description:
      "프론트엔드 입문 당시, HTML과 CSS를 중심으로 CAPS 34기 동아리 내 스터디를 진행했습니다. Semantic HTML의 구조적 중요성을 학습하며 웹 접근성과 SEO를 고려한 마크업 작성 습관을 들였습니다. CSS는 position, flex, grid, z-index 등을 활용한 반응형 UI 구현에 집중했으며, 이후 컴포넌트 기반 프레임워크에 넘어가는 기반이 되었습니다.",
    tags: ["Semantic", "반응형", "SEO", "Flex/Grid", "CSS 포지셔닝"],
  },
  {
    name: "React",
    icon: <SiReact />,
    category: "Frontend",
    description:
      "본격적인 프론트엔드 실무는 멋쟁이사자처럼 12기/13기 활동과 여러 해커톤을 통해 React 기반으로 진행되었습니다.\n•	동국대 동아리 박람회 사이트 ‘동아리랑’ 개발: 컴포넌트 아키텍처, props/state 관리, 조건 렌더링 등을 중점적으로 사용\n•	축제 부스 운영 플랫폼 ‘D-Order’: 모달 인터랙션, 장바구니 로직, 예외 흐름 처리 등 사용자 중심 흐름 설계",
    tags: ["컴포넌트", "상태 관리", "조건 렌더링", "모달", "로직 설계"],
  },
  {
    name: "React Native",
    icon: <TbBrandReactNative />,
    category: "Frontend",
    description:
      "동아리 앱을 만들기 위해 React Native를 도입하였고, 웹과 다른 네이티브 컴포넌트의 생명주기 및 스타일 시스템을 경험했습니다.\nExpo 환경으로 시작하여 cross-platform UI 테스트와 디버깅을 진행했습니다.",
    tags: ["Native 컴포넌트", "Expo", "크로스 플랫폼", "디버깅"],
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    category: "Frontend",
    description:
      "프로젝트 초기에는 바닐라 JS로 간단한 인터랙션(모달, 토글, 탭 등)을 직접 구현하며 이벤트 버블링, 스코프, 비동기 처리 등 JS의 핵심 개념을 학습했습니다.\n이후에는 React에서의 상태 관리와 DOM 조작에 필요한 JS 활용 능력을 심화시켰습니다.",
    tags: ["이벤트 버블링", "비동기 처리", "DOM 조작", "기초 로직"],
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    category: "Frontend",
    description:
      "React 프로젝트의 규모가 커지면서 타입 안정성 확보가 필요해졌고, 이에 따라 기존 JS 코드에서 점진적으로 TS로 마이그레이션을 진행했습니다.\nprops/interface 명세, 유틸 타입 활용을 통해 유지보수성과 개발자 경험을 동시에 개선하였습니다.",
    tags: ["타입 안정성", "인터페이스", "유틸 타입", "TS 마이그레이션"],
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    category: "Frontend",
    description:
      "포트폴리오 웹사이트 제작 시 SSR/SSG 및 App Router 기반의 페이지 구성을 위해 Next.js를 도입했습니다.\n특히, getServerSideProps, useParams, next/image, next/head 등을 적극 활용하며 SEO 최적화와 퍼포먼스를 개선했고, Vercel과의 연동으로 CI/CD 흐름도 간결하게 구성했습니다.",
    tags: ["SSR/SSG", "App Router", "SEO 최적화", "Vercel", "Dynamic Routing"],
  },
  {
    name: "Java",
    icon: <FaJava />,
    category: "Backend",
    description:
      "TypeScirpt를 공부하기 이전, 타입 안정성에 대해 공부를 시작하였고 코테 준비도 JAVA로 처음 하게 되었습니다.",
    tags: ["객체지향", "자료구조", "코딩테스트", "JVM"],
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot />,
    category: "Backend",
    description:
      "많이 사용한 것은 아니지만, 백엔드와의 원활한 의사소통을 위해 개발을 해본 경험이 있습니다.\nRESTful API 설계 원칙을 따르며, 예매 등록/조회/취소 API를 설계하고 MySQL 연동 및 JPA를 활용한 Repository 계층을 구성했습니다.",
    tags: ["REST API", "JPA", "MySQL 연동", "Repository 계층"],
  },
  {
    name: "styled-components",
    icon: <SiStyledcomponents />,
    category: "Styling",
    description:
      "컴포넌트 단위 스타일링을 선호하며, D-Order, 포트폴리오 프로젝트 등에서 모두 CSS-in-JS 방식을 채택했습니다. 프로젝트 초기에는 styled-components를 주로 사용했으나, 속도와 타입 호환성 측면에서 Emotion으로 점진적 전환하게 되었습니다.",
    tags: ["CSS-in-JS", "컴포넌트 스타일", "props 기반 스타일"],
  },
  {
    name: "Emotion",
    icon: <MdOutlineEmojiEmotions />,
    category: "Styling",
    description:
      "Emotion에서는 @emotion/react의 ThemeProvider를 통해 컬러, 타이포그래피, 브레이크포인트 등을 전역으로 관리하였고, 반응형 디자인도 css 매크로를 통해 구현했습니다.",
    tags: ["ThemeProvider", "전역 스타일", "반응형 디자인", "css 매크로"],
  },
  {
    name: "Jest",
    icon: <SiJest />,
    category: "Testing",
    description:
      "React 컴포넌트 단위 테스트와 유틸 함수 테스트에 사용했습니다.\n•	폼 유효성 검사 로직, 상태 변화 처리 함수, 커스텀 훅(useMenuListPage)의 동작 검증 등을 Jest 기반으로 작성해 기능 단위의 안정성을 확보했습니다.\n•	CI 과정에서 실패 시 경고 알림이 가도록 GitHub Actions와 연동한 경험도 있습니다.",
    tags: ["단위 테스트", "폼 유효성", "커스텀 훅 테스트", "CI 연동"],
  },
  {
    name: "GitHub Actions",
    icon: <SiGithubactions />,
    category: "DevOps",
    description:
      "develop 브랜치 PR 병합 시 자동 테스트 및 빌드 확인, main 브랜치 병합 시 Vercel 배포 트리거를 수행하는 CI/CD 파이프라인을 구축했습니다.",
    tags: ["CI/CD", "자동화", "테스트", "브랜치 전략"],
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
    category: "DevOps",
    description:
      "프론트엔드 정적 사이트 배포를 위해 활용하였고, 환경 변수 설정 및 Preview Deployment 기능을 통해 팀 리뷰 및 QA 프로세스를 원활히 진행했습니다.",
    tags: ["정적 배포", "환경 변수", "Preview Deploy", "Next.js 연동"],
  },
  {
    name: "Github",
    icon: <SiGithub />,
    category: "Tools",
    description:
      "프로젝트에서 이슈 기반 브랜치 전략(feature/, fix/)을 수립하고, PR 리뷰와 커밋 메시지 컨벤션을 도입하여 협업의 명확성을 높였습니다.",
    tags: ["PR 리뷰", "브랜치 전략", "커밋 컨벤션", "버전 관리"],
  },
  {
    name: "Slack",
    icon: <SiSlack />,
    category: "Tools",
    description:
      "팀원 간 진행 상황 공유와 빠른 커뮤니케이션을 위해 핵심 도구로 사용했습니다.",
    tags: ["팀 커뮤니케이션", "실시간 공유", "알림 연동"],
  },
  {
    name: "Trello",
    icon: <SiTrello />,
    category: "Tools",
    description:
      "개인/팀 프로젝트의 일정 관리 및 작업 분배에 사용하였습니다.\n특히 개발/디자인/테스트 단계별 칸반 관리로 각 업무의 진행 상태를 명확히 하고, 업무 우선순위를 정하는 데에 유용하게 사용했습니다.",
    tags: ["칸반보드", "업무 우선순위", "일정 관리", "협업"],
  },
];

interface Props {
  selectedCategory: string;
}

interface TechStack {
  name: string;
  icon: React.ReactNode;
  category: string;
  description: string;
  tags?: string[];
}

const TechStackItem = ({
  tech,
  isExpanded,
  toggleItem,
  index,
}: {
  tech: TechStack;
  isExpanded: boolean;
  toggleItem: (name: string) => void;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        setHeight(contentRef.current.scrollHeight);
      } else {
        // 3줄 높이 계산 (대략)
        const lineHeight = 1.75;
        const fontSize = 15; // 0.9375rem = 15px
        setHeight(fontSize * lineHeight * 3);
      }
    }
  }, [isExpanded]);

  const handleCardClick = useCallback(() => {
    if (cardRef.current) {
      // 이미 확장된 상태면 바로 토글만
      if (isExpanded) {
        toggleItem(tech.name);
        return;
      }

      // 카드를 화면 중앙으로 스크롤
      const rect = cardRef.current.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const centerY =
        rect.top + scrollTop - window.innerHeight / 2 + rect.height / 2;

      window.scrollTo({
        top: centerY,
        behavior: "smooth",
      });

      // 스크롤 완료 후 확장
      setTimeout(() => {
        toggleItem(tech.name);
      }, 300);
    }
  }, [tech.name, toggleItem, isExpanded]);

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        delay: index * 0.03,
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        layout: { duration: 0.3, ease: "easeInOut" },
      }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <S.Item
        category={tech.category}
        onClick={handleCardClick}
        $isExpanded={isExpanded}
      >
        <S.TitleBox category={tech.category}>
          <div>
            {tech.icon}
          </div>
          <div>
            <S.Title>{tech.name}</S.Title>
            <S.CategoryBadge
              category={tech.category}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.03 + 0.1, duration: 0.3 }}
            >
              {tech.category}
            </S.CategoryBadge>
          </div>
        </S.TitleBox>
        {tech.tags && tech.tags.length > 0 && (
          <S.TagContainer>
            {tech.tags.map((tag: string, tagIndex: number) => (
              <S.Tag
                key={tag}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.03 + tagIndex * 0.02 }}
              >
                {tag}
              </S.Tag>
            ))}
          </S.TagContainer>
        )}
        <AnimatePresence initial={false}>
          <motion.div
            animate={{ height }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div ref={contentRef}>
              <S.Text
                $expanded={isExpanded}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {tech.description}
              </S.Text>
            </div>
          </motion.div>
        </AnimatePresence>
      </S.Item>
    </motion.div>
  );
};

const TechStackList = ({ selectedCategory }: Props) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );

  // 필터 변경 시 expanded 상태 초기화
  useEffect(() => {
    setExpandedItems({});
  }, [selectedCategory]);

  const toggleItem = useCallback((name: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  }, []);

  const filtered = useMemo(() => {
    return selectedCategory === "All"
      ? techStacks
      : techStacks.filter((t) => t.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <S.Grid>
      <AnimatePresence mode="popLayout">
        {filtered.map((tech, index) => (
          <TechStackItem
            key={`${tech.name}-${selectedCategory}`}
            tech={tech}
            isExpanded={!!expandedItems[tech.name]}
            toggleItem={toggleItem}
            index={index}
          />
        ))}
      </AnimatePresence>
    </S.Grid>
  );
};

export default TechStackList;
