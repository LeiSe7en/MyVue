<template>
	<transition name="fade">
		<div class="wrapper" v-show="value">
			<div class="modal-mask absolute inset-0 bg-gray-900 opacity-50"></div>
			<div class="modal w-1/3 relative m-auto bg-gray-400 rounded z-20 mt-20">
				<div class="title border-b-2 border-dashed border-gray-500 p-3">
					<slot name="title">
						<span>{{ title }}</span>
					</slot>
					<button class="close absolute right-0 px-3">
						<i class="icon close" @click="$emit('input', false)">x</i>
					</button>
				</div>
				<div class="body p-3">
					<slot></slot>
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
	import merge from '@/utils/merge'
	import { addClass }  from '@/utils/dom'
	export default {
		name: 'v-modal',
		props: {
			value: Boolean,
			title: {
				type: String,
				default: '标题'
			}
		},
		mounted () {
			window.addEventListener('keydown',(e) => {
				if (e.keyCode === 27) {
					this.$emit('input', false)
				}
			})
		}
	}
</script>
<style>
	.wrapper{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.fade-enter-active, .fade-leave-active{
		transition: opacity 0.5s;
	}
	.fade-enter, .fade-leave-to{
		opacity: 0;
	}
</style>
