import { graphql } from 'gatsby';
import React from 'react';
import TemplateWrapper from '../components/TemplateWrapper';

interface IndexPageProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        header: string;
        subheader: string;
      };
    };
  };
}

export const pageQuery = graphql`
  query indexPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        header
        subheader
      }
    }
  }
`;

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <TemplateWrapper>
      {frontmatter.title}
      {frontmatter.header}
      {frontmatter.subheader}
    </TemplateWrapper>
  );
};

export default IndexPage;
