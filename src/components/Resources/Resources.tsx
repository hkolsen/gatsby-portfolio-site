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

const ResourcesHeader = styled.h2`
  background: ${({ theme }) => theme.colors.ACCENT};
  border: 2px solid ${({ theme }) => theme.colors.DARK_GRAY};
  box-shadow: ${({ theme }) => theme.colors.DARK_GRAY} -8px 8px;
  color: ${({ theme }) => theme.colors.BASE};
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
  font-size: 3em;
  font-weight: ${({ theme }) => theme.weights.SEMI_BOLD};
  margin: 0 0 0.5em;
  padding: 0.25em 0.5em;
  ${({ theme }) => theme.media.medium`
      font-size: 2.5em;
  `};
`;

const ResourcesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  list-style: none;
  margin: 2em 0 1em;
  padding: 0;
`;

const ResourceItem = styled.li`
  background: ${({ theme }) => theme.colors.WHITE};
  border: 2px solid ${({ theme }) => theme.colors.DARK_GRAY};
  box-shadow: ${({ theme }) => theme.colors.DARK_GRAY} -8px 8px;
  display: flex;
  flex-direction: column;
  font-size: 1em;
  line-height: 1.5;
  padding: 1em 1em 2em;
  position: relative;
  transition: ${({ theme }) => theme.easing.GLOBAL};
`;

const ResourceCategory = styled.h2`
  font-size: 0.8em;
  font-weight: ${({ theme }) => theme.weights.SEMI_BOLD};
  line-height: 1;
  span {
    background: ${({ theme }) => theme.colors.ACTIVE};
    color: ${({ theme }) => theme.colors.BASE};
    display: inline;
    padding: 0.5em 0.75em;
    text-transform: uppercase;
  }
`;

const ResourceContent = styled(MarkdownWrapper)`
  color: ${({ theme }) => theme.colors.BASE};
  font-size: 1em;
  margin: 0;
  padding: 0 0 1em;
  a {
    font-weight: ${({ theme }) => theme.weights.REGULAR};
    font-size: 1.25em;
  }
  ul {
    margin: 0.75em 0;
    padding: 0 1em;
    list-style: none;
  }
  li:before { 
    content: "";
    border-color: transparent ${({ theme }) => theme.colors.ACCENT};
    border-style: solid;
    border-width: 0.35em 0 0.35em 0.45em;
    display: block;
    height: 0;
    width: 0;
    left: -1em;
    top: 1.35em;
    position: relative;
  }
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
                <span>{resource.category}</span>
              </ResourceCategory>
              <ResourceContent content={resource.content} />
          </ResourceItem>
        ))}
        </ResourcesList>
    </ResourcesSection>
    </ResourcesWrapper>
  );
};