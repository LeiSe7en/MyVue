<template>
	<div class="nl-button border-solid border inline-block rounded" @click="handleClick"
		:class="[
			'nl-button-' + type,
			'nl-button-' + size,
			{'rounded-full': round}]" :style="{borderRaduis: circle ? '50%' : ''}">
		<div>{{label}}</div>
	</div>
</template>
<script>
	export default {
		name: 'nl-button',
		props: {
			type: {
				type: String,
				default: 'default'
			},
			size: {
				type: String,
				default: 'medium'
			},
			round: {
				type: Boolean,
				default: false
			},
			circle: {
				type: Boolean,
				default: true
			},
			label: {
				type: String,
				default: '按钮'
			},
			callback: Function
		},
		methods: {
			handleClick(evt) {
        this.$emit('click', evt);
      }
		},
		mounted () {
			this.callback && this.callback()
		}
	}
</script>
<style lang="less">
	.nl-button{
		&-medium{
			@apply .py-1;
			@apply .px-2;
		}
		&-primary{
			@apply .border-teal-400;
			@apply .bg-teal-400;
			@apply .text-white;
		}
		&-default{
			@apply .border-gray-500;
			@apply .bg-gray-500;
			@apply .text-white;
		}
	}
</style>