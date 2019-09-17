<template>
	<nl-menu>
		<nl-menu-item>
			<template #icon>
				<font-awesome-icon icon="power-off" size="lg"/>
			</template>
		</nl-menu-item>
		<nl-menu-item>
			<template #icon>
				<font-awesome-icon icon="id-card" size="lg"/>
			</template>
			<div>
				menu1
			</div>
		</nl-menu-item>
		<nl-submenu>
			<template #icon>
				<font-awesome-icon icon="id-card" size="lg"/>
			</template>
			<div>
				menu2
			</div>
			<template #menu>
				<nl-menu-item>
					<template #icon>
						<font-awesome-icon icon="id-card" size="lg"/>
					</template>
					<div>
						menu2-1
					</div>
				</nl-menu-item>
				<nl-menu-item>
					<template #icon>
						<font-awesome-icon icon="id-card" size="lg"/>
					</template>
					<div>
						menu2-2
					</div>
				</nl-menu-item>
				<nl-menu-item>
					<template #icon>
						<font-awesome-icon icon="id-card" size="lg"/>
					</template>
					<div>
						menu2-3
					</div>
				</nl-menu-item>
			</template>
		</nl-submenu>
		<nl-submenu>
			<template #icon>
				<font-awesome-icon icon="id-card" size="lg"/>
			</template>
			<div>
				menu3
			</div>
			<template #menu>
				<nl-menu-item>
					<template #icon>
						<font-awesome-icon icon="id-card" size="lg"/>
					</template>
					<div>
						menu3-1
					</div>
				</nl-menu-item>
			</template>
		</nl-submenu>
	</nl-menu>
</template>
<script>
	export default {
		name: 'SideMenu'
	}
</script>