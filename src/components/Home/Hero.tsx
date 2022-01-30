import React from 'react';
import { styled } from '~/styled';
import { useHomeData } from '~/data/useHomeData';
import { MarkdownWrapper } from '../MarkdownWrapper';
import { SCREEN_MAX_WIDTH } from '~/utils/constants';

const HeroWrapper = styled.div`
    background: ${({ theme }) => theme.colors.DARK_GRAY};
    border-bottom: 0.5em solid ${({ theme }) => theme.colors.ACTIVE};
    padding: 3em 0;
    position: relative;
    width: 100%;
    ${({ theme }) => theme.media.medium`
        padding: 7em 0 3em;
    `}
`;

const HeroSection = styled.section`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    max-width: ${SCREEN_MAX_WIDTH};
    ${({ theme }) => theme.media.medium`
        flex-direction: column-reverse;
        max-width: 90%;
    `};
`;

const HeroContent = styled.article`
    padding: 0 0 0 1em;
    ${({ theme }) => theme.media.medium`
        padding: 0;
    `};
`;

const Header = styled.h1`
    color: ${({ theme }) => theme.colors.WHITE};
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
    color: ${({ theme }) => theme.colors.WHITE};
    max-width: 25em;
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
        padding: 0.5em 0; 
        width: 100%;
        br {
            display: none;
        }
    `};
`;

const HeroImg = styled.img`
    max-width: 30em;
    width: 100%;
    ${({ theme }) => theme.media.medium`
        margin: 0 0 2em;
    `};
`;

export const Hero: React.FC = () => {
    const { frontmatter } = useHomeData();
    return (
    <HeroWrapper>
        <HeroSection>
            <HeroContent>
                <Header>{frontmatter.header}</Header>
                <Intro content={frontmatter.subheader} />
            </HeroContent>
            <HeroImg src={frontmatter.heroImg?.publicURL} alt={frontmatter.heroImgAltText} />
        </HeroSection>
    </HeroWrapper>
  );
};