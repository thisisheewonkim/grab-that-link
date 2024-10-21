type ImageSource = {
  src: string;
  width: number;
  height: number;
  blurWidth?: number;
  blurHeight?: number;
};

interface ILinkBtnData {
  is_btn_active: boolean;
  image_source: string;
  image_alt: string;
  button_title: string;
  button_text: string;
  is_tag_active: boolean;
  is_link_shortcut_active: boolean;
  tag_text?: string | "";
  link_url?: string | "";
  button_background?: string | "#fafafa";
  tag_background?: string | "#fafafa";
}
