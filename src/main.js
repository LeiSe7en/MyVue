// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Test from './index.js'
import { TestClass } from './index.js'
import router from './router'
import '../static/css/main.css'
// import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
// import Card from './package/card'
// import Switch from './package/switch'
import Common from './components/common'
Vue.config.productionTip = false
Vue.use(Common)
/* eslint-disable no-new */
// console.log(new Test())
// Vue.mixin({
//   mounted() {
//     console.log('parent created')
//   }
// })
// Vue.filter('capitalize', function (value) {
//   if (!value) return ''
//   value = value.toString()
//   return value.charAt(0).toUpperCase() + value.slice(1)
// })
// Vue.component('haha', {
// 	name: 'haha'
// })
let ss = new Vue({
  el: '#app',
  router,
  data (vm) {
  	console.log('sdsd' + this)
  	return {
  		subTitle: 'sub' + this.title,
      title: 'main'
    }
  },
  render: function(h){
  	return h('div', {}, [
  		h(App)
  		])
  },
  mounted () {
  },
  beforeMount () {
    console.log('before mount new Vue')
  }
})
console.log('Vue instance', ss)

