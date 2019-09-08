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
          }
        }
      }
      `
    )
    return markdownRemark.frontmatter;
  }

  export default useHomeData;