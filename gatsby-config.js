const path = require(`path`)
// let activeEnv =
//   process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
// console.log(`Using environment config: ${ activeEnv }`)
require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Snorkleface The Reckoning",
    firstName: "Curtis",
    lastName: "Morice",
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-pdf`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
  ],
}
