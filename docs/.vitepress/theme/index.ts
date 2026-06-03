import DefaultTheme from 'vitepress/theme';
import {
  AntDesignContainer,
} from '@vitepress-demo-preview/component';
import '@vitepress-demo-preview/component/dist/style.css';
import type { App } from 'vue';
import kunlunUI from 'kunlun'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('demo-preview', AntDesignContainer);
    app.use(kunlunUI)
  },
};