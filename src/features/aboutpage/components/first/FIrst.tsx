import * as S from "./First.styled";

import { FIRSTCONSTANT } from "./FirstConstant";

import { HiOutlineChevronDoubleDown } from "react-icons/hi";

import {
  FaUser,
  FaCalendar,
  FaHouse,
  FaComment,
  FaGraduationCap,
} from "react-icons/fa6";

const First = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Container2>
          <S.Title>{FIRSTCONSTANT.TEXT.TITLE}</S.Title>
          <S.Text>
            {FIRSTCONSTANT.TEXT.ABOUTME.split(
              /(집단에서 공유되는 정보가, 곧 그 집단의 IQ다|팀 전체의 성장|더 나은 방향으로 함께 나아갈 수 있도록|지식과 인사이트를)/
            ).map((part, index) => {
              const highlights = [
                "집단에서 공유되는 정보가",
                "팀 전체의 성장",
                "더 나은 방향으로 함께 나아갈 수 있도록",
                "지식과 인사이트를",
              ];
              const isHighlight = highlights.some((h) => part.includes(h));
              return isHighlight ? (
                <S.Highlight key={index}>{part}</S.Highlight>
              ) : (
                <span key={index}>{part}</span>
              );
            })}
          </S.Text>
        </S.Container2>
        <S.Container2>
          <S.Text2>
            <FaUser />
            {FIRSTCONSTANT.TEXT.CONTENT.NAME}
          </S.Text2>
          <S.Text2>
            <FaCalendar />
            {FIRSTCONSTANT.TEXT.CONTENT.BIRTH}
          </S.Text2>
          <S.Text2>
            <FaHouse />
            {FIRSTCONSTANT.TEXT.CONTENT.LOCATION}
          </S.Text2>
          <S.Text2>
            <FaComment />
            {FIRSTCONSTANT.TEXT.CONTENT.EMAIL}
          </S.Text2>
          <S.Text2>
            <FaGraduationCap />
            {FIRSTCONSTANT.TEXT.CONTENT.UNIVERSITY}
          </S.Text2>
        </S.Container2>
      </S.Container>
      {FIRSTCONSTANT.TEXT.HISTORY}
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
