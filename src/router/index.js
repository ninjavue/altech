import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product',
    name: 'product',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductItems.vue')
  },
  {
    path: '/product/view',
    name: 'product/view',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductView.vue')
  },
  {
    path: '/product/view/technical',
    name: 'product/view/technical',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductTechnical.vue')
  },
  {
    path: '/product/view/coment',
    name: 'product/view/coment',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductComent.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
