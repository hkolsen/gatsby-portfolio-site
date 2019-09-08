import React from 'react';
import { styled } from '~/styled';
import { MarkdownWrapper } from '../MarkdownWrapper';
import { TextLink } from '../CustomLink';
import useHomeData from '~/hooks/useHomeData';

const SpeakingSection = styled.section``;

const SpeakingList = styled.ul``;

const SpeakerBoxx = styled.li``;

const SpeakerBorder = styled.div``;

const TalkCat = styled.span``;

const ConfLocation = styled.span``;

const ConfLink = styled(TextLink)``;

const ConfTitle = styled.h3``;

const TalkTitle = styled.p``;

const TalkDate = styled.p``;

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

export const Speaking: React.FC = () => {
  const { talkList } = useHomeData();
  return (
    <SpeakingSection>
        <SpeakingList>
        {(talkList || []).map((talk: SpeakingData) => (
            <SpeakerBoxx key={talk.id}>
              <SpeakerBorder />
                <TalkCat>{talk.category}</TalkCat>
                <ConfLocation>{talk.location}</ConfLocation>
                {talk.confURL ? <ConfLink
                linkURL={talk.confURL}
                linkType="external"
                ><ConfTitle>{talk.confName}</ConfTitle></ConfLink> : <ConfTitle>{talk.confName}</ConfTitle>}
                <TalkTitle>{talk.title}</TalkTitle>
                <MarkdownWrapper content={talk.description} />
                <TalkDate>{talk.date}</TalkDate>
                {talk.slides && <TextLink
                linkURL={talk.slides}
                linkType="external"
                >View Slides</TextLink>}
                {talk.video && <TextLink
                linkURL={talk.video}
                linkType="external"
                >Watch Video</TextLink>}
            </SpeakerBoxx>
        ))}
        </SpeakingList>
    </SpeakingSection>
  );
};