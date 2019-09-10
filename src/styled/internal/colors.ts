import { rgba } from 'polished';

export const colors = {
  BASE: rgba(20, 46, 48, 1), //#142E30
  WHITE: rgba(255, 255, 255, 1), // #FFFFFF hsla(0, 0, 100, 1)
  BORDER: rgba(206, 213, 223, 1), // #ced5df
  TAG: rgba(128, 97, 231, 1), // #8061E7
  DARK_BG: rgba(45, 5, 90, 1), // #221061
  LIGHT_BG: rgba(232, 225, 251, 1), // #e8e1fb
  HIGHLIGHT: rgba(27, 134, 97, 1), // #00f1cc
} as const;
