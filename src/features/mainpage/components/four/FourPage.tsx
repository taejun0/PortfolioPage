import * as S from "./FourPage.styled";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const projectList = [
  {
    title: "D-Order",
    description: `축제 현장 주문 플랫폼\nQR 기반 테이블 주문 구조\nReact + Zustand로 상태 관리\n프론트엔드 팀장으로 MVP 설계 및 핵심 기능 구현 전담`,
    period: "2024.10 ~ 2024.11",
    tags: ["Team", "React", "TypeScript", "Zustand", "MVP 설계"],
    image: "/images/projects/project4.svg",
    link: "https://github.com/LikeLion-at-DGU/2025-d-order-frontend-admin",
  },
  {
    title: "포트폴리오 페이지",
    description: `Emotion 기반 스타일 시스템 설계\nNext.js + TypeScript 기반 SSR 구성\n애니메이션과 섹션 스크롤로 시각적 몰입 강화`,
    period: "2025.07",
    tags: ["Solo", "React", "TypeScript", "emotion", "NextJs"],
    image: "/images/projects/project5.png",
    link: "https://github.com/taejun0/PortfolioPage",
  },
  {
    title: "우동친",
    description: `우리 동네 친환경 동물 생태 지도\nNaver Map + Reverse Geocoding 기반, 마커 렌더링 개선 및 위치 기반 로직 개선 주도`,
    period: "2025.05 ~ 2025.06",
    tags: ["Team", "React", "PWA", "Naver Maps"],
    image: "/images/projects/project2.svg",
    link: "https://github.com/taejun0/2024_udongchin_front",
  },
  {
    title: "동아리랑",
    description: `중앙동아리 탐색 및 가입 흐름 UX 설계\n사용자 페르소나 기반 UI 구성 및 스타일링\nGA(Google Analytics)로 사용자 행동 데이터 수집`,
    period: "2025.01 ~ 2025.02",
    tags: ["Team", "React", "GA", "UX"],
    image: "/images/projects/project3.svg",
    link: "https://github.com/LikeLion-at-DGU/2025_DongBak_Frontend",
  },
  {
    title: "MOHAE",
    description: `가족 구성원 간 일정·건강·문화생활 공유 플랫폼\n병원 진료 기록, 건강 챌린지, 가족 캘린더 등 일상 케어 기능 포함\nGit 충돌 문제 해결 경험`,
    period: "2024.06 ~ 2024.08",
    tags: ["Team", "React", "MVP 설계"],
    image: "/images/projects/project1.svg",
    link: "https://github.com/LikeLion-at-DGU/2024-hackathon-2-mohae-frontend",
  },
];

const FourPage = () => {
  return (
    <S.Wrapper id="projects">
      <S.Inner>
        <S.Title>Featured Projects</S.Title>
        <S.NavigationWrapper>
          <S.CustomNav className="custom-prev">
            <IoArrowBackOutline />
          </S.CustomNav>
          <S.CustomPagination className="custom-pagination" />
          <S.CustomNav className="custom-next">
            <IoArrowForwardOutline />
          </S.CustomNav>
        </S.NavigationWrapper>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          slidesPerView={1}
          centeredSlides
          loop
          spaceBetween={50}
          style={{ width: "100%" }}
        >
          {projectList.map((project, index) => (
            <SwiperSlide key={index}>
              <S.ProjectCard>
                <S.ProjectImage src={project.image} alt={project.title} />
                <S.ProjectInfo>
                  <S.ProjectTitle>{project.title}</S.ProjectTitle>
                  <S.ProjectPeriod>{project.period}</S.ProjectPeriod>
                  <S.ProjectDesc>{project.description}</S.ProjectDesc>
                  <S.TagList>
                    {project.tags.map((tag) => (
                      <S.Tag key={tag}>#{tag}</S.Tag>
                    ))}
                  </S.TagList>
                  <S.ProjectLink
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    👉 프로젝트 보러가기
                  </S.ProjectLink>
                </S.ProjectInfo>
              </S.ProjectCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Inner>
      <a href="/projects">
        <S.GoProjects>저의 모든 프로젝트를 보러가요 {"->"}</S.GoProjects>
      </a>
    </S.Wrapper>
  );
};

export default FourPage;
