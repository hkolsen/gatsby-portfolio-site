import React from 'react';
import TemplateWrapper from '~/components/TemplateWrapper';
import { Hero } from '~/components/Home/Hero';
import { Speaking } from '~/components/Home/Speaking';
import { Writing } from '~/components/Home/Writing';

const IndexPage: React.FC = () => 
    <TemplateWrapper>
      <Hero />
      <Speaking />
      <Writing />
    </TemplateWrapper>

export default IndexPage;
