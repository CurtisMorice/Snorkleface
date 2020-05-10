/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`)

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      resolve: `gatsby-transformer-remark`,
      options: {
        name: `assets`,
        path: path.join(__dirname, `assets`),
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    `gatsby-transformer-pdf`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}