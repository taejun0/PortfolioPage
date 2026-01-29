import * as S from "./Third.styled";

import { THIRDCONSTANT } from "./ThirdConstant";
import { motion } from "framer-motion";

const Third = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8,
      },
    },
  };

  return (
    <S.Wrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <S.HeaderSection>
          <S.Title>{THIRDCONSTANT.TEXT.TITLE}</S.Title>
          <S.SemiTitle>{THIRDCONSTANT.TEXT.SEMITITLE}</S.SemiTitle>
        </S.HeaderSection>
      </motion.div>
      <S.Containers
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
      >
        <S.ContainerWrap variants={itemVariants}>
          <S.JourneyCard>
            <S.Time>{THIRDCONSTANT.TEXT.CONTENT.ONE.TIME}</S.Time>
            <S.ContainerTitle>
              {THIRDCONSTANT.TEXT.CONTENT.ONE.TITLE}
            </S.ContainerTitle>
            <S.ContainerTextBoxCOL>
              <S.ContainerTextBox>
                <S.SemiTitleText>
                  {THIRDCONSTANT.TEXT.CONTENT.ONE.CONTENT.TITLE}
                </S.SemiTitleText>
              </S.ContainerTextBox>
              {THIRDCONSTANT.TEXT.CONTENT.ONE.CONTENT.TEXT.map((i, idx) => (
                <S.ContainerTextBox key={`one-${idx}`}>
                  <S.ContainerText>{i}</S.ContainerText>
                </S.ContainerTextBox>
              ))}
            </S.ContainerTextBoxCOL>
          </S.JourneyCard>
        </S.ContainerWrap>
        <S.ContainerWrap variants={itemVariants}>
          <S.JourneyCard>
            <S.Time>{THIRDCONSTANT.TEXT.CONTENT.TWO.TIME}</S.Time>
            <S.ContainerTitle>
              {THIRDCONSTANT.TEXT.CONTENT.TWO.TITLE}
            </S.ContainerTitle>
            <S.ContainerTextBoxCOL>
              <S.ContainerTextBox>
                <S.SemiTitleText>
                  {THIRDCONSTANT.TEXT.CONTENT.TWO.CONTENT1.TITLE}
                </S.SemiTitleText>
              </S.ContainerTextBox>
              {THIRDCONSTANT.TEXT.CONTENT.TWO.CONTENT1.TEXT.map((i, idx) => (
                <S.ContainerTextBox key={`two-c1-${idx}`}>
                  <S.ContainerText>{i}</S.ContainerText>
                </S.ContainerTextBox>
              ))}
            </S.ContainerTextBoxCOL>

            <S.ContainerTextBoxCOL>
              <S.ContainerTextBox>
                <S.SemiTitleText>
                  {THIRDCONSTANT.TEXT.CONTENT.TWO.CONTENT2.TITLE}
                </S.SemiTitleText>
              </S.ContainerTextBox>
              {THIRDCONSTANT.TEXT.CONTENT.TWO.CONTENT2.TEXT.map((i, idx) => (
                <S.ContainerTextBox key={`two-c2-${idx}`}>
                  <S.ContainerText>{i}</S.ContainerText>
                </S.ContainerTextBox>
              ))}
            </S.ContainerTextBoxCOL>
            <S.Keywords>
              {THIRDCONSTANT.TEXT.CONTENT.TWO.KEYWORD.map((i, idx) => (
                <S.Keyword key={`two-key-${idx}`}>{i}</S.Keyword>
              ))}
            </S.Keywords>
          </S.JourneyCard>
        </S.ContainerWrap>
        <S.ContainerWrap variants={itemVariants}>
          <S.JourneyCard>
            <S.Time>{THIRDCONSTANT.TEXT.CONTENT.THREE.TIME}</S.Time>
            <S.ContainerTitle>
              {THIRDCONSTANT.TEXT.CONTENT.THREE.TITLE}
            </S.ContainerTitle>
            <S.ContainerTextBoxCOL>
              {THIRDCONSTANT.TEXT.CONTENT.THREE.CONTENT1.TEXT.map((i, idx) => (
                <S.ContainerTextBox key={`three-c1-${idx}`}>
                  <S.ContainerText>{i}</S.ContainerText>
                </S.ContainerTextBox>
              ))}
            </S.ContainerTextBoxCOL>
          </S.JourneyCard>
        </S.ContainerWrap>
        <S.ContainerWrap variants={itemVariants}>
          <S.JourneyCard>
            <S.Time>{THIRDCONSTANT.TEXT.CONTENT.FOUR.TIME}</S.Time>
            <S.ContainerTitle>
              {THIRDCONSTANT.TEXT.CONTENT.FOUR.TITLE}
            </S.ContainerTitle>
            <S.ContainerTextBoxCOL>
              <S.ContainerTextBox>
                <S.SemiTitleText>
                  {THIRDCONSTANT.TEXT.CONTENT.FOUR.CONTENT1.TITLE}
                </S.SemiTitleText>
              </S.ContainerTextBox>
              {THIRDCONSTANT.TEXT.CONTENT.FOUR.CONTENT1.TEXT.map((i, idx) => (
                <S.ContainerTextBox key={`four-c1-${idx}`}>
                  <S.ContainerText>{i}</S.ContainerText>
                </S.ContainerTextBox>
              ))}
            </S.ContainerTextBoxCOL>
            <S.ContainerTextBoxCOL>
              <S.ContainerTextBox>
                <S.SemiTitleText>
                  {THIRDCONSTANT.TEXT.CONTENT.FOUR.CONTENT2.TITLE}
                </S.SemiTitleText>
              </S.ContainerTextBox>
              {THIRDCONSTANT.TEXT.CONTENT.FOUR.CONTENT2.TEXT.map((i, idx) => (
                <S.ContainerTextBox key={`four-c2-${idx}`}>
                  <S.ContainerText>{i}</S.ContainerText>
                </S.ContainerTextBox>
              ))}
            </S.ContainerTextBoxCOL>
            <S.Keywords>
              {THIRDCONSTANT.TEXT.CONTENT.FOUR.KEYWORD.map((i, idx) => (
                <S.Keyword key={`four-key-${idx}`}>{i}</S.Keyword>
              ))}
            </S.Keywords>
          </S.JourneyCard>
        </S.ContainerWrap>
        <S.ContainerWrap variants={itemVariants}>
          <S.JourneyCard>
            <S.Time>{THIRDCONSTANT.TEXT.CONTENT.FIVE.TIME}</S.Time>
            <S.ContainerTitle>
              {THIRDCONSTANT.TEXT.CONTENT.FIVE.TITLE}
            </S.ContainerTitle>
            <S.ContainerTextBoxCOL>
              <S.ContainerTextBox>
                <S.SemiTitleText>
                  {THIRDCONSTANT.TEXT.CONTENT.FIVE.CONTENT1.TITLE}
                </S.SemiTitleText>
              </S.ContainerTextBox>
              {THIRDCONSTANT.TEXT.CONTENT.FIVE.CONTENT1.TEXT.map((i, idx) => (
                <S.ContainerTextBox key={`five-c1-${idx}`}>
                  <S.ContainerText>{i}</S.ContainerText>
                </S.ContainerTextBox>
              ))}
            </S.ContainerTextBoxCOL>
            <S.ContainerTextBoxCOL>
              <S.ContainerTextBox>
                <S.SemiTitleText>
                  {THIRDCONSTANT.TEXT.CONTENT.FIVE.CONTENT2.TITLE}
                </S.SemiTitleText>
              </S.ContainerTextBox>
              {THIRDCONSTANT.TEXT.CONTENT.FIVE.CONTENT2.TEXT.map((i, idx) => (
                <S.ContainerTextBox key={`five-c2-${idx}`}>
                  <S.ContainerText>{i}</S.ContainerText>
                </S.ContainerTextBox>
              ))}
            </S.ContainerTextBoxCOL>
            <S.ContainerTextBoxCOL>
              <S.ContainerTextBox>
                <S.SemiTitleText>
                  {THIRDCONSTANT.TEXT.CONTENT.FIVE.CONTENT3.TITLE}
                </S.SemiTitleText>
              </S.ContainerTextBox>
              {THIRDCONSTANT.TEXT.CONTENT.FIVE.CONTENT3.TEXT.map((i, idx) => (
                <S.ContainerTextBox key={`five-c3-${idx}`}>
                  <S.ContainerText>{i}</S.ContainerText>
                </S.ContainerTextBox>
              ))}
            </S.ContainerTextBoxCOL>
            <S.Keywords>
              {THIRDCONSTANT.TEXT.CONTENT.FIVE.KEYWORD.map((i, idx) => (
                <S.Keyword key={`five-key-${idx}`}>{i}</S.Keyword>
              ))}
            </S.Keywords>
          </S.JourneyCard>
        </S.ContainerWrap>
      </S.Containers>
    </S.Wrapper>
  );
};

export default Third;
