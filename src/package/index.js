import Card from './card/index.js'
import Switch from './switch/index.js'
const components = [Card, Switch]
const install = function (Vue, opts = {}) {
	console.log(components)
	components.forEach(component => {
		Vue.component(component.name, component)
	})
}

export default {
	install,
	Card,
	Switch
}