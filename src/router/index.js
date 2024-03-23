import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import LoginPage from '@/views/LoginPage.vue'
import ProfilePage from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProfilePage,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        next()
      } else {
        next('/login')
      }
    }
  
  },
  
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router