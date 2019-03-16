import Vue from 'vue'
Vue.component('render-component', {
	render: function (h) {
		//this 指向这个组件的实例, this.$slots.title 得到的就是VNode实例的数组（数组只有一个元素）
		var header = this.$slots.title
		var content = this.$slots.content
		return h('input', {
			// class: {
			// 	show: this.show,
			// },
			domProps: {
				value: this.name
			},
			on: {
				input: (e) => {
					this.$emit('input', e.currentTarget.value)
				}
			},
			attrs: {
			  id: 'foo'
			}
		})
	},
	data: function () {
		return {
			show: true
		}
	},
	props: {
		name: String
	}
})