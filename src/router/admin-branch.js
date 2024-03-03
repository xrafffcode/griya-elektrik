const adminBranchRoutes = [
  {
    path: 'konfigurasi-web/cabang',
    component: () => import('../pages/admin/branch/branches.vue'),
    name: 'admin-branch',
  },
  {
    path: 'konfigurasi-web/cabang/tambah',
    component: () => import('../pages/admin/branch/create-branch.vue'),
    name: 'admin-branch-create',
  },
  {
    path: 'konfigurasi-web/cabang/ubah/:id',
    component: () => import('../pages/admin/branch/update-branch.vue'),
    name: 'admin-branch-edit',
  },
  {
    path: 'konfigurasi-web/cabang/:id',
    component: () => import('../pages/admin/branch/detail-branch.vue'),
    name: 'admin-branch-detail',
  },
]
    
export default adminBranchRoutes
