import React, { useMemo } from 'react';
import { colors } from './internal/colors';
import { easing } from './internal/easing';
import { media } from './internal/media';
import { weights } from './internal/weights';
import { fonts } from './internal/fonts';
import { ThemeProvider } from './index';

export interface PortfolioSiteTheme {
  colors: typeof colors;
  easing: typeof easing;
  fonts: typeof fonts;
  media: typeof media;
  weights: typeof weights;
}

export const PortfolioSiteThemeProvider: React.FC<{
  children: React.ReactElement;
}> = ({ children }) => {
  const PortfolioSiteTheme = useMemo(
    (): PortfolioSiteTheme => ({
      colors,
      easing,
      fonts,
      media,
      weights,
    }),
    [],
  );

  return <ThemeProvider theme={PortfolioSiteTheme}>{children}</ThemeProvider>;
};
