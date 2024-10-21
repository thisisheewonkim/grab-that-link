const naverBlogData: ILinkBtnData = {
  is_btn_active: false,
  image_source: "/assets/icons/naver_blog_logo.svg",
  image_alt: "네이버 블로그 로고",
  button_title: "주인장 네이버 블로그 방문하기",
  button_text: "포스트 글 더 쓰고 오픈할 예정",
  is_tag_active: true,
  is_link_shortcut_active: false,
  tag_text: "추후 오픈 예정",
  link_url: process.env.NEXT_PUBLIC_NAVER_BLOG_URL,
};

const githubData: ILinkBtnData = {
  is_btn_active: true,
  image_source: "/assets/icons/github_logo.svg",
  image_alt: "네이버 블로그 로고",
  button_title: "주인장 깃허브 방문하기",
  button_text: "@thisisheewonkim",
  is_tag_active: false,
  is_link_shortcut_active: true,
  tag_text: "추후 오픈 예정",
  link_url: process.env.NEXT_PUBLIC_GITHUB_URL,
  button_background: "#191919",
};

const uxBlogData: ILinkBtnData = {
  is_btn_active: false,
  image_source: "/assets/icons/docusaurus_logo.svg",
  image_alt: "네이버 블로그 로고",
  button_title: "주인장 UX 블로그 방문하기",
  button_text: "개발 더 하고, 포스트 글 몇 개 다듬어서 오픈할 예정..",
  is_tag_active: true,
  is_link_shortcut_active: false,
  tag_text: "추후 오픈 예정",
  link_url: process.env.NEXT_PUBLIC_UX_BLOG_URL,
};

const channelTalkData: ILinkBtnData = {
  is_btn_active: true,
  image_source: "/assets/icons/channeltalk_logo.svg",
  image_alt: "네이버 블로그 로고",
  button_title: "주인장과 이야기하기",
  button_text: "링크 클릭시, 채널톡으로 이동해요.",
  is_tag_active: true,
  is_link_shortcut_active: true,
  tag_text: "추후 오픈 예정",
  link_url: "string",
  button_background: "#5E2AFF",
};

const devLogData: ILinkBtnData = {
  is_btn_active: true,
  image_source: "/assets/icons/devlog_logo.svg",
  image_alt: "네이버 블로그 로고",
  button_title: "이 사이트의 역사 읽어보기",
  button_text: "주인장이 직접 기록한 이 사이트의 변천사",
  is_tag_active: true,
  is_link_shortcut_active: true,
  tag_text: "추후 오픈 예정",
  link_url: process.env.NEXT_PUBLIC_DEV_LOG_URL,
  button_background: "#2D9CDB",
};

export const linkBtnData: ILinkBtnData[] = [
  naverBlogData,
  githubData,
  uxBlogData,
  channelTalkData,
  devLogData,
];
