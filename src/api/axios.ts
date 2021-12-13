import axios from 'axios';
import config from '../config';

const axiosInstance = axios.create({
  baseURL: config.api.baseUrl,
  timeout: 5000
});

export default axiosInstance;