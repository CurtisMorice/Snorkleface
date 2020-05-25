/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)
require("dotenv").config({
  path: `.env.${ process.env.NODE_ENV }`,
})
module.exports = {
  siteMetadata: {
    title: 'Snorkleface The Reckoning',
    author: 'Curtis Morice'
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${ __dirname }/static/`
      },
    },
    `gatsby-transformer-pdf`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
  ],
}
  // `gatsby-plugin-sharp`,
  // `gatsby-transformer-sharp`,
  // `gatsby-remark-responsive-iframe`,