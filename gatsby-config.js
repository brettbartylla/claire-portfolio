module.exports = {
  siteMetadata: {
    title: `its meeee`,
    description: `claire loes portfolio site.`,
    author: `brettbartylla`,
    siteUrl: `https://632e5592e811f71508e4bc44--venerable-faun-515b70.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fom-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `G-KE4VHYZ7HP`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/test-script.js', // Change to the script filename
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://632e5592e811f71508e4bc44--venerable-faun-515b70.netlify.app/m',
        sitemap: 'https://632e5592e811f71508e4bc44--venerable-faun-515b70.netlify.app/sitemap.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    }

  ],
}
