<template>
  <ul class="nl-select-dropdown p-1" :style="styleObj">
    <slot></slot>
  </ul>
</template>
<script>
  export default {
    name: 'nl-select',
    data () {
      return {
        styleObj: {
        }
      }
    },
    watch: { 
      "$parent.inputWidth" (val) {
        this.$set(this.styleObj, 'minWidth', val + 'px')
      }
    },
    created () {
      console.log(this)
    }
  }
</script>
<style>
  .nl-select-dropdown{
    position: absolute;
    z-index: 1001;
    border: solid 1px #E4E7ED;
    border-radius: 4px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    margin: 5px 0;
  }
</style>