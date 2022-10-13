import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'

axios.defaults.baseURL = 'https://devapi.uner.gy'

createApp(App)
  .mount('#app');
