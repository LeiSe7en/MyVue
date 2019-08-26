<template>
	<nl-menu>
		<nl-menu-item>
			<template #icon>
				<font-awesome-icon icon="power-off" size="lg"/>
			</template>
		</nl-menu-item>
		<nl-menu-item>
			<template #icon>
				<font-awesome-icon icon="power-off" size="lg"/>
			</template>
			<div>
				menu1
			</div>
		</nl-menu-item>
		<nl-menu-item>
			<template #icon>
				<font-awesome-icon icon="power-off" size="lg"/>
			</template>
			<div>
				menu2
			</div>
		</nl-menu-item>
	</nl-menu>
</template>
<script>
	export default {
		name: 'SideMenu'
	}
</script>