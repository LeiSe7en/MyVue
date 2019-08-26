<template>
	<div class="menu-item flex p-1">
		<div class="menu-icon">
			<slot name="icon"></slot>
		</div>
		<div class="font-medium ml-2">
			<slot></slot>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'nl-menu-item'
	}
</script>