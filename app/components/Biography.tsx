"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";
import PinguImg from "../assets/images/pingu.webp";

function Biography() {
  return (
    <BioContainer>
      <BioTextContent>
        <BioTitle>안녕하세요, 김희원입니다 👋 </BioTitle>
        <BioText>
          데굴데굴 굴러가는 IxxJ 인간이 <br />
          직접 코드 쳐서 휘뚜루마뚜루 만들었어요.
        </BioText>
      </BioTextContent>
      <ProfileImage src={PinguImg} alt="profile image" />
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

const BioTitle = styled.h1`
  color: #1b1d1f;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  letter-spacing: -0.8px;
`;

const BioText = styled.p`
  color: #464c52;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: -0.64px;
`;

const ProfileImage = styled(Image)`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
`;
