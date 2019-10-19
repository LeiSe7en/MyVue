<template>
  <div class="nl-select">
    <input ref="selectInput" readonly="readonly" class="border-gray-300 border-solid rounded border" type="text" :value="selectedValue" @click="showDropdown = !showDropdown">
    
    <SelectDropdown v-model="showDropdown">
      <slot></slot>
    </SelectDropdown>

  </div>
</template>
<script>
  import SelectDropdown from './SelectDropdown'
  export default {
    name: 'nl-select',
    components: {
      SelectDropdown
    },
    data () {
      return {
        inputWidth: 0,
        selectedValue: null,
        showDropdown: false
      }
    },
    provide () {
      return {
        select: this
      }
    },
    methods: {
      setInputWidth () {
        //如果是一个自定义Vue组件 那么$el就是dom，如果要是一个原生组件，那么this.$refs.selectInput拿到的就直接是dom
        console.log(this.$refs.selectInput.getBoundingClientRect().width)
        this.inputWidth = this.$refs.selectInput.getBoundingClientRect().width
      },
      handleSelectOption ($event) {
        console.log('handleSelectOption')
        this.selectedValue = $event
      }
    },
    mounted () {
      this.setInputWidth()
    },
    created () {
      this.$on('selectOption', this.handleSelectOption)
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

</style>