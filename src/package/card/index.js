import Card from './main.vue'

Card.install = function (Vue) {
	console.log('install')
	Vue.component(Card.name, Card)
}
export default Card