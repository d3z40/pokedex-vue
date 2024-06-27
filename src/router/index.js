import Geracao1 from '@/page/geracao1.vue'
import Geracao2 from '@/page/geracao2.vue'
import Geracao3 from '@/page/geracao3.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'geracao1',
      component: Geracao1
    },
    {
      path: '/geracao2',
      name: 'geracao2',
      component: Geracao2
    },
    {
      path: '/geracao3',
      name: 'geracao3',
      component: Geracao3
    }
  ]
})

export default router
