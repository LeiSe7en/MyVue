import Vue from '../../dist/vue'
import Router from '../../dist/vue-router'
import Home from '@/pages/Home'
import Articles from '@/pages/Articles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    {
      path: '/articles',
      name: 'Articles',
      component: Articles,
      props: {name: 'Nelson'}
    }
  ]
})
