import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';
import { getAuthToken, getProjectId } from './config';

// Create an axios instance with default configurations
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://beta.api.gateway.overate-vntech.com', // Base URL for the API
  timeout: 10000, // Set a timeout if desired
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include default headers and log requests
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const authToken = getAuthToken(); // Get authToken from configuration
    const projectId = getProjectId(); // Get projectId from configuration

    if (authToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${authToken}`,
        ProjectId: projectId,
      } as AxiosRequestHeaders;
    }

    // Log request details
    console.log('Starting Request', {
      baseURL: config.baseURL,
      url: config.url,
      method: config.method,
      headers: config.headers,
      params: config.params,
      data: config.data,
    });

    return config;
  },
  (error) => {
    // Log request error
    console.error('Request Error', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
