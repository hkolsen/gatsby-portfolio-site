import React from 'react';
import { styled } from '~/styled';
import { MarkdownWrapper } from '../MarkdownWrapper';
import { useResourcesData } from '~/data/useResourcesData';
import { FormattedMessage } from 'react-intl';

const ResourcesWrapper = styled.div`
  background: ${({ theme }) => theme.colors.LIGHT_BG};
  width: 100%;
`;

const ResourcesSection = styled.section`
  margin: 0 auto;
  max-width: 1290px;
  padding: 3em 1em;
`;

const ResourcesHeader = styled.h1`
  color: ${({ theme }) => theme.colors.ACTIVE};
  font-family: ${({ theme }) => theme.fonts.SERIF};
  font-size: 3em;
  margin: 0 0 1em;
  min-width: 10em;
  padding: 0;
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.ACCENT};
  ${({ theme }) => theme.media.medium`
    font-size: 2.5em;
    min-width: auto;
  `};
`;

const ResourcesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ResourceItem = styled.li`
  background: ${({ theme }) => theme.colors.WHITE};
  box-shadow: ${({ theme }) => theme.colors.ACTIVE} -12px 12px;
  display: flex;
  flex-direction: column;
  font-size: 1em;
  line-height: 1.5;
  padding: 1em 1em 2em;
  position: relative;
  transition: ${({ theme }) => theme.easing.GLOBAL};
`;

const ResourceCategory = styled.h2`
  background: ${({ theme }) => theme.colors.HIGHLIGHT};
  color: ${({ theme }) => theme.colors.WHITE};
  display: inline;
  font-size: 0.8em;
  font-weight: normal;
  line-height: 1;
  padding: 0.5em 0.75em;
  text-transform: uppercase;
`;

const ResourceContent = styled(MarkdownWrapper)`
  font-size: 0.9em;
  margin: 0;
  padding: 0 0 1em;
`;


export const Resources: React.FC = () => {
  const { frontmatter } = useResourcesData();
  return (
    <ResourcesWrapper id="Resources">
    <ResourcesSection>
        <ResourcesHeader>
          <FormattedMessage
            defaultMessage="Resources"
            description="Navigation link that brings you to the About section"
            id="Resources.Header"
            />
          </ResourcesHeader>
        <ResourcesList>
        {(frontmatter.resourceList || []).map((resource) => (
            <ResourceItem key={resource.id}>
              <ResourceCategory>
              {resource.category}
              </ResourceCategory>
              <ResourceContent content={resource.content} />
          </ResourceItem>
        ))}
        </ResourcesList>
    </ResourcesSection>
    </ResourcesWrapper>
  );
};