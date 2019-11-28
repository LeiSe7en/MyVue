<template>
	<div>
		<div ref="btn"></div>
		<h2>Dynamically insert</h2>
		<div>{{name}}</div>
		<div>{{message}}</div>
		<!-- <Button></Button> -->
		<button @click="insert">Click me to add component</button>
	</div>
</template>
<script>
	import Button from '@/components/Button'
	export default {
		name: 'VideoResourses',
		data () {
			return {
				message: 1,
				name: 'nelson'
			}
		},
		methods: {
			insert () {
				// let instance = new Button({
				// 	propsData: 'First'
				// })
				// console.log('before $mount', instance)
				// let app = instance.$mount()
				console.log(Object.getOwnPropertyDescriptor({a: 1}, 'a'))
				const a = {}
				Object.defineProperty(a, 'b', {
					set: function(val) {a.b = val}
				})
				console.log(a.b)
				a.b = 2
				console.log(a.b)
				// console.log('after $mount', app.$el)
				// this.$refs.btn.appendChild(app.$el)
			}
		},
		mounted () {
			console.log('Watchers', this._watchers)
		}
	}
</script>
<style>
	.video-wrapper{
	}
</style>
