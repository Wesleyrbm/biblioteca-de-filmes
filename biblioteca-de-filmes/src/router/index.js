import { createRouter, createWebHistory } from 'vue-router'
import Lista from '../pages/Lista.vue'
import Filmes from '../pages/Filmes.vue'
import Sobre from '../pages/Sobre.vue'

const routes = [
  { path: '/', redirect: '/lista' },
  { path: '/lista', component: Lista },
  { path: '/filmes', component: Filmes },
  { path: '/sobre', component: Sobre },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
