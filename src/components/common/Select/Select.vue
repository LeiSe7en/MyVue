<template>
  <div class="nl-select">
    <input ref="selectInput" class="border-gray-300 border-solid rounded border" type="text" :value="selectedValue" :disabled="true">
    <SelectDropdown @selectOption="hello">
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
        selectedValue: null
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
      hello () {
        debugger
      }
    },
    mounted () {
      this.setInputWidth()
    }
  }
</script>