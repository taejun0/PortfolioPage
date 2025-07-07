import * as S from "./TeckStackList.styled";

import { useState } from "react";

const techStacks = [
  {
    name: "HTML & CSS",
    category: "Frontend",
    description:
      "프론트엔드 입문 당시, HTML과 CSS를 중심으로 CAPS 34기 동아리 내 스터디를 진행했습니다. Semantic HTML의 구조적 중요성을 학습하며 웹 접근성과 SEO를 고려한 마크업 작성 습관을 들였습니다. CSS는 position, flex, grid, z-index 등을 활용한 반응형 UI 구현에 집중했으며, 이후 컴포넌트 기반 프레임워크에 넘어가는 기반이 되었습니다.",
  },
  {
    name: "React",
    category: "Frontend",
    description:
      "본격적인 프론트엔드 실무는 멋쟁이사자처럼 12기/13기 활동과 여러 해커톤을 통해 React 기반으로 진행되었습니다.\n•	동국대 동아리 박람회 사이트 ‘동아리랑’ 개발: 컴포넌트 아키텍처, props/state 관리, 조건 렌더링 등을 중점적으로 사용\n•	축제 부스 운영 플랫폼 ‘D-Order’: 모달 인터랙션, 장바구니 로직, 예외 흐름 처리 등 사용자 중심 흐름 설계",
  },
  {
    name: "React Native",
    category: "Frontend",
    description:
      "동아리 앱을 만들기 위해 React Native를 도입하였고, 웹과 다른 네이티브 컴포넌트의 생명주기 및 스타일 시스템을 경험했습니다. Expo 환경으로 시작하여 cross-platform UI 테스트와 디버깅을 진행했습니다.",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    description:
      "프로젝트 초기에는 바닐라 JS로 간단한 인터랙션(모달, 토글, 탭 등)을 직접 구현하며 이벤트 버블링, 스코프, 비동기 처리 등 JS의 핵심 개념을 학습했습니다. 이후에는 React에서의 상태 관리와 DOM 조작에 필요한 JS 활용 능력을 심화시켰습니다.",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description:
      "React 프로젝트의 규모가 커지면서 타입 안정성 확보가 필요해졌고, 이에 따라 기존 JS 코드에서 점진적으로 TS로 마이그레이션을 진행했습니다. props/interface 명세, 유틸 타입 활용을 통해 유지보수성과 개발자 경험을 동시에 개선하였습니다.",
  },
  {
    name: "Next.js",
    category: "Frontend",
    description:
      "포트폴리오 웹사이트 제작 시 SSR/SSG 및 App Router 기반의 페이지 구성을 위해 Next.js를 도입했습니다. 특히, getServerSideProps, useParams, next/image, next/head 등을 적극 활용하며 SEO 최적화와 퍼포먼스를 개선했고, Vercel과의 연동으로 CI/CD 흐름도 간결하게 구성했습니다.",
  },
  {
    name: "Java",
    category: "Backend",
    description:
      "TypeScirpt를 공부하기 이전, 타입 안정성에 대해 공부를 시작하였고 코테 준비도 JAVA로 처음 하게 되었습니다.",
  },
  {
    name: "Spring Boot",
    category: "Backend",
    description:
      "많이 사용한 것은 아니지만, 백엔드와의 원활한 의사소통을 위해 개발을 해본 경험이 있습니다. RESTful API 설계 원칙을 따르며, 예매 등록/조회/취소 API를 설계하고 MySQL 연동 및 JPA를 활용한 Repository 계층을 구성했습니다.",
  },
  {
    name: "styled-components",
    category: "Styling",
    description:
      "컴포넌트 단위 스타일링을 선호하며, D-Order, 포트폴리오 프로젝트 등에서 모두 CSS-in-JS 방식을 채택했습니다. 프로젝트 초기에는 styled-components를 주로 사용했으나, 속도와 타입 호환성 측면에서 Emotion으로 점진적 전환하게 되었습니다.",
  },
  {
    name: "Emotion",
    category: "Styling",
    description:
      "Emotion에서는 @emotion/react의 ThemeProvider를 통해 컬러, 타이포그래피, 브레이크포인트 등을 전역으로 관리하였고, 반응형 디자인도 css 매크로를 통해 구현했습니다.",
  },
  {
    name: "Jest",
    category: "Testing",
    description:
      "React 컴포넌트 단위 테스트와 유틸 함수 테스트에 사용했습니다.\n•	폼 유효성 검사 로직, 상태 변화 처리 함수, 커스텀 훅(useMenuListPage)의 동작 검증 등을 Jest 기반으로 작성해 기능 단위의 안정성을 확보했습니다.\n•	CI 과정에서 실패 시 경고 알림이 가도록 GitHub Actions와 연동한 경험도 있습니다.",
  },
  {
    name: "GitHub Actions",
    category: "DevOps",
    description:
      "develop 브랜치 PR 병합 시 자동 테스트 및 빌드 확인, main 브랜치 병합 시 Vercel 배포 트리거를 수행하는 CI/CD 파이프라인을 구축했습니다.",
  },
  {
    name: "Vercel",
    category: "DevOps",
    description:
      "프론트엔드 정적 사이트 배포를 위해 활용하였고, 환경 변수 설정 및 Preview Deployment 기능을 통해 팀 리뷰 및 QA 프로세스를 원활히 진행했습니다.",
  },
  {
    name: "Github",
    category: "Tools",
    description:
      "프로젝트에서 이슈 기반 브랜치 전략(feature/, fix/)을 수립하고, PR 리뷰와 커밋 메시지 컨벤션을 도입하여 협업의 명확성을 높였습니다.",
  },
  {
    name: "Slack",
    category: "Tools",
    description:
      "팀원 간 진행 상황 공유와 빠른 커뮤니케이션을 위해 핵심 도구로 사용했습니다.",
  },
  {
    name: "Trello",
    category: "Tools",
    description:
      "개인/팀 프로젝트의 일정 관리 및 작업 분배에 사용하였습니다.\n특히 개발/디자인/테스트 단계별 칸반 관리로 각 업무의 진행 상태를 명확히 하고, 업무 우선순위를 정하는 데에 유용하게 사용했습니다.",
  },
];

interface Props {
  selectedCategory: string;
}

const MAX_LENGTH = 40;

const TechStackList = ({ selectedCategory }: Props) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );
  const toggleItem = (name: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };
  const filtered =
    selectedCategory === "All"
      ? techStacks
      : techStacks.filter((t) => t.category === selectedCategory);

  return (
    <S.Grid>
      {filtered.map((tech) => {
        const isExpanded = expandedItems[tech.name];
        const showToggle = tech.description.length > MAX_LENGTH;
        const displayedText = isExpanded
          ? tech.description
          : tech.description.slice(0, MAX_LENGTH) + (showToggle ? "..." : "");

        return (
          <S.Item key={tech.name}>
            <S.Title>{tech.name}</S.Title>
            <S.Text>{displayedText}</S.Text>
            {showToggle && (
              <S.ToggleButton onClick={() => toggleItem(tech.name)}>
                {isExpanded ? "간략히 보기" : "자세히 보기"}
              </S.ToggleButton>
            )}
          </S.Item>
        );
      })}
    </S.Grid>
  );
};

export default TechStackList;
