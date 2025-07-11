export interface ProjectsStack {
  name: string;
  description: string;
  overview: string;
  detailDescription: string;
  categories: string[];
  feature: boolean;
  image: string;
  SemiInfo: string[];

  stack: string[];
  features: {
    problem: string[];
    user: string[];
    admin: string[];
  };
  roles: string[];
  challenges: {
    problem: string;
    solution: string;
    learnings: string;
  }[];
}

export const stacks: ProjectsStack[] = [
  {
    name: "D-order",
    description: "행사/축제 모바일 주문 및 주점 운영 서비스",
    overview:
      "D-order는 행사/축제와 같은 오프라인 환경에서 혼잡한 주문 환경을 해결하기 위해 개발된 모바일 주문 및 주점 운영 서비스입니다. 주문서 작성, 입금, 주문 확인 등 복잡한 과정을 디지털화하여 운영자와 고객 모두에게 효율적이고 직관적인 사용자 경험을 제공합니다.",
    detailDescription:
      "React와 TypeScript 기반으로 구축된 이 서비스는\n실제 축제 현장에서 3일간 7개의 부스와 함께 운영되었습니다.\n프론트엔드 팀장을 맡아 전체 UI/UX 기획에 참여했으며,\n주문 흐름, 모달 인터랙션, API 연동 등 주요 개발을 주도하였습니다.",
    categories: ["React", "TypeScript", "Team"],
    feature: true,
    image: "/images/projectsImage/D-order.png",
    SemiInfo: [
      "2025.05 - 현재 추가 개발 중",
      "Team project",
      "Frontend Team Leader",
      "https://github.com/LikeLion-at-DGU/2025-d-order-frontend-admin https://github.com/LikeLion-at-DGU/2025-d-order-frontend-customer",
      "",
    ],
    stack: [
      "React & TypeScript - UI 상태 변화가 많은 주문 시스템에 적합한 컴포넌트 기반 프레임워크인 React와 TypeScript로 타입 안정성 확보했습니다.",
      "React Router v6 - 다단계 회원가입과 인증 분기처리를 위한 중첩 라우팅 구성을 위해 사용했습니다.",
      "Zustand  - 장바구니 상태를 전역적으로 간단하게 관리할 수 있으며, 파일 자체가 가벼워 사용했습니다.",
      "Axios - 요청/응답 인터셉터 설정에 용이하고 토큰 갱신 로직 구현에도 적합하다 판단하여 사용했습니다.",
    ],
    features: {
      problem: [
        "종이 메뉴판, 수기로 받는 주문으로 인해 주문 누락, 대기 시간 증가, 운영 혼선이 발생함",
        "고객은 메뉴 확인과 주문 및 결제 과정이 복잡하고 비직관적임",
        "운영자는 주문이 누락되거나 실시간 주문 내역 파악이 어려움",
      ],
      user: [
        "QR 테이블 로그인: 테이블에 부착된 QR 코드를 통해 웹 서비스 접속",
        "메뉴 확인 및 장바구니 담기: 모바일 UI에서 실시간 메뉴 확인 및 수량 조절 후 장바구니 추가",
        "계좌 복사 및 입금 안내: 주문서에 포함된 계좌정보를 버튼 한 번으로 복사 가능",
        "주문 내역 확인 및 직원 코드 인증: 주문 내용 및 결제 금액을 최종 확인한 뒤 운영자 확인을 거쳐 주문 완료",
      ],
      admin: [
        "실시간 주문 관리: 새로운 주문이 들어오면 실시간으로 관리자 페이지에 표시",
        "테이블별 주문 현황 확인: 각 테이블 별 주문 상태를 한눈에 파악 가능",
        "주문 취소 및 초기화 기능 제공",
        "메뉴 등록/수정/삭제/품절 처리: 실시간으로 메뉴 상태를 변경 가능",
      ],
    },
    roles: [
      "Frontend Team Leader로 전체 구조 설계 및 사용자/운영자 페이지 UI 구현을 주도",
      "MenuListPage.tsx 내 전체 렌더링 흐름 설계 및 메뉴 호출 → 카테고리 분류 → 수량 선택 → 장바구니 추가 흐름 구현",
      "회원가입, 로그인 페이지 개발 및 로그인 성공 시 accessToken 저장/페이지 이동 로직 구현",
      "useRedirectIfLoggedIn, useAuthRedirect 등의 접근 제어 훅 구현을 통해 인증 보호 페이지 구성",
      "Axios 인터셉터 구성: accessToken 자동 삽입, refreshToken 만료 시 재발급 로직 및 요청 재시도 큐 구성",
      "기능 중심 폴더 구조로 개선: 각 페이지별로 훅/모달/스타일 파일을 함께 배치하여 응집도 높은 구조 완성",
      "Zustand를 도입해 페이지 간 공유되는 장바구니 상태를 컴포넌트 트리 깊이와 관계없이 효율적으로 관리",
    ],
    challenges: [
      {
        problem:
          "프로젝트에서 감각적인 UI 연출을 위해 radial-gradient와 blur()를 활용한 4개의 Ellipse 배경 요소를 적용했습니다. 하지만 모바일 환경에서 다음과 같은 문제를 발견했습니다:\n- GPU 과부하로 인한 프레임 저하 및 렌더링 지연 발생\n- blur()가 겹쳐지면서 특정 기기에서 배경이 까지거나 콘텐츠가 늦게 나타나는 현상\n- 문제 재현이 어렵고 원인 추적에 시간이 소요됨",
        solution:
          "성능 병목 지점을 파악하기 위해 Chrome DevTools의 Performance 탭과 Lighthouse 모바일 테스트 도구를 활용하였고, 해당 계산 과정 자체를 개선하기 위하여 이미지로 변동함으로써 문제를 해결했습니다.",
        learnings:
          "UI 연출도 물론 중요하지만, 모바일 성능 고려는 필수적임. 복잡한 UI에 대한 성능저하를 DevTools 기반 분석을 통해 개선할 수 있었음.",
      },
      {
        problem:
          "프로젝트 초기에는 hooks/, components/ 등 모든 코드가 전역 디렉토리에 위치한 구조를 사용했습니다. 이로 인해 기능 간 경계가 모호하고 유지보수성이 낮아졌습니다.",
        solution:
          "팀장으로서 구조적 문제를 인지하고, 기능 중심 폴더 구조로 전면 개편을 주도함. 각 페이지 디렉토리 내부에 해당 페이지 전용 컴포넌트, 훅, 모달, 스타일 등을 로컬화하였고, 작업 구조 가이드를 작성해 팀원들과 공유했습니다.",
        learnings:
          "전역 중심 구조는 빠르게 시작하기엔 적합하지만, 기능이 늘어날수록 확장성과 유지보수성에 취약함.",
      },
    ],
  },
  {
    name: "동아리랑",
    description: "교내 동아리 정보와 공연일정을 한눈에, 동아리랑",
    overview:
      "60여 개의 동아리 정보와 공연일정을 한눈에 볼 수 있는 사이트 입니다.\n‘동아리랑’은 동국대학교 2025 동아리 박람회의 모든 부스 및 공연 정보를 한데 모은 통합 안내 웹서비스입니다.\n지도 그림 기반 UI를 통해 각 부스의 위치, 공연 시간표, 참여 동아리의 상세 정보까지 실시간으로 확인할 수 있습니다.",
    detailDescription:
      "React 19 기반으로 구축된 본 프로젝트는 지도 일러스트를 중심으로\n공연 및 부스 정보를 직관적으로 확인할 수 있도록 기획되었습니다.\nFramer-motion을 활용한 부드러운 애니메이션과 모바일 최적화 UI, 실시간 검색 기능을 통해\n축제 현장의 몰입감을 웹에서도 그대로 경험할 수 있도록 구현했습니다.",
    categories: ["React", "JavaScript", "Team"],
    feature: true,
    image: "/images/projectsImage/DongBak.png",
    SemiInfo: [
      "2025.02 - 2025.03 (2개월)",
      "Team project",
      "Frontend Developer",
      "https://github.com/taejun0/2025_DongBak_Frontend",
      "https://2025-dgu-dongbak.netlify.app/",
    ],
    stack: [
      "React 19 - 컴포넌트 기반 아키텍처로 UI를 효율적으로 분리할 수 있고, 프로젝트의 확장성과 유지보수에 강함, 각 페이지 및 기능 단위를 독립적인 컴포넌트로 분리 (MainNavigation, FloatingBubbles, SearchPage 등)",
      "React Router v7- 박람회 웹은 여러 페이지로 구성된 SPA이기 때문에, 페이지 간 이동, 상태 전달, 예외 처리 등이 필요함",
      "Styled-components - 박람회 사이트 특성상 감성적인 UI를 많이 다뤄야 했고, CSS-in-JS 방식은 컴포넌트 단위로 스타일을 관리할 수 있어 가독성과 유지보수성이 뛰어남",
      "Framer-motion - 메인 페이지와 같이 시각적으로 감성적인 분위기가 중요한 곳에서 부드러운 모션 효과는 몰입도를 높임",
    ],
    features: {
      problem: [
        "기존 박람회 정보가 종이 리플렛이나 SNS에 분산되어 있어, 방문객이 부스를 효율적으로 탐색하기 어려움",
      ],
      user: [
        "지도 기반 부스 안내: 박람회장을 지도처럼 시각화하여 클릭만으로 부스 위치, 동아리, 테마 확인 가능",
        "부스 정보 통합 검색: 키워드를 통해 원하는 동아리 부스 검색",
        "공연 일정 실시간 제공: 현재 진행 중인 공연 및 예정 공연을 한눈에 확인",
        "모바일 친화 UI: 직관적인 모바일 UI/UX 및 QR코드 간편 접근",
      ],
      admin: [
        "GitHub 및 Netlify를 통한 정적 배포 관리",
        "향후 공연 정보 및 부스 배치 데이터 연동을 위한 컴포넌트 구조화 설계",
      ],
    },
    roles: [
      "메인 화면 및 페이지 전환 시스템 구성\n  - MainNavigation 컴포넌트로 헤더 네비게이션을 구성\n  - Custom rountinghook 을 작성하여 goToPage, goBack, goForward 기능을 분리하여 페이지 간 이동 흐름을 일관성 있게 관리\n  - Floating Bubble Animation을 추가하여 랜덤한 위치, 크기, 투명도를 가진 물방울을 주기적으로 생성하여 몽환적인 시각 효과 연출",
      "부스/푸드트럭 통합 검색 기능 구현\n  - Custom 훅 useBoothSearch를 개발함, 사용자 입력에 디바운스(300ms)를 적용함",
      "스타일링 및 반응형 대응\n  - Props 기반 동적 스타일링을 적용\n  - $isActive, $isNothing 등 조건부 스타일 처리로 UI 시각적 표현 강화",
      "예외 페이지 및 에러 UX 처리\n  - 404 또는 검색 결과 없음 처리 - 적절한 안내 메시지와 함께 ErrorBox를 제공\n  - 페이지 구분형 예외 메시지 렌더링\n  - useReloadPage 훅을 이용하여 페이지 새로고침 기능 제공",
    ],
    challenges: [
      {
        problem:
          "초기 개발 환경에서 npm을 사용했을 때, 다음과 같은 문제가 발생함:\n- 팀원 간 node_modules나 package-lock.json 충돌\n- 동일한 명령어 실행에도 의존성 차이 발생\n- 설치 속도 및 캐시 성능 저하",
        solution:
          "- npm ci를 도입하여 고정된 lock 파일 기반으로 설치\n- .npmrc를 통해 strict-version 설정 강화\n- 결국 npm 대신 yarn으로 패키지 매니저 전환 시도",
        learnings:
          "- 패키지 매니저 변경만으로도 개발 안정성과 협업 효율성이 향상될 수 있음을 경험\n- 특히 프로젝트 초기에 통일된 환경을 만드는 것이 장기적인 유지보수에 매우 중요하다는 점을 체감",
      },
      {
        problem:
          "부스 검색 기능 구현 당시, 사용자의 입력 타이밍마다 API가 호출되어 다음과 같은 문제가 발생:\n- 과도한 API 트래픽\n- 느린 네트워크 환경에서 지연/중복 결과 표시\n- UX 저하 및 페이지 렉 발생 가능성",
        solution:
          "- onChange에 조건문을 넣어 빈 문자열일 경우 차단\n- 일정 길이 이하일 때는 요청 제한\n- 근본적으로 해결하기 위해 Debounce 적용 고려",
        learnings:
          "- 사용자의 실시간 입력에 반응하는 기능은 직접적인 UX/성능 영향 요소이므로, 디바운싱과 같은 기술이 필수적\n- 단순히 호출을 줄이는 것보다 의도하지 않은 요청을 제어하고, 사용자의 입력 흐름을 고려한 UX 설계가 중요",
      },
    ],
  },
  {
    name: "SMART",
    description:
      "2025 동국대학교 캡스톤 디자인 작품, AI 기반 병사 체력 훈련 서비스",
    overview:
      "아직, 대한민국은 휴전 국가이며 보병 위주의 군사들을 키워오고 있습니다.\nSMART는 군 장병들의 체력 훈력을 지원하기 위해 개발된 웹 서비스입니다.\nMediaPipe 기반의 AI 자세 분석 기술을 통해 병사의 동작을 실시간으로 인식, 피드백하여 병사들의 훈련 동기를 자극합니다.",
    detailDescription:
      "SMART는 단순한 체력 측정을 넘어서, 병사 개개인의 훈련 데이터를 기반으로\nAI 피드백을 제공하는 웹 기반 훈련 보조 서비스입니다.\n훈련은 단순 반복보다는 정교한 자세와 피드백을 통해 개선되어야 하며,\n이는 병사의 동기부여 및 장기적인 체력 향상에 기여할 수 있습니다.\n특히 MediaPipe 기반 자세 분석, 실시간 카운트 및 피드백 제공, 누적 통계 시각화 기능을 통해\n훈련자에게 구체적이고 직관적인 정보를 제공합니다.",
    categories: ["React", "JavaScript", "AI", "Solo"],
    feature: true,
    image: "/images/projectsImage/SMART.png",
    SemiInfo: [
      "2025.05 - 현재 추가 개발 중",
      "Solo project",
      "기획, 개발",
      "https://github.com/taejun0/SMART_FE",
      "link1",
    ],
    stack: [
      "라우팅: react-router-domv7 -  SPA 방식에서 페이지 간 전환을 자연스럽게 처리하고, URL 기반 라우팅 제어가 필요한 상황에서 가장 보편적이고 안정적인 선택지",
      "상태관리: zustand - 전역 상태 관리가 필요한 훈련 결과, 피드백, 종목별 등급, 페이지 간 데이터 전달 등을 가볍고 직관적으로 관리하기 위함",
      "스타일링: styled-components (CSS-in-JS) -컴포넌트 단위 스타일링을 통해 디자인 일관성을 유지하고, 테마 기반 색상 관리 및 전역 스타일 정의에 유리함",
      "HTTP 통신: axios",
      "AI 자세 분석 - 포즈 추정 라이브러리 (@mediapipe/pose, @mediapipe/camera_utils",
      "시각화: 그래프 - recharts, 로딩 인디케이터 - react-spinners",
      "날짜: dayjs",
      "슬라이더: swiper",
    ],
    features: {
      problem: [
        "기존 군 체력 훈련은 반복 중심이며, 정성적 피드백이 부족함",
        "정확한 자세로 운동했는지 병사 스스로 인지하기 어려움",
      ],
      user: [
        "훈련 종목 선택 및 시작",
        "자세 인식 기반 실시간 카운트 및 피드백 제공",
        "훈련 요약 및 최근 기록과 비교 시각화",
      ],
      admin: [
        "현재는 개인 사용 중심이지만, 향후 관리자 페이지를 통한 병사별 훈련 기록 집계 및 통계 기능 확장 예정",
      ],
    },
    roles: [
      "서비스 기획 및 전체 흐름 설계",
      "React 기반 프론트엔드 개발 (컴포넌트 기반 구조)",
      "MediaPipe Pose를 활용한 실시간 자세 분석 및 피드백 시스템 구현",
      "Zustand 상태 관리 및 로컬 스토리지 저장",
      "훈련 기록 시각화를 위한 recharts 도입 및 Swiper UI 구성",
      "Vercel 배포 시 SPA 라우팅 문제 해결 (vercel.json 설정)",
    ],
    challenges: [
      {
        problem: "Vercel 배포 환경에서 SPA 라우팅 시 404 오류 발생",
        solution:
          "vercel.json 파일을 생성하여 모든 경로를 '/'로 리디렉션하도록 설정",
        learnings:
          "SPA 구조에서 클라이언트 라우팅과 서버 라우팅의 차이를 명확히 이해하게 되었고, 배포 시 설정 파일을 통한 해결 방법을 익힘",
      },
      {
        problem: "실시간 포즈 인식 정확도가 낮아 잘못된 피드백 발생",
        solution:
          "관절 각도 기반 기준값을 조정하고, up/down 상태 진입 조건을 개선",
        learnings:
          "MediaPipe의 pose landmarks 구조를 정확히 이해하고, 포즈 기준을 사용자 관점에서 튜닝하는 경험을 쌓음",
      },
    ],
  },
  {
    name: "포트폴리오 사이트",
    description: "제 자신을 표현하고 소개하는 사이트입니다",
    overview:
      '저를 가장 잘 표현할 수 있는 색이 회색이라 생각하여, 선택하게 되었습니다.\n"흑과 백이 아닌 회색의 명도차일 뿐이다."\n어린 시절부터 제가 가지고 있던 하나의 신념입니다.\n갈등 상황 속에서도 다양한 의견과 스펙트럼이 있음을 알고 이를 존중합니다.',
    detailDescription:
      "React, TypeScript, Next.js를 기반으로 한 정적 포트폴리오 웹사이트로\n프론트엔드 개발자로서의 저를 소개하는 페이지입니다.\nEmotion과 Framer Motion을 활용한 슬라이드 기반 인터페이스를 구성하였습니다.",
    categories: ["React", "TypeScript", "Next.js", "Solo"],
    feature: true,
    image: "/images/projectsImage/PortFolio.png",
    SemiInfo: [
      "2025.05 - 현재 추가 개발 중",
      "Solo project",
      "기획, 디자인, 개발",
      "https://github.com/taejun0/PortfolioPage",
      "https://portfolio-taejun.vercel.app/",
    ],
    stack: [
      "React 18 + TypeScript",
      "Next.js (App Router)",
      "Emotion (CSS-in-JS)",
      "Framer Motion (슬라이드 애니메이션)",
      "Zustand + Context API (상태 관리)",
      "React Query (비동기 데이터)",
      "Yarn Berry / PNPM (패키지 매니저)",
      "Webpack, ESBuild, SWC, Babel (번들링)",
      "Jest (테스트)",
      "GitHub Actions (CI/CD)",
      "Vercel (배포)",
    ],
    features: {
      problem: [
        "기존 PDF 형식의 포트폴리오는 프로젝트 내용을 체계적으로 보여주기 어렵고, 사용자와의 인터랙션이 불가능함",
        "기술적 성장과 고민을 동적으로 표현할 방법이 필요함",
      ],
      user: [
        "슬라이드 형식의 섹션 구성으로 포트폴리오 흐름을 자연스럽게 전달",
        "프로젝트별 상세 소개 및 기술 스택 태그 제공",
        "모바일에서도 반응형으로 자연스러운 인터페이스 구현",
        "다크 그레이 톤 기반의 테마로 깔끔하고 집중도 있는 UI",
      ],
      admin: [
        "GitHub 및 Vercel 기반의 배포 자동화로 관리 효율성 향상",
        "디자인-개발 분리 기반 구조 설계로 향후 유지보수 용이",
        "모든 콘텐츠를 컴포넌트화하여 재사용성과 확장성 확보",
      ],
    },
    roles: [
      "UX 기획: 스토리텔링 중심 구조 설계 및 슬라이드 레이아웃 구성",
      "UI 디자인: Figma 기반 시안 제작 및 인터랙션 흐름 설계",
      "개발: Next.js 기반 정적 웹사이트 전체 구현 및 배포 자동화",
      "성능 최적화: 번들 최적화, lazy loading, debounce 적용 등",
    ],
    challenges: [
      {
        problem:
          "초기 디자인 설계 없이 기능 위주로 개발 시 전체적인 흐름이 끊기고, 사용자 입장에서 어색한 경험을 제공하게 됨",
        solution:
          "Figma를 활용해 사용자 관점에서 동선을 설계한 후 개발을 시작하였고, 각 섹션을 스토리텔링 방식으로 구성해 흐름 개선",
        learnings:
          "기획-디자인-개발의 흐름을 유기적으로 연결하는 중요성을 체감하였고, 사용자 경험 중심 개발에 대한 인사이트를 얻게 됨",
      },
      {
        problem: "다양한 기술 스택을 표현하면서도 깔끔한 UI를 유지하기 어려움",
        solution:
          "Emotion으로 컴포넌트 단위 스타일을 관리하고, React Query와 Zustand로 로직을 모듈화해 UI와 기능을 분리",
        learnings:
          "모듈 단위로 로직을 관리하는 클린 아키텍처 설계의 중요성과 CSS-in-JS의 확장성과 편의성을 체험함",
      },
      {
        problem: "포트폴리오 수정 시마다 수동 배포의 번거로움 존재",
        solution:
          "GitHub Actions를 활용해 push 이벤트 기반 자동 배포 파이프라인 구성",
        learnings:
          "CI/CD 자동화를 통해 개인 프로젝트에서도 효율적인 개발-배포 루틴을 구성할 수 있음을 경험함",
      },
    ],
  },
];
