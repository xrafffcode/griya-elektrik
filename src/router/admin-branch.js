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
]
    
export default adminBranchRoutes
