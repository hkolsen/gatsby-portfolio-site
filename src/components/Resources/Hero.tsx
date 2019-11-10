import React from 'react';
import { styled } from '~/styled';
import { useResourcesData } from '~/data/useResourcesData';
import { MarkdownWrapper } from '../MarkdownWrapper';
import { CTALink, CustomLink } from '../CustomLink';
import Img from 'gatsby-image';

const HeroWrapper = styled.div`
    background: ${({ theme }) => theme.colors.WHITE};
    border-bottom: 0.5em solid ${({ theme }) => theme.colors.ACTIVE};
    padding: 10em 0 3em;
    position: relative;
    width: 100%;
`;

const HeroSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1290px;
    ${({ theme }) => theme.media.small`
        max-width: 90%;
    `};
`;

const HeroContent = styled.article``;

const Header = styled.h1`
    color: ${({ theme }) => theme.colors.BASE};
    font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
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
            background: ${({ theme }) => theme.colors.ACCENT};
            color: ${({ theme }) => theme.colors.BASE};
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

const HeroImgLink = styled(CustomLink)`
    max-width: 40em;
    width: 100%;
`;
const HeroSlidesImg = styled(Img)`
    border: 2px solid ${({ theme }) => theme.colors.DARK_GRAY};
`;

export const Hero: React.FC = () => {
    const { frontmatter } = useResourcesData();
    return (
    <HeroWrapper>
        <HeroSection>
        <HeroContent>
            <Header>{frontmatter.resourcesHeader}</Header>
            <Intro content={frontmatter.resourcesSubheader} />
            <SlidesLink linkURL="https://noti.st/heidiolsen/qrHED6/effective-storytelling-with-data-visualization" linkType="external">View slides</SlidesLink>
        </HeroContent>
        <HeroImgLink linkURL="https://noti.st/heidiolsen/qrHED6/effective-storytelling-with-data-visualization" linkType="external">
            <HeroSlidesImg fluid={frontmatter.resourcesHeroImg.childImageSharp.fluid} alt={frontmatter.resourcesHeroImgAlt} />
        </HeroImgLink>
        </HeroSection>
    </HeroWrapper>
  );
};