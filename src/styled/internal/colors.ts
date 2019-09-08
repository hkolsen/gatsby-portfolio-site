import { rgba } from 'polished';

export const colors = {
  BASE: rgba(20, 46, 48, 1), //#142E30
  WHITE: rgba(255, 255, 255, 1), // #FFFFFF hsla(0, 0, 100, 1)
  BORDER: rgba(206, 213, 223, 1), // #ced5df
  TAG: rgba(128, 97, 231, 1), // #8061E7
  CTA: rgba(34, 16, 97, 1), // #221061
  LIGHT_BG: rgba(247, 248, 251, 1), // #f7f8fb
  HIGHLIGHT: rgba(0, 241, 204, 1), // #00f1cc
  
  DARK_BG: rgba(45, 45, 45, 1), // #2d2d2d
  DARK_TRANSPARENT_BG: rgba(33, 33, 33, 0.85),
  MEDIUM_BG: rgba(204, 204, 204, 1), // #cccccc
  QUOTE_BG: rgba(221, 221, 221, 1), // #dddddd
  
  FORM_BG: rgba(64, 64, 64, 1), // #404040

  REVERSE_TEXT: rgba(102, 102, 102, 1), // #666666 hsla(0, 0, 40, 1)
  TEXT_SHADOW: rgba(33, 33, 33, 0.4), // #212121

  ICON_STROKE: rgba(68, 75, 76, 1), //  #444b4c

  BRIGHT_WHITE: rgba(245, 245, 245, 1), // #F5F5F5
  WHITE_HOVER: rgba(255, 255, 255, 0.8), // #FFFFFF hsla(0, 0, 100, 1)

  LOYAL_BLUE: rgba(65, 176, 246, 1), // #41B0F6 hsla(204, 96, 62, 1)
  LOYAL_BLUE_BG: rgba(65, 176, 246, 0.3), // #41B0F6 hsla(204, 96, 62, 1)
} as const;
