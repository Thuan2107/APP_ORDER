import { AxiosResponse } from "axios";
import axiosInstance from "../../../utils/axiosInstance";
import  {ApiOauthRouters}  from '../../../routers/api-oauth-router';



export class RegisterDevice {
  os_name: string;
  device_uid: string;
  push_token: string;
  platform_type: number;
  appType: number;

  constructor(os_name: string, device_uid: string, push_token: string, platform_type: number = 1, appType: number = 11) {
    this.os_name = os_name;
    this.device_uid = device_uid;
    this.push_token = push_token;
    this.platform_type = platform_type;
    this.appType = appType;
  }
}

  
export const registerDevice = async (body : RegisterDevice): Promise<AxiosResponse<String>> => {
  
    const headers = {
      ProjectId : "8003"
    };
   
  
    return await axiosInstance.post<String>(ApiOauthRouters.API_REGISTER_DEVICE, { headers,body });
  };