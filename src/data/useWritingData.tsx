import { useStaticQuery, graphql } from "gatsby";

interface WritingQueryResponse {
  markdownRemark: {
    frontmatter: {
      templateKey: string;
      header: string;
      subheader: string;
      heroImg: any;
      heroImgAltText: string;
      blogList: Array<{
        id: string;
        featured: boolean;
        title: string;
        description: string;
        url: string;
        ctaText: string;
        blogImg: any;
        tags: string;
        guestBlog: boolean;
      }>;
    };
  };
}

export const useWritingData = () => {
    const { markdownRemark } = useStaticQuery<WritingQueryResponse>(
      graphql`
      query writingQuery {
        markdownRemark(frontmatter: {templateKey: { eq: "writing-page" }}) {
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
            blogList {
              id
              featured
              title
              description
              url
              ctaText
              blogImg
              tags
              guestBlog
            }
          }
        }
      }
      `
    )
    return markdownRemark;
  }
