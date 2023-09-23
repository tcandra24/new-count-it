// Composables
import { createRouter, createWebHistory } from 'vue-router'
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';

const routes = [
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/pages/Error404.vue')
  },
  MainRoutes,
  AuthRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
