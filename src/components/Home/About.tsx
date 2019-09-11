import React from 'react';
import { styled } from '~/styled';
import { useHomeData } from '~/data/useHomeData';
import { MarkdownWrapper } from '../MarkdownWrapper';

const AboutSection = styled.section`
    background: ${({ theme }) => theme.colors.WHITE};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 2em 1em;
    ${({ theme }) => theme.media.medium`
        flex-direction: column;
    `};
`;

const Header = styled.h1`
    color: ${({ theme }) => theme.colors.BASE};
    font-family: ${({ theme }) => theme.fonts.SERIF};
    font-size: 2.5em;
    line-height: 1.5;
    margin: 0 0 0.25em;
    padding: 0;
    ${({ theme }) => theme.media.medium`
        font-size: 2em;
        line-height: 1;
    `};
`;

const Intro = styled.article`
    ${({ theme }) => theme.media.medium`
        margin: 0 0 1.5em;
    `};
`;

const Current = styled.article`
    border: 0.75em solid transparent;
	background: linear-gradient(white, white) padding-box,
	            repeating-linear-gradient(-45deg, #8061e7 0, #8061e7 12.5%, transparent 0, transparent 25%, 
                    #e8e1fb 0, #e8e1fb 37.5%, transparent 0, transparent 50%) 0 / 6em 6em;
    padding: 1em 2em;
`;

const AboutMe = styled(MarkdownWrapper)`
    max-width: 30em;
    p {
        font-size: 1em;
        line-height: 1.5;
        margin: 0;
        padding: 0;
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

const CurrentlyExploring = styled(MarkdownWrapper)`
    max-width: 30em;
    h2 {
        font-family: ${({ theme }) => theme.fonts.SERIF};
        font-size: 1.5em;
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

export const About: React.FC = () => {
    const { frontmatter } = useHomeData();
    return (
    <AboutSection id="#about">
        <Intro>
           <Header>{frontmatter.aboutHeader}</Header>
            <AboutMe content={frontmatter.aboutContent} />
        </Intro>
        <Current>
            <CurrentlyExploring content={frontmatter.currentlyExploring} />
        </Current>
    </AboutSection>
  );
};