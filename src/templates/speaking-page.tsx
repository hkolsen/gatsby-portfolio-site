import React from 'react';
import TemplateWrapper from '~/components/TemplateWrapper';
import { Hero } from '~/components/SecondaryPages/Hero';
import { Speaking } from '~/components/SecondaryPages/Speaking/Speaking';
import { useSpeakingData } from '~/data/useSpeakingData';

const SpeakingPage: React.FC = () => {
  const { frontmatter } = useSpeakingData();
  return (
    <TemplateWrapper>
      <Hero data={frontmatter } />
      <Speaking />
    </TemplateWrapper>
  )};

export default SpeakingPage;
