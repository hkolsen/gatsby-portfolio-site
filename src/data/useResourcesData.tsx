import { useStaticQuery, graphql } from "gatsby";

interface ResourcesQueryResponse {
  markdownRemark: {
    html: string;
    frontmatter: {
      templateKey: string;
      resourcesHeader: string;
      resourcesSubheader: string;
      resourceList: Array<{
        id: string;
        category: string;
        content: string;
      }>;
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
            resourcesHeader
            resourcesSubheader
            resourceList {
              id
              category
              content
            }
            codeSamples
          }
        }
      }
      `
    )
    return markdownRemark;
  }
