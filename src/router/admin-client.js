const adminClientRoutes = [
  {
    path: 'client',
    component: () => import('../pages/admin/client/clients.vue'),
    name: 'admin-client',
  },
  {
    path: 'client/tambah',
    component: () => import('../pages/admin/client/create-client.vue'),
    name: 'admin-client-create',
  },
  {
    path: 'client/ubah/:id',
    component: () => import('../pages/admin/client/update-client.vue'),
    name: 'admin-client-edit',
  },
]
      
export default adminClientRoutes
  