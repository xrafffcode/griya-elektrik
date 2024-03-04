import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'

export const useProductCategoryStore = defineStore({
  id: 'productCategory',
  state: () => ({
    categories: [],
    category: {},
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchCategories() {
      this.loading = true
      try {
        const response = await axiosInstance.get('/product-category/read/any')

        this.categories = response.data.data

      } catch (error) {
        this.error = error
      }

      this.loading = false
    },
    async fetchCategoryById(id) {
      this.loading = true

      try {
        const response = await axiosInstance.get(`/product-category/${id}`)

        this.category = response.data.data

        return this.category
      } catch (error) {
        this.error = error
      }

    },

    async fetchRootCategories() {
      this.loading = true

      try {
        const response = await axiosInstance.get('/product-category/read/root')

        this.categories = response.data.data

      } catch (error) {
        this.error = error
      }

      this.loading = false
    },


    async fetchEmptyCategory() {
      this.loading = true

      try {
        const response = await axiosInstance.get('/product-category/read/no-product')

        this.categories = response.data.data

      } catch (error) {
        this.error = error
      }

      this.loading = false
    },

 
    async fetchLeafCategories() {
      this.loading = true

      try {
        const response = await axiosInstance.get('/product-category/read/leaf')

        this.categories = response.data.data

      } catch (error) {
        this.error = error
      }

      this.loading = false
    },

    async createCategory(payload) {
      this.loading = true

      try {
        const response = await axiosInstance.post('/product-category', payload)

        this.categories.push(response.data.data)

        this.success = 'Kategori berhasil ditambahkan'

        router.push({ name: 'admin-product-category' })
      } catch (error) {
        if (error.response && error.response.status === 422) {
          this.error = error.response.data.errors
        }
        console.error(error)
      }

      this.loading = false
    },
    async updateCategory(payload) {
      this.loading = true

      try {
        const response = await axiosInstance.post(`/product-category/${payload.id}`, payload)


        this.success = 'Kategori berhasil diubah'

        router.push({ name: 'admin-product-category' })
      } catch (error) {
        if (error.response && error.response.status === 422) {
          this.error = error.response.data.errors
        }
        console.error(error)
      }

      this.loading = false
    },
    async deleteCategory(id) {
      this.loading = true

      try {
        await axiosInstance.delete(`/product-category/${id}`)

        this.success = 'Kategori berhasil dihapus'
        
      } catch (error) {
        this.error = error
      }

      this.loading = false
    },
      
  },
})
