import * as S from "./Footer.styled";

import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Box>
          <S.Title>Taejun0</S.Title>
          <S.Content>
            {`한 영상을 통해
              "집단에서 공유되는 정보"가 "해당 집단의 IQ"다
              라는 말을 보았습니다.
              
              끊임없이 지식과 인사이트를 적극적으로 나누는
              개발자가 되도록 노력하겠습니다.`}
          </S.Content>
        </S.Box>
      </S.Container>
      <S.Container>
        <S.Box>
          <S.Title>Quick Move</S.Title>
          <S.StyledLink href="#">
            <S.Content>Main</S.Content>
          </S.StyledLink>
          <S.StyledLink href="#about">
            <S.Content>About</S.Content>
          </S.StyledLink>
          <S.StyledLink href="#skills">
            <S.Content>Skills</S.Content>
          </S.StyledLink>
          <S.StyledLink href="#projects">
            <S.Content>Projects</S.Content>
          </S.StyledLink>
          <S.StyledLink href="#blog">
            <S.Content>Blog</S.Content>
          </S.StyledLink>
          <S.StyledLink href="#contact">
            <S.Content>Contact</S.Content>
          </S.StyledLink>
        </S.Box>
        <S.Box>
          <S.Title>Contact</S.Title>
          <S.Content>xownswns@naver.com</S.Content>
          <S.Content2>
            메일 보내기 <SiMinutemailer />
          </S.Content2>
        </S.Box>
      </S.Container>
    </S.Wrapper>
  );
};

export default Footer;
