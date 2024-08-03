import { AxiosResponse } from "axios";
import axiosInstance from "../../../utils/axiosInstance";
import  {ApiOauthRouters}  from '../../../routers/api-oauth-router';

interface ConfigResponse {
    realtime_domain: string;
    api_key: string;
    restaurant_name: string;
    api_upload: string;
    api_upload_short: string;
    api_oauth_node: string;
    session: string;
    socket_conect_login: string;
    api_chat_tms?: string;
  }
  
export interface ConfigParams {
    project_id: string;
    restaurant_name: string;
  }

export const getConfig = async (params: ConfigParams): Promise<AxiosResponse<ConfigResponse>> => {
  
    const headers = {
      Method: '0', // Custom header for Method
      ProjectId : "8003"
    };
  
    return await axiosInstance.get<ConfigResponse>(ApiOauthRouters.API_GET_CONFIG, { params, headers });
  };