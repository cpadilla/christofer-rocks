module.exports = {
    title: 'Reflections',
    description: 'A glimpse into my personal reflections.',
    themeConfig: {
        logo: '/images/logo.png',
        nav: [
            { text: 'Articles', link: '/blog/' },
            { text: 'Tags', link: '/tags/' }
        ],
        nextLinks: true,
        prevLinks: true,
        lastUpdated: 'Last Updated'
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
      [
          '@vuepress/google-analytics',
          {
              'ga': 'G-NDZCVLQ9F4'
          }
      ]
    ]
}
