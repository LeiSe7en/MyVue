<template>
  <transition name="nl-zoom-in-top">
    <ul class="nl-select-dropdown p-1" :style="styleObj" v-show="value">
      <slot></slot>
    </ul>
s  </transition>
</template>
<script>
  export default {
    name: 'nl-select-dropdown',
    data () {
      return {
        styleObj: {
        }
      }
    },
    props: {
      value: Boolean
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
.nl-zoom-in-top-enter-active, .nl-zoom-in-top-leave-active{
 opacity: 1;
 transform: scaleY(1);
 transition: transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);
 transform-origin: center top
}


.nl-zoom-in-top-enter,.nl-zoom-in-top-leave-active {
  opacity: 0;
  transform: scaleY(0)
}
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