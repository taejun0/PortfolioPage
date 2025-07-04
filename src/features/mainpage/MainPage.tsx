import * as S from "./MainPage.styled";
import FirstPage from "./components/first/FirstPage";
import SecondPage from "./components/second/SecondPage";
import ThirdPage from "./components/third/ThirdPage";
import FourPage from "./components/four/FourPage";
import FivePage from "./components/five/Fivepage";

const MainPage = () => {
  return (
    <S.Wrapper>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourPage />
      <FivePage />
    </S.Wrapper>
  );
};

export default MainPage;
