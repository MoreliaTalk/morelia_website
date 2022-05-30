const { description } = require('../../package.json')

module.exports = {
  title: "MoreliaTalk",
  description: description,

  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    search: false,
    nav: [
      {
        text: 'О нас',
        link: '/about',
      },
      {
        text: 'Github',
        link: "https://github.com/MoreliaTalk-"
      }
    ]
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
