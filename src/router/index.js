import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '../views/ProductView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/product'
    },
    {
      path: '/product',
      name: 'Product',
      component: ProductView
    },
    {
      path: '/product/:id',
      name: 'ProductDetail',
      component:ProductDetailView
    }
  ]
})

export default router
