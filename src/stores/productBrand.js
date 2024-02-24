import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'

export const useProductBrandStore = defineStore({
  id: 'productBrand',
  state: () => ({
    brands: [],
    brand: {},
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchBrands() {
      this.loading = true

      try {
        const response = await axiosInstance.get('/product-brands')

        this.brands = response.data.data

      } catch (error) {
        this.error = error
      }

      this.loading = false
    },
    async fetchBrandById(id) {
      this.loading = true

      try {
        const response = await axiosInstance.get(`/product-brands/${id}`)

        this.brand = response.data.data

        this.loading = false

        return this.brand
      } catch (error) {
        this.error = error
      }
    },
    async createBrand(payload) {
      this.loading = true

      try {
        const response = await axiosInstance.post('/product-brands', payload)

        this.brands.push(response.data.data)

        this.success = 'Merk berhasil ditambahkan'

        router.push({ name: 'admin-product-brand' })

      } catch (error) {
        if (error.response && error.response.status === 422) {
          this.error = error.response.data.errors
        }
        console.error(error)
      }

      this.loading = false
    },
    async updateBrand(payload) {
      this.loading = true

      try {
        const response = await axiosInstance.post(`/product-brands/${payload.id}`, payload)


        this.success = 'Kategori berhasil diubah'

        router.push({ name: 'admin-product-brand' })
      } catch (error) {
        if (error.response && error.response.status === 422) {
          this.error = error.response.data.errors
        }
        console.error(error)
      }

      this.loading = false
    },
    async deleteBrand(id) {
      this.loading = true

      try {
        await axiosInstance.delete(`/product-brands/${id}`)

        this.success = 'Merk berhasil dihapus'

      } catch (error) {
        this.error = error
      }

      this.loading = false
    },
  },
})
