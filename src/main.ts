import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS
AOS.init({
  duration: 1000,
  easing: 'ease-out',
  once: true
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')