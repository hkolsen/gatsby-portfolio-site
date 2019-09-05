import { mapValues } from 'lodash';
import { css } from '~/styled';

const sizes = {
  giant: 1600,
  large: 980,
  medium: 768,
  small: 545,
};

export const media = {
  ...(mapValues(
    sizes,
    (maxSizeInPixels: number) => (arg: any, ...args: any[]) => css`
      @media screen and (max-width: ${maxSizeInPixels}px) {
        ${css(arg, ...args)};
      }
    `,
  ) as { [size in keyof typeof sizes]: typeof css }),
  iPhone4: ((arg: any, ...args: any[]) => css`
    @media screen and (max-height: 480px) and (max-width: 320px) {
      ${css(arg, ...args)};
    }
  `) as typeof css,
  iPhone5: ((arg: any, ...args: any[]) => css`
    @media screen and (max-height: 570px) and (max-width: 320px) {
      ${css(arg, ...args)};
    }
  `) as typeof css,
} as const;
