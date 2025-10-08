import * as S from "./FirstPage.styled";

import Link from "next/link";
import { ROUTE_CONSTANTS } from "@constants/routeConstants";

import { SiVelog, SiGithub } from "react-icons/si";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

import TypewriterComponent from "typewriter-effect";

import { motion } from "framer-motion";

const FirstPage = () => {
  return (
    <S.Wrapper id="main">
      <S.NameTitle
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60, delay: 1.4 }}
      >
        웹의 형태로 표현하고 소통하는 오태준입니다
        <S.FrontEnd
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "tween",
            duration: 1.2,
            ease: "easeOut",
            delay: 0.6,
          }}
        >
          FRONTEND
        </S.FrontEnd>
      </S.NameTitle>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <TypewriterComponent
          options={{
            strings: [
              "만나서 반갑습니다",
              "제 포트폴리오에 와주셔서 감사합니다",
            ],
            autoStart: true,
            loop: true,
            delay: 60,
            deleteSpeed: 30,
            cursor: "|",
            skipAddStyles: false,
          }}
        />
      </motion.div>

      <S.ButtonList>
        <Link href={ROUTE_CONSTANTS.PROJECTS}>
          <S.Buttons1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 2 }}
          >
            프로젝트 보러가기
          </S.Buttons1>
        </Link>
        <Link href="/resume_otj.pdf" download>
          <S.Buttons2
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 2.2 }}
          >
            이력서 다운하기
          </S.Buttons2>
        </Link>
      </S.ButtonList>
      <S.IconList
        initial={{ scale: 0, rotate: 180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, delay: 2.6 }}
      >
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
