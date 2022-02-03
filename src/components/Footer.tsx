import React from 'react';
import { useHomeData } from '~/data/useHomeData';
import { styled, useTheme } from '~/styled';
import { SocialIcons } from '../img/svg/SocialIcons';
import { CustomLink, TextLink } from './CustomLink';

const FooterSection = styled.section`
    background: ${({ theme }) => theme.colors.BASE};
    color: ${({ theme }) => theme.colors.WHITE};
    padding: 3em 1em;
`;

const FooterHeader = styled.h2`
    color: ${({ theme }) => theme.colors.WHITE};
    font-size: 1.25em;
    margin: 0 0 0.25em;
    padding: 0;
    text-align: center;
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
            fill: ${({ theme }) => theme.colors.ACTIVE};
            transform: scale(1.1);
        }
    }
`;

const FooterText = styled.div`
    font-size: 0.75em;
    margin: 0 auto;
    text-align: center;
`;

const FooterLink = styled(TextLink)`
color: ${({ theme }) => theme.colors.WHITE};
`;

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const { colors } = useTheme();
    const { frontmatter } = useHomeData();
    return (
    <FooterSection>
        <FooterHeader>
        {frontmatter.footerHeader}
        </FooterHeader>
        <SocialIconList>
            <SocialIconContainer>
                <SocialLink linkType="external" linkURL="https://twitter.com/SwissWebMiss">
                    <SocialIcons color={colors.ACCENT} socialName="Twitter" />
                </SocialLink>
            </SocialIconContainer>
            <SocialIconContainer>
                <SocialLink linkType="external" linkURL="https://github.com/hkolsen">
                    <SocialIcons color={colors.ACCENT} socialName="Github" />
                </SocialLink>
            </SocialIconContainer>
            <SocialIconContainer>
                <SocialLink linkType="external" linkURL="https://codepen.io/SwissWebMiss">
                    <SocialIcons color={colors.ACCENT} socialName="CodePen" />
                </SocialLink>
            </SocialIconContainer>
            <SocialIconContainer>
                <SocialLink linkType="external" linkURL="https://www.linkedin.com/in/heidiolsen/">
                    <SocialIcons color={colors.ACCENT} socialName="LinkedIn" /></SocialLink>
            </SocialIconContainer>
            <SocialIconContainer>
                <SocialLink linkType="external" linkURL="mailto:hey@heidiolsen.com">
                    <SocialIcons color={colors.ACCENT} socialName="Email" />
                </SocialLink>
            </SocialIconContainer>
        </SocialIconList> 
        <FooterText>
        &copy; {currentYear} Heidi Olsen. Illustration credit to <FooterLink linkType="external" linkURL="https://www.northwestnina.com/">Northwest Nina</FooterLink> and headshot credit to <FooterLink linkType="external" linkURL="instagram.com/katiemarika">Katie Fujihara</FooterLink>.
        </FooterText>      
    </FooterSection>
    )
};
  