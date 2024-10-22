"use client";

import React from "react";
import styled from "styled-components";
import ButtonTag from "./ButtonTag";
import ShortcutButton from "./ShortcutButton";

function LinkButton({ btnData }: ILinkBtnData) {
  const {
    is_btn_active,
    image_source,
    image_alt,
    button_title,
    button_text,
    is_tag_active,
    is_link_shortcut_active,
    tag_text,
    link_url,
    button_background,
    tag_background,
  } = btnData;

  const handleButtonClick = () => {
    if (!is_btn_active) return; // 버튼 비활성화 시 클릭 무효화
    const newWindow = window.open(link_url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null; // 보안 강화
  };

  return (
    <LinkButtonContainer
      isBtnActive={is_btn_active}
      buttonBackground={button_background}
      onClick={handleButtonClick}
    >
      <LogoAndTagWrapper>
        <img src={image_source} alt={image_alt} />
        {is_tag_active && <ButtonTag tagData={{ tag_text, tag_background }} />}
      </LogoAndTagWrapper>
      <ContentAndShortcutsWrapper>
        <ButtonContentWrapper>
          <ButtonTitle isBtnActive={is_btn_active}>{button_title}</ButtonTitle>
          <ButtonTitleText isBtnActive={is_btn_active}>
            {button_text}
          </ButtonTitleText>
        </ButtonContentWrapper>
        {is_link_shortcut_active && <ShortcutButton />}
      </ContentAndShortcutsWrapper>
    </LinkButtonContainer>
  );
}

export default LinkButton;

const LinkButtonContainer = styled.div<{
  isBtnActive: boolean;
  buttonBackground: string;
}>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  border-radius: 10px;
  background: ${(props) =>
    props.isBtnActive ? props.buttonBackground : "#FAFAFA"};
  cursor: ${(props) => (props.isBtnActive ? "pointer" : "not-allowed")};
`;

const LogoAndTagWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
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

const ButtonTitle = styled.p<{
  isBtnActive: boolean;
}>`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.64px;
  color: ${(props) => (props.isBtnActive ? "#ffffff" : "#73787e")};
`;

const ButtonTitleText = styled.p<{
  isBtnActive: boolean;
}>`
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
  color: ${(props) =>
    props.isBtnActive ? "rgba(255, 255, 255, 0.80)" : "#73787e"};
`;
