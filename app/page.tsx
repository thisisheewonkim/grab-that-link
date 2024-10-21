"use client";

import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Biography from "./components/Biography";
import LinkButton from "./components/LinkButton";
import { linkBtnData } from "./constants/linkButtonData";
import Copyright from "./components/Copyright";

function Page() {
  return (
    <PageContainer>
      <Header />
      <Biography />
      <LinkButtonContainer>
        {linkBtnData.map((data: ILinkBtnData, idx: number) => (
          <LinkButton btnData={data} key={idx} />
        ))}
      </LinkButtonContainer>
      <Copyright />
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
