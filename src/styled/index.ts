import * as styledComponents from 'styled-components';
import { useContext } from 'react';
import { PortfolioSiteTheme } from './theme';

function interop(
  value: any,
): styledComponents.ThemedStyledComponentsModule<PortfolioSiteTheme> {
  if (typeof value === 'function') {
    // this occurs within the CDN version
    return {
      default: value,
      ...value,
    };
  } else {
    return value;
  }
}

const {
  default: styled,
  css,
  ThemeProvider,
  withTheme,
  ThemeContext,
  createGlobalStyle,
} = interop(styledComponents);

export { css, ThemeProvider, styled, withTheme, createGlobalStyle };
export type PortfolioSiteTheme = PortfolioSiteTheme;

export function useTheme(): PortfolioSiteTheme {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new TypeError(`Expected to be within a ThemeContext.Provider`);
  }
  return theme;
}