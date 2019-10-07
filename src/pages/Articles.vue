<script>
	export default {
		name: 'Articles',
		props: {
			name: String
		},
		render (h) {
			return h('div', {class: 'w-full h-20 bg-gray-500 font-bold'}, [h('p', 'So many Articles')])
		}
	}
</script>
