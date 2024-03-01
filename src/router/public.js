const publicRouter = [
  {
    path: '',
    component: () => import('../pages/home.vue'),
  },
  {
    path: 'produk',
    component: () => import('../pages/products.vue'),
  },
  {
    path: 'produk/:id',
    component: () => import('../pages/product.vue'),
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
