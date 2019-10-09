import React from 'react';
import TemplateWrapper from '~/components/TemplateWrapper';
import { Hero } from '~/components/Resources/Hero';
import { Footer } from '~/components/Footer';
import { CodeSamples } from '~/components/Resources/CodeSamples';
import { Resources } from '~/components/Resources/Resources';


const ResourcesPage: React.FC = () => 
    <TemplateWrapper>
      <Hero />
      <CodeSamples />
      <Resources />
      <Footer />
    </TemplateWrapper>

export default ResourcesPage;
