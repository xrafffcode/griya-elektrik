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
        await axiosInstance.post('/banners', payload)
    
        this.success = 'Banner created successfully'
    
        router.push('/banners')
    
      } catch (error) {
        this.error = error
      }
    
      this.loading = false
    },
  },
})
