import Vue from 'vue'
import '../static/styles/main.css'
import logo from './img/logo.png'
import Message from '../static/messages'
import logoDefault from './img/avatar.png'
import RenderComponent from '@/components/render-component'
// Vue.component('component-a', {
// 	//在组件中，data是一个函数，这样每个组件的data都是独立的
// 	data () {
// 		return {
// 		}
// 	},
// 	props: ['name'],
// 	template: '<div @click="tapClick">2sss32323</div>',
// 	methods: {
// 		tapClick () {
// 			console.log("click component-a")
// 		}
// 	}
// })

var app = new Vue({
	el: "#app",
	data: {
    msg: 'sdsdss',
    logo: logo,
    // style: style,
    logoDefault: logoDefault
	},
	created: function () {
    // `this` 指向 vm 实例
    console.log('Created')
  },
  mounted: function () {
    // `this` 指向 vm 实例
    console.log(Message)
    console.log('mounted')
  }
})
