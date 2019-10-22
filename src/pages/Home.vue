<template>
	<div >
		<!-- <div style="height: 100vh;" class="flex flex-col">
			<MainHeader></MainHeader>
			<div class="flex-1" style="background-image: url('https://b2-q.mafengwo.net/s15/M00/C5/57/CoUBGV2UsG2AKEOcAB3GuPtBkPI291.png?imageMogr2%2Finterlace%2F1')"></div>
		</div> -->
		<div class="flex flex-col">
			<MainHeader></MainHeader>
			<div style="height: 300px;">
				<nl-carousel transition="fade" autoPlay>
					<nl-carousel-item>
						<div class="h-full bg-cover bg-no-repeat" style="background-image: url('https://b2-q.mafengwo.net/s15/M00/C5/57/CoUBGV2UsG2AKEOcAB3GuPtBkPI291.png?imageMogr2%2Finterlace%2F1')"></div>
					</nl-carousel-item>
					<nl-carousel-item>
						<div class="h-full bg-cover bg-no-repeat" style="background-image: url('http://b3-q.mafengwo.net/s15/M00/06/C6/CoUBGV2PnqaAAX0vAAYBRtqCiQ086.jpeg?imageMogr2%2Fstrip')"></div>
					</nl-carousel-item>
					<nl-carousel-item>
						<div class="h-full bg-cover bg-no-repeat" style="background-image: url('https://b1-q.mafengwo.net/s15/M00/40/A2/CoUBGV2fBmmAaVS8ACWhrcSdF_I886.png?imageMogr2%2Finterlace%2F1')"></div>
					</nl-carousel-item>
					<nl-carousel-item>
						<div class="h-full bg-cover bg-no-repeat" style="background-image: url('https://p1-q.mafengwo.net/s15/M00/BE/98/CoUBGV2dxteAamvJACkEsZuYyqs709.png?imageMogr2%2Finterlace%2F1')"></div>
					</nl-carousel-item>
					<nl-carousel-item>
						<div class="h-full bg-cover bg-no-repeat" style="background-image: url('https://b1-q.mafengwo.net/s15/M00/FD/E5/CoUBGV2cdXqAGtqiACG30X9cs9M641.png?imageMogr2%2Finterlace%2F1')"></div>
					</nl-carousel-item>
				</nl-carousel>
			</div>
		</div>
		<nl-select v-model="selectedOpt">
			<nl-option
				v-for="(index, opt) in 5"
			  :key="index"
			  :value="'opt' + opt"
			  :label="'opt' + opt"></nl-option>
		</nl-select>
	<!-- 	<iframe width="560" height="315" src="https://www.youtube.com/embed/Bv_5Zv5c-Ts" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
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
	.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
	
</style>