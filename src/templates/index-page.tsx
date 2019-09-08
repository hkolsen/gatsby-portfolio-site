import { graphql } from 'gatsby';
import React from 'react';
import TemplateWrapper from '../components/TemplateWrapper';

interface IndexPageProps {
  data: {
    markdownRemark: {
      frontmatter: {
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
      <h1>{frontmatter.header}</h1>
      <h2>{frontmatter.subheader}</h2>
    </TemplateWrapper>
  );
};

export default IndexPage;
