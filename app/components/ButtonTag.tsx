"use client";

import React from "react";
import styled from "styled-components";

interface ITagData {
  tag_text: string;
  tag_background: string;
}

function ButtonTag(props: ITagData) {
  const { tag_text, tag_background } = props;
  return <TagContainer tagBackground={tag_background}>{tag_text}</TagContainer>;
}

export default ButtonTag;

const TagContainer = styled.div<{ tagBackground: string }>`
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
  background: ${(props) => props.tagBackground};
`;
