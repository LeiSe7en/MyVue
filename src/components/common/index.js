import Modal from './Modal'
import Button from './Button'
import Menu from './Menu/Menu'
import MenuItem from './Menu/MenuItem'
const components = [Modal, Button, MenuItem, Menu]
const install = function (Vue, opts = {}) {
	console.log(components)
	components.forEach(component => {
		Vue.component(component.name, component)
	})
}

export default {
	install,
	Button,
	Modal
}