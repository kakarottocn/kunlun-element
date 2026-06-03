import { defineConfig } from 'vitepress'
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";

import { demoMdPlugin } from 'vitepress-plugin-demo'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KunLun",
  description: "组件库，基于ElementPlus二次封装的组件库",
  base: '/kunlun-element/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components' },
      { text: '工具', link: '/utils' }
    ],
    search: {
      provider: "local",
    },

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
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
})
