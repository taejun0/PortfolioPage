import * as S from "./Four.styled";

interface Props {
  onClose: () => void;
}

const Four = ({ onClose }: Props) => {
  return (
    <S.Wrapper>
      <S.Text onClick={onClose}>{"<-"} View All Projects</S.Text>
    </S.Wrapper>
  );
};

export default Four;
