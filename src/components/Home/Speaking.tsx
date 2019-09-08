import React from 'react';
import { styled } from '~/styled';
// import { MarkdownWrapper } from '../MarkdownWrapper';
import { TextLink, CTALink } from '../CustomLink';
import useHomeData from '~/hooks/useHomeData';

interface SpeakingData {
  id: string;
  featured: boolean;
  confName: string;
  confURL: string;
  date: string;
  location: string;
  category: string;
  title: string;
  description: string;
  slides: string;
  video: string;
}

const SpeakingSection = styled.section`
  background: ${({ theme }) => theme.colors.BORDER};
  padding: 0 1em;
`;

const SpeakingList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
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
    box-shadow: 0 5px ${({ theme }) => theme.colors.HIGHLIGHT} inset;
  }
  :hover {
    box-shadow: 0 5px ${({ theme }) => theme.colors.HIGHLIGHT} inset;
  }
  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    bottom: 0;
    height: 0;
    width: 50%;
    border-bottom: 1.5em solid ${({ theme }) => theme.colors.BORDER};
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
    border-bottom: 1.5em solid ${({ theme }) => theme.colors.BORDER};
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
  flex: 1
`;

const SpeakerBoxxBottom = styled.div``;

const TalkCat = styled.span`
  background: ${({ theme }) => theme.colors.TAG};
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
  font-family: ${({ theme }) => theme.fonts.SERIF};
  font-size: 1.5em;
  line-height: 1.5;
  margin: 0;
`;

const TalkTitle = styled.p`
  margin: 0 0 2em;
`;

const TalkDate = styled.p`
  font-size: 0.9em;
  font-style: italic;
  margin: 2em 0 0;
`;

const MaterialsLink = styled(CTALink)`
  margin: 0 0.5em 1em 0;
`;



export const Speaking: React.FC = () => {
  const { talkList } = useHomeData();
  return (
    <SpeakingSection>
        <SpeakingList>
        {(talkList || []).map((talk: SpeakingData) => (
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
              {/* <MarkdownWrapper content={talk.description} /> */}
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
  );
};