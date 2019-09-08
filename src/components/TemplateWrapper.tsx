import React from 'react';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import { createGlobalStyle, styled } from '~/styled';
import { PortfolioSiteThemeProvider } from '~/styled/theme';
import '../utils/augmentEnvironment';
import { CustomLink } from './CustomLink';

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

const FixedContainer = styled.header`
  background: ${({ theme }) => theme.colors.BASE};
  grid-area: header;
  padding: 0;
  position: fixed;
  transition: ${({ theme }) => theme.easing.GLOBAL};
  width: 100%;
  z-index: 10;
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

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  width: 100%;
`;

const LogoLink = styled(CustomLink)`
  svg {
    height: auto;
    transition: fill 200ms ease-in-out;
    width: 3.5em;
  }
  :hover {
    svg {
      fill: ${({ theme }) => theme.colors.WHITE_HOVER};
    }
  }
`;

const LogoContainer = styled.h1`
  color: ${({ theme }) => theme.colors.WHITE};
  margin: 0;
  padding: 0 0.5em;
`;

const MainContainer = styled.main`
  grid-area: main;
`;

const TemplateWrapper: React.FC = ({ children }) => (
  <PortfolioSiteThemeProvider>
  <TemplateWrapperContainer>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>Welcome to my site</title>
      <meta name="description" content="Heidi Olsen is a Senior Frontend Engineer located in Portland, Ore." />
      <meta name="theme-color" content="#212121" />
      <link rel="canonical" href="https://heidiolsen.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com/"
        crossOrigin="true"
      />
    </Helmet>
    <GlobalStyles />
    <FixedContainer>
      <SkipLink href="#content">
        <FormattedMessage
          defaultMessage="Skip to content"
          description="Link that allows screen readers to skip to main content"
          id="TemplateWrapper.SkipLink"
        />
      </SkipLink>
      <HeaderContainer>
        <LogoLink aria-label="Navigate to home" linkType="internal" linkURL="/">
          <LogoContainer>Header</LogoContainer>
        </LogoLink>
      </HeaderContainer>
    </FixedContainer>
    <MainContainer id="content">{children}</MainContainer>
  </TemplateWrapperContainer>
  </PortfolioSiteThemeProvider>
);

export default TemplateWrapper;
