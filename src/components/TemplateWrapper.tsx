import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle, styled } from '~/styled';
import { PortfolioSiteThemeProvider } from '~/styled/theme';
import '../utils/augmentEnvironment';
import { Menu } from './Menu';
import { TextLink } from './CustomLink';
import { Logo } from '../img/svg/Logo';
import Favicon from '../img/favicon.ico';
import AppleTouch from '../img/apple-touch-icon.png';
import { Footer } from './Footer';

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
    background: #1a1c24;
    box-sizing: border-box;
    color: inherit;  
    font-family: 'Nunito', sans-serif;
    font-size: calc(14px + (16 - 14) * ((100vw - 300px) / (1600 - 300)));
    height: 100vh;
    line-height: 1.75;
    margin:0;
    padding:0; 
  }
`;

const SkipLink = styled.a`
  background: ${({ theme }) => theme.colors.WHITE};
  border-radius: 0.5em;
  color: ${({ theme }) => theme.colors.BASE};
  position: absolute;
  top: 0.75em;
  left: 10em;
  padding: 0.25em;
  transform: translateY(-150%);
  transition: ${({ theme }) => theme.easing.GLOBAL};
  z-index: 10;
  &:focus {
    transform: translateY(0%);
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
  z-index: 4;
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

const MainContainer = styled.main``;

const TemplateWrapper: React.FC = ({ children }) => 
  <PortfolioSiteThemeProvider>
    <>
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
        Skip to content
      </SkipLink>
      <HeaderContainer>
      <HeaderName linkURL="/" linkType="internal">
        <Logo />
      </HeaderName>
      <Menu />
    </HeaderContainer>
    <MainContainer id="content">{children}</MainContainer>
    <Footer />
    </>
  </PortfolioSiteThemeProvider>


export default TemplateWrapper;