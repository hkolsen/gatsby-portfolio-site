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
`;

const FeaturedTalk = styled.article`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 0 1em;
  padding: 0px;
  ${({ theme }) => theme.media.medium`
    flex-direction: column;
  `};
`;

const SpeakingHeader = styled.h1`
  color: ${({ theme }) => theme.colors.ACTIVE};
  font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
  font-size: 3em;
  margin: 0 0 1em;
  min-width: 10em;
  padding: 0;
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.ACCENT};
  ${({ theme }) => theme.media.medium`
    font-size: 2.5em;
    min-width: auto;
  `};
`;

const SpeakingHeaderAccent = styled.span``;

const SpeakingList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
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
  display: flex;
  flex-direction: column;
  font-size: 1em;
  line-height: 1.5;
  padding: 1em 1em 2em;
  position: relative;
  transition: ${({ theme }) => theme.easing.GLOBAL};
  :focus-within {
    box-shadow: 0 5px ${({ theme }) => theme.colors.ACCENT} inset;
  }
  :hover {
    box-shadow: 0 5px ${({ theme }) => theme.colors.ACCENT} inset;
  }
  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: 0;
    height: 0;
    width: 50%;
    border-bottom: 1.5em solid ${({ theme }) => theme.colors.LIGHT_BG};
    box-sizing: border-box;
    right: 0;
    border-left: 2em solid transparent;
  }
  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: 0;
    height: 0;
    width: 50%;
    border-bottom: 1.5em solid ${({ theme }) => theme.colors.LIGHT_BG};
    box-sizing: border-box;
    left: 0;
    border-right: 2em solid transparent;
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
  background: ${({ theme }) => theme.colors.HIGHLIGHT};
  color: ${({ theme }) => theme.colors.WHITE};
  display: inline;
  font-size: 0.8em;
  font-weight: normal;
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
  display: flex;
  flex-direction: column;
  font-size: 1em;
  line-height: 1.5;
  padding: 1em 1em 2em;
  position: relative;
  transition: ${({ theme }) => theme.easing.GLOBAL};
  :focus-within {
    box-shadow: 0 5px ${({ theme }) => theme.colors.ACCENT} inset;
  }
  :hover {
    box-shadow: 0 5px ${({ theme }) => theme.colors.ACCENT} inset;
  }
  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: 0;
    height: 0;
    width: 50%;
    border-bottom: 1.5em solid ${({ theme }) => theme.colors.LIGHT_BG};
    box-sizing: border-box;
    right: 0;
    border-left: 2em solid transparent;
  }
  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: 0;
    height: 0;
    width: 50%;
    border-bottom: 1.5em solid ${({ theme }) => theme.colors.LIGHT_BG};
    box-sizing: border-box;
    left: 0;
    border-right: 2em solid transparent;
  }
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
              {talk.video && <MaterialsLink
              linkURL={talk.video}
              linkType="external"
              >Watch Video</MaterialsLink>}
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
          </SpeakerBoxx>
        ))}
        </SpeakingList>
    </SpeakingSection>
    </SpeakingWrapper>
  );
};