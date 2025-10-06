import { createRouter, createWebHistory } from 'vue-router'
import Lista from '../pages/Lista.vue'
import Filmes from '../pages/Filmes.vue'
import Sobre from '../pages/Sobre.vue'
import Editar from '../pages/Editar.vue'

const routes = [
  { path: '/', redirect: '/lista' },
  { path: '/lista', component: Lista },
  { path: '/filmes', component: Filmes },
  { path: '/sobre', component: Sobre },
  { path: '/editar/:index', component: Editar, props: true } 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
