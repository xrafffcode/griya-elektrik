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
      this.error = null
    
      try {
        const response = await axiosInstance.get('/product/read/any')
    
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
        const response = await axiosInstance.get(`/product/read/active-featured`)

        this.loading = false 

        return response.data.data
      } catch (error) {
        this.error = error
      }
    },
    async fetchActiveProducts(){
      try {
        const response = await axiosInstance.get(`/product/read/active`)


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
        const response = await axiosInstance.get(`/product/${id}`)

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
        const response = await axiosInstance.get(`/product/slug/${slug}`)

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
        const response = await axiosInstance.post('/product', payload)
    
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
    async updateProduct(payload) {
      this.loading = true

      try {
        await axiosInstance.post(`/product/${payload.id}`, payload)

        this.success = 'Produk berhasil diupdate'

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
        await axiosInstance.delete(`/product/${id}`)

        this.success = 'Produk berhasil dihapus'
        
      } catch (error) {
        this.error = error
      }

      this.loading = false
    },
    async fetchProductsWithParams(params) {
      this.loading = true

      try {
        const response = await axiosInstance.get('/product/read/active', { params })

        this.products = response.data.data

      } catch (error) {
        this.error = error
      }

      this.loading = false
    },
    async updateActiveProduct(id, payload) {
      this.loading = true

      try {
        const response = await axiosInstance.post(`/product/${id}/active`, payload)

        this.success = response.data.message

      } catch (error) {
        this.error = error
      }

      this.loading = false
    },
    async updateFeaturedProduct(id, payload) {
      this.loading = true

      try {
        await axiosInstance.post(`/product/${id}/featured`, payload)

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
