import React from 'react';
import { styled, useTheme } from '~/styled';
// import { MarkdownWrapper } from '../MarkdownWrapper';
import { CTALink } from '../CustomLink';
import useHomeData from '~/hooks/useHomeData';
import { BlogIcon } from '~/img/svg/BlogIcon';

interface WritingData {
  id: string;
  featured: boolean;
  title: string;
  description: string;
  url: string;
  ctaText: string;
  blogImg: string;
  tags: string;
}

const WritingSection = styled.section`
  background: ${({ theme }) => theme.colors.HIGHLIGHT};
  padding: 0 1em;
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
    display: flex;
    flex-direction: row;
    ${({ theme }) => theme.media.small`
    flex-direction: column;
  `};
`;

const BlogImgContainer = styled.div`
    background: ${({ theme }) => theme.colors.CTA};
    max-width: 10em;
    ${({ theme }) => theme.media.small`
    max-width: 100%;
    width: 100%;
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
    font-family: ${({ theme }) => theme.fonts.SERIF};
    font-size: 1.5em;
    line-height: 1.25;
    margin: 0.25em 0;
`;

const BlogTags = styled.span``;

// const BlogDesc = styled(MarkdownWrapper)`
//     font-size: 0.75em;
// `;

const BlogCTA = styled.div``;

export const Writing: React.FC = () => {
  const { blogList } = useHomeData();
  const { colors } = useTheme();
  return (
    <WritingSection>
        <WritingList>
        {(blogList || []).map((blog: WritingData) => (
            <WritingItem key={blog.id}>
                <BlogImgContainer><BlogIcon color={colors.LIGHT_BG} blogTitle={blog.title} blogImg={blog.blogImg} /></BlogImgContainer>
                <BlogContent>
                <BlogTags>{blog.tags}</BlogTags>
                <BlogTitle>{blog.title}</BlogTitle>
                {/* <BlogDesc content={blog.description} /> */}
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