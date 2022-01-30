import React from 'react';
import { styled } from '~/styled';
import { OtherTalks } from './OtherTalks';
import { FeaturedTalks } from './FeaturedTalks';

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

const TalkCat = styled.span`
  background: ${({ theme }) => theme.colors.ACCENT};
  color: ${({ theme }) => theme.colors.BASE};
  display: inline-block;
  font-size: 1em;
  font-weight: ${({ theme }) => theme.weights.SEMI_BOLD};
  line-height: 1;
  margin: 0 0 1em;
  padding: 0.5em 0.75em;
  text-transform: uppercase;
`;

export const Speaking: React.FC = () => (
  <SpeakingWrapper id="speaking">
    <SpeakingSection>
      <TalkCat>Featured Talks</TalkCat>
      <FeaturedTalks />
    </SpeakingSection>
    <SpeakingSection>
      <TalkCat>Other Talks</TalkCat>
      <OtherTalks />
    </SpeakingSection>
  </SpeakingWrapper>
  );