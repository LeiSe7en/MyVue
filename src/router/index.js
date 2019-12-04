import Vue from '../../dist/vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Articles from '@/pages/Articles'
import VideoResourses from '@/pages/VideoResourses'
import ScrollMagic from '@/pages/ScrollMagic'
import Inspirations from '@/pages/inspirations'
import InspirationShow from '@/pages/inspirations/InspirationShow'
import Pictures from '@/pages/Pictures'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/articles/:id',
      name: 'Articles',
      component: Articles,
      props: {name: 'Nelson'}
    },
    {
      path: '/video-resourses',
      name: 'VideoResourses',
      component: VideoResourses
    },
    {
      path: '/scroll-magic',
      name: 'ScrollMagic',
      component: ScrollMagic
    },
    {
      path: '/inspirations',
      name: 'Inspirations',
      component: Inspirations
    },
    {
      path: '/inspiration-show/:id',
      name: 'InspirationShow',
      component: InspirationShow
    },
    {
      path: '/pictures',
      name: 'Pictures',
      component: Pictures
    }
  ]
})
