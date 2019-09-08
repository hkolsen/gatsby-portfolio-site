import React from 'react';
import TemplateWrapper from '../components/TemplateWrapper';
import { Hero } from '~/components/Hero';

// interface IndexPageProps {
//   data: {
//     markdownRemark: {
//       frontmatter: {
//         header: string;
//         subheader: string;
//       };
//     };
//   };
// }

// export const pageQuery = graphql`
//   query indexPageQuery {
//     markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//       frontmatter {
//         header
//         subheader
//       }
//     }
//   }
// `;

const IndexPage: React.FC = () => 
    <TemplateWrapper>
      <Hero />
    </TemplateWrapper>

export default IndexPage;
