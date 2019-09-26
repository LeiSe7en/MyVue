import Modal from './Modal'
import Button from './Button'
import Menu from './Menu/Menu'
import MenuItem from './Menu/MenuItem'
import SubMenu from './Menu/SubMenu'
const components = [Modal, Button, MenuItem, Menu, SubMenu]
const install = function (Vue, opts = {}) {
	console.log(components)
	// components.forEach(component => {
	// 	Vue.component(component.name, component)
	// })
}

export default {
	install,
	Button,
	Modal
}