import React from 'react';
import TemplateWrapper from '~/components/TemplateWrapper';
import { Hero } from '~/components/Home/Hero';
import { About } from '~/components/Home/About';
import { Speaking } from '~/components/Home/Speaking';
import { Writing } from '~/components/Home/Writing';
import { Footer } from '~/components/Footer';

const IndexPage: React.FC = () => 
    <TemplateWrapper>
      <Hero />
      <About />
      <Speaking />
      <Writing />
      <Footer />
    </TemplateWrapper>

export default IndexPage;
