"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";
import PinguImg from "../assets/images/pingu.webp";
import { typhography_theme } from "../style/typhography";

function Biography() {
  return (
    <BioContainer>
      <BioTextContent>
        <Title>안녕하세요, 김희원입니다 👋 </Title>
        <Body>
          데굴데굴 굴러가는 IxxJ 인간이 <br />
          직접 코드 쳐서 휘뚜루마뚜루 만들었어요.
        </Body>
      </BioTextContent>
      <Image
        src={PinguImg}
        alt="profile image"
        priority
        width={80}
        height={80}
      />
    </BioContainer>
  );
}

export default Biography;

const BioContainer = styled.section`
  padding: 20px 16px;
  display: flex;
  align-items: center;
  word-break: keep-all;
  justify-content: space-between;
`;

const BioTextContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const Title = styled.h1`
  ${typhography_theme.title};
  color: #1b1d1f;
`;

const Body = styled.p`
  ${typhography_theme.body};
  color: #464c52;
`;
