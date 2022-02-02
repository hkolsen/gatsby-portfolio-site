import { useStaticQuery, graphql } from "gatsby";

interface HomeQueryResponse {
  markdownRemark: {
    frontmatter: {
      templateKey: string;
      header: string;
      subheader: string;
      heroImg: {
        publicURL: string;
      };
      heroImgAltText: string;
      footerHeader: string;
    };
  };
}

export const useHomeData = () => {
    const { markdownRemark } = useStaticQuery<HomeQueryResponse>(
      graphql`
      query homeQuery {
        markdownRemark(frontmatter: {templateKey: { eq: "index-page" }}) {
          frontmatter {
            templateKey
            header
            subheader
            heroImg {
              publicURL
            }
            heroImgAltText
            footerHeader
          }
        }
      }
      `
    )
    return markdownRemark;
  }
