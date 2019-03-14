// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

import '@/assets/style.css'
import store from '@/store'
import axios from 'axios'

// 设置axios请求的默认host
axios.defaults.baseURL = 'http://127.0.0.1:8000'
// 将axios绑定给vue成为一个属性
Vue.prototype.$http = axios

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, store,
  components: { App },
  template: '<App/>'
})
