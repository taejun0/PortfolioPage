import * as S from "./Second.styled";

import { SECONDCONSTANT } from "./SecondConstant";

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: -4,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const Card = ({ title, description, index }: any) => {
  return (
    <S.CardContainer
      style={{ zIndex: index }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8, once: true }}
      variants={cardVariants}
    >
      <S.CardInner>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardText>{description}</S.CardText>
      </S.CardInner>
    </S.CardContainer>
  );
};

const Second = () => {
  return (
    <S.Wrapper>
      <S.Title>{SECONDCONSTANT.TEXT.TITLE}</S.Title>
      {SECONDCONSTANT.TEXT.PHILOSOPHIES.map((p, i) => (
        <Card key={i} {...p} index={i} />
      ))}
    </S.Wrapper>
  );
};

export default Second;
