"use client";

import React from "react";
import styled from "styled-components";
import ShortcutWhiteIcon from "../assets/icons/shortcut_white.svg";
import Image from "next/image";

function ShortcutButton() {
  return (
    <ButtonContainer>
      <Image src={ShortcutWhiteIcon} alt="shorcut icon" />
    </ButtonContainer>
  );
}

export default ShortcutButton;

const ButtonContainer = styled.div`
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
