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
`;

const Header = styled.h1`
    color: #2d055a;
    font-family: ${({ theme }) => theme.fonts.SERIF};
    font-size: 3.5em;
    line-height: 1.5;
    margin: 0;
    padding: 0;
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