export interface NAV_TYPE {
  title: string;
  path: string;
}

export interface CustomButtonStypeType {
  title?: string;
  $border?: string;
  $borderRadius?: string;
  $backgroundColor?: string;
  $color?: string;
  $fontSize?: string;
  $fontWeight?: string;
  $fontFamily?: string;
  $padding?: string;
  $width?: string;
  $height?: string;
  $display?: string;
  $gap?: string;
  $alignItems?: string;
  $lineHeight?: string;
  icon?: any;
  $marginTop?: string;
}

export interface ChatCardStyleType {
  $borderRadius?: string;
  $backgroundColor?: string;
}

export interface PriceCardStyleType {
  $mode?: Boolean;
}

export interface FaqItemStyleType {
  $active?: Boolean;
  $header: String;
  $content: String;
}
