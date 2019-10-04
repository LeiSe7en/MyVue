<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import SideMenu from '@/components/SideMenu'
export default {
  name: 'App',
  components: {
    SideMenu
  },
  data () {
    return {
      value: 'sdsds'
    }
  },
  filters: {
    sdsds: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  render (h) {
    return h('router-view')
    // let self = this
    // return h('input', {
    //   domProps: {
    //     value: this.value
    //   }
    // }, [
    //     h('RouterView')
    //   ])
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
.container{
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
}
</style>
