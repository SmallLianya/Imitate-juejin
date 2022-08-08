import { createApp } from 'vue'
import App from './App.vue'
// vue-router
import router from './router'
// vuex
import store from './store'
// 初始化样式
import 'normalize.css'

createApp(App).use(store).use(router).mount('#app')
