import React from 'react';
import { styled } from '~/styled';
import { useResourcesData } from '~/data/useResourcesData';
import { MarkdownWrapper } from '../MarkdownWrapper';

const CodeSamplesWrapper = styled.div`
    background: ${({ theme }) => theme.colors.WHITE};
    width: 100%;
`;

const CodeSamplesSection = styled.section`
    margin: 0 auto;
    max-width: 1290px;
    padding: 2em 1em;
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

const CodeSamplesContent = styled(MarkdownWrapper)`
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

export const CodeSamples: React.FC = () => {
    const { html } = useResourcesData();
    return (
    <CodeSamplesWrapper>
        <CodeSamplesSection>
            <Intro>
            <Header>Code Samples</Header>
                <CodeSamplesContent content={html} />
            </Intro>
        </CodeSamplesSection>
    </CodeSamplesWrapper>
  );
};