import { useStaticQuery, graphql } from "gatsby";

interface SpeakingQueryResponse {
  markdownRemark: {
    frontmatter: {
      templateKey: string;
      header: string;
      subheader: string;
      heroImg: {
        publicURL: string;
      };
      heroImgAltText: string;
      talkList: Array<{
        id: string;
        featured: boolean;
        confName: string;
        confURL: string;
        date: string;
        location: string;
        title: string;
        description: string;
        slides: string;
        video: string;
        category: string;
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
              publicURL
            }
            heroImgAltText
            talkList {
              id
              featured
              confName
              confURL
              date
              location
              title
              description
              slides
              video
              category
            }
          }
        }
      }
      `
    )
    return markdownRemark;
  }
