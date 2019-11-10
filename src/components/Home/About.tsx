import React from 'react';
import { styled } from '~/styled';
import { useHomeData } from '~/data/useHomeData';
import { MarkdownWrapper } from '../MarkdownWrapper';

const AboutWrapper = styled.div`
    background: ${({ theme }) => theme.colors.WHITE};
    width: 100%;
`;

const AboutSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1290px;
    padding: 2em 1em;
    ${({ theme }) => theme.media.medium`
        flex-direction: column;
        max-width: 90%;
  `};
`;

const Header = styled.h1`
    color: ${({ theme }) => theme.colors.BASE};
    font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
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
    background: ${({ theme }) => theme.colors.WHITE};
    border: 2px solid ${({ theme }) => theme.colors.DARK_GRAY};
    box-shadow: ${({ theme }) => theme.colors.DARK_GRAY} -8px 8px;
    margin: 0 0 0 2em;
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
    a {
        text-decoration-color: ${({ theme }) => theme.colors.ACTIVE};
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
        font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
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
    <AboutWrapper id="about">
        <AboutSection>
            <Intro>
            <Header>{frontmatter.aboutHeader}</Header>
                <AboutMe content={frontmatter.aboutContent} />
            </Intro>
            <Current>
                <CurrentlyExploring content={frontmatter.currentlyExploring} />
            </Current>
        </AboutSection>
    </AboutWrapper>
  );
};