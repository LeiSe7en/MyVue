<template>
	<div class="nl-carousel__wrapper h-full relative overflow-hidden">
		<slot></slot>
		<div class="carousel__nav carousel__prev absolute" @click.prevent="prev"><</div>
		<div class="carousel__nav carousel__next absolute" @click.prevent="next">></div>
	</div>
</template>
<script>
	export default {
		name: 'nl-carousel',
		props: {
			mode: {
				type: String,
				default: 'normal',
				validator: function (value) {
					// return false 则证明校验不通过
		      return ['normal', 'card'].indexOf(value) !== -1
	      }
			},
			autoPlay: {
				type: Boolean
			},
			transition: {
				type: String,
				default: 'slide',
				validator: (value) => {
					return ['fade', 'slide'].indexOf(value) !== -1
				}
			}
		},
		data () {
			return {
				currentIndex: 0,
				slides: [],
				direction: '',
				autoLoopInterval: null,
				ready: false
			}
		},
		provide () {
			return {
				carousel: this
			}
		},
		computed: {
			slidesLength () {
				return this.slides.length
			}
		},
    methods: {
      updateItems () {
        this.slides = this.$children.filter((item) => {
        	return item.$options.name === 'nl-carousel-item'
        }).map((item, index) => {
        	item.index = index
        	return item
        })
      },
      next () {
      	this.direction = 'left'
      	this.currentIndex < this.slidesLength - 1 ? this.currentIndex++ : this.currentIndex = 0
      },
      prev () {
      	this.direction = 'right'
      	this.currentIndex == 0 ? this.currentIndex = this.slidesLength - 1 : this.currentIndex--
      },
      sayHello (index) {
      	this.currentIndex = index
      }
    },
    mounted () {
      this.updateItems()
      if (this.autoPlay) {
      	this.autoLoopInterval = setInterval(() => {
      		this.next()
      	}, 3000)
      }
      this.ready = true
    },
    created () {
    	this.$on('sayHello', this.sayHello)
    },
    beforeDestroy () {
    	this.autoLoopInterval = null
    }
	}
</script>
<style lang="less">
	.carousel__nav{
		width: 50px;
		height: 50px;
		border-radius: 50%;
		top: 50%;
		text-align: center;
		line-height: 50px;
		margin-top: -25px;
		z-index: 3;
		background-color: rgba(102, 153, 204, 0.5);
		&.carousel__next{
			right: 0;
		}
		&.carousel__prev{
			left: 0;
		}
	}


</style>