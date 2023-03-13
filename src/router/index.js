import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductosPage from '@/views/productos/ProductosPage.vue'
import CategoriasPage from '@/views/categorias/CategoriasPage.vue'
import ProductosPorCategoriaPage from '@/views/productos/ProductosPorCategoriaPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'productos',
    component: ProductosPage
  },
  {
    path: '/categorias',
    component: CategoriasPage,
    children: [
      {
        path: '/productos-categoria',
        name: 'categorias',
        component: ProductosPorCategoriaPage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
