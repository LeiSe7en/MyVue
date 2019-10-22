<template>
	<div class="nl-button border-solid border inline-block" @click="handleClick"
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
			}
		},
		methods: {
			handleClick(evt) {
        this.$emit('click', evt);
      }
		}
	}
</script>
<style lang="less">
	.nl-button{
		&-medium{
			padding: 12px 23px;
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