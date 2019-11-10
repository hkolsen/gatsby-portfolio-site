import React from 'react';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import { createGlobalStyle, styled } from '~/styled';
import { PortfolioSiteThemeProvider } from '~/styled/theme';
import '../utils/augmentEnvironment';
import { Menu } from './Menu';
import { TextLink } from './CustomLink';
import { Logo } from '../img/svg/Logo';
import Favicon from '../img/favicon.ico';
import AppleTouch from '../img/apple-touch-icon.png';

interface TemplateWrapper {
  children: React.ReactNode;
}
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Playfair Display Bold'), local('PlayfairDisplay-Bold'), url(https://fonts.gstatic.com/s/playfairdisplay/v15/nuFlD-vYSZviVYUb_rj3ij__anPXBYf9lWoe5j5hNKe1_w.woff2) format('woff2');
}
 @font-face {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Nunito Regular'), local('Nunito-Regular'), url(https://fonts.gstatic.com/s/nunito/v11/XRXV3I6Li01BKofINeaBTMnFcQ.woff2) format('woff2');
  }
  body {
    box-sizing: border-box;
    color: inherit;  
    font-family: 'Open Sans Regular', sans-serif;
    font-size: calc(14px + (16 - 14) * ((100vw - 300px) / (1600 - 300)));
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
  position: absolute;
  z-index: 5;
  width: 100%;
  ${({ theme }) => theme.media.medium`
    margin: 1em 0 0;
  `};
`;

const HeaderName = styled(TextLink)`
  text-align: center; 
  text-decoration: none;
  margin: 0.5em auto;
  width: 15em;
  span {
    color: ${({ theme }) => theme.colors.ACTIVE};
    font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
    font-size: 2em;
    font-weight: bold;
    transition: ${({ theme }) => theme.easing.GLOBAL};
  }
  &:hover {
    span {
      color: ${({ theme }) => theme.colors.HIGHLIGHT};
    }
  }
  ${({ theme }) => theme.media.small`
    margin: 0 0 0 1em;
  `};
`;

const FixedContainer = styled.div`
  padding: 0;
  position: fixed;
  transition: ${({ theme }) => theme.easing.GLOBAL};
  width: 100%;
  z-index: 10;
`;

const MainContainer = styled.main``;

const TemplateWrapper: React.FC = ({ children }) => 
  <PortfolioSiteThemeProvider>
  <TemplateWrapperContainer>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>Heidi Olsen | Senior Frontend Engineer</title>
      <meta name="description" content="Heidi is a passionate, solutions-oriented engineer located in Portland, Ore." />
      <meta name="theme-color" content="#221061" />
      <link rel="canonical" href="https://heidiolsen.com" />
      <link rel="shortcut icon" href={Favicon} />
      <link rel="apple-touch-icon" sizes="57x57" href={AppleTouch} />
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
        <Logo />
      </HeaderName>
      </HeaderContainer>
    <FixedContainer>
      <Menu />
    </FixedContainer>
    <MainContainer id="content">{children}</MainContainer>
  </TemplateWrapperContainer>
  </PortfolioSiteThemeProvider>


export default TemplateWrapper;