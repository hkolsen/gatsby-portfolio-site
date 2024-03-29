import React from 'react';
import { styled } from '~/styled';
import { CTALink } from '../../CustomLink';
import { useWritingData } from '~/data/useWritingData';
import { SCREEN_MAX_WIDTH } from '~/utils/constants';

const WritingWrapper = styled.div`
  background: ${({ theme }) => theme.colors.LIGHT_BG};
  width: 100%;
`;

const WritingSection = styled.section`
  margin: 0 auto;
  max-width: ${SCREEN_MAX_WIDTH};
  padding: 2em 1em 2.5em;
  ${({ theme }) => theme.media.small`
    max-width: 90%
  `};
`;

const WritingList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  ${({ theme }) => theme.media.small`
    grid-template-columns: 1fr;
  `};
`;

const WritingItem = styled.li`
    background: ${({ theme }) => theme.colors.WHITE};
    border: 2px solid ${({ theme }) => theme.colors.DARK_GRAY};
    box-shadow: ${({ theme }) => theme.colors.DARK_GRAY} -8px 8px;
    display: flex;
    flex-direction: row;
    ${({ theme }) => theme.media.small`
    flex-direction: column;
  `};
`;

const BlogContent = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    padding: 1em;
`;

const BlogTitle = styled.h3`
    color: ${({ theme }) => theme.colors.BASE};
    font-family: ${({ theme }) => theme.fonts.SANS_SERIF};
    font-size: 1.5em;
    line-height: 1.25;
    margin: 0.25em 0 1em;
    min-height: 3em;
`;

const BlogTagContainer = styled.div`
  align-items: center;  
  display: flex;
  justify-content: space-between;
`;

const BlogTagList = styled.span`
  font-size: 0.8em;
`;

const BlogCTA = styled.div``;

export const Writing: React.FC = () => {
  const { frontmatter } = useWritingData();
  return (
    <WritingWrapper id="writing">
    <WritingSection>
        <WritingList>
        {(frontmatter.blogList || []).map((blog) => (
            <WritingItem key={blog.id}>
                <BlogContent>
                <BlogTagContainer>
                  <BlogTagList>{blog.tags}</BlogTagList>
                </BlogTagContainer>
                <BlogTitle>{blog.title}</BlogTitle>
                <BlogCTA>
                    <CTALink
                linkURL={blog.url}
                linkType="external"
                >{blog.ctaText}</CTALink>
                </BlogCTA>
              </BlogContent>
            </WritingItem>
        ))}
        </WritingList>
    </WritingSection>
    </WritingWrapper>
  );
};