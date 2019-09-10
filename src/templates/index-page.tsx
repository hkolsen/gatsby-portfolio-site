import React from 'react';
import TemplateWrapper from '~/components/TemplateWrapper';
import { Hero } from '~/components/Home/Hero';
import { Speaking } from '~/components/Home/Speaking';
import { Writing } from '~/components/Home/Writing';
import { Footer } from '~/components/Home/Footer';

const IndexPage: React.FC = () => 
    <TemplateWrapper>
      <Hero />
      <Speaking />
      <Writing />
      <Footer />
    </TemplateWrapper>

export default IndexPage;
