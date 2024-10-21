"use client";

import React from "react";
import styled from "styled-components";
import { typhography_theme } from "../style/typhography";

function Copyright() {
  return <TextContainer>© IAMHEEWONKIM ALL RIGHTS RESERVED</TextContainer>;
}

export default Copyright;

const TextContainer = styled.footer`
  margin-top: 24px;
  width: 100%;
  display: flex;
  padding: 24px 10px;
  justify-content: center;
  align-items: center;
  color: #464c52;
  ${typhography_theme.copyright};
`;
