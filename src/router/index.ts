import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GroupesView from '../views/GroupesView.vue'
import ConfigView from '../views/ConfigView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/Groupes',
      name: 'groupes',
      component: GroupesView
    },

    {
      path: '/Config',
      name: 'config',
      component: ConfigView
    }
  ]
})

export default router
