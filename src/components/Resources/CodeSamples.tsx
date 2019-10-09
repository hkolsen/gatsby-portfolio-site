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

const Intro = styled.article`
    ${({ theme }) => theme.media.medium`
        margin: 0 0 1.5em;
    `};
`;

const CodeSamplesIntro = styled(MarkdownWrapper)`
    max-width: 30em;
    h2 {
        color: ${({ theme }) => theme.colors.HIGHLIGHT};
        font-family: ${({ theme }) => theme.fonts.SERIF};
        font-size: 3em;
        font-weight: ${({ theme }) => theme.weights.SEMI_BOLD};
        margin: 0 0 1em;
        padding: 0;
        text-decoration: underline;
        text-decoration-color: ${({ theme }) => theme.colors.ACTIVE};
        ${({ theme }) => theme.media.medium`
            font-size: 2.5em;
        `};
    }
    p {
        font-size: 1em;
        line-height: 1.5;
        margin: 0;
        padding: 0;
    }
`;

const CodeSamplesList = styled(MarkdownWrapper)`
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }
`;

export const CodeSamples: React.FC = () => {
    const { html, frontmatter } = useResourcesData();
    return (
    <CodeSamplesWrapper>
        <CodeSamplesSection>
            <Intro>
                <CodeSamplesIntro content={frontmatter.codeSamplesIntro} />
                <CodeSamplesList content={html} />
            </Intro>
        </CodeSamplesSection>
    </CodeSamplesWrapper>
  );
};