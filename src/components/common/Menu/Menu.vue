<template>
	<div class="menu w-full p-4">
		<slot></slot>		
	</div>
</template>
<script>
	export default {
		name: 'nl-menu',
		props: {
			mode: {
				type: String,
				default: 'vertical'
			}
		},
		data () {
			return {
				menuState: {
					activeItem: null
				}
			}
		},
		provide () {
			return {
				menuState: this.menuState
			}
		}
	}
</script>