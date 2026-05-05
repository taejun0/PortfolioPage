"use client";

import * as S from "./Second.styled";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import Third from "../third/Third";

interface Props {
  SemiInfo: string[];
  overview: string;
  projectName?: string;
  stack: string[];
  features: {
    problem: string[];
    user: string[];
    admin?: string[];
  };
  roles: string[];
  challenges: {
    problem: string;
    solution: string;
    learnings: string;
  }[];
}

const Second = ({
  SemiInfo,
  overview,
  projectName = "",
  stack,
  features,
  roles,
  challenges,
}: Props) => {
  // Links 파싱 (공백으로 구분된 URL들)
  const links = SemiInfo[4]
    ? SemiInfo[4].trim().split(/\s+/).filter((link) => link.length > 0)
    : [];
  const [selectedLinkIndex, setSelectedLinkIndex] = useState(0);
  const currentLink = links.length > 0 ? links[selectedLinkIndex] : null;

  // 모바일 전용 프로젝트 체크 (D-order admin, 포트폴리오 제외)
  const isMobileOnly: boolean =
    currentLink !== null &&
    !currentLink.includes("d-order-fe-admin") &&
    !currentLink.includes("taejun0-portfolio") &&
    !currentLink.includes("portfolio.site");

  return (
    <S.Wrapper>
      <S.Top>
        <S.Preview $isMobile={isMobileOnly}>
          {links.length > 0 && (
            <S.SemiBox>
              <S.OverviewHeader>
                <S.SemiTitle>Overview</S.SemiTitle>
                <S.ViewButton
                  href={currentLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </S.ViewButton>
              </S.OverviewHeader>
              {links.length > 1 ? (
                <S.LinksSwiperWrapper>
                  <S.CustomNav className="links-prev">
                    <IoArrowBackOutline />
                  </S.CustomNav>
                  <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    navigation={{
                      nextEl: ".links-next",
                      prevEl: ".links-prev",
                    }}
                    slidesPerView={1}
                    onSlideChange={(swiper) =>
                      setSelectedLinkIndex(swiper.activeIndex)
                    }
                    style={{ width: "100%" }}
                  >
                    {links.map((link, index) => (
                      <SwiperSlide key={index}>
                        <S.IframeWrapper $isMobile={isMobileOnly}>
                          <S.Iframe
                            src={link}
                            title={`Project Preview ${index + 1}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            $isMobile={isMobileOnly}
                          />
                        </S.IframeWrapper>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <S.CustomNav className="links-next">
                    <IoArrowForwardOutline />
                  </S.CustomNav>
                </S.LinksSwiperWrapper>
              ) : (
                currentLink && (
                  <S.IframeWrapper $isMobile={isMobileOnly}>
                    <S.Iframe
                      src={currentLink}
                      title="Project Preview"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      $isMobile={isMobileOnly}
                    />
                  </S.IframeWrapper>
                )
              )}
            </S.SemiBox>
          )}
        </S.Preview>

        <S.Info>
        <S.SemiBox>
          <S.SemiTitle>Timeline</S.SemiTitle>
          <S.SemiContent>{SemiInfo[0]}</S.SemiContent>
        </S.SemiBox>
        <S.SemiBox>
          <S.SemiTitle>Team</S.SemiTitle>
          <S.SemiContent>{SemiInfo[1]}</S.SemiContent>
        </S.SemiBox>
        <S.SemiBox>
          <S.SemiTitle>Role</S.SemiTitle>
          <S.SemiContent>{SemiInfo[2]}</S.SemiContent>
        </S.SemiBox>
        <S.SemiBox>
          <S.SemiTitle>Github</S.SemiTitle>
          <S.SemiContent>{SemiInfo[3]}</S.SemiContent>
        </S.SemiBox>
        {links.length > 0 && (
          <S.SemiBox>
            <S.SemiTitle>Links</S.SemiTitle>
            <S.SemiContent>
              {SemiInfo[4]?.split(/\n/).map((line, lineIndex) => {
                const lineLinks = line
                  .trim()
                  .split(/\s+/)
                  .filter((link) => link.length > 0);
                return (
                  <span key={lineIndex}>
                    {lineLinks.map((link, linkIndex) => (
                      <span key={linkIndex}>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                          {link}
                        </a>
                        {linkIndex < lineLinks.length - 1 && " "}
                      </span>
                    ))}
                    {lineIndex < SemiInfo[4].split(/\n/).length - 1 && <br />}
                  </span>
                );
              })}
            </S.SemiContent>
          </S.SemiBox>
        )}
        </S.Info>
      </S.Top>

      <Third
        stack={stack}
        features={features}
        roles={roles}
        challenges={challenges}
      />
    </S.Wrapper>
  );
};

export default Second;
