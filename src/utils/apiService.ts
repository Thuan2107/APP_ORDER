import axiosInstance from './axiosInstance';
import { AxiosRequestConfig } from 'axios';

// Define the API request options interface
interface ApiRequestOptions extends AxiosRequestConfig {
  params?: Record<string, any>;
  data?: any;
  query?: Record<string, any>;
}

// Function to make API requests
const apiService = async (
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  params: Record<string, any> = {},
  body: any = {},
  query: Record<string, any> = {}
) => {
  try {
    const response = await axiosInstance({
      url: endpoint,
      method,
      params: { ...params, ...query }, // Merge params and query if needed
      data: body, // Body content for POST/PUT requests
    });
    return response.data;
  } catch (error) {
    // Handle error as needed
    console.error('API call error:', error);
    throw error;
  }
};

export default apiService;
