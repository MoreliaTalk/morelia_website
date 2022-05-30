const { description } = require('../../package.json')
const {defaultTheme} = require("vuepress");

module.exports = {
  title: "MoreliaTalk",
  description: description,

  theme: defaultTheme({
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    search: false,
    navbar: [
      {
        text: 'О нас',
        link: '/about',
      },
      {
        text: 'Github',
        link: "https://github.com/MoreliaTalk-"
      }
    ]
  }),

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
