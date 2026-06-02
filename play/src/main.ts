import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import KunLun from 'kunlun'

const app = createApp(App)
app.use(KunLun)
app.mount('#app')
