<template>
  <div>
    <div class="header w-full">
      <MainHeader></MainHeader>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">
    </div>
  </div>
  
</template>
<script>
  export default {
    name: 'layout'
  }
</script>
