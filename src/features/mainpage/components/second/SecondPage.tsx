import * as S from "./SecondPage.styled";

import Link from "next/link";
import { ROUTE_CONSTANTS } from "@constants/routeConstants";

const SecondPage = () => {
  return (
    <S.Wrapper id="about">
      <S.Container>
        <S.Container1>
          <S.AboutTitle>About ME</S.AboutTitle>
          <S.AboutText>
            {`소통, 경험, 협업

          FrontEnd는 화면(View)을 통해 사용자와 가장 먼저 소통합니다.
          복잡한 내용을 명확하게 전달하고,  
          사용자 흐름에 따라 자연스럽게 이어지는 화면을 설계합니다.

          단순한 UI가 아닌 머무르고 싶은 경험을 만드는 것이 목표입니다.  
          한 줄의 문구, 한 픽셀의 마진에도 이유를 담고
          사용자의 입장에서 반복해 고민합니다.

          저는 혼자일 때보다 함께일 때
          더 나은 결과가 만들어진다고 믿습니다.
          팀원들과 끊임없이 대화하고, 설득하고, 조율하며  
          모두가 납득할 수 있는 방향으로 나아가고자 합니다.`}
          </S.AboutText>
          <Link href={ROUTE_CONSTANTS.ABOUT}>
            <S.GoAboutMe>저에 대해 자세히 알아봐요 {"->"}</S.GoAboutMe>
          </Link>
        </S.Container1>
        <S.Container2>
          <S.PortfolioImage
            src="/images/portFolio/myPicture.jpeg"
            alt="오태준 프로필"
            width={640}
            height={800}
            style={{ paddingRight: 20, minWidth: 80 }}
            priority
          />
        </S.Container2>
      </S.Container>
    </S.Wrapper>
  );
};

export default SecondPage;
