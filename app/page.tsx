"use client";

import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Biography from "./components/Biography";
import LinkButton from "./components/LinkButton";

function Page() {
  return (
    <PageContainer>
      <Header />
      <Biography />
      <LinkButtonContainer>
        <LinkButton />
      </LinkButtonContainer>
    </PageContainer>
  );
}

export default Page;

const PageContainer = styled.div`
  max-width: 600px;
  width: 100%;
  margin: auto;
`;

const LinkButtonContainer = styled.section`
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
