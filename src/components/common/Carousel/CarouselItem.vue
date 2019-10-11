<template>
	<transition :name="transitionName">
		<p 
			class="h-full absolute" 
			:class="{
				'carousel-item__card': carousel.mode === 'card',
				'is-in__stage': carousel.mode === 'card' && inStage,
				'active': $parent.currentIndex === index
			}"
			@click="handleItemClick"
			v-show="visible"
			:style="itemStyle">
			<slot></slot>
		</p>
	</transition>
</template>
<script>
	import Emitter from '@/mixins/emitter'
	const CARD_SCALE = 0.83
	export default {
		name: 'nl-carousel-item',
		data () {
			return {
				index: null
			}
		},
		mixins: [ Emitter ],
		inject: {
			carousel: {
				default: null
			}
		},
		computed: {
			visible () {
				return this.index == this.carousel.currentIndex || (this.carousel.mode == 'card' && this.inStage)
			},
			itemStyle () {
				if (this.carousel.mode == 'card') {
					return this.carousel.ready && {
						transform: `translateX(${this.calcCardTranslate(this.processIndex()) + 'px'}) scale(${this.carousel.currentIndex == this.index ? 1 : 0.83})`,
						width: '50%'
					}
				} else {
					return {
						width: '100%'
					}
				}
			},
			inStage () {
				return Math.abs(this.carousel.currentIndex - this.index) <= 1 || (this.carousel.currentIndex == 0 && this.index == this.$parent.slides.length - 1 ) || 
				(this.carousel.currentIndex == this.$parent.slides.length - 1 && this.index == 0)
			},
			transitionName () {
				if (this.carousel.mode == 'card') {
					return ''
				} else {
					return `${this.carousel.transition}-${this.carousel.direction}`
				}
			}
		},
		methods: {
			calcCardTranslate(index) {
        let parentWidth = this.$parent.$el.offsetWidth;
        let activeIndex = this.carousel.currentIndex
        if (this.inStage) {
          return parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1) / 4;
        } else if (index < activeIndex) {
          return -(1 + CARD_SCALE) * parentWidth / 4;
        } else {
          return (3 + CARD_SCALE) * parentWidth / 4;
        }
      },
      processIndex () {
      	let length = this.carousel.slides.length
      	let activeIndex = this.carousel.currentIndex
      	if (this.index == length - 1 && activeIndex == 0) {
      		return -1
      	} else if (activeIndex == length - 1 && this.index == 0) {
      		return length
      	} else {
      		return this.index
      	}
      },
      handleItemClick () {
      	this.dispatch('nl-carousel', 'sayHello', [this.index])
      }
		}
	}
</script>
<style lang="less">
 
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
	.fade-right-enter-active, .fade-left-enter-active  {
		animation: fadeIn 1s;
	}
	.fade-right-leave-active, .fade-left-leave-active {
		animation: fadeOut 1s;
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
	@keyframes fadeIn {
		from {
			opacity: 0
		}
		to {
			opacity: 1;
		}
	}
	@keyframes fadeOut {
		from {
			opacity: 1
		}
		to {
			opacity: 0;
		}
	}
	.carousel-item__card{
		transform: translateX(50%) scale(0.83);
		z-index: 1;
		&.active{
			z-index: 2;
			transform: scale(1);
		}
		&.is-in__stage{
			transition: transform .3s
		}
	}
	

</style>