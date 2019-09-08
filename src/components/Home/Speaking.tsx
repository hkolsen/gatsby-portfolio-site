import React from 'react';
import { styled } from '~/styled';
import { MarkdownWrapper } from '../MarkdownWrapper';
import { TextLink } from '../CustomLink';
import useHomeData from '~/hooks/useHomeData';

const SpeakingSection = styled.section``;

interface SpeakingData {
    id: string;
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
        <ul>
        {(talkList || []).map((talk: SpeakingData) => (
            <li key={talk.id}>
                <span>{talk.category}</span>
                <span>{talk.title}</span>
                <MarkdownWrapper content={talk.description} />
                {talk.slides && <TextLink
                linkURL={talk.slides}
                linkType="external"
                >View Slides</TextLink>}
                {talk.video && <TextLink
                linkURL={talk.video}
                linkType="external"
                >Watch Video</TextLink>}
            </li>
        ))}
        </ul>
    </SpeakingSection>
  );
};