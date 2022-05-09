import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Cyberstudio`,
    siteUrl: `https://cyberstudio.app`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cyberstudio`,
        short_name: `Cyberstudio`,
        start_url: `/`,
        background_color: `#fcee0a`,
        theme_color: `#fcee0a`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}

export default config
