import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 反向代理
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:2343/api'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
