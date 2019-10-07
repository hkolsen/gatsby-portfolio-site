import React from 'react';
import TemplateWrapper from '~/components/TemplateWrapper';
import { Footer } from '~/components/Footer';
import { CodeSamples } from '~/components/Resources/CodeSamples';

const ResourcesPage: React.FC = () => 
    <TemplateWrapper>
      Resources
      <CodeSamples />
      <Footer />
    </TemplateWrapper>

export default ResourcesPage;
