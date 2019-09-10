import { useStaticQuery, graphql } from "gatsby";

interface HomeQueryResponse {
  markdownRemark: {
    frontmatter: {
      templateKey: string;
      header: string;
      subheader: string;
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
      blogList: Array<{
        id: string;
        featured: boolean;
        title: string;
        description: string;
        url: string;
        ctaText: string;
        blogImg: any;
        tags: string;
      }>;
    };
  };
}

export const useHomeData = () => {
    const { markdownRemark } = useStaticQuery<HomeQueryResponse>(
      graphql`
      query homeQuery {
        markdownRemark {
          frontmatter {
            templateKey
            header
            subheader
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
            blogList {
              id
              featured
              title
              description
              url
              ctaText
              blogImg
              tags
            }
          }
        }
      }
      `
    )
    return markdownRemark;
  }
