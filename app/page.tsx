"use client";

import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Biography from "./components/Biography";

function Page() {
  return (
    <PageContainer>
      <Header />
      <Biography />
    </PageContainer>
  );
}

export default Page;

const PageContainer = styled.div`
  max-width: 600px;
  width: 100%;
  margin: auto;
`;
