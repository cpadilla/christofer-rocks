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
        lastUpdate: 'Last Updated'
    },
    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'G-NDZCVLQ9F4'
            }
        ]
    ]
}
