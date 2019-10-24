<template>
	<div>	<nl-button :callback="callBack"></nl-button></div>
</template>
<script>
	export default {
		name: 'Articles',
		data () {
			return {
				shitname: this.$options.name
			}
		},
		props: {
			name: String
		},
		methods: {
			callBack () {
				console.log('dsdsdd', this.shitname)
			}
		},	
		mounted () {
			console.log(this.shitname)
			this.$confirm.show('这是标题', '这是body', (action) => {
				console.log(this.shitname)
			})
		}
	}
</script>
