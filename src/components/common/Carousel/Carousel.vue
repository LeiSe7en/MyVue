<template>
	<div class="nl-carousel__wrapper h-full relative">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name: 'nl-carousel',
    methods: {
      updateItems () {
        console.log(this.$children)
        this.$children.filter(item => {

        })
      }
    },
    mounted () {
      this.updateItems()
    }
	}
</script>