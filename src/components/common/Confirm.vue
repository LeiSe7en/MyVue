<template>
	<transition name="msgbox-fade">
		<div class="nl-confirm__wrapper" v-show="visible">
			<div class="nl-confirm h-32 w-64 bg-gray-300 inline-block" >
				<div class="nl-confirm__header py-6 px-4 text-lg">
					<span>{{}}</span>
				</div>
				<div class="nl-confirm__body py-2 px-4 text-base">
					<slot name="body"></slot>
				</div>
				<div class="nl-confirm__buttons">
					<nl-button type="primary" label="confirm" @click.stop="confirm"></nl-button>
					<nl-button label="cancel"></nl-button>
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
	import GlobalConfirm from '@/plugins/confirm'
	export default {
		name: 'nl-confirm',
		data () {
			return {
				visible: false,
				title: '',
				body: ''
			}
		},
		methods: {
			show () {
				this.title = arguments[0]
				this.body = arguments[1]
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
<style lang="less">
	.nl-confirm__wrapper{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		justify-content: center;
		display: flex;
		align-items: center;
	}
	.msgbox-fade-enter-active {
	  animation: msgbox-fade-in .3s;
	}

	.msgbox-fade-leave-active {
	  animation: msgbox-fade-out .3s;
	}

	@keyframes msgbox-fade-in {
	  0% {
	    transform: translate3d(0, -20px, 0);
	    opacity: 0;
	  }
	  100% {
	    transform: translate3d(0, 0, 0);
	    opacity: 1;
	  }
	}

	@keyframes msgbox-fade-out {
	  0% {
	    transform: translate3d(0, 0, 0);
	    opacity: 1;
	  }
	  100% {
	    transform: translate3d(0, -20px, 0);
	    opacity: 0;
	  }
	}
</style>