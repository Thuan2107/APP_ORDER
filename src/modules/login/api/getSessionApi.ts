import { AxiosResponse } from "axios";
import axiosInstance from "../../../utils/axiosInstance";
import  {ApiOauthRouters}  from '../../../routers/api-oauth-router';


  
export const getSession = async (): Promise<AxiosResponse<String>> => {
  
    const headers = {
      Method: '0', // Custom header for Method
      ProjectId : "8003"
    };
  
    return await axiosInstance.get<String>(ApiOauthRouters.API_GET_SESSION, { headers });
  };