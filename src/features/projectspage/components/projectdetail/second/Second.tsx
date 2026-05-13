"use client";

import * as S from "./Second.styled";
import Third from "../third/Third";
import { HiOutlineExternalLink } from "react-icons/hi";
import { trackProjectOutboundLink } from "@lib/analytics/events";
import { PROJECT_DETAIL_SECOND_UI } from "@constants";

function hostLabel(url: string, index: number): string {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    return host || `Link ${index + 1}`;
  } catch {
    return `Link ${index + 1}`;
  }
}

const L = PROJECT_DETAIL_SECOND_UI;

interface Props {
  SemiInfo: string[];
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
  stack,
  features,
  roles,
  challenges,
}: Props) => {
  const links = SemiInfo[4]
    ? SemiInfo[4].trim().split(/\s+/).filter((link) => link.length > 0)
    : [];

  return (
    <S.Wrapper>
      <S.Top>
        <S.Info>
          <S.SemiBox>
            <S.SemiTitle>{L.timeline}</S.SemiTitle>
            <S.SemiContent>{SemiInfo[0]}</S.SemiContent>
          </S.SemiBox>
          <S.SemiBox>
            <S.SemiTitle>{L.team}</S.SemiTitle>
            <S.SemiContent>{SemiInfo[1]}</S.SemiContent>
          </S.SemiBox>
          <S.SemiBox>
            <S.SemiTitle>{L.role}</S.SemiTitle>
            <S.SemiContent>{SemiInfo[2]}</S.SemiContent>
          </S.SemiBox>
          <S.SemiBox>
            <S.SemiTitle>{L.github}</S.SemiTitle>
            <S.SemiContent>{SemiInfo[3]}</S.SemiContent>
          </S.SemiBox>
          {links.length > 0 && (
            <S.SemiBox>
              <S.SemiTitle>{L.links}</S.SemiTitle>
              <S.LinkPreviewList>
                {links.map((link, index) => (
                  <S.LinkPreviewItem
                    key={`${link}-${index}`}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      try {
                        const u = new URL(link);
                        trackProjectOutboundLink(
                          link,
                          u.hostname.replace(/^www\./, "")
                        );
                      } catch {
                        trackProjectOutboundLink(link, "invalid_url");
                      }
                    }}
                  >
                    <span>{hostLabel(link, index)}</span>
                    <HiOutlineExternalLink aria-hidden />
                  </S.LinkPreviewItem>
                ))}
              </S.LinkPreviewList>
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
