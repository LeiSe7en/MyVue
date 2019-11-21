// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Test from './javascript-sink-in/index.js'
import ThisTest from './javascript-sink-in/this_test.js'
import { TestClass } from './javascript-sink-in/index.js'
// import ElementUI from 'element-ui';
import { Button, Select } from 'element-ui';
import confirm from '@/plugins/confirm'
import Youtube from 'vue-youtube'
import MainHeader from '@/components/MainHeader'
import router from './router'
import VueScrollMagic from 'vue-scrollmagic'
import '../static/css/main.css'
import 'element-ui/lib/theme-chalk/index.css';
// import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
// import Card from './package/card'
// import Switch from './package/switch'
import Common from './components/common'
import VueMarkdown from 'vue-markdown'
Vue.config.productionTip = false
Vue.use(Common)
Vue.use(confirm)
Vue.use(Youtube)
Vue.use(VueScrollMagic)
// Vue.use(ElementUI);
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(MainHeader.name, MainHeader)
Vue.component('vue-markdown', VueMarkdown);
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

