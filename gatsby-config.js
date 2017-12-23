pullInEnvironmentVariablesFromEnvFile();

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
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
    `gatsby-transformer-remark`,
  ],
}

function pullInEnvironmentVariablesFromEnvFile() {
  require('dotenv').config()
}
