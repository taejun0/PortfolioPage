import * as S from "./FirstPage.styled";

import { MAIN_FIRST_PAGE_UI } from "@constants";

import { SiVelog, SiGithub } from "react-icons/si";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

import TypewriterComponent from "typewriter-effect";

import { motion } from "framer-motion";
import { memo, useMemo } from "react";

const HeroTypewriter = memo(function HeroTypewriter() {
  const strings = useMemo(
    () => [...MAIN_FIRST_PAGE_UI.typewriterLines],
    []
  );
  return (
    <TypewriterComponent
      options={{
        strings,
        autoStart: true,
        loop: true,
        delay: 60,
        deleteSpeed: 30,
        cursor: "|",
        skipAddStyles: false,
      }}
    />
  );
});

const FirstPage = memo(function FirstPage() {
  const titleText = MAIN_FIRST_PAGE_UI.heroTitle;
  const titleWords = titleText.split(" ");

  const charAnimate = {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
  };

  const fadeUpAnimate = {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  };

  return (
    <S.Wrapper id="main">
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

      <S.ContentContainer>
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
                  animate={charAnimate}
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
          animate={fadeUpAnimate}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
            delay: 1.2,
          }}
        >
          <HeroTypewriter />
        </S.TypewriterWrapper>

        <S.IconList
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
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
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 520, damping: 28 }}
          >
            <SiGithub />
          </motion.a>
          <motion.a
            href="https://velog.io/@taejun0/posts"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 520, damping: 28 }}
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
});

export default FirstPage;
