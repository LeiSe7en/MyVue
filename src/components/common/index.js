import Modal from './Modal'
import Button from './Button'
import Menu from './Menu/Menu'
import MenuItem from './Menu/MenuItem'
import SubMenu from './Menu/SubMenu'
import Carousel from './Carousel/Carousel'
import CarouselItem from './Carousel/CarouselItem'
import Select from './Select/Select'
import Option from './Select/Option'
const components = [Modal, Button, MenuItem, Menu, SubMenu, CarouselItem, Carousel, Option, Select]
const install = function (Vue, opts = {}) {
	components.forEach(component => {
		Vue.component(component.name, component)
	})
}

export default {
	install,
	Button,
	Modal
}