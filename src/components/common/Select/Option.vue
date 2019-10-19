<template>
  <li class="nl-option p-1" @click.stop="selectOption" :class="{'bg-blue-300 text-white font-bold': isSelected}">
    {{label}}
  </li>
</template>
<script>
  import Emitter from '@/mixins/emitter'
  export default {
    name: 'nl-option',
    props: {
      label: String,
      value: String
    },
    mixins: [ Emitter ],
    inject: {
      select: {
        default: null
      }
    },
    computed: {
      isSelected () {
        return this.value === this.select.selectedValue
      }
    },
    methods: {
      selectOption () {
        this.dispatch('nl-select', 'selectOption', [this.value])
      }
    }
  }
</script>