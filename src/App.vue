<template>
  <!-- <default-layout></default-layout> -->
  <router-view></router-view>
</template>
<script>
  import defaultLayout from '@/layout/default'
export default {
  name: 'App',
  data () {
    return {
      value: 'sdsds'
    }
  },
  components: {
    'default-layout': defaultLayout
  },
  filters: {
    sdsds: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  mounted () {
  },
  beforeMount () {
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
