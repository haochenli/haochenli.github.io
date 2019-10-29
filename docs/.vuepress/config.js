module.exports = {
    base: '/',
    head: [
        ['link', { rel: 'icon', href: '/chimera.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }]
      ],
      plugins: [
        ['seo',
          { 
              //...
              customMeta: (add, context) => {
  
                const {
                    $site, // Site configs provided by Vuepress
                    title
                } = context
                add('keyword', '李昊晨')
                add('description', '李昊晨牛逼')
            },
          }
        ],
        ['@vuepress/pwa', {
          serviceWorker: true,
          updatePopup: true
        }]
    ],
    shouldPrefetch: _ => {
        return false
    },
    themeConfig: {
        activeHeaderLinks: true,
        displayAllHeaders: true,
        // algolia: {
        //   appId: '759OXADGJ2',
        //   apiKey: '7ac350891fcb371522d741a091b23281',
        //   indexName: 'chimera'
        // },
        searchMaxSuggestions: 15,
        smoothScroll: true,
        nav: [
          { text: 'link1', link: '/framework/' },
          { text: 'link2', link: '/reference/' },
          { text: 'link3', link: '/component/' },
          { text: 'link4', link: '/api/' }
        ],
        sidebar: [
            {
              title: 'Group 1',   // required
              path: '/foo/',      // optional, which should be a absolute path.
              collapsable: false, // optional, defaults to true
              sidebarDepth: 1,    // optional, defaults to 1
              children: [
                '/home/'
              ]
            },
            {
              title: 'Group 2',
              collapsable: false, // optional, defaults to true
              sidebarDepth: 1,    // optional, defaults to 1
              children: [
                '/home2/'
              ]
            },
            {
                title: 'Group 3',
                collapsable: false, // optional, defaults to true
                sidebarDepth: 1,    // optional, defaults to 1
                children: [
                  '/home3/'
                ]
              }
          ]
    }
  }