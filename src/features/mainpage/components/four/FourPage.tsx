import * as S from "./FourPage.styled";

import Image from "next/image";
import Link from "next/link";
import { ROUTE_CONSTANTS } from "@constants/routeConstants";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  IoArrowBackOutline,
  IoArrowForwardOutline,
  IoLogoGithub,
} from "react-icons/io5";

const projectList = [
  {
    title: "D-Order",
    description: `축제/행사 현장 주문·운영 플랫폼\nQR 테이블 입장 + 장바구니·송금 확인 흐름\nv3 WebSocket(주문/테이블/직원호출) 실시간 반영\n프론트엔드 팀장으로 핵심 UX/연결 안정화 로직 주도`,
    period: "2025.05 ~ (개선/운영 지속)",
    tags: ["Team", "React", "TypeScript", "Zustand", "MVP 설계"],
    image: "/images/projects/project4.svg",
    link: "https://github.com/D-Order/2026-d-order-fe-admin-v3",
  },
  {
    title: "포트폴리오 페이지",
    description: `Emotion 기반 스타일 시스템 설계\nNext.js + TypeScript 기반 SSR 구성\n애니메이션과 섹션 스크롤로 시각적 몰입 강화`,
    period: "2025.07",
    tags: ["Solo", "React", "TypeScript", "emotion", "NextJs"],
    image: "/images/projects/project5.png",
    link: "https://github.com/taejun0/PortfolioPage",
  },
];

const FourPage = () => {
  return (
    <S.Wrapper>
      <S.Inner>
        <S.HeaderSection>
          <S.SectionLabel>PROJECTS</S.SectionLabel>
          <S.Title>Featured Projects</S.Title>
        </S.HeaderSection>

        <S.Divider />

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
          centeredSlides={false}
          loop={false}
          spaceBetween={50}
          style={{ width: "100%" }}
        >
          {projectList.map((project, index) => (
            <SwiperSlide key={index}>
              <S.ProjectCard>
                <S.ProjectImageWrapper>
                  <Image
                    src={project.image}
                    alt={`${project.title} 대표 이미지`}
                    width={1200}
                    height={480}
                    sizes="(max-width: 768px) 100vw, 45vw"
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </S.ProjectImageWrapper>
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
                    프로젝트 보러가기
                    <IoLogoGithub />
                  </S.ProjectLink>
                </S.ProjectInfo>
              </S.ProjectCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Inner>
      <Link href={ROUTE_CONSTANTS.PROJECTS}>
        <S.GoProjects>저의 모든 프로젝트를 보러가요 {"->"}</S.GoProjects>
      </Link>
    </S.Wrapper>
  );
};

export default FourPage;
