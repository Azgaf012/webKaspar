module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Kaspar AudioVisual",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options:{
        postCssPlugins: [require("tailwindcss")],
      },
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/logoKaspar.png`, 
      },
    }
  ],
};
