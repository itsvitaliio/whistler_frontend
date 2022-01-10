import axios from 'axios';
import { logoutUser } from './auth';
require('dotenv').config()

const path = (process.env.NODE_ENV==='development') ? 'http://localhost:3001' : '';
export const API_BASE_URL = path +'/api/';

axios.defaults.baseURL = API_BASE_URL;

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      logoutUser();
      window.location.href = '/signin';
      return;
    }

    return Promise.reject(error);
  }
);

export default axios;
