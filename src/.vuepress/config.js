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
        language: 'javascript',
        type: 'text/javascript',
        src: '//code.jquery.com/jquery-1.7.2.min.js'
      }],
      ['script', {
        language: 'javascript',
        type: 'text/javascript',
      },
      `function toggleTOC() {
        event.preventDefault();
        console.log("toggleTOC fired!");
       $(".table-of-contents>ol").each(function(i){
         $( this ).toggle();
       });
       $("#toggle-wiki-index").text( $(".table-of-contents ol").is(":visible") ? "hide" : "show");
      }`
      ],
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
    /*
     * Twitter universal website tag code
     */
      ['script', {}, `
            !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
            },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
            // Insert Twitter Pixel ID and Standard Event data below
            twq('init','o5dw8');
            twq('track','PageView');
      `],
    /*
     * Hack to fix auto scrolling to anchors
     */
    ["script",
        {
          src: "/scripts/scroll-to-hash.js",
        },
      ],
      ['link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/hack-font@3/build/web/hack.css' }]
    ],
    watch: {
    $page(newPage, oldPage) {
      if (newPage.key !== oldPage.key) {
        requestAnimationFrame(() => {
          if (this.$route.hash) {
            const element = document.getElementById(this.$route.hash.slice(1));

            if (element && element.scrollIntoView) {
              element.scrollIntoView();
            }
          }
        });
      }
    }
  },
    themeConfig: {
      logo: '/images/logo.png',
      nav: [
          { text: 'Articles', link: '/blog/' },
          { text: 'Archive', link: '/archive/' },
          { text: 'About', link: '/about/' },
          { text: 'Tags', link: '/tags/' }
      ],
      smoothScroll: false, // We're handling this custom (credit to https://github.com/vuejs/vuepress/issues/1499#issuecomment-849148930)
      nextLinks: true,
      prevLinks: true,
      lastUpdated: 'Last Updated',
      activeHeaderLinks: true
    },
    markdown: {
      toc: {
        includeLevel: [1,2,3,4,5,6],
        containerClass: 'table-of-contents',
        listType: 'ol',
        containerHeaderHtml: '<div class="toc-container-header"><b>Contents</b>  [<a id="toggle-wiki-index" onclick="return toggleTOC();" href="#">hide</a>]</div>'
      }
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
      [ 'autometa', autometa_options ],
      [ 'vuepress-plugin-rss',
        {
          base_url: '/', // required
          site_url: 'https://christofer.rocks', // required
          copyright: '2021 Christofer Padilla', // optional
          // filter some post
          filter: (frontmatter) => { return [true|false] },
          // How much articles
          count: 20
        }
      ]
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
