const publicRouter = [
  {
    path: '',
    component: () => import('../pages/home.vue'),
  },
  {
    path: 'produk',
    component: () => import('../pages/products.vue'),
    name: 'products',
  },
  {
    path: 'produk/:slug',
    component: () => import('../pages/product.vue'),
  },
  {
    path: 'kategori-produk',
    component: () => import('../pages/categories.vue'),
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
]

export default publicRouter
