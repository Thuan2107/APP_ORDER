import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';

// Create an axios instance with default configurations
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.gateway.overate-vntech.com/api/v11', // Base URL for the API
  timeout: 10000, // Set a timeout if desired
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include default headers
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const authToken = 'fe20368c-9d72-487b-ad43-ad345255e9f6'; // Your actual token
    const projectId = '8004'; // Your actual project ID

    if (authToken) {
      config.headers = {
        ...(config.headers as AxiosRequestHeaders), // Assert type to `AxiosRequestHeaders`
        Authorization: `Bearer ${authToken}`,
        ProjectId: projectId,
      } as AxiosRequestHeaders; // Ensure headers is treated as AxiosRequestHeaders
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
