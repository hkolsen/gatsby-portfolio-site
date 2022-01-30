import React from 'react';
import { styled, useTheme } from '~/styled';
import { TextLink } from '../../CustomLink';
import { useSpeakingData } from '~/data/useSpeakingData';
import { CalendarIcon } from '~/img/svg/CalendarIcon';
import { LocationIcon } from '~/img/svg/LocationIcon';

const CardHeader = styled.span`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const DetailRow = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const IconContainer = styled.span`
  svg {
    height: 1em;
    width: auto;
  }
`;

const DetailText = styled.p`
  color: ${({ theme }) => theme.colors.BASE};
  font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
  font-size: 0.75em;
  margin: 0 0.5em 0 0.25em;
  padding: 0;
`;

const ConfLink = styled(TextLink)``;

const TalkTitle = styled.h3`
  color: ${({ theme }) => theme.colors.BASE};
  font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
  font-size: 1.15em;
  line-height: 1.25;
  margin: 0.5em 0 1em;
`;

const ConferenceTitle = styled.p`
  font-size: 0.8em;
  line-height: 1.25;
  margin: 0;
  padding: 0;
`;

const SpeakingList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
  ${({ theme }) => theme.media.small`
    grid-template-columns: 1fr;
  `};
`;

const SpeakingItem = styled.li`
    background: ${({ theme }) => theme.colors.WHITE};
    border: 2px solid ${({ theme }) => theme.colors.DARK_GRAY};
    box-shadow: ${({ theme }) => theme.colors.DARK_GRAY} -4px 4px;
    display: flex;
    flex-direction: column;
    padding: 1em;
`;

export const OtherTalks: React.FC = () => {
  const { frontmatter } = useSpeakingData();
  const { colors } = useTheme();

  return (
        <SpeakingList>
        {(frontmatter.talkList || []).map((talk) => (
            !talk.featured && 
          <SpeakingItem>
            <CardHeader>
              <ConferenceTitle>{talk.confName}</ConferenceTitle>
              {talk.confURL ? 
                <TalkTitle>
                  <ConfLink linkURL={talk.confURL} linkType="external">{talk.title}</ConfLink>
                </TalkTitle> : 
                <TalkTitle>{talk.title}</TalkTitle>
              }
              </CardHeader>
            <DetailRow>
            <IconContainer>
              <CalendarIcon color={colors.DARK_GRAY} altText="Icon representing a calendar" />
            </IconContainer>
            <DetailText>{talk.date}</DetailText>
            </DetailRow>
            <DetailRow>
                <IconContainer>
                  <LocationIcon color={colors.DARK_GRAY} altText="Icon representing a map indicator" />
                </IconContainer>
                <DetailText>{talk.location}</DetailText>
              </DetailRow>
          </SpeakingItem>
        ))}
        </SpeakingList>
  );
};