import { createRouter, createWebHistory } from 'vue-router'
import Leaderboard from '../views/Leaderboard.vue'
import SignIn from '../views/SignIn.vue'
import About from '../views/About.vue'
import LFT from '../views/LFT.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'Leaderboard',
      component: Leaderboard    
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/lft',
      name: 'lft',
      component: LFT
    },
  ]
})

export default router
