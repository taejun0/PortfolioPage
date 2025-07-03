import * as S from "./SecondPage.styled";

const SecondPage = () => {
  return (
    <S.Wrapper>
      <S.Container1>
        <S.AboutTitle>About ME</S.AboutTitle>
        <S.AboutText>
          {`FrontEnd는 화면(View)를 통해
          사용자와 직접 소통하는 것이라 생각합니다.

          단순히 기능이 굴러가는 UI가 아닌, 사용자와 소통하는
          "경험"을 설계하고 구현하는 것에 가장 집중합니다.

          사용자의 입장에서 끊임없이 고민하고,
          팀원들과는 적극적인 소통과 협업으로 더 나은 방향을 함께 찾아갑니다.

          설득과 조율, 그리고 타협이 필요한 순간마다
          적극적으로 대화하며 모두가 납득할 수 있는 결정을 이끌어냅니다.

          UI는 결국 사람과의 대화라고 믿기에,
          직관적이고 따뜻한 인터페이스를 만들어가고 싶습니다.`}
        </S.AboutText>
        <S.GoAboutMe>{"->"} 저에 대해 자세히 알아봐요</S.GoAboutMe>
      </S.Container1>
      <S.Container2>
        <S.PortfolioImage src="/images/portFolio/myPicture.jpeg" />
      </S.Container2>
    </S.Wrapper>
  );
};

export default SecondPage;
