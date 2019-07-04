<template>
	<div class="n-card border-solid border w-64 border-gray-400 rounded mr-2" :class="{'hover:shadow-xl': shadow === 'hover', 'shadow-xl': shadow == 'always' || !shadow}">
		<div class="border-b p-2">
			<slot name="header"></slot>
		</div>
		<div class="flex-1 p-4" :style="bodyStyle">
			<slot></slot>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'n-card',
		props: {
			header: {
				type: String,
				default: ''
			},
			bodyStyle: {},
			shadow: String
		}
	}
</script>