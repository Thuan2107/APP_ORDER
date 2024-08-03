import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';

// Create an axios instance with default configurations
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://beta.api.gateway.overate-vntech.com/api/v11', // Base URL for the API
  timeout: 10000, // Set a timeout if desired
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include default headers
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const authToken = getAuthToken(); // Lấy authToken từ cấu hình
    const projectId = getProjectId(); // Lấy projectId từ cấu hình

    if (authToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${authToken}`,
        ProjectId: projectId,
      } as AxiosRequestHeaders;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
