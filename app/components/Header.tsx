"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";

function Header() {
  return (
    <PageHeader>
      <Image
        src={"/assets/icons/hellonabang_logo.svg"}
        alt="hello, nabang logo"
        width={36}
        height={24}
        priority
      />
    </PageHeader>
  );
}

export default Header;

const PageHeader = styled.header`
  width: 100%;
  padding: 20px;
`;
