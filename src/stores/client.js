import { axiosInstance } from '@/plugins/axios'
import router from '@/router'

import { defineStore } from 'pinia'

export const useClientStore = defineStore({
  id: 'client',
  state: () => ({
    clients: [],
    client: {},
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchClients() {
      this.loading = true

      try {
        const response = await axiosInstance.get('/client/read/any')

        this.clients = response.data.data
      } catch (error) {
        this.error = error
      }

      this.loading = false
    },
    async createClient(payload) {
      this.loading = true

      try {
        const response = await axiosInstance.post('/client', payload)

        this.clients.push(response.data.data)

        this.success = 'Client berhasil ditambahkan'

        router.push({ name: 'admin-client' })
      } catch (error) {
        if (error.response && error.response.status === 422) {
          this.error = error.response.data.errors
        }
        console.error(error)
      }

      this.loading = false
    },
    async updateClient(payload) {
      this.loading = true

      try {
        await axiosInstance.post(`/client/${payload.id}`, payload)

        this.success = 'Client berhasil diperbarui'

        router.push({ name: 'admin-client' })
      } catch (error) {
        if (error.response && error.response.status === 422) {
          this.error = error.response.data.errors
        }
        console.error(error)
      }

      this.loading = false
    },
    async deleteClient(id) {
      this.loading = true

      try {
        await axiosInstance.delete(`/client/${id}`)

        this.success = 'Client berhasil dihapus'

      } catch (error) {
        this.error = error
      }

      this.loading = false
    },
    async fetchClientById(id) {

      try {
        const response = await axiosInstance.get(`/client/${id}`)

        this.client = response.data.data

        return this.client
      } catch (error) {
        this.error = error
      }

      this.loading = false
    }
  },
})
