import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/AllTrack',
    name: 'AllTrack',
    component: () => import('../views/AllTrack.vue')
  },
  {
    path: '/history/:id',
    name: 'RunnerTrack',
    component: () => import('../views/RunnerTrack.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
