
<script>
	export default {
		name: 'SideMenu',
		render (h) {
			return h('p', {
				style: {
					height: '100px',
					width: '100px',
					backgroundColor: 'black',
					color: '#fff'
				}}, [
					'sdsdsss',
					h('div', {
						style: {
							height: '50px',
							width: '50px',
							backgroundColor: 'yellow'
						}
					})
				])
		},
		mounted () {
			// console.log(this.$options)
		}
	}
</script>