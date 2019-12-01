<template>
	<div class="w-full shadow bg-white fixed z-50">
		<div class="container h-20 flex items-center justify-between">
			<nl-menu mode="horizontal">
				<router-link :to="{name: 'Home'}">
					<div class="icon-logo w-16 h-16 bg-no-repeat rounded-full">
						
					</div>
				</router-link>
				<div class="flex justify-end w-full h-full px-8">
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
					<nl-menu-item :to="{name: 'Inspirations'}">
					  Inspirations
					</nl-menu-item>
					<nl-menu-item :to="{name: 'Algorithm'}">
					  Algorithm
					</nl-menu-item>
				</div>
			</nl-menu>
			<a class="login-out flex block" href="https://github.com/LeiSe7en">
				<div class="icon-github"></div>	
			</a>
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
		background-image: url(../../static/images/nelson.jpeg);
		background-size: cover;
		background-repeat: no-repeat;
	}
	.icon-weibo{
		background-position: 0 -50px;
	}
	.icon-wechat{
		background-position: 0 -165px;
	}
	.icon-github{
		height: 26px;
		width: 26px;
		background-size: contain;
		overflow: hidden;
		background-image: url('../../static/images/github.png');

	}
</style>