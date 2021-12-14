module.exports = {
  siteMetadata: {
    title: 'Explore the islands'
  },

  plugins: [
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'islands',
        path: 'src/islands'
      }
    },
      'gatsby-transformer-remark'
  ]
};
