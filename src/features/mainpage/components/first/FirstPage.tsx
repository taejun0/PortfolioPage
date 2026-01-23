import * as S from "./FirstPage.styled";

import Link from "next/link";
import { ROUTE_CONSTANTS } from "@constants/routeConstants";

import { SiVelog, SiGithub } from "react-icons/si";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

import TypewriterComponent from "typewriter-effect";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const FirstPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // 타이틀 텍스트를 단어별로 분리
  const titleText = "웹의 형태로 표현하고 소통하는 오태준입니다";
  const titleWords = titleText.split(" ");

  return (
    <S.Wrapper id="main">
      <S.BackgroundGradient
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      <S.ContentContainer>
        <S.FrontEnd
          initial={{ y: -80, opacity: 0, scale: 0.95, filter: "blur(20px)" }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.2,
            ease: [0.34, 1.56, 0.64, 1],
            delay: 0.2,
          }}
        >
          FRONTEND
        </S.FrontEnd>

        <S.NameTitle>
          {titleWords.map((word, wordIndex) => (
            <S.WordWrapper key={wordIndex}>
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={`${wordIndex}-${charIndex}`}
                  initial={{
                    opacity: 0,
                    y: 30,
                    filter: "blur(10px)",
                    scale: 0.8,
                  }}
                  animate={
                    isLoaded
                      ? {
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                          scale: 1,
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.5,
                    ease: [0.34, 1.56, 0.64, 1],
                    delay: 0.5 + wordIndex * 0.1 + charIndex * 0.03,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </S.WordWrapper>
          ))}
        </S.NameTitle>

        <S.TypewriterWrapper
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={
            isLoaded
              ? {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }
              : {}
          }
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
            delay: 1.2,
          }}
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
        </S.TypewriterWrapper>

        <S.ButtonList
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
            delay: 1.5,
          }}
        >
          <Link href={ROUTE_CONSTANTS.PROJECTS}>
            <S.Buttons1
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.span
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.7, duration: 0.4 }}
              >
                프로젝트 보러가기
              </motion.span>
            </S.Buttons1>
          </Link>
          <a href="/resume_otj.pdf" download>
            <S.Buttons2
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.span
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.4 }}
              >
                이력서 다운하기
              </motion.span>
            </S.Buttons2>
          </a>
        </S.ButtonList>

        <S.IconList
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={isLoaded ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
            delay: 1.9,
          }}
        >
          <motion.a
            href="https://github.com/taejun0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.2,
              rotate: [0, -10, 10, -10, 0],
              y: -5,
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <SiGithub />
          </motion.a>
          <motion.a
            href="https://velog.io/@taejun0/posts"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.2,
              rotate: [0, -10, 10, -10, 0],
              y: -5,
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <SiVelog />
          </motion.a>
        </S.IconList>
        <S.DownArrow
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: 1,
            y: [0, 16, 0],
          }}
          transition={{
            opacity: { delay: 2.2, duration: 0.6 },
            y: {
              repeat: Infinity,
              duration: 1.5,
              ease: [0.4, 0, 0.6, 1],
            },
          }}
        >
          <HiOutlineChevronDoubleDown />
        </S.DownArrow>
      </S.ContentContainer>
    </S.Wrapper>
  );
};

export default FirstPage;
