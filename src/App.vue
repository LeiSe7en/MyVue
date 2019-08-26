<template>
  <div class="container">
    <aside style="width: 240px;">
      <SideMenu/>
    </aside>
    <section style="flex: 1;">
      <router-view/>
    </section>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu'
export default {
  name: 'App',
  components: {SideMenu}
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
