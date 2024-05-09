// axios.ts
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Accept': 'application/json',
  },
  withCredentials: true,
  withXSRFToken: true,
});

export default instance;
