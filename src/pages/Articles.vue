<template>
	<div class="container">	
		<h1 class="text-center">Article {{number}}</h1>
		<transition-group name="list" tag="div" class="counters">
			<p :key="item" v-for="item in array" class="section relative py-3 px-6">
				{{item }}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates et nulla quos ut, veritatis aliquid esse! Animi velit ab eveniet sequi quod aliquid, rerum excepturi quas voluptatibus aspernatur. Neque, tempore.
			</p>
		</transition-group>
		<nl-button @click="togglePara" label="Remove"></nl-button>
	</div>
</template>
<script>
	export default {
		name: 'Articles',
		props: {
			name: String
		},
		data () {
			return {
				number: this.$route.params.id,
				array: [1,2,3,4,5]
			}
		},
		methods: {
			togglePara () {
				this.array.splice(0,1)
			}
		}
	}
</script>
<style>
	p::before{
		content: "";
		width: 1em;
		display: inline-block;
	}
	.list-enter-active, .list-leave-active{
		transition: all 4s;
	}
	.list-leave-active{
		position: absolute;
	}
	.list-enter, .list-leave-to
	/* .list-leave-active for below version 2.1.8 */ {
	  opacity: 0;
	  transform: translateX(-300px);
	}
	.counters {
		counter-reset: first-counter;
	}
	.section{
		transition: all 4s;
		display: inline-block;
	}
	/*.section::before {
		content: counter(first-counter) '';
		counter-increment: first-counter;
		position: absolute;
		left: -2em;
		top: -0.3em;
		color: #fff;
		background-color: lightgray;
		display: flex;
		border: 1px solid #000;
		justify-content: center;
		align-items: center;
		width: 1.5em;
		height: 1.5em;
		border-radius: 50%;
		box-sizing: border-box;
	}
*/
</style>
