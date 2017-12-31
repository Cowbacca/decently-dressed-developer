pullInEnvironmentVariablesFromEnvFile();

module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACEID,
        accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
            },
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-next`,
  ],
}

function pullInEnvironmentVariablesFromEnvFile() {
  require('dotenv').config()
}
