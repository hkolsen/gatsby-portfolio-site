import { useStaticQuery, graphql } from "gatsby";

const useHomeData = () => {
    const { markdownRemark } = useStaticQuery(
      graphql`
      query HomePageQuery {
        markdownRemark {
          frontmatter {
            subheader
            templateKey
            header
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
    return markdownRemark.frontmatter;
  }

  export default useHomeData;