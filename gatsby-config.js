require("dotenv").config();

const siteMetadata = {
  title: `Euro Cast`,
  name: `Euro-Cast`,
  siteUrl: `https://euro-cast.now.sh`,
  description: `Site de podcasts com o maior contexto científico do universo!`,
  hero: {
    heading: `Euro-Cast, o seu Podcast!`,
    maxWidth: 652,
  },
  social: [
    {
      url: `https://www.facebook.com/etecmogiguacu1/`,
    },    
    {
      url: `https://instagram.com/etecmogiguacu/`,
    },
    {
      url: `https://www.linkedin.com/company/etecmogiguacu/`,
    },      
    {
      url: `https://youtube.com/channel/UC9i--cjsUpEZBKD2mRpCqyg`,
    },  
    {
      name: `mailto`,
      url: `mailto:e206acad@cps.sp.gov.br`,
    },
  ],
};

const plugins = [
  {
    resolve: "@narative/gatsby-theme-novela",
    options: {
      contentPosts: "content/posts",
      contentAuthors: "content/authors",
      rootPath: "/",
      basePath: "/",
      authorsPage: true,
      mailchimp: false,
      sources: {
        local: true,
        contentful: false,
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Euro Cast`,
      short_name: `Euro-Cast-App`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#fff`,
      display: `standalone`,
      icon: `src/assets/euro_1.png`,
    },
  },
];

/**
 * For development purposes if there's no Contentful Space ID and Access Token
 * set we don't want to add in gatsby-source-contentful because it will throw
 * an error.
 *
 * To enanble Contentful you must
 * 1. Create a new Space on contentful.com
 * 2. Import the Contentful Model from @narative/gatsby-theme-novela/conteful
 * 3. Add .env to www/ (see www/env.example)
 * 4. Enable contentful as a source in this file for @narative/gatsby-theme-novela
 */
if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
  plugins.push({
    resolve: "gatsby-source-contentful",
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  });
}

module.exports = {
  siteMetadata,
  plugins,
};
