const adminBannerRoutes = [
  {
    path: 'konfigurasi-web/banner',
    component: () => import('../pages/admin/banner/banners.vue'),
    name: 'admin-banner',
  },
  {
    path: 'konfigurasi-web/banner/tambah',
    component: () => import('../pages/admin/banner/create-banner.vue'),
    name: 'admin-banner-create',
  },
]

export default adminBannerRoutes
