"use client";

import React from "react";
import styled from "styled-components";
import { typhography_theme } from "../style/typhography";

interface IProps {
  tag_text: string;
  tag_background: string;
}

function ButtonTag({ tag_text, tag_background }: IProps) {
  return <TagContainer tagBackground={tag_background}>{tag_text}</TagContainer>;
}

export default ButtonTag;

const TagContainer = styled.div<{ tagBackground: string }>`
  ${typhography_theme.tag};
  display: flex;
  padding: 4px 6px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: #73787e;
  border-radius: 5px;
  background: ${(props) => props.tagBackground};
`;
