"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";
import HelloNabangLogo from "../assets/icons/hellonabang_logo.svg";

function Header() {
  return (
    <PageHeader>
      <Image src={HelloNabangLogo} alt="hello, nabang logo" />
    </PageHeader>
  );
}

export default Header;

const PageHeader = styled.header`
  width: 100%;
  padding: 16px;
`;
