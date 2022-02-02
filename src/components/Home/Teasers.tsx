import React from 'react';
import { styled, useTheme } from '~/styled';
import { SCREEN_MAX_WIDTH } from '~/utils/constants';
import { CustomLink } from '../CustomLink';

const TeasersWrapper = styled.div`
    background: ${({ theme }) => theme.colors.WHITE};
    width: 100%;
`;

const TeasersSection = styled.section`
  max-width: ${SCREEN_MAX_WIDTH};
  margin: 0 auto;
  padding: 2em 1em;
  width: calc(100% - 2em);
`;

const TeasersList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 1em;
  justify-content: space-between;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  ${({ theme }) => theme.media.medium`
    flex-direction: column;
    justify-content: center;
  `};
`;

const TeaserItem = styled.li<{ background: string }>`
  background: ${({ background, theme }) => background != null ? background : theme.colors.ACCENT};
  border: 2px solid ${({ theme }) => theme.colors.BASE};
  box-shadow: ${({ theme }) => theme.colors.BASE} -8px 8px;
  margin: 1em 0;
  padding: 1em 2em;
  transition: ${({ theme }) => theme.easing.GLOBAL};
  :hover {
    transform: translateY(-1em);
  }
  &:focus {
    border: 2px dashed ${({ theme }) => theme.colors.BASE};
  }
`;

const TeaserLink = styled(CustomLink)`
  color: ${({ theme }) => theme.colors.BASE};
  font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
  font-weight: ${({ theme }) => theme.weights.SEMI_BOLD};
  font-size: 2em;
  height: 100%;
  text-decoration: none;
  width: 100%;
  &:hover {
    text-decoration: underline;
  }
`;

export const Teasers: React.FC = () => {
   const { colors } = useTheme();
  return (
    <TeasersWrapper>
        <TeasersSection>
          <TeasersList>
          <TeaserItem background={colors.ACCENT}>
            <TeaserLink linkType="internal" linkURL="/about">
            About Heidi
            </TeaserLink>
          </TeaserItem>
          <TeaserItem background={colors.HIGHLIGHT}>
          <TeaserLink linkType="internal" linkURL="/speaking">
            Speaking + Sharing
          </TeaserLink>
          </TeaserItem>
          <TeaserItem background={colors.ACTIVE}>
          <TeaserLink linkType="internal" linkURL="/writing">
            Selected Writing
          </TeaserLink>
          </TeaserItem>
        </TeasersList>
        </TeasersSection>
    </TeasersWrapper>
  )};