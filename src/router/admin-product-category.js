const adminProductCategoryRoutes = [
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
]

export default adminProductCategoryRoutes
