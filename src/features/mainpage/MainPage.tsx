import * as S from "./MainPage.styled";
import FirstPage from "./components/first/FirstPage";
import SecondPage from "./components/second/SecondPage";

const MainPage = () => {
  return (
    <S.Wrapper>
      <FirstPage />
      <SecondPage />
    </S.Wrapper>
  );
};

export default MainPage;
