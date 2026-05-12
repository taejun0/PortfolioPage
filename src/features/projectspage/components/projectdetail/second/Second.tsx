"use client";

import * as S from "./Second.styled";
import Third from "../third/Third";
import { HiOutlineExternalLink } from "react-icons/hi";

function hostLabel(url: string, index: number): string {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    return host || `Link ${index + 1}`;
  } catch {
    return `Link ${index + 1}`;
  }
}

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
              <S.LinkPreviewList>
                {links.map((link, index) => (
                  <S.LinkPreviewItem
                    key={`${link}-${index}`}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
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
