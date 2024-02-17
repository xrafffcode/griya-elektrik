const adminProductBrandRoutes = [
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
]

export default adminProductBrandRoutes
