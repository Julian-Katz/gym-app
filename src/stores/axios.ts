import axios from 'axios';
import { useAuthStore } from "@/stores/auth";


const instance = axios.create({
  baseURL: 'http://localhost/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json',
  },
  withCredentials: true,
  withXSRFToken: true,
});

instance.interceptors.response.use(response => response, async err => {
  const status = err.response ? err.response.status : undefined;

  if (status === 401 || status === 419) {
    const authStore = useAuthStore();
    authStore.sessionExpired();
  }

  return Promise.reject(err)
})

export default instance;
