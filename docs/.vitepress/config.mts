import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KunLun",
  description: "组件库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components' },
      { text: '工具', link: '/utils' }
    ],

    sidebar: [
      {
        text: '组件',
        items: [
          { text: 'Icon', link: '/components/icon' },
          { text: 'Button', link: '/components/button' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
