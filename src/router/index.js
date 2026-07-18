import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductView from '../views/ProductView.vue'
import ReviewsView from '../views/ReviewsView.vue'
import HelpView from '../views/HelpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/incubadoras',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/incubadora/:slug',
      name: 'product',
      component: ProductView
    },
    {
      path: '/opiniones-incubadoras-de-huevos',
      name: 'reviews',
      component: () => import('../views/ReviewsView.vue')
    },
    {
      path: '/como-incubar',
      name: 'help',
      component: () => import('../views/HelpView.vue')
    },
  ]
})

// router.beforeEach((to, from, next) => {
// })

export default router
