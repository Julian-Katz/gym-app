// axios.ts
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost/api/',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true,
});

export default instance;
