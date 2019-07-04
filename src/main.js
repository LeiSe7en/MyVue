// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/main.css'
// import Card from './package/card'
// import Switch from './package/switch'
import Nelson from './package'
Vue.config.productionTip = false
Vue.use(Nelson)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
