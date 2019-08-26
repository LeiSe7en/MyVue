<template>
	<div >
		<v-modal :title="'标题'" v-model="visible">
			<!-- <template #title>sdsdsds</template> -->
			<template>sdsdsdssd</template>
		</v-modal>
		<nl-button round type="primary" label="成功按钮" @click="visible = true"></nl-button>
		<font-awesome-icon icon="power-off" size="lg"/>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				visible: false
			}
		}
	}
</script>
<style lang="less">
	
	
</style>