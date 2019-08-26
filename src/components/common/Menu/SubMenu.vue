<template>
	<div class="submenu select-none" @click.stop="toggle(_uid)">
		<div class="flex p-1">
			<div class="menu-icon">
				<slot name="icon"></slot>
			</div>
			<div class="font-medium ml-2">
				<slot></slot>
			</div>
		</div>
		<div :class="{'hidden': !active}" :ref="_uid" class="side-submenu bg-gray-300 overflow-hidden border-l-2 border-indigo-500 py-0">
			<slot name="menu"></slot>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'nl-submenu',
		methods: {
			toggle () {

			}
		}
	}
</script>