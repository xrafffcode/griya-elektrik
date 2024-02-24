import { axiosInstance } from '@/plugins/axios'
import router from '@/router'

import { defineStore } from 'pinia'

export const useBranchStore = defineStore({
  id: 'branch',
  state: () => ({
    branches: [],
    branch: {},
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchBranches() {
      this.loading = true
    
      try {
        const response = await axiosInstance.get('/branches')
    
        this.branches = response.data.data
      } catch (error) {
        this.error = error
      }
    
      this.loading = false
    },

    async createBranch(payload) {
      this.loading = true
    
      try {
        const response = await axiosInstance.post('/branches', payload)
    
        this.branches.push(response.data.data)

        this.success = 'Cabang berhasil ditambahkan'

        router.push({ name: 'admin-branch' })
      } catch (error) {
        if (error.response && error.response.status === 422) {
          this.error = error.response.data.errors
        }
        console.error(error)
      }
    
      this.loading = false
    },
    async deleteBranch(id) {
      this.loading = true

      try {
        await axiosInstance.delete(`/branches/${id}`)

        this.success = 'Cabang berhasil dihapus'
        
      } catch (error) {
        this.error = error
      }

      this.loading = false
    },
  },
})
