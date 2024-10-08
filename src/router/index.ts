import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GroupesView from '../views/GroupesView.vue'
import MembresView from '../views/MembresView.vue'
import ConfigView from '../views/ConfigView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Groupes',
      name: 'groupes',
      component: GroupesView
    },
    {
      path: '/Membres',
      name: 'membres',
      component: MembresView
    },
    {
      path: '/Config',
      name: 'config',
      component: ConfigView
    },
  ]
})

export default router
