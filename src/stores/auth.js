import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'


export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    token: localStorage.getItem('token'),
    loading: false,
    error: null,
  }),
  actions: {
    async login(credentials) {
      this.loading = true
      try {
        const response = await axiosInstance.post('/login', credentials)


        this.token = response.data.access_token

        localStorage.setItem('token', this.token)

        router.push({ name: 'dashboard' })
      } catch (error) {
        this.error = error
      } 

      this.loading = false
    },
    async logout() {
      localStorage.removeItem('token')
      this.token = null
      this.user = null
    },
  },
  getters: {
    isLoggedIn() {
      return !!this.token
    },
  },
})
