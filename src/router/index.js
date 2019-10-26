import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Articles from '@/pages/Articles'
import VideoResourses from '@/pages/VideoResourses'
import ScrollMagic from '@/pages/ScrollMagic'

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
    }
  ]
})
