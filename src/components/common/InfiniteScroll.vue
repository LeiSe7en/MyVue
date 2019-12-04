<template>
  <div class="infinite-scroll__wrapper overflow-y-auto h-full">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    mounted () {
      console.log(this.$slots)
      
      this.$el.addEventListener('scroll', () => {
        console.log(this.$el.clientHeight)
        console.log(this.$el.offsetHeight)
        console.log('scrollTop', this.$el.scrollTop)
        console.log('scrollHeight', this.$el.scrollHeight)
        console.log('reachBottom', (this.$el.scrollHeight - 50) < (this.$el.scrollTop + this.$el.clientHeight))
        if (this.$el.scrollHeight - 50 < this.$el.scrollTop + this.$el.clientHeight) {
          this.$emit('onBottom')
        }
      })
    }
  }
</script>
<style>
  .infinite-scroll__wrapper::-webkit-scrollbar{
    width: 0 !important;
  }
</style>