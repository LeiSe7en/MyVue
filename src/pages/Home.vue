<!-- <template>
	<div >
		<v-modal :title="'标题'" v-model="visible">
			<template>sdsdsdssd</template>
		</v-modal>
		<nl-button round type="primary" label="成功按钮" @click="visible = true"></nl-button>
		<font-awesome-icon icon="power-off" size="lg"/>
	</div>
</template> -->
<script>
	export default {
		name: 'sss',
		data () {
			return {
				visible: false,
				value: 'dsds'
			}
		},
		render (h) {
			// return h('div', {
			// 	style: {
			// 		width: '100%',
			// 		height: '200px'
			// 	}
			// }, [])
			var self = this
			return h('input', {
			  domProps: {
			    value: self.value
			  },
			  on: {
			    input: function (event) {
			      self.$emit('input', event.target.value)
			    }
			  }
			})
		},
		mounted () {
			// let el = this.$el
			// console.log(this.constructor.options)
		}
	}
</script>
<style lang="less">
	
	
</style>