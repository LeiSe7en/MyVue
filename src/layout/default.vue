<template>
  <div class="main-container">
    <div class="header w-full">
      <MainHeader></MainHeader>
    </div>
    <div class="content min-h-screen pt-20">
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
<style>
  .main-container {
    background-image: url(../../static/images/main_background_4.jpg);
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>
