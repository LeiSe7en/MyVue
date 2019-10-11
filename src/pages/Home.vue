<template>
	<div >
		<!-- <div style="height: 100vh;" class="flex flex-col">
			<MainHeader></MainHeader>
			<div class="flex-1" style="background-image: url('https://b2-q.mafengwo.net/s15/M00/C5/57/CoUBGV2UsG2AKEOcAB3GuPtBkPI291.png?imageMogr2%2Finterlace%2F1')"></div>
		</div> -->
		<div style="height: 100vh;" class="flex flex-col">
			<MainHeader></MainHeader>
			<nl-carousel transition="fade">
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
		{{selectedOpt}}
		<nl-select v-model="selectedOpt">
			<nl-option
			  :key="1"
			  :value="'opt1'"
			  :label="'opt1'"></nl-option>
			<nl-option
			  :key="2"
			  :value="'opt1'"
			  :label="'opt1'"></nl-option>
			<nl-option
			  :key="3"
			  :value="'opt1'"
			  :label="'opt1'"></nl-option>
		</nl-select>

		<el-carousel :interval="4000" type="card" height="200px">
		    <el-carousel-item v-for="item in 8" :key="item">
		      <h3 class="medium">{{ item }}</h3>
		    </el-carousel-item>
		  </el-carousel>
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