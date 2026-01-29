import * as S from "./First.styled";

import { FIRSTCONSTANT } from "./FirstConstant";

import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { motion } from "framer-motion";

const First = () => {
  const quote = '집단에서 공유되는 정보가, 곧 그 집단의 IQ다';
  const mainText = FIRSTCONSTANT.TEXT.ABOUTME.split("\n")
    .filter((s) => s.trim() !== "" && !s.includes(quote))
    .join("\n");

  return (
    <S.Wrapper>
      <S.MainContent>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <S.Quote>{quote}</S.Quote>
        </motion.div>

        <S.TextSection>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <S.MainText>{mainText}</S.MainText>
          </motion.div>
        </S.TextSection>

        <S.InfoSection>
          {[
            { label: "이름", value: "오태준" },
            { label: "생년월일", value: "2001.09.29" },
            { label: "위치", value: "경기도 의정부시" },
            { label: "이메일", value: "xownswns@naver.com" },
            { label: "학력", value: "동국대학교 컴퓨터정보통신공학부" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <S.InfoItem>
                <S.InfoLabel>{item.label}</S.InfoLabel>
                <S.InfoValue>{item.value}</S.InfoValue>
              </S.InfoItem>
            </motion.div>
          ))}
        </S.InfoSection>
      </S.MainContent>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <S.HistoryText>{FIRSTCONSTANT.TEXT.HISTORY}</S.HistoryText>
      </motion.div>

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

export default First;
