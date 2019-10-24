import Vue from '../../dist/vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Articles from '@/pages/Articles'
import VideoResourses from '@/pages/VideoResourses'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
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
    }
  ]
})
