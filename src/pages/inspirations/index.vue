<template>
  <div>
    <router-link v-for="(title, index) in titles" :key="title" :to="{name: 'InspirationShow', params: {id: index}}">{{title}}</router-link>
  </div>
</template>
<script>
  import ParallaxWebsite from '@/assets/HtmlInspirations/ParallaxWebsite'
  export default {
    name: 'inspirations',
    data () {
      return {
        titles: [ 'Basic Parallax Website With HTML & CSS']
      }
    }
  }
</script>