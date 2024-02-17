import { createRouter, createWebHistory } from 'vue-router'
import adminRoutes from './admin'
import publicRouter from './public'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/admin', redirect: 'admin/dashboard' },
    {
      path: '/admin',
      component: () => import('../layouts/default.vue'),
      children: [
        {
          path: 'dashboard',
          component: () => import('../pages/dashboard.vue'),
          name: 'dashboard',
        }, 
        ...adminRoutes,
      ],
    },
    {
      path: '/',
      component: () => import('../layouts/blank.vue'),
      children: [
        ...publicRouter,
      ],
    },
    {
      path: '/auth',
      component: () => import('../layouts/auth.vue'),
      children: [
        {
          path: 'login',
          component: () => import('../pages/login.vue'),
        },
      ],
    },
  ],
})

export default router
