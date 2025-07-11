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
    detailDescription: "뭐랑뭐랑무 씀",
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
      "React 18 및 TypeScript를 기반으로 컴포넌트 기반 UI 설계",
      "React Router v6의 Outlet과 useNavigate를 활용한 중첩 라우팅",
      "Zustand로 전역 장바구니 상태 관리",
      "Axios 요청/응답 인터셉터 및 인증 토큰 갱신 처리",
      "styled-components 및 keyframes를 활용한 스타일링과 애니메이션 처리",
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
      "60여 개의 동아리 정보와 공연일정을 한눈에 볼 수 있는 사이트 입니다. ‘동아리랑’은 동국대학교 2025 동아리 박람회의 모든 부스 및 공연 정보를 한데 모은 통합 안내 웹서비스입니다. 지도 그림 기반 UI를 통해 각 부스의 위치, 공연 시간표, 참여 동아리의 상세 정보까지 실시간으로 확인할 수 있습니다.",
    detailDescription: "",
    categories: ["React", "JavaScript", "Team"],
    feature: false,
    image: "/images/projectsImage/DongBak.png",
    SemiInfo: [
      "2025.02 - 2025.03 (2개월)",
      "Team project",
      "Frontend Developer",
      "https://github.com/taejun0/2025_DongBak_Frontend",
      "https://2025-dgu-dongbak.netlify.app/",
    ],
    stack: [""],
    features: {
      problem: [""],
      user: [""],
      admin: [""],
    },
    roles: [""],
    challenges: [
      {
        problem: "",
        solution: "",
        learnings: "",
      },
    ],
  },
  {
    name: "SMART",
    description:
      "2025 동국대학교 캡스톤 디자인 작품, AI 기반 병사 체력 훈련 서비스",
    overview:
      "아직, 대한민국은 휴전 국가이며 보병 위주의 군사들을 키워오고 있습니다. SMART는 군 장병들의 체력 훈력을 지원하기 위해 개발된 웹 서비스입니다. MediaPipe 기반의 AI 자세 분석 기술을 통해 병사의 동작을 실시간으로 인식, 피드백하여 병사들의 훈련 동기를 자극합니다.",
    detailDescription: "",
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
    stack: [""],
    features: {
      problem: [""],
      user: [""],
      admin: [""],
    },
    roles: [""],
    challenges: [
      {
        problem: "",
        solution: "",
        learnings: "",
      },
    ],
  },
  {
    name: "포트폴리오 사이트",
    description: "제 자신을 표현하고 소개하는 사이트입니다",
    overview: " ",
    detailDescription: " ",
    categories: ["React", "TypeScript", "Next.js", "Solo"],
    feature: true,
    image: "/images/projectsImage/PortFolio.png",
    SemiInfo: [
      "2025.05 - 현재 추가 개발 중",
      "Solo project",
      "기획, 디자인, 개발",
      "https://github.com/taejun0/PortfolioPage",
      "link1",
    ],
    stack: [""],
    features: {
      problem: [""],
      user: [""],
      admin: [""],
    },
    roles: [""],
    challenges: [
      {
        problem: "",
        solution: "",
        learnings: "",
      },
    ],
  },
];
