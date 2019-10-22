import Confirm from '@/components/common/Confirm'

const GlobalConfirm = {

	install (Vue) {
		GlobalConfirm.EventBus = new Vue()
		Vue.component(Confirm.name, Confirm)
		Vue.prototype.$confirm = {
			show () {
				GlobalConfirm.EventBus.$emit('show')
			},
			hide () {
				GlobalConfirm.EventBus.$emit('hide')
			}
		}
	}
}
export default GlobalConfirm