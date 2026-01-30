import * as S from "./SecondPage.styled";
import Link from "next/link";
import { ROUTE_CONSTANTS } from "@constants/routeConstants";
import { motion } from "framer-motion";

const SecondPage = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <S.SectionLabel>ABOUT</S.SectionLabel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          >
            <S.MainText>
              <S.HighlightText>소통</S.HighlightText>,{" "}
              <S.HighlightText>경험</S.HighlightText>,{" "}
              <S.HighlightText>협업</S.HighlightText>
            </S.MainText>
          </motion.div>

          <S.Divider />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <S.Description>
              FrontEnd는 <S.HighlightText>화면(View)</S.HighlightText>을 통해
              사용자와 가장 먼저 소통합니다.
              <br />
              복잡한 내용을 명확하게 전달하고,{" "}
              <S.HighlightText>사용자 흐름</S.HighlightText>에 따라 자연스럽게
              이어지는 화면을 설계합니다.
            </S.Description>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <S.Description>
              단순한 UI가 아닌{" "}
              <S.HighlightText>머무르고 싶은 경험</S.HighlightText>을 만드는
              것이 목표입니다.
              <br />
              한 줄의 문구, 한 픽셀의 마진에도 이유를 담고,{" "}
              <S.HighlightText>사용자의 입장</S.HighlightText>에서 반복해
              고민합니다.
            </S.Description>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <S.Description>
              저는 <S.HighlightText>혼자</S.HighlightText>일 때보다{" "}
              <S.HighlightText>함께</S.HighlightText>일 때 더 나은{" "}
              <S.HighlightText>결과</S.HighlightText>가 만들어진다고 믿습니다.
              <br />
              팀원들과 끊임없이 대화하고, 설득하고, 조율하며{" "}
              <S.HighlightText>모두가 납득할 수 있는 방향</S.HighlightText>으로
              나아가고자 합니다.
            </S.Description>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <Link href={ROUTE_CONSTANTS.ABOUT}>
              <S.LinkButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                저를 보러가요 →
              </S.LinkButton>
            </Link>
          </motion.div>
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
};

export default SecondPage;
