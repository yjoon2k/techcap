import Vue from 'vue'
import main from './main.vue'
import {router} from './routes/index.js'
import axios from 'axios'


Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  render: h => h(main),
  router
}).$mount('#app')
