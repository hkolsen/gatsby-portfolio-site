import React from 'react';
import { styled } from '~/styled';
import { MarkdownWrapper } from '../MarkdownWrapper';
import { TextLink, CTALink } from '../CustomLink';
import { useHomeData } from '~/data/useHomeData';
import { FormattedMessage } from 'react-intl';

const SpeakingWrapper = styled.div`
  background: ${({ theme }) => theme.colors.LIGHT_BG};
  width: 100%;
`;

const SpeakingSection = styled.section`
  margin: 0 auto;
  max-width: 1290px;
  padding: 3em 1em;
  ${({ theme }) => theme.media.small`
    max-width: 90%
  `};
`;

const FeaturedTalk = styled.article`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 2em;
  padding: 0px;
  ${({ theme }) => theme.media.medium`
    flex-direction: column;
    margin: 0 0 1em;
  `};
`;

const SpeakingHeader = styled.h1`
  background: ${({ theme }) => theme.colors.ACCENT};
  border: 2px solid ${({ theme }) => theme.colors.DARK_GRAY};
  box-shadow: ${({ theme }) => theme.colors.DARK_GRAY} -8px 8px;
  color: ${({ theme }) => theme.colors.BASE};
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
  font-size: 3em;
  font-weight: ${({ theme }) => theme.weights.SEMI_BOLD};
  margin: 0 1em 1em 0;
  min-width: 10em;
  padding: 0.25em 0.5em;
  ${({ theme }) => theme.media.medium`
      font-size: 2.5em;
      min-width: auto;
  `};
`;

const SpeakingHeaderAccent = styled.span``;

const SpeakingList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
  grid-column-gap: 1.25rem;
  grid-row-gap: 2.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const TalkDescription = styled(MarkdownWrapper)`
  font-size: 0.9em;
  margin: 0;
  padding: 0 0 1em;
`;

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

const SpeakerBoxxTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SpeakerBoxxMid = styled.div`
  flex: 1;
`;

const SpeakerBoxxBottom = styled.div``;

const TalkCat = styled.span`
  background: ${({ theme }) => theme.colors.ACCENT};
  color: ${({ theme }) => theme.colors.BASE};
  display: inline-block;
  font-size: 0.8em;
  font-weight: ${({ theme }) => theme.weights.SEMI_BOLD};
  line-height: 1;
  padding: 0.5em 0.75em;
  text-transform: uppercase;
`;

const ConfLocation = styled.span``;

const ConfLink = styled(TextLink)``;

const ConfTitle = styled.h3`
  color: ${({ theme }) => theme.colors.BASE};
  font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
  font-size: 1.5em;
  line-height: 1.25;
  margin: 0.25em 0;
`;

const TalkTitle = styled.p`
  margin: 0 0 2em;
`;

const FeaturedTalkBoxx = styled.div`
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
  ${TalkTitle} {
    margin: 0;
  }
`;

const TalkDate = styled.p`
  font-size: 0.9em;
  margin: 2em 0 0;
`;

const MaterialsLink = styled(CTALink)`
  margin: 0 0.5em 1em 0;
`;

export const Speaking: React.FC = () => {
  const { frontmatter } = useHomeData();
  return (
    <SpeakingWrapper id="speaking">
    <SpeakingSection>
        <FeaturedTalk>
          <SpeakingHeader>
          <FormattedMessage
            defaultMessage="Speaking {and} Sharing"
            description="Navigation link that brings you to the About section"
            id="Writing.Header"
            values={{
              and: <SpeakingHeaderAccent>&</SpeakingHeaderAccent>
            }}
            />
          </SpeakingHeader>
        {(frontmatter.talkList || []).map((talk) => (
            talk.featured && 
            <FeaturedTalkBoxx key={talk.id}>
              <SpeakerBoxxTop>
              <TalkCat>{talk.category}</TalkCat>
                <ConfLocation>{talk.location}</ConfLocation>
              </SpeakerBoxxTop>
              <SpeakerBoxxMid>
              <TalkDate>{talk.date}</TalkDate>
              {talk.confURL ? 
                <ConfTitle><ConfLink
              linkURL={talk.confURL}
              linkType="external"
              >{talk.confName}</ConfLink></ConfTitle> : <ConfTitle>{talk.confName}</ConfTitle>}
              <TalkTitle>{talk.title}</TalkTitle>
              </SpeakerBoxxMid>
              <TalkDescription content={talk.description} />
              <SpeakerBoxxBottom>
              {talk.slides && <MaterialsLink
              linkURL={talk.slides}
              linkType="external"
              >View Slides</MaterialsLink>}
              <MaterialsLink
              linkURL="/ll19"
              linkType="internal"
              >Resources</MaterialsLink>
              </SpeakerBoxxBottom>
          </FeaturedTalkBoxx >
        ))}
        </FeaturedTalk> 
        <SpeakingList>
        {(frontmatter.talkList || []).map((talk) => (
            !talk.featured && 
            <SpeakerBoxx key={talk.id}>
              <SpeakerBoxxTop>
                <TalkCat>{talk.category}</TalkCat>
                <ConfLocation>{talk.location}</ConfLocation>
              </SpeakerBoxxTop>
              <SpeakerBoxxMid>
              <TalkDate>{talk.date}</TalkDate>
              {talk.confURL ? 
                <ConfTitle><ConfLink
              linkURL={talk.confURL}
              linkType="external"
              >{talk.confName}</ConfLink></ConfTitle> : <ConfTitle>{talk.confName}</ConfTitle>}
              <TalkTitle>{talk.title}</TalkTitle>
              </SpeakerBoxxMid>
              <MarkdownWrapper content={talk.description} />
              <SpeakerBoxxBottom>
              {talk.slides && <MaterialsLink
              linkURL={talk.slides}
              linkType="external"
              >View Slides</MaterialsLink>}
              {talk.video && <MaterialsLink
              linkURL={talk.video}
              linkType="external"
              >Watch Video</MaterialsLink>}
              </SpeakerBoxxBottom>
              <SpeakerBoxxArrow />
          </SpeakerBoxx>
        ))}
        </SpeakingList>
    </SpeakingSection>
    </SpeakingWrapper>
  );
};