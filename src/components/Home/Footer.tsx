import React from 'react';
import { styled, useTheme } from '~/styled';
// import { MarkdownWrapper } from '../MarkdownWrapper';
import { SocialIcons } from '../../img/svg/SocialIcons';
import { CustomLink, TextLink } from '../CustomLink';

const FooterSection = styled.section`
    background: ${({ theme }) => theme.colors.DARK_BG};
    color: ${({ theme }) => theme.colors.WHITE};
    padding: 3em 1em;
`;

const SocialIconList = styled.ul`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
    margin: 0 auto;
    max-width: 20em;
    padding: 1em 0;
`;

const SocialIconContainer = styled.li`
    width: 2em;
    height: 2em;
`;

const SocialLink = styled(CustomLink)`
    svg {
        transition: ${({ theme }) => theme.easing.GLOBAL};
    }
    &:hover {
        svg {
            fill: ${({ theme }) => theme.colors.TAG};
        }
    }
`;

const FooterText = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 0.75em;
    margin: 0 auto;
    text-align: center;
`;

const FooterLink = styled(TextLink)`
    color: ${({ theme }) => theme.colors.WHITE};
`;

export const Footer: React.FC = () => {
    const { colors } = useTheme();
    return (
    <FooterSection>
        <SocialIconList>
            <SocialIconContainer>
                <SocialLink linkType="external" linkURL="https://twitter.com/SwissWebMiss">
                    <SocialIcons color={colors.WHITE} socialName="Twitter" />
                </SocialLink>
            </SocialIconContainer>
            <SocialIconContainer>
                <SocialLink linkType="external" linkURL="https://github.com/hkolsen">
                    <SocialIcons color={colors.WHITE} socialName="Github" />
                </SocialLink>
            </SocialIconContainer>
            <SocialIconContainer>
                <SocialLink linkType="external" linkURL="https://twitter.com/SwissWebMiss">
                    <SocialIcons color={colors.WHITE} socialName="CodePen" />
                </SocialLink>
            </SocialIconContainer>
            <SocialIconContainer>
                <SocialLink linkType="external" linkURL="https://codepen.io/SwissWebMiss">
                    <SocialIcons color={colors.WHITE} socialName="LinkedIn" /></SocialLink>
            </SocialIconContainer>
            <SocialIconContainer>
                <SocialLink linkType="external" linkURL="mailto:swisswebmistress@gmail.com">
                    <SocialIcons color={colors.WHITE} socialName="Email" />
                </SocialLink>
            </SocialIconContainer>
        </SocialIconList> 
        <FooterText>
        <span>&copy; 2019 Heidi Olsen</span>
        <span>Credits: <FooterLink linkType="external" linkURL="https://www.freepik.com/free-photos-vectors/business">Header SVG backgrounds curated from freepik.com</FooterLink></span>
        </FooterText>      
    </FooterSection>
    )
};
  