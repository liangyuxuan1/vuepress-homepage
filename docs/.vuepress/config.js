module.exports = {
  title: "Yuxuan Liang",
  description: "Homepage of Yuxuan Liang.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    search: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Projects", link: "/projects/" },
      { text: "Memo", link: "/memo/" },
      { text: "GitHub", link: "https://github.com/liangyuxuan1" }
    ],
    sidebar: {
      '/memo/': genSidebarConfig('Memo')
    },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'Maintenance',
        'Win10',
        'Xubuntu',
      ]
    }
  ]
}

