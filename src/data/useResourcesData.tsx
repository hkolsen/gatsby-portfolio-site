import { useStaticQuery, graphql } from "gatsby";

interface ResourcesQueryResponse {
  markdownRemark: {
    html: string;
    frontmatter: {
      templateKey: string;
      resourcesHeader: string;
      resourcesSubheader: string;
      resourcesHeroImg: any;
      resourcesHeroImgAlt: string;
      resourceList: Array<{
        id: string;
        category: string;
        content: string;
      }>;
      codeSamplesIntro: string;
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
            resourcesHeroImg {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            resourcesHeroImgAlt
            resourceList {
              id
              category
              content
            }
            codeSamplesIntro
          }
        }
      }
      `
    )
    return markdownRemark;
  }
