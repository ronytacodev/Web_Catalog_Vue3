import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductosPage from '@/views/productos/ProductosPage.vue'
import CategoriasPage from '@/views/categorias/CategoriasPage.vue'
import ProductosPorCategoriaPage from '@/views/productos/ProductosPorCategoriaPage.vue'
import ProductosDetailPage from '@/views/productos/ProductosDetailPage.vue'

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
    name: 'categorias',
    children: [
      {
        path: '/:id',
        name: 'detalle-producto',
        component: ProductosDetailPage
      },
    ]
    // children: [
    //   {
    //     path: '/:category',
    //     name: 'categorias',
    //     component: ProductosPorCategoriaPage
    //   }
    // ]
  },
  {
    path: '/:category',
    name: 'productos-categorias',
    component: ProductosPorCategoriaPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
