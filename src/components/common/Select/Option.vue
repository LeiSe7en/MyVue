<template>
  <li class="nl-option p-1" @click.stop="selectOption" :class="{'bg-blue-300 text-white font-bold': isSelected}">
    {{label}}
  </li>
</template>
<script>
  import Emitter from '@/mixins/emitter'
  export default {
    name: 'nl-option',
    mixins: [ Emitter ],
    inject: {
      select: {
        default: null
      }
    },
    props: {
      label: String,
      value: String
    },
    watch: {
      value: function (newValue, oldValue) {
        console.log('Option watch')
      }
    },
    computed: {
      isSelected () {
        return this.value === this.select.selectedValue
      }
    },
    methods: {
      selectOption () {
        this.dispatch('nl-select', 'selectOption', this.value)
      }
    },
    created () {
      console.log('Option created', this)
    }
  }
</script>