import Vue from 'vue'
import Router from 'vue-router'
// import App from '../App'
// import AppEn from '@/components/AppEn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/components/App')
    },
    {
      path: '/cpm',
      name: 'cpm',
      component: () => import('@/components/App')
    },
    {
      path: '/rpm',
      name: 'rpm',
      component: () => import('@/components/App')
    },
    {
      path: '/neo',
      name: 'neo',
      component: () => import('@/components/AppEn')
    },
    {
      path: '/nvwa',
      name: 'nvwa',
      component: () => import('@/components/AppNvwa')
    }
  ]
})
