<template>
  <div class="p-20 min-h-screen">
    <h1 class="text-center ">INSPIRATIONS</h1>
    <ul>
      <li v-for="(title, index) in titles" class="cursor-pointer inspiration-item underline p-4" :key="title" @click="goTo({name: 'InspirationShow', params: {id: index}})">{{title}}<li/>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'inspirations',
    data () {
      return {
        titles: [ 
          'Basic Parallax Website With HTML & CSS',
          'Hamburger Menu'
        ]
      }
    },
    methods: {
      goTo (options) {
        this.$router.push(options)
      }
    }
  }
</script>
<style scoped>
  ul{
    counter-reset: num;
  }
  .inspiration-item::before{
    display: inline;
    counter-increment: num;
    content: counter(num) '. ';
    text-decoration: none;
    position: relative;
  }
</style>