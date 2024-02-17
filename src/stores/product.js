import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'

export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [],
    product: {},
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchProducts() {
      this.loading = true
    
      try {
        const response = await axiosInstance.get('/products')
    
        this.products = response.data.data
    
      } catch (error) {
        this.error = error
      }
    
      this.loading = false
    },
  },
})
