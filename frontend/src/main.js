import Vue from 'vue'
import app from './App.vue'
import {router} from './routes/index.js'
import axios from 'axios'


Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  render: h => h(app),
  router
}).$mount('#app')
