import React from 'react';
import TemplateWrapper from '~/components/TemplateWrapper';
import { Hero } from '~/components/SecondaryPages/Hero';
import { useWritingData } from '~/data/useWritingData';
import { Writing } from '~/components/SecondaryPages/Writing/Writing';

const WritingPage: React.FC = () => {
  const { frontmatter } = useWritingData();
  return (
    <TemplateWrapper>
      <Hero data={frontmatter } />
      <Writing />
    </TemplateWrapper>
  )};

export default WritingPage;
