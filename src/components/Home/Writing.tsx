import React from 'react';
import { styled } from '~/styled';
// import { MarkdownWrapper } from '../MarkdownWrapper';
import { CTALink } from '../CustomLink';
import { useHomeData } from '~/data/useHomeData';
// import { BlogIcon } from '~/img/svg/BlogIcon';

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

// const BlogImgContainer = styled.div`
//     background: ${({ theme }) => theme.colors.DARK_BG};
//     max-width: 10em;
//     ${({ theme }) => theme.media.small`
//     max-width: 100%;
//     width: 100%;
//   `};
// `;

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
    min-height: 3em;
`;

const BlogTags = styled.span`
    font-size: 0.8em;
`;

// const BlogDesc = styled(MarkdownWrapper)`
//     font-size: 0.75em;
// `;

const BlogCTA = styled.div``;

export const Writing: React.FC = () => {
  const { frontmatter } = useHomeData();
  // const { colors } = useTheme();
  return (
    <WritingSection>
        <WritingList>
        {(frontmatter.blogList || []).map((blog) => (
            <WritingItem key={blog.id}>
                {/* <BlogImgContainer>
                    <BlogIcon color={colors.TAG} blogTitle={blog.title} blogImg={blog.blogImg} />
                </BlogImgContainer> */}
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