import { useStaticQuery, graphql } from "gatsby";

interface AboutQueryResponse {
  markdownRemark: {
    frontmatter: {
      templateKey: string;
      header: string;
      subheader: string;
      heroImg: any;
      heroImgAltText: string;
      currentlyExploring: string;
    };
  };
}

export const useAboutData = () => {
    const { markdownRemark } = useStaticQuery<AboutQueryResponse>(
      graphql`
      query aboutQuery {
        markdownRemark(frontmatter: {templateKey: { eq: "about-page" }}) {
          frontmatter {
            templateKey
            header
            subheader
            heroImg {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            heroImgAltText
            currentlyExploring
          }
        }
      }
      `
    )
    return markdownRemark;
  }
