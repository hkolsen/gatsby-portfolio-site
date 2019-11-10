import React from 'react';
import { styled, useTheme } from '~/styled';
import { SocialIcons } from '../img/svg/SocialIcons';
import { CustomLink } from './CustomLink';
import { FormattedMessage } from 'react-intl';

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
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 0.75em;
    margin: 0 auto;
    text-align: center;
`;

export const Footer: React.FC = () => {
    const { colors } = useTheme();
    return (
    <FooterSection>
        <FooterHeader>
        <FormattedMessage
            defaultMessage="Find me online"
            description="Header for the social links"
            id="Footer.SocialLinks"
            />
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
                <SocialLink linkType="external" linkURL="mailto:swisswebmistress@gmail.com">
                    <SocialIcons color={colors.ACCENT} socialName="Email" />
                </SocialLink>
            </SocialIconContainer>
        </SocialIconList> 
        <FooterText>
        <FormattedMessage
              defaultMessage="&copy; 2019 Heidi Olsen"
              description="Copyright for the site"
              id="Footer.Copyright"
              />
        </FooterText>      
    </FooterSection>
    )
};
  