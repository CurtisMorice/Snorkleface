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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${ __dirname }/assets/`
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