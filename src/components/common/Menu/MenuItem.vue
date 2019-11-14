<template>
	<component :is="tag" :to="to"  class="menu-item flex items-center p-4">
		<div class="menu-icon">
			<slot name="icon"></slot>
		</div>
		<div class="font-medium ml-2 uppercase">
			<slot></slot>
		</div>
	</component>
</template>
<script>
	export default {
		name: 'nl-menu-item',
		props: {
			to: Object
		},
		computed: {
			tag () {
				return this.to ? 'router-link' : 'div'
			}
		}
	}
</script>