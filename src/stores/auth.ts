import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    userId: localStorage.getItem('userId') || null,
    userRole: localStorage.getItem('userRole') || null
  }),
  actions: {
    async setUser(id: string, role: string) {
      this.userId = id
      this.userRole = role
      localStorage.setItem('userId', id)
      localStorage.setItem('userRole', role)
    },
    async clearUser() {
      this.userId = null
      this.userRole = null
      localStorage.removeItem('userId')
      localStorage.removeItem('userRole')
    }
  }
})
