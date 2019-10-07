import { useStaticQuery, graphql } from "gatsby";

interface ResourcesQueryResponse {
  markdownRemark: {
    html: string;
    frontmatter: {
      templateKey: string;
      codeSamples: string;
    };
  };
}

export const useResourcesData = () => {
    const { markdownRemark } = useStaticQuery<ResourcesQueryResponse>(
      graphql`
      query resourcesQuery {
        markdownRemark(frontmatter: {templateKey: { eq: "resources-page" }}) {
          html
          frontmatter {
            templateKey
            codeSamples
          }
        }
      }
      `
    )
    return markdownRemark;
  }
