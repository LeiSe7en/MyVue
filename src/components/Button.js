import Vue from '../../dist/vue'
const Button = {
	name: 'Button',
	props: {
		type: String
	},
	render: function (h) {
		console.log('Button render')
		return h('div', 'Hello My Manual Component')
	}
}
const componentConstructor = Vue.extend(Button)
export default componentConstructor 