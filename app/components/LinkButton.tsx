"use client";

import React from "react";
import styled from "styled-components";
import ShortcutWhiteIcon from "../assets/icons/shortcut_white.svg";
import NaverBlogLogo from "../assets/icons/naver_blog_logo.svg";
import Image from "next/image";

function LinkButton() {
  return (
    <LinkButtonContainer>
      <LogoAndTagWrapper>
        <Image src={NaverBlogLogo} alt="button link logo" />
        <TagContainer>추후 오픈 예정</TagContainer>
      </LogoAndTagWrapper>
      <ContentAndShortcutsWrapper>
        <ButtonContentWrapper>
          <ButtonTitle>주인장 네이버 블로그 방문하기</ButtonTitle>
          <ButtonTitleText>포스트 글 더 쓰고 오픈할 예정..</ButtonTitleText>
        </ButtonContentWrapper>
        <ShortcutButton>
          <Image src={ShortcutWhiteIcon} alt="shorcut icon" />
        </ShortcutButton>
      </ContentAndShortcutsWrapper>
    </LinkButtonContainer>
  );
}

export default LinkButton;

const LinkButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  border-radius: 10px;
  background: #fafafa;
`;

const LogoAndTagWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

const TagContainer = styled.div`
  display: flex;
  padding: 4px 6px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #73787e;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 5px;
  background: #e9ebed;
`;

const ContentAndShortcutsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
`;

const ButtonContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const ButtonTitle = styled.p`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.64px;
`;

const ButtonTitleText = styled.p`
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
`;

const ShortcutButton = styled.div`
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
