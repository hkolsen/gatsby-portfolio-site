import React from 'react';
import { styled } from '~/styled';
import { MarkdownWrapper } from '../../MarkdownWrapper';
import Img from 'gatsby-image';
import { SCREEN_MAX_WIDTH } from '~/utils/constants';
import { useAboutData } from '~/data/useAboutData';

const HeroWrapper = styled.div`
    background: ${({ theme }) => theme.colors.DARK_GRAY};
    border-bottom: 0.5em solid ${({ theme }) => theme.colors.ACTIVE};
    padding: 10em 0 3em;
    position: relative;
    width: 100%;
    ${({ theme }) => theme.media.medium`
        padding: 7em 0 3em;
    `}
`;

const HeroSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    max-width: ${SCREEN_MAX_WIDTH};
    width: calc(100% - 2em);
    ${({ theme }) => theme.media.large`
        flex-direction: column-reverse;
        max-width: 90%;
    `};
`;

const HeroContent = styled.article``;

const Header = styled.h1`
    color: ${({ theme }) => theme.colors.WHITE};
    font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
    font-size: 3.5em;
    line-height: 1.5;
    margin: 0 0 0.5em;
    padding: 0;
    ${({ theme }) => theme.media.medium`
        font-size: 2.5em;
        line-height: 1;
    `};
`;

const Intro = styled(MarkdownWrapper)`
    color: ${({ theme }) => theme.colors.WHITE};
    max-width: 40em;
    padding: 0 0 1em;
    p {
        font-size: 1.25em;
        line-height: 1.5;
        margin: 0;
        padding: 0;
        span {
            color: ${({ theme }) => theme.colors.BASE};
            padding: 0 0.25em;
        }
        .accent {
            background:${({ theme }) => theme.colors.ACCENT}; 
        }
        .active {
            background:${({ theme }) => theme.colors.ACTIVE}; 
        }
        .highlight {
            background:${({ theme }) => theme.colors.HIGHLIGHT}; 
        }
    }
    ${({ theme }) => theme.media.medium`
        min-height: 10em;
        padding: 0 0.5em 1em; 
        width: 100%;
        br {
            display: none;
        }
    `};
`;

const Current = styled.article`
    background: ${({ theme }) => theme.colors.WHITE};
    border: 2px solid ${({ theme }) => theme.colors.BASE};
    box-shadow: ${({ theme }) => theme.colors.BASE} -8px 8px;
    margin: 1em 0;
    padding: 1em 2em;
`;

const CurrentlyExploring = styled(MarkdownWrapper)`
    max-width: 30em;
    h2 {
        font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
        font-size: 1.5em;
        margin: 0 0 0.5em;
    }
    ul {
        list-style: none;
    }
    li {
        margin: 0 0 1em 0;
    }
    li:before {
        content: "✨";   
        font-weight: bold; 
         display: inline-block; 
         margin-left: -1.5em;
         padding-right: 0.5em;
    }
    p {
        font-size: 1em;
        line-height: 1.5;
        margin: 0;
        padding: 0;
        span {
            background: #1b8661;
            color: #FFFFFF;
            padding: 0 0.25em;
        }
    }
    ${({ theme }) => theme.media.medium`
        min-height: 10em;
        padding: 0.5em 0; 
        width: 100%
        br {
            display: none;
        }
    `};
`;

const HeroImg = styled(Img)`
    height: auto;
    max-width: 30em;
    width: 100%;
    ${({ theme }) => theme.media.large`
        margin: 0 auto 2em;
    `};
`;

export const Hero: React.FC = () => {
  const { frontmatter } = useAboutData();
  return (
    <HeroWrapper>
        <HeroSection>
        <HeroContent>
            <Header>{frontmatter.header}</Header>
            <Intro content={frontmatter.subheader} />
            <Current>
                <CurrentlyExploring content={frontmatter.currentlyExploring} />
            </Current>
        </HeroContent>
            <HeroImg fluid={frontmatter.heroImg.childImageSharp.fluid} alt={frontmatter.heroImgAltText} />
        </HeroSection>
    </HeroWrapper>
  )};