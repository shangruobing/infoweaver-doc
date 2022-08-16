import { defineConfig } from 'vitepress'
export default defineConfig({
  // Whether to enable "Dark Mode" or not.
  appearance: true,
  // The base URL the site will be deployed at.
  base: '/guide/',
  description: 'A VitePress site',
  // Additional elements to render in the <head> tag
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  lastUpdated: true,
  title: 'Infoweaver',
  outDir: '../dist',

  themeConfig: {
    siteTitle: 'Infoweaver',
    logo: '/织信.png',
    outlineTitle: 'Outline',
    nav: nav(),
    socialLinks: [{ icon: 'github', link: 'https://gitee.com/shangruobing' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Ruobing Shang'
    },
    editLink: {
      pattern: 'https://gitee.com/shangruobing/nfqa-documentation/tree/master/docs/:path',
      text: 'Edit this page on Gitee'
    },
    lastUpdatedText: 'Updated Date',
    sidebar: sidebar()
  }
})

function nav() {
  return [
    { text: 'Guide', link: '/introduction/' },
    { text: 'Blog', link: '/blog/' },
    { text: 'Thinking', link: 'https://gitee.com/shangruobing' },
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
  ]
}

function sidebar() {
  return {
    '/': [
      {
        text: 'Get Started',
        collapsible: true,
        collapsed: false,
        items: [
          { text: '基础', link: '/introduction/index.md' },
          { text: '构成', link: '/introduction/structure.md' },
          { text: '进阶', link: '/introduction/introduce.md' }
        ]
      },
      {
        text: '部署',
        collapsible: true,
        collapsed: false,
        items: [
          { text: '基础', link: '/deployment/index.md' },
          { text: '进阶', link: '/deployment/Linux服务器部署指南.md' }
        ]
      }
    ]
  }
}
