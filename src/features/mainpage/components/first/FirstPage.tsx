import * as S from "./FirstPage.styled";

import { SiVelog, SiGithub } from "react-icons/si";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

import TypewriterComponent from "typewriter-effect";

const FirstPage = () => {
  return (
    <S.Wrapper>
      <S.NameTitle>
        웹의 형태로 표현하고 소통하는 오태준입니다
        <S.FrontEnd>FRONTEND</S.FrontEnd>
      </S.NameTitle>
      <TypewriterComponent
        options={{
          strings: ["만나서 반갑습니다", "제 포트폴리오에 와주셔서 감사합니다"],
          autoStart: true,
          loop: true,
          delay: 60,
          deleteSpeed: 30,
          cursor: "|",
          skipAddStyles: false,
        }}
      />
      <S.ButtonList>
        <a href="/projects">
          <S.Buttons1>프로젝트 보러가기</S.Buttons1>
        </a>
        <S.Buttons2>이력서 다운하기</S.Buttons2>
      </S.ButtonList>
      <S.IconList>
        <a
          href="https://github.com/taejun0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub />
        </a>
        <a
          href="https://velog.io/@taejun0/posts"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiVelog />
        </a>
      </S.IconList>
      <S.DownArrow
        animate={{
          y: [0, 16, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.0,
          ease: "easeInOut",
        }}
      >
        <HiOutlineChevronDoubleDown />
      </S.DownArrow>
    </S.Wrapper>
  );
};

export default FirstPage;
