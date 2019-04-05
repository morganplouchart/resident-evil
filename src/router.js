import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Residentevil0 from './views/ResidentEvil0.vue'
import Residentevil from './views/ResidentEvil.vue'
import Residentevil2 from './views/ResidentEvil2.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/residentevil0',
      name: 'residentevil0',
      component: Residentevil0
    },
    {
      path: '/residentevil',
      name: 'residentevil',
      component: Residentevil
    },
    {
      path: '/residentevil2',
      name: 'residentevil2',
      component: Residentevil2
    }
  ]
})
