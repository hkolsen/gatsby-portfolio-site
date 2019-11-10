import { rgba } from 'polished';

export const colors = {
  DARK_GRAY: rgba(42, 44, 53, 1), //#2a2c35
  BASE: rgba(26, 28, 36, 1), //#1a1c24 
  WHITE: rgba(255, 255, 255, 1), // #FFFFFF hsla(0, 0, 100, 1)
  BORDER: rgba(206, 213, 223, 1), // #ced5df
  ACCENT: rgba(200, 239, 231, 1), // #c8efe7 mint
  ACTIVE: rgba(249, 140, 108, 1), // #221061 sherbert
  LIGHT_BG: rgba(244, 244, 247, 1), // #f4f4f7 light grayish-blue
  HIGHLIGHT: rgba(249, 218, 135, 1), // #f9da87 yellow
} as const;
