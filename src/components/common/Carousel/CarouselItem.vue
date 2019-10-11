<template>
	<transition :name="'slide-' + carousel.direction">
		<p class="h-full w-1/2 absolute carousel-item__card" v-show="visible">
			<slot></slot>
		</p>
	</transition>
</template>
<script>
	export default {
		name: 'nl-carousel-item',
		data () {
			return {
				index: null
			}
		},
		inject: {
			carousel: {
				default: null
			}
		},
		computed: {
			visible () {
				console.log('visible')
				return this.index == this.carousel.currentIndex || (Math.abs(this.carousel.currentIndex - this.index) == 1) 
			}
		}
	}
</script>
<style>
 
	.slide-left-enter-active{
		animation: slideLeftIn 1s;
	}
	.slide-left-leave-active{
		animation: slideLeftOut 1s;
	}
	.slide-right-enter-active{
		animation: slideRightIn 1s;
	}
	.slide-right-leave-active{
		animation: slideRightOut 1s;
	}
	
	/* translateX的值指的是左边框距离父元素左边框的相对位移
		100%指的是移动自身宽度的100%距离
		所以50%就是移动自身宽度一半的距离
	*/
	@keyframes slideLeftIn {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(0);
		}
	}
	@keyframes slideLeftOut {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}
	@keyframes slideRightIn {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(0);
		}
	}
	@keyframes slideRightOut {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(100%);
		}
	}
	.carousel-item__card{
		transform: translateX(50%) scale(0.83);
	}

</style>