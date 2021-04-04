import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { FontAwesomeIcon } from '@/plugins/font-awesome'

const bgNumbersApp = createApp(App)
bgNumbersApp.use(router)
bgNumbersApp.use(store)
bgNumbersApp.component('fa', FontAwesomeIcon)
bgNumbersApp.mount('#app')
