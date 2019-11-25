import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import Athlete from './pages/Athlete.vue'
import NotFound from './pages/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/athletes/:uid',
      name: 'athlete',
      component: Athlete
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
})
