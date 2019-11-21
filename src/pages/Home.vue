<template>
  <div class="home p-20">
    <div class="rounded-lg overflow-hidden bg-white">
      <div class="show-case bg-fixed text-white text-center text-center flex justify-center flex-col">
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
        
        <div class="language-box flex justify-between items-center py-10 mb-10">
          <div class="language-item flex-1 flex flex-col items-center justify-center" v-for="item in languages" :key="item.name">
            <div class="discription-box front">
              <img :src="item.image" class="w-40 h-40"/>
              <p class="text-center p-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea numquam, delectus nobis ratione magnam, perspiciatis placeat ?</p>
            </div>
            <div class="back text-2xl font-bold">
              {{item.hoverText}}
              <p class="desc text-xs p-4 text-gray-600">
                {{item.desc}}
              </p>
            </div>
          </div>
        </div>
        <div class="scroll relative p-4">
          <p id="text" class="absolute text-2xl w-1/3 mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi id placeat at quaerat, dignissimos quia corporis necessitatibus obcaecati magni ducimus quisquam <span class="block bg-red-600 h-2 mt-2"></span></p>
          <img id="shape1" class="absolute" src="../../static/images/sample1.jpeg">
          <img id="shape2" class="absolute" src="../../static/images/sample2.jpeg">
        </div>  

        <!-- <div class="text-center font-bold text-2xl shadow-xl py-8 bg-blue-300 rounded-lg mb-20">
          <p class="py-8 text-gray-600">I wanna share this my favorite video to all of my visitors.</p>
          <iframe width="500px" height="300px" style="margin: 0 auto;" src="https://www.youtube.com/embed/UX36flnDv-0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>   -->
      </div>
    </div>
  </div>
</template>
<script>
  import MainHeader from '@/components/MainHeader'
  import { Carousel } from 'element-ui'
  import { TweenMax, TimelineMax } from 'gsap'
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
          {name: 'Vue', image: 'static/images/Vue.png', text: '渐进式JavaScript 框架', hoverText: 'Hi vue', desc: 'The Progressive JavaScript Framework'},
          {name: 'Nuxt', image: 'static/images/Nuxt.png', text: 'Vue.js 服务器端渲染', hoverText: 'Hi nuxt', desc: 'The most popular mode for Nuxt. With SSR, also called "universal" or "isomorphic" mode, a Node.js server will be used to deliver HTML based on your Vue components to the client instead of the pure javascript. Using SSR will lead to a large SEO boost, better UX and more opportunities (compared to a traditional Vue SPA).'},
          {name: 'CSS3', image: 'static/images/Css3.svg', text: 'Cascading Style Sheets Level 3', hoverText: 'Hi css3'},
          {name: 'Mini-program', image: 'static/images/miniprogram.jpg', text: 'Cascading Style Sheets Level 3', hoverText: 'Hi miniprogram', desc: '小程序是一种新的开放能力，开发者可以快速地开发一个小程序。小程序可以在微信内被便捷地获取和传播，同时具有出色的使用体验。'}
        ]
      }
    },
    provide() {
      return {

      }
    },
    mounted () {
      
      const wrapScene = this.$scrollmagic.scene({
        triggerElement: '.scroll',
        triggerHook: 'onCenter',
        duration: '0%',
        offset: '-200%'
      }).setTween (
        TweenMax.from('.scroll', 1, {
          css: {
            x: '-100%',
            opacity: 0,
          }
        })
      )
      const timeline = new TimelineMax()
      timeline.add([
        TweenMax.to('#shape1', 1, {
          scale: 1.8,
          rotation: 180,
          borderRadius: '50%'
        }),
        TweenMax.from('#shape2', 1, 
        {
          opacity: 0,
          top: '-100',
          delay: .5
        }),
        TweenMax.from('#text', 1, {
          x: 100,
          opacity: 0,
          delay: .5
        })]
      )
      const shapScene = this.$scrollmagic.scene({
        triggerElement: '.scroll',
        triggerHook: 'onCenter',
      }).setTween(timeline)
      // timeline.add([
      //   TweenMax.to('#shape1', 1, {
      //     css: {
      //       top: '95%',
      //       marginTop: '-50px',
      //       borderRadius: '50%',
      //       scale: '0.5'
      //     }
      //   }),
      //   TweenMax.fromTo('#shape2', 1,
      //     {
      //       scale: '0'
      //     },
      //     {
      //       scale: '1.8',
      //       borderWidth: 0
      //     }
      //   )
      // ])
      
      // add scenes to window scrollmagic controller
      this.$scrollmagic.addScene([wrapScene, shapScene])
    }
  }
</script>
<style lang="less">
  .show-case{
    height: 40vw;
    background-image: url('https://assets.entrepreneur.com/content/3x2/2000/20150708172005-coding-working-workspace-apple-macintosh.jpeg?width=700&crop=2:1');
    background-repeat:  no-repeat;
    background-size: cover;
  }
  h3{
    font-size: 26px;
  }
  .scroll{
    height: 80vh;
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
  .language-item{
    border-radius: 20px;
    position: relative;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 1s ease;
    cursor: pointer;
    .front {
      position: relative;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      backface-visibility: hidden;
    }
    .back{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      text-align: center;
    }
    &:nth-of-type(2n){
      .back{
        opacity: 0;
        background-color: #f8f8f8;
        transition: opacity 0.5s ease;
        &:hover{
          opacity: 1;
        }
      }
      
    }
    &:nth-of-type(2n+1){
      .back{
        backface-visibility: hidden;
        transform: rotateY(180deg);
      }
      &:hover{transform: rotateY(180deg);}
    }
    
    img{
      margin: 0 auto;
    }
    .hover-box{
      position: absolute;
      width: 100%;
      height: 100%;
      text-align: center;
      opacity: 0;
      transition: opacity 1s;
      background-color: #f8f8f8;
      &:hover{
        opacity: 1;
      }
    }
  }
  
  
</style>