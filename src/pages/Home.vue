<template>
	<div >
		<!-- <div style="height: 100vh;" class="flex flex-col">
			<MainHeader></MainHeader>
			<div class="flex-1" style="background-image: url('https://b2-q.mafengwo.net/s15/M00/C5/57/CoUBGV2UsG2AKEOcAB3GuPtBkPI291.png?imageMogr2%2Finterlace%2F1')"></div>
		</div> -->
		<div style="height: 100vh;" class="flex flex-col">
			<MainHeader></MainHeader>
			<nl-carousel>
				<nl-carousel-item>
					<div class="h-full bg-cover bg-no-repeat" style="background-image: url('https://b2-q.mafengwo.net/s15/M00/C5/57/CoUBGV2UsG2AKEOcAB3GuPtBkPI291.png?imageMogr2%2Finterlace%2F1')"></div>
				</nl-carousel-item>
				<nl-carousel-item>
					<div class="h-full bg-cover bg-no-repeat" style="background-image: url('http://b3-q.mafengwo.net/s15/M00/06/C6/CoUBGV2PnqaAAX0vAAYBRtqCiQ086.jpeg?imageMogr2%2Fstrip')"></div>
				</nl-carousel-item>
			</nl-carousel>
			
		</div>
	</div>
</template>
<script>
	import MainHeader from '@/components/MainHeader'
	export default {
		name: 'sss',
		components: {MainHeader},
		data () {
			return {
				visible: false,
				value: 'dsds'
			}
		},
		mounted () {
			// let el = this.$el
			// console.log(this.constructor.options)
		}
	}
</script>
<style lang="less">
	
	
</style>