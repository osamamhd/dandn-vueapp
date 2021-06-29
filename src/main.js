import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import '../public/styles.css'
import axios from 'axios'

axios.defaults.baseURL = 'https://dreamsandnightmares.pythonanywhere.com/'


createApp(App).use(router).mount('#app')
