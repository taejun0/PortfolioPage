import * as S from "./FourPage.styled";

import Image from "next/image";
import Link from "next/link";
import { ROUTE_CONSTANTS, MAIN_FEATURED_PROJECTS, MAIN_FOUR_PAGE_UI } from "@constants";

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

const U = MAIN_FOUR_PAGE_UI;

const FourPage = () => {
  return (
    <S.Wrapper>
      <S.Inner>
        <S.HeaderSection>
          <S.SectionLabel>{U.sectionLabel}</S.SectionLabel>
          <S.Title>{U.title}</S.Title>
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
          {MAIN_FEATURED_PROJECTS.map((project, index) => (
            <SwiperSlide key={index}>
              <S.ProjectCard>
                <S.ProjectImageWrapper>
                  <Image
                    src={project.image}
                    alt={`${project.title} ${U.imageAltSuffix}`}
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
                    {U.projectLinkCta}
                    <IoLogoGithub />
                  </S.ProjectLink>
                </S.ProjectInfo>
              </S.ProjectCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Inner>
      <Link href={ROUTE_CONSTANTS.PROJECTS}>
        <S.GoProjects>
          {U.goProjects} {U.goProjectsArrow}
        </S.GoProjects>
      </Link>
    </S.Wrapper>
  );
};

export default FourPage;
