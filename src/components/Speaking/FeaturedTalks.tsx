import React from 'react';
import { styled, useTheme } from '~/styled';
import { TextLink, CTALink } from '../CustomLink';
import { useSpeakingData } from '~/data/useSpeakingData';
import { CalendarIcon } from '~/img/svg/CalendarIcon';
import { LocationIcon } from '~/img/svg/LocationIcon';
import Img from 'gatsby-image';

const SpeakerBoxx = styled.li`
  background: ${({ theme }) => theme.colors.WHITE};
  border: 2px solid ${({ theme }) => theme.colors.DARK_GRAY};
  box-shadow: ${({ theme }) => theme.colors.DARK_GRAY} -8px 8px;
  display: flex;
  flex-direction: column;
  font-size: 1em;
  line-height: 1.5;
  padding: 1em 1em 2em;
  position: relative;
  transition: ${({ theme }) => theme.easing.GLOBAL};
`;

const SpeakerBoxxArrow = styled.div`
border-left: 22px solid transparent;
border-top: 20px solid ${({ theme }) => theme.colors.WHITE};
bottom: -25px;
position: absolute;
right: 50%;
  &:before {
    border-left: 24px solid transparent;
    border-top: 22px solid ${({ theme }) => theme.colors.DARK_GRAY};
    bottom: -2px;
    content: "";
    position: absolute;
    right: -2px;
  }
  &:after {
    border-left: 21px solid transparent;
    border-top: 24px solid ${({ theme }) => theme.colors.WHITE};
    bottom: 6px;
    content: "";
    position: absolute;
    right: 0;
  }
`;

const FeaturedSpeakingList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
  grid-column-gap: 1.25rem;
  grid-row-gap: 2.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Slides = styled(Img)`
    border: 1px solid ${({ theme }) => theme.colors.BASE};
    height: auto;
    margin: 0 0 1em;
    width: 100%;
    ${({ theme }) => theme.media.medium`
        margin: 0 0 2em;
    `};
`;

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
  font-size: 1.5em;
  line-height: 1.25;
  margin: 0.25em 0 0.5em;
`;

const ConferenceTitle = styled.p`
  line-height: 1.25;
  margin: 0;
  padding: 0;
`;

const LinkContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1em 0 0;
`;

export const FeaturedTalks: React.FC = () => {
  const { frontmatter } = useSpeakingData();
  const { colors } = useTheme();

  return (
    <FeaturedSpeakingList>
    {(frontmatter.talkList || []).map((talk) => (
        talk.featured && 
        <SpeakerBoxx key={talk.id}>
          <Slides fluid={talk.slideImg?.childImageSharp?.fluid} alt={`First slide of the ${talk.title} talk`} />
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
          <LinkContainer>
          {talk.slides && <CTALink linkURL={talk.slides} linkType="external">View Slides</CTALink>}
          {talk.video && <CTALink linkURL={talk.video} linkType="external" >Watch Video</CTALink>}
          </LinkContainer>
          <SpeakerBoxxArrow />
      </SpeakerBoxx>
    ))}
    </FeaturedSpeakingList>
  );
};