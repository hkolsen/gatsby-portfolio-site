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
      resourcesHeroImgURL: string;
      resourceList: Array<{
        id: string;
        category: string;
        content: string;
      }>;
      codeSamplesIntro: string;
      codeSamplesList: Array<{
        id: string;
        title: string;
        linkURL: string;
        img: any;
      }>;
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
            resourcesHeroImgURL
            resourceList {
              id
              category
              content
            }
            codeSamplesIntro
            codeSamplesList {
              id
              title
              linkURL
              img {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      `
    )
    return markdownRemark;
  }
