import * as S from "./SixPage.styled";

import { SiMinutemailer, SiGithub, SiGmail } from "react-icons/si";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const SixPage = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_18zd9gr",
        "template_lp8yxjd",
        formRef.current,
        "ZEmVbSIFSzfLGWnrQ"
      )
      .then(() => {
        alert("메일이 성공적으로 전송되었습니다!");
        formRef.current?.reset();
      })
      .catch(() => {
        alert("메일 전송에 실패했습니다. 다시 시도해주세요.");
      });
  };
  return (
    <S.Wrapper id="contact">
      <S.Box>
        <S.Title1>Contact</S.Title1>
        <S.SemiTitle>언제든 편하게 연락주세요</S.SemiTitle>
      </S.Box>
      <S.ContainerWrap>
        <S.Container>
          <S.Box>
            <S.Title>HOW</S.Title>
            <S.Content>
              <SiGmail size={47} />
              <S.Content2>
                <S.Text>Email</S.Text>
                <S.Text2>xownswns@naver.com</S.Text2>
              </S.Content2>
            </S.Content>
            <S.Content>
              <SiGithub size={47} />
              <S.Content2>
                <S.Text>Github</S.Text>
                <S.Text2>github.com/taejun0</S.Text2>
              </S.Content2>
            </S.Content>
          </S.Box>
        </S.Container>
        <S.Container>
          <S.Box>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
              }}
              ref={formRef}
              onSubmit={handleSendEmail}
            >
              <S.Input type="text" name="name" placeholder="이름" required />
              <S.Input
                type="email"
                name="email"
                placeholder="이메일"
                required
              />
              <S.TextArea
                name="message"
                placeholder="메시지를 입력하세요"
                required
              />
              <S.SendButton type="submit">
                메일 보내기 <SiMinutemailer />
              </S.SendButton>
            </form>
          </S.Box>
        </S.Container>
      </S.ContainerWrap>
    </S.Wrapper>
  );
};

export default SixPage;
