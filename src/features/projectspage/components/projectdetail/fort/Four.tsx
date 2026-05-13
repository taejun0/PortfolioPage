import * as S from "./Four.styled";
import { PROJECT_DETAIL_FOUR_UI } from "@constants";

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
        {PROJECT_DETAIL_FOUR_UI.cta}
      </S.Text>
    </S.Wrapper>
  );
};

export default Four;
