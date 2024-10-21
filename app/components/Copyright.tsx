"use client";

import React from "react";
import styled from "styled-components";

function Copyright() {
  return <TextContainer>© IAMHEEWONKIM ALL RIGHTS RESERVED</TextContainer>;
}

export default Copyright;

const TextContainer = styled.div`
  margin-top: 24px;
  width: 100%;
  display: flex;
  padding: 24px 10px;
  justify-content: center;
  align-items: center;
  color: #464c52;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
`;
