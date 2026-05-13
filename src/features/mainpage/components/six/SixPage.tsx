"use client";

import * as S from "./SixPage.styled";

import { SiMinutemailer, SiGithub, SiGmail } from "react-icons/si";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MAIN_SIX_PAGE_UI } from "@constants";

const U = MAIN_SIX_PAGE_UI;

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
        alert(U.alertSuccess);
        formRef.current?.reset();
      })
      .catch(() => {
        alert(U.alertError);
      });
  };
  return (
    <S.Wrapper>
      <S.Box>
        <S.SectionLabel>{U.sectionLabel}</S.SectionLabel>
        <S.Title1>{U.title}</S.Title1>
        <S.SemiTitle>{U.semiTitle}</S.SemiTitle>
      </S.Box>
      <S.ContainerWrap>
        <S.Container>
          <S.Box style={{ width: "80%", alignItems: "flex-start", marginLeft: "auto" }}>
            <S.Title>{U.howTitle}</S.Title>
            <S.Content>
              <SiGmail size={47} />
              <S.Content2>
                <S.Text>{U.emailLabel}</S.Text>
                <S.Text2>{U.emailValue}</S.Text2>
              </S.Content2>
            </S.Content>
            <S.Content>
              <SiGithub size={47} />
              <S.Content2>
                <S.Text>{U.githubLabel}</S.Text>
                <S.Text2>{U.githubPath}</S.Text2>
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
              <S.Input
                type="text"
                name="name"
                placeholder={U.placeholders.name}
                required
              />
              <S.Input
                type="email"
                name="email"
                placeholder={U.placeholders.email}
                required
              />
              <S.TextArea
                name="message"
                placeholder={U.placeholders.message}
                required
              />
              <S.SendButton type="submit">
                {U.submit} <SiMinutemailer />
              </S.SendButton>
            </form>
          </S.Box>
        </S.Container>
      </S.ContainerWrap>
    </S.Wrapper>
  );
};

export default SixPage;
