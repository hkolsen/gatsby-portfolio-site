import React from 'react';
import { styled } from '~/styled';
import { useResourcesData } from '~/data/useResourcesData';
import { MarkdownWrapper } from '../MarkdownWrapper';
import { CTALink } from '../CustomLink';

const HeroWrapper = styled.div`
    background-image: 
    url(../../img/hero-top.svg), 
    url(../../img/hero-btm.svg);
    background-position: 
    top left, 
    bottom right; 
    background-size: 
    50vw auto, 
    75vw auto;
    background-repeat: no-repeat, no-repeat; 
    border-bottom: 0.5em solid ${({ theme }) => theme.colors.HIGHLIGHT};
    padding: 10em 0;
    position: relative;
    width: 100%;
    ${({ theme }) => theme.media.large`
        padding: 10em 2em;
    `};
    ${({ theme }) => theme.media.medium`
        background-size: 
        80vw auto, 
        100vw auto;
        padding: 10em 2em;
    `};
`;

const HeroSection = styled.section`
    margin: 0 auto;
    max-width: 1290px;
`;

const Header = styled.h1`
    color: ${({ theme }) => theme.colors.ACTIVE};
    font-family: ${({ theme }) => theme.fonts.SERIF};
    font-size: 3.5em;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    ${({ theme }) => theme.media.medium`
        font-size: 2.5em;
        line-height: 1;
    `};
`;

const Intro = styled(MarkdownWrapper)`
    color: ${({ theme }) => theme.colors.BASE};
    max-width: 29em;
    padding: 0 0 1em;
    p {
        font-size: 1.25em;
        line-height: 1.5;
        margin: 0;
        padding: 0;
        span {
            background: ${({ theme }) => theme.colors.HIGHLIGHT};
            color: ${({ theme }) => theme.colors.WHITE};
            padding: 0 0.25em;
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

const SlidesLink = styled(CTALink)`
    font-size: 1.25em;
`;

export const Hero: React.FC = () => {
    const { frontmatter } = useResourcesData();
    return (
    <HeroWrapper>
        <HeroSection>
            <Header>{frontmatter.resourcesHeader}</Header>
            <Intro content={frontmatter.resourcesSubheader} />
            <SlidesLink linkURL="#" linkType="external">View slides</SlidesLink>
        </HeroSection>
    </HeroWrapper>
  );
};