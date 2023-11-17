import { createRouter, createWebHistory } from 'vue-router'
import Leaderboard from '../views/Leaderboard.vue'
import SignIn from '../views/SignIn.vue'
import About from '../views/About.vue'
import LFT from '../views/LFT.vue'
import SignUp from '../views/SignUp.vue'

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
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
  ]
})

export default router
