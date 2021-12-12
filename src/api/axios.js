import axios from 'axios';
import config from '../config';

const axiosInstance = axios.create({
  baseURL: config.api.baseUrl,
  timeout: 5000,
	mode: 'no-cors',
	headers: {
		'Access-Control-Allow-Origin': 'http://localhost:3000',
		'Content-Type': 'application/json',
	}
});

export default axiosInstance;