const adminProductRoutes = [
  {
    path: 'produk',
    component: () => import('../pages/admin/product/products.vue'),
    name: 'admin-product',
  },
  {
    path: 'produk/:id',
    component: () => import('../pages/admin/product/detail-product.vue'),
  },
  {
    path: 'produk/tambah',
    component: () => import('../pages/admin/product/create-product.vue'),
  },
]


export default adminProductRoutes
