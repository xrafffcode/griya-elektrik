import { createRouter, createWebHistory } from 'vue-router'

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
        {
          path: 'produk',
          component: () => import('../pages/admin/product/products.vue'),
          name: 'admin-product',
        },
        {
          path: 'produk/tambah',
          component: () => import('../pages/admin/product/create-product.vue'),
        },
        {
          path: 'kategori-produk',
          component: () => import('../pages/admin/category/product-categories.vue'),
          name: 'admin-product-category',
        },
        {
          path: 'kategori-produk/:id',
          component: () => import('../pages/admin/category/detail-product-category.vue'),
        },
        {
          path: 'kategori-produk/tambah',
          component: () => import('../pages/admin/category/create-product-category.vue'),
        },
        {
          path: 'kategori-produk/ubah/:id',
          component: () => import('../pages/admin/category/update-product-category.vue'),
        },
        {
          path: 'merk-produk',
          component: () => import('../pages/admin/brand/product-brands.vue'),
          name: 'admin-product-brand',
        },
        {
          path: 'merk-produk/tambah',
          component: () => import('../pages/admin/brand/create-product-brand.vue'),
        },
        {
          path: 'merk-produk/ubah/:id',
          component: () => import('../pages/admin/brand/update-product-brand.vue'),
        },
      ],
    },
    {
      path: '/',
      component: () => import('../layouts/blank.vue'),
      children: [
        {
          path: '',
          component: () => import('../pages/home.vue'),
        },
        {
          path: 'produk',
          component: () => import('../pages/products.vue'),
        },
        {
          path: 'kontak-kami',
          component: () => import('../pages/contact.vue'),
        },
        {
          path: 'tentang-kami',
          component: () => import('../pages/about.vue'),
        },
       
        {
          path: '/:pathMatch(.*)*',
          component: () => import('../pages/[...all].vue'),
        },
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
