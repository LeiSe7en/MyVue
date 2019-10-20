<template>
  <div class="nl-select" v-click-outside="handleCloseSelect" >
    <input ref="selectInput" readonly="readonly" class="border-gray-300 border-solid rounded border" type="text" :value="selectedValue" @click="showDropdown = !showDropdown">
    <SelectDropdown v-model="showDropdown">
      <slot></slot>
    </SelectDropdown>

  </div>
</template>
<script>
  import SelectDropdown from './SelectDropdown'
  import ClickOutside from '@/directives/click-outside'
  export default {
    name: 'nl-select',
    components: {
      SelectDropdown
    },
    directives: {
      ClickOutside
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
        this.selectedValue = $event
      },
      handleCloseSelect () {
        this.showDropdown = false
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
  

</style>