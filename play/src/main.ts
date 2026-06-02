import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Icon from '@kunlun/components/icon'

const app = createApp(App)

;[Icon].forEach((item) => {
  app.use(item)
})

app.mount('#app')
