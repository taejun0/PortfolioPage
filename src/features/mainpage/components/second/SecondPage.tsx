import * as S from "./SecondPage.styled";

import Link from "next/link";
import { ROUTE_CONSTANTS } from "@constants/routeConstants";
import { forwardRef } from "react";

interface SecondPageProps {
  profileRef: React.RefObject<HTMLImageElement>;
}

const SecondPage = ({ profileRef }: SecondPageProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Container1>
          <S.AboutTitle>ABOUT ME</S.AboutTitle>
          <S.AboutText>
            <span className="highlight">소통</span>,&nbsp;
            <span className="highlight">경험</span>,&nbsp;
            <span className="highlight">협업</span>
            <hr />
            <br />
            FrontEnd는 <span className="highlight">화면(View)</span>을 통해
            <br />
            사용자와 가장 먼저 소통합니다.
            <br />
            <br />
            복잡한 내용을 명확하게 전달하고,
            <br />
            <span className="highlight">사용자 흐름</span>에 따라 자연스럽게
            이어지는 화면을 설계합니다.
            <br />
            <br />
            단순한 UI가 아닌{" "}
            <span className="highlight">머무르고 싶은 경험</span>을
            <br /> 만드는 것이 목표입니다.
            <br />
            한 줄의 문구, 한 픽셀의 마진에도 이유를 담고
            <br />
            <span className="highlight">사용자의 입장</span>에서 반복해
            고민합니다.
            <br />
            <br />
            저는 <span className="highlight">혼자</span>일 때보다{" "}
            <span className="highlight">함께</span>일 때<br />더 나은{" "}
            <span className="highlight">결과</span>가 만들어진다고 믿습니다.
            <br />
            팀원들과 끊임없이 대화하고, 설득하고, 조율하며
            <br />
            <span className="highlight">모두가 납득할 수 있는 방향</span>으로
            나아가고자 합니다.
          </S.AboutText>
          <Link href={ROUTE_CONSTANTS.ABOUT}>
            <S.GoAboutMe>저에 대해 자세히 알아봐요 {"->"}</S.GoAboutMe>
          </Link>
        </S.Container1>
        <S.Container2>
          <S.PortfolioImage
            ref={profileRef}
            className="dock-target"
            src="/images/portFolio/myPicture.jpeg"
            alt="오태준 프로필"
            width={640}
            height={800}
            sizes="(max-width: 768px) 100vw, 400px"
            priority
          />
        </S.Container2>
      </S.Container>
    </S.Wrapper>
  );
};

export default SecondPage;
