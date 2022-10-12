import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import VuePaginate from 'vue-paginate'

axios.defaults.baseURL = 'https://devapi.uner.gy'

createApp(App)
  .mount('#app')
  .use(VuePaginate)
