// Utilities
import { defineStore } from 'pinia'
import axios from './axios'
import { error } from 'console'

interface User {
  id: string
  name: string
  email: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    error: null as Error | null,
  }),
  actions: {
    async login(email: String, password: String) {
      const response = await axios.post('/user', {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        this.user = response.data;
      } else {
        this.error = new Error('Invalid credentials');
        this.user = null;
      }
    },
  },
})
