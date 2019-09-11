import React from 'react';
import { styled } from '~/styled';
import { CTALink } from '../CustomLink';
import { useHomeData } from '~/data/useHomeData';

const WritingSection = styled.section`
  background: ${({ theme }) => theme.colors.HIGHLIGHT};
  padding: 3em 1em;
  margin: 0;
`;

const WritingList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
  ${({ theme }) => theme.media.small`
    grid-template-columns: 1fr;
  `};
`;

const WritingItem = styled.li`
    background: ${({ theme }) => theme.colors.WHITE};
    border-left: 0.5em solid ${({ theme }) => theme.colors.DARK_BG};
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
    padding: 1em 0 1em 1em;
`;

const BlogTitle = styled.h3`
    color: ${({ theme }) => theme.colors.BASE};
    font-family: ${({ theme }) => theme.fonts.SERIF};
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

const GuestBlogTag = styled.span`
  background: ${({ theme }) => theme.colors.TAG};
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 0.8em;
  padding: 0.25em 0.5em;
`;

const BlogCTA = styled.div``;

export const Writing: React.FC = () => {
  const { frontmatter } = useHomeData();
  return (
    <WritingSection id="writing">
        <WritingList>
        {(frontmatter.blogList || []).map((blog) => (
            <WritingItem key={blog.id}>
                <BlogContent>
                <BlogTagContainer>
                  <BlogTagList>{blog.tags}</BlogTagList>
                  {blog.guestBlog && <GuestBlogTag>Partner Blog</GuestBlogTag>}
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
  );
};