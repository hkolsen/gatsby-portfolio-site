import React from 'react';
import TemplateWrapper from '~/components/TemplateWrapper';
import { Hero } from '~/components/Home/Hero';
import { Speaking } from '~/components/Home/Speaking';

const IndexPage: React.FC = () => 
    <TemplateWrapper>
      <Hero />
      <Speaking />
    </TemplateWrapper>

export default IndexPage;
