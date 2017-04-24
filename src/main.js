import axios from 'axios'
import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store'

import FileSize from './filters/FileSize.js'

import App from './components/App.vue'
import About from './components/About.vue'
import SDE from './components/Sde.vue'


axios.defaults.baseURL = process.env.BASE_URL

Vue.use(VueRouter)

Vue.filter('file-size', FileSize)

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    {path: '/sde', component: SDE},
    {path: '/about', component: About}
  ]
})



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})