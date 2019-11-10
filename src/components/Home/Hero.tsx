import React from 'react';
import { styled, useTheme } from '~/styled';
import { useHomeData } from '~/data/useHomeData';
import { MarkdownWrapper } from '../MarkdownWrapper';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

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
    max-width: 1290px;
    ${({ theme }) => theme.media.medium`
        flex-direction: column;
        max-width: 90%;
    `};
`;

const HeroContent = styled.article``;

const ChartContainer = styled.aside`
    max-height: 40em;
    svg {
        overflow: inherit;
    }
    .caption {
        fill: ${({ theme }) => theme.colors.WHITE};
        font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
        font-size: 1rem;
        font-weight: ${({ theme }) => theme.weights.SEMI_BOLD};
        text-shadow: none;
    }
    .scale {
        fill: transparent;
        stroke: ${({ theme }) => theme.colors.LIGHT_BG};
        stroke-width: 0.5;
    }
    ${({ theme }) => theme.media.medium`
        max-height: 30em;
        svg {
            width: 350px;
            height: 350px;
        }
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

export const Hero: React.FC = () => {
    const { frontmatter } = useHomeData();
    const { colors } = useTheme();
    return (
    <HeroWrapper>
        <HeroSection>
            <HeroContent>
                <Header>{frontmatter.header}</Header>
                <Intro content={frontmatter.subheader} />
            </HeroContent>
            <ChartContainer>
                <RadarChart
                captions={{
                solutions: 'Problem-Solving',
                design: 'Design Dabbling',
                fun: 'Fun Professional',
                contribution: 'Community Contributing',
                systems: 'Refactoring Systems'
                }}
                data={[
                {
                    data: {
                    solutions: 1,
                    design: .7,
                    fun: 1,
                    contribution: 0.7,
                    systems: 0.9
                    },
                    meta: { color: colors.ACCENT }
                },
                {
                    data: {
                    solutions: 0.5,
                    design: .4,
                    fun: 1,
                    contribution: 1,
                    systems: 0.7
                    },
                    meta: { color: colors.ACTIVE }
                },
                {
                    data: {
                    solutions: 1,
                    design: .5,
                    fun: 1,
                    contribution: 0.9,
                    systems: 0.8
                    },
                    meta: { color: colors.HIGHLIGHT }
                },
                ]}
                size={500}
            />
          </ChartContainer>
        </HeroSection>
    </HeroWrapper>
  );
};