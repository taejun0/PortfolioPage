"use client";

import * as S from "./Footer.styled";

import { PiCopyrightFill } from "react-icons/pi";

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ContainerTitle>Taejun Oh</S.ContainerTitle>
        <S.ContainerText>Frontend Developer</S.ContainerText>
      </S.Container>
      <S.Container2>
        <PiCopyrightFill />
        2025 Taejun Oh. All rights reserved.
      </S.Container2>
    </S.Wrapper>
  );
};

export default Footer;
