import * as S from "./First.styled";

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
          <S.Title>About ME</S.Title>
          <S.Text>
            {`예전에 이런 말을 들은적이 있습니다.
"집단에서 공유되는 정보가, 곧 그 집단의 IQ다"

아무리 뛰어난 개인이 있더라도,
구성원들 간 대화가 없다면
팀 전체의 성장이 어려워지게 됩니다.
        
저는 그러한 흐름을 만들어가는 개발자가 되고 싶습니다.

내가 아는 것을 아낌없이 나누고,
다른 사람의 의견을 경청하며,
더 나은 방향으로 함께 나아갈 수 있도록.

앞으로도 지식과 인사이트를
적극적으로 나누는 개발자가 되겠습니다.`}
          </S.Text>
        </S.Container2>
        <S.Container2>
          <S.Text2>
            <FaUser /> 이름: 오태준
          </S.Text2>
          <S.Text2>
            <FaCalendar /> 생년월일: 2001.09.29
          </S.Text2>
          <S.Text2>
            <FaHouse /> 위치: 경기도 의정부시
          </S.Text2>
          <S.Text2>
            <FaComment /> 이메일: xownswns@naver.com
          </S.Text2>
          <S.Text2>
            <FaGraduationCap /> 학력: 동국대학교 컴퓨터정보통신공학부
          </S.Text2>
        </S.Container2>
      </S.Container>
      보다 자세한 저의 이야기를 보실 수 있습니다
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
