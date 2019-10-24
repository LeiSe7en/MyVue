<template>
	<div>
		<div class="show-case text-white text-center text-center">
			<h1 class="p-4 pt-10">Love coding</h1>
			<h5 class="p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores aliquam animi maxime unde consectetur, accusantium adipisci, autem enim ipsam assumenda ea quaerat vero saepe nihil placeat sequi, ex vel sapiente.</h5>
			<h3 class="p-6">Say Hi tO NeLson !!!</h3>
		</div>
		<div class="language-box flex justify-between items-center">
			
		</div>
	</div>
	
</template>
<script>
	import MainHeader from '@/components/MainHeader'
	import { Carousel } from 'element-ui'
	export default {
		name: 'sss',
		components: {MainHeader, Carousel},
		data () {
			return {
				visible: false,
				value: 'dsds',
				currentIndex: 0,
				selectedOpt: ''
			}
		},
		provide() {
			return {

			}
		},
		mounted () {
			// let el = this.$el
			// console.log(this.constructor.options)
		}
	}
</script>
<style lang="less">
	.show-case{
		height: 30vw;
		width: 100vw;
		background-image: url('https://assets.entrepreneur.com/content/3x2/2000/20150708172005-coding-working-workspace-apple-macintosh.jpeg?width=700&crop=2:1');
		background-repeat:  no-repeat;
		background-size: cover;
	}
	h3{
		font-size: 26px;
	}

	
</style>