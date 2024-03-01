import { axiosInstance } from '@/plugins/axios'
import router from '@/router'
import { defineStore } from 'pinia'


export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    loading: false,
    error: null,
  }),
  getters: {
    token: state => localStorage.getItem('token'),
  },
  actions: {
    async login(credentials) {
      this.loading = true
      try {
        const response = await axiosInstance.post('/login', credentials)
        const token = response.data.access_token

        localStorage.setItem('token', token)
        router.push({ name: 'dashboard' })
      } catch (error) {
        this.error = error
      }
      this.loading = false
    },
    async logout() {
      localStorage.removeItem('token')
      router.push({ name: 'login' })
    },
    async checkAuth() {
      this.loading = true
      try {
        await axiosInstance.get('/me')
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.logout() 
        }
      }
      this.loading = false
    },
  },
})

