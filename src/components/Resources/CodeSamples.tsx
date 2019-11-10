import React from 'react';
import { styled } from '~/styled';
import { useResourcesData } from '~/data/useResourcesData';
import { MarkdownWrapper } from '../MarkdownWrapper';

const CodeSamplesWrapper = styled.div`
    background: ${({ theme }) => theme.colors.LIGHT_BG};
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
        background: ${({ theme }) => theme.colors.ACCENT};
        border: 2px solid ${({ theme }) => theme.colors.DARK_GRAY};
        box-shadow: ${({ theme }) => theme.colors.DARK_GRAY} -8px 8px;
        color: ${({ theme }) => theme.colors.BASE};
        display: inline-block;
        font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
        font-size: 3em;
        font-weight: ${({ theme }) => theme.weights.SEMI_BOLD};
        margin: 0 0 0.5em;
        padding: 0.25em 0.5em;
        ${({ theme }) => theme.media.medium`
            font-size: 2.5em;
        `};
    }
    a {
        text-decoration-color: ${({ theme }) => theme.colors.ACTIVE};
    }
    p {
        font-size: 1em;
        line-height: 1.5;
        margin: 0;
        padding: 0;
    }
`;

const CodeSamplesList = styled(MarkdownWrapper)`
    h3 {
        font-weight: ${({ theme }) => theme.weights.SEMI_BOLD};
    }
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