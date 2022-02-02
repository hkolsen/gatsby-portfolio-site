import { useStaticQuery, graphql } from "gatsby";

interface SpeakingQueryResponse {
  markdownRemark: {
    frontmatter: {
      templateKey: string;
      header: string;
      subheader: string;
      heroImg: any;
      heroImgAltText: string;
      talkList: Array<{
        id: string;
        featured: boolean;
        slideImg: any;
        confName: string;
        confURL: string;
        date: string;
        location: string;
        title: string;
        description: string;
        slides: string;
        video: string;
        category: string;
        resources: string;
      }>;
    };
  };
}

export const useSpeakingData = () => {
    const { markdownRemark } = useStaticQuery<SpeakingQueryResponse>(
      graphql`
      query speakingQuery {
        markdownRemark(frontmatter: {templateKey: { eq: "speaking-page" }}) {
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
            talkList {
              id
              featured
              slideImg {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              confName
              confURL
              date
              location
              title
              description
              slides
              video
              category
              resources
            }
          }
        }
      }
      `
    )
    return markdownRemark;
  }
