import * as S from "./Four.styled";

interface Props {
  onClose: () => void;
}

const Four = ({ onClose }: Props) => {
  return (
    <S.Wrapper>
      <S.Text
        onClick={onClose}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {"<-"} View All Projects
      </S.Text>
    </S.Wrapper>
  );
};

export default Four;
