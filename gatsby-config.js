module.exports = {
  siteMetadata: {
    title: 'Welcome to my site',
    description:
      'Heidi Olsen is a Senior Frontend Engineer located in Portland, Ore.',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2048,
            },
          },
          {
            resolve:"@weknow/gatsby-remark-codepen",
            options: {
              theme: "dark",
              height: 400
            }
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: /svg/
          }
      }
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '~': '.',
        },
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
