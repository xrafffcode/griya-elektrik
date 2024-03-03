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
    
        this.loading = false


        this.products = response.data.data
    
        return this.products
      } catch (error) {
        this.error = error
      }
    
      this.loading = false
    },
    async fetchFeaturedProducst(){
      try {
        const response = await axiosInstance.get(`/products/active-featured`)

        this.loading = false 

        return response.data.data
      } catch (error) {
        this.error = error
      }
    },
    async fetchActiveProducts(){
      try {
        const response = await axiosInstance.get(`/products/active`)


        this.products = response.data.data

        return response.data.data
      } catch (error) {
        this.error = error
      }

      this.loading = false
    },
    async fetchProductById(id) {
      this.loading = true

      try {
        const response = await axiosInstance.get(`/products/${id}`)

        this.product = response.data.data

        this.loading = false 

        return this.product
      } catch (error) {
        this.error = error
      }

    },
    async fetchProductBySlug(slug) {
      this.loading = true

      try {
        const response = await axiosInstance.get(`/products/slug/${slug}`)

        this.product = response.data.data

        this.loading = false 

        return this.product
      } catch (error) {
        this.error = error
      }

    },
    async createProduct(payload) {
      this.loading = true
    
      try {
        const response = await axiosInstance.post('/products', payload)
    
        this.products.push(response.data.data)

        this.success = 'Produk berhasil ditambahkan'

        router.push({ name: 'admin-product' })
      } catch (error) {
        if (error.response && error.response.status === 422) {
          this.error = error.response.data.errors
        }
        console.error(error)
      }
    
      this.loading = false
    },
    async deleteProduct(id) {
      this.loading = true

      try {
        await axiosInstance.delete(`/products/${id}`)

        this.success = 'Produk berhasil dihapus'
        
      } catch (error) {
        this.error = error
      }

      this.loading = false
    },
    async fetchProductsWithParams(params) {
      this.loading = true

      try {
        const response = await axiosInstance.get('/products/active', { params })

        this.products = response.data.data

      } catch (error) {
        this.error = error
      }

      this.loading = false
    },
    async updateActiveProduct(id, payload) {
      this.loading = true

      try {
        const response = await axiosInstance.post(`/products/${id}/active`, payload)

        this.success = response.data.message

      } catch (error) {
        this.error = error
      }

      this.loading = false
    },
    async updateFeaturedProduct(id, payload) {
      this.loading = true

      try {
        await axiosInstance.post(`/products/${id}/featured`, payload)

        if (payload.is_featured) {
          this.success = 'Cabang berhasil dijadikan unggulan'
        }else {
          this.success = 'Cabang berhasil dijadikan tidak unggulan'
        }
      } catch (error) {
        this.error = error
      }

      this.loading = false
    },
  },
})
