export default {
  title: 'Infoweaver',
  description: 'Interview with vitePress',
  dist: './dist',
  base: '/guide/',
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    siteTitle: 'Infoweaver',
    logo: '/织信.png',
    smoothScroll: true,
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'GuideTest', link: '/guide/test' },
      { text: 'Gitee', link: 'https://gitee.com/shangruobing' },
      {
        text: 'Drop Menu',
        items: [
          {
            items: [
              { text: 'Item A1', link: '/item-A1' },
              { text: 'Item A2', link: '/item-A2' }
            ]
          },
          {
            items: [
              { text: 'Item B1', link: '/item-B1' },
              { text: 'Item B2', link: '/item-B2' }
            ]
          }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/geeksdidi' },
      { icon: 'twitter', link: '...' },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="SVG namespace"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: '...'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Vue',
          collapsible: true,
          collapsed: true,
          items: [
            { text: '基础', link: '/Vue/index.md' },
            { text: '进阶', link: '/Vue/chapter1.md' }
          ],
          sidebarDepth: 3
        },
        {
          text: 'Vuex',
          items: [{ text: '基础', link: '/Vuex/' }]
        },
        {
          text: 'Vue-Router',
          items: [{ text: '基础', link: '/Vue-Router/' }]
        }
      ]
    }
  },
  plugins: [
    '@vuepress/active-header-links', // 页面滚动时自动激活侧边栏链接的插件
    '@vuepress/back-to-top', // 返回顶部插件
    '@vuepress/medium-zoom', // 图片预览插件
    '@vuepress/nprogress' //页面顶部进度条
  ]
}
