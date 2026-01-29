import * as S from "./Second.styled";

import { SECONDCONSTANT } from "./SecondConstant";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const Second = () => {
  return (
    <S.Wrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <S.Title>{SECONDCONSTANT.TEXT.TITLE}</S.Title>
        <S.SemiTitle>
          제가 개발을 대하는 철학이 담긴 다소 긴 내용들이 준비되어있습니다.
          <br />
          넘어가주셔도 좋습니다. 😀
        </S.SemiTitle>
      </motion.div>

      <S.PhilosophiesContainer>
        {SECONDCONSTANT.TEXT.PHILOSOPHIES.map((philosophy, index) => (
          <S.PhilosophyItem
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={itemVariants}
          >
            <S.PhilosophyTitle>{philosophy.title}</S.PhilosophyTitle>
            <S.PhilosophyDescription>{philosophy.description}</S.PhilosophyDescription>
          </S.PhilosophyItem>
        ))}
      </S.PhilosophiesContainer>
    </S.Wrapper>
  );
};

export default Second;
