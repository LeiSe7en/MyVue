<template>
	<div>	</div>
</template>
<script>
	export default {
		name: 'Articles',
		props: {
			name: String
		},
		mounted () {
			this.$confirm.show()
		}
	}
</script>
