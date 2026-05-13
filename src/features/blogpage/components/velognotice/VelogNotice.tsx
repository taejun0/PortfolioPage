"use client";

import * as S from "./VelogNotice.styled";
import { format } from "date-fns";
import { ko } from "date-fns/locale/ko";
import { trackOutboundProfile } from "@lib/analytics/events";
import { BLOG_DATE_FORMAT, BLOG_VELOG_NOTICE_UI } from "@constants";

interface VelogNoticeProps {
  cutoffDate?: string; // Velog 마이그레이션 기준 날짜
  velogUrl?: string; // Velog 프로필 URL
}

const VelogNotice = ({
  cutoffDate = "2026-01-02",
  velogUrl = "https://velog.io/@taejun0",
}: VelogNoticeProps) => {
  const formattedDate = cutoffDate
    ? format(new Date(cutoffDate), BLOG_DATE_FORMAT, { locale: ko })
    : null;

  return (
    <S.Wrapper>
      <S.Container>
        <S.Text>
          {formattedDate
            ? `${formattedDate}${BLOG_VELOG_NOTICE_UI.withCutoff}`
            : BLOG_VELOG_NOTICE_UI.legacy}
          <S.Link
            href={velogUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackOutboundProfile(velogUrl, "blog_velog_notice_link")
            }
          >
            {BLOG_VELOG_NOTICE_UI.link}
          </S.Link>
        </S.Text>
      </S.Container>
    </S.Wrapper>
  );
};

export default VelogNotice;
