const autometa_options = {
  site: {
    name   : 'Christofer',
    twitter: 'rockzombie2',
  },
  canonical_base: 'https://christofer.rocks',
};

module.exports = {
    title: 'Reflections',
    description: 'A glimpse into my personal reflections.',
    head: [
      ['link', { rel: 'icon', href: '/images/logo.png' }],
      ['script', {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-Q6CMDV4BG0'
      }],
      ['script', {}, `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Q6CMDV4BG0');
      `],
      ['link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/hack-font@3/build/web/hack.css' }]
    ],
    themeConfig: {
      logo: '/images/logo.png',
      nav: [
          { text: 'Articles', link: '/blog/' },
          { text: 'Archive', link: '/archive/' },
          { text: 'Tags', link: '/tags/' }
      ],
      nextLinks: true,
      prevLinks: true,
      lastUpdated: 'Last Updated',
      activeHeaderLinks: true
    },
    plugins: [
        ['flexsearch', {
        /*
          Plugin custom options
        */
        maxSuggestions: 10,    // how many search suggestions to show on the menu, the default is 10.
        searchHotkeys: ['/'],    // Hot keys to activate the search input, the default is "s" but you can add more.
        searchResultLength: 60,    // the length of the suggestion result text by characters, the default is 60 characters.
        /*
          Default FlexSearch options
          To override the default options you can see available options at https://github.com/nextapps-de/flexsearch
        */
        search_options: {
          encode: "icase",
          tokenize: "forward",
          resolution: 9,
          doc: {
            id: "key",
            field: ["title", "content", "headers"],
          }
        }
      }],
      [ 'autometa', autometa_options ]
    ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }

}
