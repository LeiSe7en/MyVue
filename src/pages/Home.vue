<template>
  <div>
    <div class="show-case text-white text-center text-center flex justify-center flex-col">
      <h1 class="p-4 pt-10" style="font-family: Arapey;">Love coding</h1>
      <h5 class="p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores aliquam animi maxime unde consectetur, accusantium adipisci, autem enim ipsam assumenda ea quaerat vero saepe nihil placeat sequi, ex vel sapiente.</h5>
      <h3 class="p-6">Say Hi tO NeLson !!!</h3>
    </div>
    <div class="bg-gray-600 h-32 flex justify-center text-white items-center px-10 font-bold text-4xl text-center">
        <blockquote>
          “Ready to join my world?”
        </blockquote>
    </div>
    <div class="container">
      
      <div class="language-box flex justify-between items-center py-10">
        <div class="language-item flex-1 flex flex-col items-center justify-center" v-for="item in languages" :key="item.name">
          <img :src="item.image" class="w-40 h-40"/>
          <p class="text-center p-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea numquam, delectus nobis ratione magnam, perspiciatis placeat ?</p>
        </div>
      </div>
      <div class="scroll relative p-4">
        <p class="absolute text-2xl w-1/3 mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi id placeat at quaerat, dignissimos quia corporis necessitatibus obcaecati magni ducimus quisquam <span class="block bg-red-600 h-2 mt-2"></span></p>
        <img class="absolute" src="../../static/images/sample1.jpeg">
        <img class="absolute" src="../../static/images/sample2.jpeg">
      </div>  
    </div>
    
  </div>
  
</template>
<script>
  import MainHeader from '@/components/MainHeader'
  import { Carousel } from 'element-ui'
  export default {
    name: 'sss',
    components: {MainHeader, Carousel},
    data () {
      return {
        visible: false,
        value: 'dsds',
        currentIndex: 0,
        selectedOpt: '',
        languages: [
          {name: 'Vue', image: '../../static/images/Vue.png', text: '渐进式JavaScript 框架'},
          {name: 'Nuxt', image: '../../static/images/Nuxt.png', text: 'Vue.js 服务器端渲染'},
          {name: 'CSS3', image: '../../static/images/Css3.svg', text: 'Cascading Style Sheets Level 3'}
        ]
      }
    },
    provide() {
      return {

      }
    },
    mounted () {
      // let el = this.$el
      // console.log(this.constructor.options)
    }
  }
</script>
<style lang="less">
  .show-case{
    height: 40vw;
    width: 100vw;
    background-image: url('https://assets.entrepreneur.com/content/3x2/2000/20150708172005-coding-working-workspace-apple-macintosh.jpeg?width=700&crop=2:1');
    background-repeat:  no-repeat;
    background-size: cover;
  }
  h3{
    font-size: 26px;
  }
  .scroll{
    height: 100vh;
    img:nth-of-type(1){
      width: 25%;
      right: 15%;
      top: 10%;
    }
    img:nth-of-type(2){
      width: 25%;
      right: 20%;
      top: 20%;
      margin-top: 10%;
    }
  }
  
  
</style>