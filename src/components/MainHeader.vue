<template>
	<div class="w-full h-12 shadow bg-white">
		<div class="container h-12 flex items-center justify-between">
			<nl-menu mode="horizontal">
				<router-link :to="{name: 'Home'}">
					<div class="icon icon-logo w-8 h-8 bg-no-repeat">
						
					</div>
				</router-link>

				<nl-submenu>
					<template>
						Articles
					</template>
					<template #menu>
						<nl-menu-item :to="{name: 'Articles', params: {id: 1}}">
							Articles1
						</nl-menu-item>
						<nl-menu-item>
							Articles2
						</nl-menu-item>
						<nl-menu-item>
							Articles3
						</nl-menu-item>
					</template>
				</nl-submenu>
				<nl-menu-item>
				  Pictures
				</nl-menu-item>
			</nl-menu>
			<div class="login-out flex">
				<div class="icon icon-weibo mr-2"></div>	
				<div class="icon icon-wechat mr-2"></div>	
				<div class="qq"></div>	
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'MainHeader'
	}
</script>
<style>
	.icon {
		background-image: url('http://css.mafengwo.net/images/header-sprites15@2x.png');
		height: 26px;
		width: 26px;
		background-size: 200px;
		overflow: hidden;
	}
	.icon-logo{
		width: 150px;
		background-position: 0 0;
		height: 40px;
	}
	.icon-weibo{
		background-position: 0 -50px;
	}
	.icon-wechat{
		background-position: 0 -165px;
	}
</style>