// const path = require('path')
const path = require('path');

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `OneMillionDevs`,
    description: `Growing the Ethereum Ecosystem`,
    author: `@kamescg`,
    url: 'https://onemillionsdevs.com',
    twitter: 'OneMillionDevs',
    facebook: 'OneMillionDevs',
    linkedin: 'OneMillionDevs'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-mdx`, // Markdown for the Component Era
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          content: path.resolve(__dirname, "./src/components/templates/Site"),
          default: path.resolve(__dirname, "./src/components/templates/Site"),
        },
      },
    },


    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          'design-system': '@horizin/design-system-atoms',
          'profiles': '@kames/3box-profiles',
          'did': '@kames/3box-state',
          'cms': '@kames/3box-system',
          global: path.resolve(__dirname, './src/global'),
          core: path.resolve(__dirname, './src/components/core'),
          templates: path.resolve(__dirname, './src/components/templates'),
          forms: path.resolve(__dirname, './src/components/forms'),
          views: path.resolve(__dirname, './src/components/views'),
          query: path.resolve(__dirname, './src/components/query'),
        },
        extensions: []
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

  ],

}
