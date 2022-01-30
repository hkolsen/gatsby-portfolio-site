import React from 'react';
import TemplateWrapper from '~/components/TemplateWrapper';
import { Hero } from '~/components/SecondaryPages/Hero';
import { Footer } from '~/components/Footer';
import { useWritingData } from '~/data/useWritingData';
import { Writing } from '~/components/SecondaryPages/Writing/Writing';

const WritingPage: React.FC = () => {
  const { frontmatter } = useWritingData();
  return (
    <TemplateWrapper>
      <Hero data={frontmatter } />
      <Writing />
      <Footer />
    </TemplateWrapper>
  )};

export default WritingPage;
