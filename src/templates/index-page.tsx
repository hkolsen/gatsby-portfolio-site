import React from 'react';
import TemplateWrapper from '~/components/TemplateWrapper';
import { Hero } from '~/components/Home/Hero';
import { Teasers } from '~/components/Home/Teasers';

const IndexPage: React.FC = () => 
    <TemplateWrapper>
      <Hero />
      <Teasers />
    </TemplateWrapper>

export default IndexPage;
