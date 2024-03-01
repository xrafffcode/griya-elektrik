import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'

export const useBannerStore = defineStore({
  id: 'banner',
  state: () => ({
    banners: [],
    banner: {},
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchBanners() {
      this.loading = true
    
      try {
        const response = await axiosInstance.get('/banners')
    
        this.banners = response.data.data
    
      } catch (error) {
        this.error = error
      }
    
      this.loading = false
    },
    async createBanner(payload) {
      this.loading = true
    
      try {
       
        const response = await axiosInstance.post('/banners', payload)

        this.banners.push(response.data.data)

        this.success = 'Banner berhasil ditambahkan'

        router.push({ name: 'admin-banner' })
    
      } catch (error) {
        if (error.response && error.response.status === 422) {
          this.error = error.response.data.errors
        }
        console.error(error)
      }
    
      this.loading = false
    },
    async deleteBanner(id) {
      this.loading = true
    
      try {
        await axiosInstance.delete(`/banners/${id}`)
    
        this.success = 'Banner berhasil dihapus'
      } catch (error) {
        this.error = error
      }
    
      this.loading = false
    },
  },
})
