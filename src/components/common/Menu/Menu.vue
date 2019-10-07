<template>
	<div class="nl-menu" :class="mode == 'horizontal' ? 'flex' : ''">
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
					activeItem: null,
					mode: this.mode
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