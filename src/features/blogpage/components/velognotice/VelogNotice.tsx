import * as S from "./VelogNotice.styled";
import { format } from "date-fns";
import { ko } from "date-fns/locale/ko";

interface VelogNoticeProps {
  cutoffDate?: string; // Velog 마이그레이션 기준 날짜
  velogUrl?: string; // Velog 프로필 URL
}

const VelogNotice = ({ 
  cutoffDate = "2026-01-02", 
  velogUrl = "https://velog.io/@taejun0" 
}: VelogNoticeProps) => {
  const formattedDate = cutoffDate
    ? format(new Date(cutoffDate), "yyyy년 M월 d일", { locale: ko })
    : null;

  return (
    <S.Wrapper>
      <S.Container>
        <S.Text>
          {formattedDate 
            ? `${formattedDate} 까지의 기술 블로그는 Velog에서 작성되었습니다. ` 
            : "이전의 기술 블로그는 Velog에서 작성되었습니다. "}
          <S.Link href={velogUrl} target="_blank" rel="noopener noreferrer">
            Velog에서 보기 →
          </S.Link>
        </S.Text>
      </S.Container>
    </S.Wrapper>
  );
};

export default VelogNotice;

