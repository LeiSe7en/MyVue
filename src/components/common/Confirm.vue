<template>
	<transition name="confirm-zoom">
		<div class="nl-confirm h-32 w-64 absolute bg-gray-300" v-show="visible">
			<nl-button type="primary" label="confirm" @click.stop="confirm"></nl-button>
			<nl-button label="cancel"></nl-button>
		</div>
	</transition>
</template>
<script>
	import GlobalConfirm from '@/plugins/confirm'
	export default {
		name: 'nl-confirm',
		data () {
			return {
				visible: false
			}
		},
		methods: {
			show (params) {
				this.visible = true
			},
			hide (params) {

			},
			confirm () {

			}
		},
		beforeMount () {
			GlobalConfirm.EventBus.$on('show', this.show)
			GlobalConfirm.EventBus.$on('hide', this.hide)
		}
	}
</script>
<style>
	.nl-confirm{
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%) scale(1);
	}

	.confirm-zoom-enter{
		opacity: 0;
		transform: scaleY(0);
		/*transform: scale(0);*/
	}
	.confirm-zoom-enter-active{
		transform: scaleY(1);
		 transition: transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);
		 transform-origin: center top
	}
</style>