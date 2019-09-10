import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import { createGlobalStyle, styled, useTheme } from '~/styled';
import { PortfolioSiteThemeProvider } from '~/styled/theme';
import '../utils/augmentEnvironment';
import { Menu } from './Menu';
import { TextLink } from './CustomLink';

interface TemplateWrapper {
  children: React.ReactNode;
}
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Avro';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Arvo'), url(https://fonts.gstatic.com/s/arvo/v13/tDbD2oWUg0MKqScQ7Z7o_vo.woff2) format('woff2');
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bf8pkAp6a.woff2) format('woff2');
  }
  body {
    box-sizing: border-box;
    color: inherit;  
    font-family: 'Open Sans Regular', sans-serif;
    font-size: calc(14px + (18 - 14) * ((100vw - 300px) / (1600 - 300)));
    height: 100vh;
    line-height: 1.75;
    margin:0;
    padding:0; 
  }
`;

const TemplateWrapperContainer = styled.div`
  background: ${({ theme }) => theme.colors.WHITE};
  color: ${({ theme }) => theme.colors.BASE};
  font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
  width: 100%;
`;

const SkipLink = styled.a`
  background: ${({ theme }) => theme.colors.WHITE};
  border-radius: 0.5em;
  color: ${({ theme }) => theme.colors.BASE};
  position: absolute;
  top: 0.75em;
  left: 10em;
  padding: 0.25em;
  transition: ${({ theme }) => theme.easing.GLOBAL};
  &:not(:focus) {
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }
`;

const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
`;

const HeaderName = styled(TextLink)`
  color: ${({ theme }) => theme.colors.DARK_BG};
  font-family: ${({ theme }) => theme.fonts.SERIF};
  font-size: 1.5em;
  font-weight: bold;
  transition: ${({ theme }) => theme.easing.GLOBAL};
  &:hover {
    ${({ theme }) => theme.colors.HIGHLIGHT};
  }
`;

const FixedContainer = styled.div`
  padding: 0;
  position: fixed;
  transition: ${({ theme }) => theme.easing.GLOBAL};
  width: 100%;
  z-index: 10;
`;

const MainContainer = styled.main``;

const TemplateWrapper: React.FC = ({ children }) => {
  const theme = useTheme();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require(' ')('a[href*="#"]');
    }
  }, []);
 return (
  <PortfolioSiteThemeProvider>
  <TemplateWrapperContainer>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>Heidi Olsen | Senior Frontend Engineer</title>
      <meta name="description" content="Heidi is a passionate, solutions-oriented engineer located in Portland, Ore." />
      <meta name="theme-color" content={theme.colors.DARK_BG} />
      <link rel="canonical" href="https://heidiolsen.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com/"
        crossOrigin="true"
      />
    </Helmet>
    <GlobalStyles />
    <SkipLink href="#content">
        <FormattedMessage
          defaultMessage="Skip to content"
          description="Link that allows screen readers to skip to main content"
          id="TemplateWrapper.SkipLink"
        />
      </SkipLink>
      <HeaderContainer>
      <HeaderName linkURL="/" linkType="internal">
        <FormattedMessage
          defaultMessage="Heidi Olsen"
          description="Header"
          id="TemplateWrapper.Header"
        />
      </HeaderName>
      </HeaderContainer>
    <FixedContainer>
      <Menu />
    </FixedContainer>
    <MainContainer id="content">{children}</MainContainer>
  </TemplateWrapperContainer>
  </PortfolioSiteThemeProvider>
)};

export default TemplateWrapper;
