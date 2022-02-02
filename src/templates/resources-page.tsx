import React from 'react';
import TemplateWrapper from '~/components/TemplateWrapper';
import { Hero } from '~/components/SecondaryPages/Resources/Hero';
import { CodeSamples } from '~/components/SecondaryPages/Resources/CodeSamples';
import { Resources } from '~/components/SecondaryPages/Resources/Resources';


const ResourcesPage: React.FC = () => 
    <TemplateWrapper>
      <Hero />
      <CodeSamples />
      <Resources />
    </TemplateWrapper>

export default ResourcesPage;
