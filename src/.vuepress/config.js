const { description } = require('../../package.json')
const {defaultTheme} = require("vuepress");

module.exports = {
  title: "MoreliaTalk",
  description: description,
  lang: "ru-RU",

  theme: defaultTheme({
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    search: false,
    contributors: false,
    navbar: [
      {
        text: 'О проекте',
        link: '/about_project',
      },
      {
        text: 'О нас',
        link: '/about_us',
      },
      {
        text: 'Документация',
        link: '/docs'
      },
      {
        text: 'Github',
        link: "https://github.com/MoreliaTalk"
      }
    ]
  }),

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
