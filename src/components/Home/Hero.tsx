import React from 'react';
import { styled } from '~/styled';
import useHomeData from '~/hooks/useHomeData';
import { MarkdownWrapper } from '../MarkdownWrapper';

const HeroSection = styled.section`
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
    padding: 10em;
    position: relative;
    ${({ theme }) => theme.media.large`
        padding: 10em 2em;
    `};
    ${({ theme }) => theme.media.medium`
        background-size: 
        100vw auto, 
        100vw auto;
        padding: 10em 2em;
    `};
`;

const Header = styled.h1`
    color: #2d055a;
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
    max-width: 30em;
    p {
        font-size: 1.25em;
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

export const Hero: React.FC = () => {
    const { header, subheader } = useHomeData();
    return (
    <HeroSection>
        <Header>{header}</Header>
        <Intro content={subheader} />
    </HeroSection>
  );
};