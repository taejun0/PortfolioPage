"use client";

import * as S from "./Footer.styled";

import { PiCopyrightFill } from "react-icons/pi";
import { FOOTER_UI } from "@constants";

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ContainerTitle>{FOOTER_UI.name}</S.ContainerTitle>
        <S.ContainerText>{FOOTER_UI.role}</S.ContainerText>
      </S.Container>
      <S.Container2>
        <PiCopyrightFill />
        {FOOTER_UI.copyright}
      </S.Container2>
    </S.Wrapper>
  );
};

export default Footer;
